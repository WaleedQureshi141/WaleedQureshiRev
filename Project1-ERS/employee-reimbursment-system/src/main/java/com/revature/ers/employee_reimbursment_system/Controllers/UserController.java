package com.revature.ers.employee_reimbursment_system.Controllers;


import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.revature.ers.employee_reimbursment_system.Models.User;
import com.revature.ers.employee_reimbursment_system.Services.UserService;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;



@RestController
@RequestMapping("/user")
@CrossOrigin("*")
public class UserController 
{
    @Autowired
    UserService userService;

    @PostMapping("/register")
    public ResponseEntity<String> registerUser(@RequestBody User user)
    {
        String response = userService.createUser(user);

        if (response == "MISSING")
        {
            return new ResponseEntity<>("INFORMATION IS MISSING", HttpStatus.BAD_REQUEST);
        }
        else if (response == "USERNAME")
        {
            return new ResponseEntity<>("USERNAME MISSING OR ALREADY EXISTS", HttpStatus.CONFLICT);
        }
        else if (response == "PASSWORD")
        {
            return new ResponseEntity<>("PASSWORD LENGTH IS LESS THAN 8", HttpStatus.BAD_REQUEST);
        }
        else
        {
            return new ResponseEntity<>("USER REGISTERED", HttpStatus.CREATED);
        }
    }

    @PostMapping("/login")
    public ResponseEntity<User> login(@RequestBody User user)
    {
        if (userService.login(user.getUsername(), user.getPassword()) != null)
        {
            return new ResponseEntity<>(userService.login(user.getUsername(), user.getPassword()), HttpStatus.FOUND);
        }
        else
        {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @GetMapping("/users")
    public ResponseEntity<List<User>> getAllUsers()
    {
        return new ResponseEntity<>(userService.findAllUsers(), HttpStatus.OK);
    }

    @PatchMapping("/setadmin/{id}")
    public ResponseEntity<User> setAdminRole(@PathVariable int id)
    {
        return new ResponseEntity<>(userService.setAdminRole(id), HttpStatus.OK);
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<String> deleteUser(@PathVariable int id)
    {
        String res = userService.delUser(id);
        if (res != null)
        {
            return new ResponseEntity<>(res, HttpStatus.OK);
        }

        return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }
}
