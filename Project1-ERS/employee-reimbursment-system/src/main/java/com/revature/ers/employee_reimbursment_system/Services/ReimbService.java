package com.revature.ers.employee_reimbursment_system.Services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.revature.ers.employee_reimbursment_system.Models.Reimbursment;
import com.revature.ers.employee_reimbursment_system.Models.User;
import com.revature.ers.employee_reimbursment_system.Repositories.ReimbRepo;
import com.revature.ers.employee_reimbursment_system.Repositories.UserRepo;

@Service
public class ReimbService 
{
    @Autowired
    ReimbRepo reimbRepo;
    @Autowired
    UserRepo userRepo;

    // post: create new ticket
    // accessible only to users
    public Reimbursment addTicket(Reimbursment reimb)
    {
        Optional<User> user = userRepo.findById(reimb.getUser().getUserId());
        reimb.setUser(user.get());
        reimb.setStatus("PENDING");
        return reimbRepo.save(reimb);
    }

    // get: viewing all tickets by a user
    // accessible to specific user and manager
    public List<Reimbursment> findReimbByUserId(int id)
    {
        Optional<User> user = userRepo.findById(id);
        List<Reimbursment> res = reimbRepo.findByUser(user.get());
        return res;
    }

    // get: view all tickets with status = "PENDING"
    // accessible only to managers
    public List<Reimbursment> findByPending()
    {
        return reimbRepo.findByStatusEquals("PENDING");
    }

    // patch: updates the status of a ticket
    // accessible only to managers
    public Reimbursment updateStatus(int id, String status)
    {
        Reimbursment reimb = reimbRepo.findById(id).get();
        reimb.setStatus(status);

        return reimbRepo.save(reimb);
    }
}
