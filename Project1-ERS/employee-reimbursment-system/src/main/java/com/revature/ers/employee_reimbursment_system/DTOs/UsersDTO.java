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
    private String role;

    public UsersDTO(String firstName, String lastName, String username)
    {
        this.firstName = firstName;
        this.lastName = lastName;
        this.username = username;
    }

    public UsersDTO(String firstName, String lastName, String username, String role)
    {
        this.firstName = firstName;
        this.lastName = lastName;
        this.username = username;
        this.role = role;
    }
}
