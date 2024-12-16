package com.revature.ers.employee_reimbursment_system.Repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.revature.ers.employee_reimbursment_system.Models.User;
import java.util.Optional;


@Repository
public interface UserRepo extends JpaRepository<User, Integer> 
{
    Optional<User> findByUsername(String username);

    Optional<User> findByUsernameAndPassword(String username, String password);
}
