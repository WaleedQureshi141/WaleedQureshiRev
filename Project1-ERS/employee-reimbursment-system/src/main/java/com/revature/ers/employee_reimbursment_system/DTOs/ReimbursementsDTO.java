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
    private String name;
    private String username;

    public ReimbursementsDTO(int id, String description, float amount, String status)
    {
        this.id = id;
        this.description = description;
        this.amount = amount;
        this.status = status;
    }
}
