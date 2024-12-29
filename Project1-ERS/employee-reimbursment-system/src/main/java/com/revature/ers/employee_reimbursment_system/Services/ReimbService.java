package com.revature.ers.employee_reimbursment_system.Services;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.revature.ers.employee_reimbursment_system.DTOs.ReimbursementsDTO;
import com.revature.ers.employee_reimbursment_system.DTOs.UsersDTO;
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
    @Autowired
    JWTService jwtService;

    // post: create new ticket
    // accessible only to users
    public Reimbursment addTicket(String token, Reimbursment reimb)
    {
        String trimmed = token.substring(7);
        Optional<User> user = userRepo.findByUsername(jwtService.extractUsername(trimmed));
        reimb.setUser(user.get());
        reimb.setStatus("PENDING");
        return reimbRepo.save(reimb);
    }

    // old version
    // public Reimbursment addTicket(Reimbursment reimb)
    // {
    //     Optional<User> user = userRepo.findById(reimb.getUser().getUserId());
    //     reimb.setUser(user.get());
    //     reimb.setStatus("PENDING");
    //     return reimbRepo.save(reimb);
    // }

    // get: viewing all tickets of a user
    // accessible to specific user
    public List<ReimbursementsDTO> findReimbByUserId(String token)
    {
        String trimmed = token.substring(7);
        Optional<User> user = userRepo.findByUsername(jwtService.extractUsername(trimmed));
        List<Reimbursment> reimbs = reimbRepo.findByUser(user.get());

        List<ReimbursementsDTO> reimbsDTO = new ArrayList<>();

        for (Reimbursment i : reimbs)
        {
            reimbsDTO.add(new ReimbursementsDTO(i.getReimbId(), i.getDescription(), i.getAmount(), i.getStatus()));
        }

        return reimbsDTO;
    }

    // get: view all tickets with status = "PENDING"
    // accessible only to managers
    public List<ReimbursementsDTO> findByPending()
    {
        List<Reimbursment> reimbs = reimbRepo.findByStatusEquals("PENDING");
        List<ReimbursementsDTO> dto = new ArrayList<>();

        for (Reimbursment i: reimbs)
        {
            UsersDTO usersDTO = new UsersDTO(i.getUser().getFirstName(), i.getUser().getLastName(), i.getUser().getUsername());
            dto.add(new ReimbursementsDTO(
                i.getReimbId(), 
                i.getDescription(), 
                i.getAmount(), 
                i.getStatus(), 
                usersDTO.getFirstName() + " " + usersDTO.getLastName(),
                usersDTO.getUsername()));
        }

        return dto;
    }

    // old version
    // public List<Reimbursment> findByPending()
    // {
    //     return reimbRepo.findByStatusEquals("PENDING");
    // }

    // patch: updates the status of a ticket
    // accessible only to managers
    public Reimbursment updateStatus(int id, String status)
    {
        Reimbursment reimb = reimbRepo.findById(id).get();
        reimb.setStatus(status);

        return reimbRepo.save(reimb);
    }
}
