package com.revature.ers.employee_reimbursment_system.Services;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.revature.ers.employee_reimbursment_system.DTOs.UsersDTO;
import com.revature.ers.employee_reimbursment_system.Models.AuthenticationResponse;
import com.revature.ers.employee_reimbursment_system.Models.User;
import com.revature.ers.employee_reimbursment_system.Repositories.RoleRepo;
import com.revature.ers.employee_reimbursment_system.Repositories.UserRepo;

@Service
public class UserService 
{
    @Autowired
    UserRepo userRepo;

    @Autowired
    RoleRepo roleRepo;

    @Autowired
    PasswordEncoder encoder;

    @Autowired
    JWTService jwtService;

    @Autowired
    AuthenticationManager authenticationManager;

    // post: register user
    // accessible to anyone
    public AuthenticationResponse createUser(User user)
    {
        String token = "";

        if (user.getFirstName().isBlank()
        || user.getLastName().isBlank()
        || !user.getPassword().matches("^(?=.*[A-Z])(?=.*[a-z])(?=.*\\d).+$")
        || user.getPassword().length() < 8
        || user.getUsername().isBlank())
        {
            token = "BAD_REQUEST";
            return new AuthenticationResponse(token);
        }

        if (userRepo.findByUsername(user.getUsername()).isPresent())
        {
            token = "CONFLICT";
            return new AuthenticationResponse(token);
        }
        
        user.setPassword(encoder.encode(user.getPassword()));
        user.setRole(roleRepo.findById(2).get());

        userRepo.save(user);

        token = jwtService.generateToken(user);

        return new AuthenticationResponse(token);
    }
    

    // post: login
    // accessible to anyone
    public String login(User user)
    {
        authenticationManager.authenticate(
            new UsernamePasswordAuthenticationToken(
                user.getUsername(),
                user.getPassword()
            )
        );

        User check = userRepo.findByUsername(user.getUsername()).orElseThrow();
        String token = jwtService.generateToken(check);

        System.out.println(token);

        return token;
    }

    // get: view all users
    // accessible only to managers
    public List<UsersDTO> findAllUsers()
    {
        List<User> users = userRepo.findAll();
        List<UsersDTO> dto = new ArrayList<>();

        for (User i : users)
        {
            dto.add(new UsersDTO(i.getUserId(), i.getFirstName(), i.getLastName(), i.getUsername(), i.getRole().getRole()));
        }

        return dto;
    }

    // get: user info display header
    // accessible to everyone
    public UsersDTO findUser(String token)
    {
        String check = jwtService.extractUsername(token.substring(7));
        User user = userRepo.findByUsername(check).get();

        UsersDTO dto = new UsersDTO(
            user.getFirstName(), user.getLastName(), user.getUsername(), user.getRole().getRole()
        );

        return dto;
    }

    // old version
    // public List<User> findAllUsers()
    // {
    //     return userRepo.findAll();
    // }

    // patch: change USER to ADMIN
    // only accessible to ADMIN
    // will only implement after all other functionality is complete
    public User setAdminRole(int id)
    {
        User user = userRepo.findById(id).get();
        user.setRole(roleRepo.findById(1).get());
        return userRepo.save(user);
    }

    // delete: delete a user
    // accessible only to managers
    public String delUser(int id)
    {
        if (userRepo.findById(id).isPresent())
        {
            userRepo.delete(userRepo.findById(id).get());
            return "USER HAS BEEN DELETED";
        }
        return null;
    }



    // code before jwt

    // register
    // public String createUser(User user)
    // {
        // if (!user.getFirstName().isBlank()
        // && !user.getLastName().isBlank())
        // {
        //     if (!userRepo.findByUsername(user.getUsername()).isPresent() && !user.getUsername().isBlank())
        //     {
        //         if (user.getPassword().length() >= 8)
        //         {
        //             user.setRole(roleRepo.findById(2).get());
        //             userRepo.save(user);
        //             return "SAVED";
        //         }
        //         else
        //         {
        //             return "PASSWORD";
        //         }
        //     }
        //     else
        //     {
        //         return "USERNAME";
        //     }
        // }
        // else
        // {
        //     return "MISSING";
        // }
    // }

    // login
    // public User login(String username, String password)
    // {
    //     if (userRepo.findByUsernameAndPassword(username, password).isPresent())
    //     {
    //         return userRepo.findByUsernameAndPassword(username, password).get();
    //     }
    //     return null;
    // }
}
