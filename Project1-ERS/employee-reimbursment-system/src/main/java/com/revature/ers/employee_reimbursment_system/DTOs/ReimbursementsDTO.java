package com.revature.ers.employee_reimbursment_system.DTOs;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class ReimbursementsDTO 
{
    private int id;
    private String description;
    private float amount;
    private String status;
    private UsersDTO users;
}
