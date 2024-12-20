package com.revature.ers.employee_reimbursment_system.DTOs;

import com.revature.ers.employee_reimbursment_system.Models.Role;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class UsersDTO 
{
    private int id;
    private String firstName;
    private String lastName;
    private String username;
    private Role role;
}
