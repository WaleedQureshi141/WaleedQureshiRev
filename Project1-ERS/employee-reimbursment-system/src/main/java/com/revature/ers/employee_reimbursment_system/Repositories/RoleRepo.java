package com.revature.ers.employee_reimbursment_system.Repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.revature.ers.employee_reimbursment_system.Models.Role;

@Repository
public interface RoleRepo extends JpaRepository<Role, Integer> 
{
}
