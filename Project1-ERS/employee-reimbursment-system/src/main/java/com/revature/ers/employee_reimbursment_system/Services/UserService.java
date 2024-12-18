package com.revature.ers.employee_reimbursment_system.Services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

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

    // post: register user
    // accessible to anyone
    public String createUser(User user)
    {
        if (!user.getFirstName().isBlank()
        && !user.getLastName().isBlank())
        {
            if (!userRepo.findByUsername(user.getUsername()).isPresent() && !user.getUsername().isBlank())
            {
                if (user.getPassword().length() >= 8)
                {
                    user.setRole(roleRepo.findById(2).get());
                    userRepo.save(user);
                    return "SAVED";
                }
                else
                {
                    return "PASSWORD";
                }
            }
            else
            {
                return "USERNAME";
            }
        }
        else
        {
            return "MISSING";
        }
    }

    // post: login
    // accessible to anyone
    public User login(String username, String password)
    {
        if (userRepo.findByUsernameAndPassword(username, password).isPresent())
        {
            return userRepo.findByUsernameAndPassword(username, password).get();
        }
        return null;
    }

    // get: view all users
    // accessible only to managers
    public List<User> findAllUsers()
    {
        return userRepo.findAll();
    }

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
}
