package com.revature.ers.employee_reimbursment_system.Services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.revature.ers.employee_reimbursment_system.Models.Role;
import com.revature.ers.employee_reimbursment_system.Repositories.RoleRepo;

@Service
public class RoleService 
{
    @Autowired
    RoleRepo roleRepo;

    public Role addRole(Role role)
    {
        return roleRepo.save(role);
    }
}
