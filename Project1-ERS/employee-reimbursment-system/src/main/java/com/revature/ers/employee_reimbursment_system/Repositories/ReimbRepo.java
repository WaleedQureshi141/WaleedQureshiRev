package com.revature.ers.employee_reimbursment_system.Repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.revature.ers.employee_reimbursment_system.Models.Reimbursment;
import com.revature.ers.employee_reimbursment_system.Models.User;

@Repository
public interface ReimbRepo extends JpaRepository<Reimbursment, Integer>
{
    List<Reimbursment> findByUser(User user);

    List<Reimbursment> findByStatusEquals(String status);
}
