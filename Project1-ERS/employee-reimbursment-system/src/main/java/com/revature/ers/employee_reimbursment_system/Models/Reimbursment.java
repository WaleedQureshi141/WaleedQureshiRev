package com.revature.ers.employee_reimbursment_system.Models;

import com.fasterxml.jackson.annotation.JsonBackReference;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@NoArgsConstructor
@Table(name = "reimbursments")
public class Reimbursment 
{
    @Id
    @Column(name = "reimb_id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int reimbId;

    @Column(name = "description")
    private String description;

    @Column(name = "amount")
    private float amount;

    @Column(name = "status")
    private String status;

    @ManyToOne
    @JoinColumn(name = "user_id_fk")
    @JsonBackReference
    private User user;
}