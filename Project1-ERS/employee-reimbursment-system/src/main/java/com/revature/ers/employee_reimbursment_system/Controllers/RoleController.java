package com.revature.ers.employee_reimbursment_system.Controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RestController;

import com.revature.ers.employee_reimbursment_system.Models.Role;
import com.revature.ers.employee_reimbursment_system.Services.RoleService;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;


@RestController
@RequestMapping("/role")
public class RoleController 
{
    @Autowired
    RoleService roleService;

    @PostMapping("/add")
    public Role postMethodName(@RequestBody Role role) 
    {        
        return roleService.addRole(role);
    }
}
