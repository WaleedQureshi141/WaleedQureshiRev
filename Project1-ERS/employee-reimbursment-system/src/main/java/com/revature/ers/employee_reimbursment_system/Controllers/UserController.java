package com.revature.ers.employee_reimbursment_system.Controllers;


import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.revature.ers.employee_reimbursment_system.DTOs.UsersDTO;
import com.revature.ers.employee_reimbursment_system.Models.AuthenticationResponse;
import com.revature.ers.employee_reimbursment_system.Models.User;
import com.revature.ers.employee_reimbursment_system.Services.UserService;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;




@RestController
@CrossOrigin("http://localhost:5173/")
@RequestMapping("/user")
public class UserController 
{
    @Autowired
    UserService userService;

    // @PostMapping("/auth/register")
    // public ResponseEntity<String> register(@RequestBody User user)
    // {
    //     return new ResponseEntity<>(userService.createUser(user), HttpStatus.OK);
    // }
    @PostMapping("/auth/register")
    public ResponseEntity<AuthenticationResponse> register(@RequestBody User user)
    {
        AuthenticationResponse response = userService.createUser(user);
        // System.out.println(response);
        if (response.getToken() == "BAD_REQUEST")
        {
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
        if (response.getToken() == "CONFLICT")
        {
            return new ResponseEntity<>(HttpStatus.CONFLICT);
        }

        return new ResponseEntity<>(response, HttpStatus.OK);
    }

    @PostMapping("/auth/login")
    public ResponseEntity<String> login(@RequestBody User user)
    {
        return new ResponseEntity<>(userService.login(user), HttpStatus.OK);
    }

    @PostMapping("/auth/logout")
    public ResponseEntity<String> logout()
    {
        return new ResponseEntity<>(null, HttpStatus.OK);
    }

    @GetMapping("/admin/users")
    public ResponseEntity<List<UsersDTO>> getAllUsers()
    {
        return new ResponseEntity<>(userService.findAllUsers(), HttpStatus.OK);
    }

    @GetMapping("/user")
    public ResponseEntity<UsersDTO> getUser(@RequestHeader("Authorization") String token) 
    {
        return new ResponseEntity<>(userService.findUser(token), HttpStatus.OK);
    }
    

    @PatchMapping("/admin/setadmin/{id}")
    public ResponseEntity<String> setAdminRole(@PathVariable int id)
    {
        if (userService.setAdminRole(id).equals("CONFLICT"))
        {
            return new ResponseEntity<>(HttpStatus.CONFLICT);
        }

        return new ResponseEntity<>("ROLE UPDATED", HttpStatus.OK);
    }

    @DeleteMapping("/admin/delete/{id}")
    public ResponseEntity<String> deleteUser(@PathVariable int id)
    {
        String res = userService.delUser(id);
        if (res != null)
        {
            return new ResponseEntity<>(res, HttpStatus.OK);
        }

        return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }



    // before jwt

    // @PostMapping("/register")
    // public ResponseEntity<String> registerUser(@RequestBody User user)
    // {
    //     String response = userService.createUser(user);

    //     if (response == "MISSING")
    //     {
    //         return new ResponseEntity<>("INFORMATION IS MISSING", HttpStatus.BAD_REQUEST);
    //     }
    //     else if (response == "USERNAME")
    //     {
    //         return new ResponseEntity<>("USERNAME MISSING OR ALREADY EXISTS", HttpStatus.CONFLICT);
    //     }
    //     else if (response == "PASSWORD")
    //     {
    //         return new ResponseEntity<>("PASSWORD LENGTH IS LESS THAN 8", HttpStatus.BAD_REQUEST);
    //     }
    //     else
    //     {
    //         return new ResponseEntity<>("USER REGISTERED", HttpStatus.CREATED);
    //     }
    // }

    // @PostMapping("/login")
    // public ResponseEntity<User> login(@RequestBody User user)
    // {
    //     if (userService.login(user.getUsername(), user.getPassword()) != null)
    //     {
    //         return new ResponseEntity<>(userService.login(user.getUsername(), user.getPassword()), HttpStatus.FOUND);
    //     }
    //     else
    //     {
    //         return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    //     }
    // }
}
