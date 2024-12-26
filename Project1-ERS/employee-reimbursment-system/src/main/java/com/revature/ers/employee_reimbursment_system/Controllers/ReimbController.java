package com.revature.ers.employee_reimbursment_system.Controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RestController;

import com.revature.ers.employee_reimbursment_system.DTOs.ReimbursementsDTO;
import com.revature.ers.employee_reimbursment_system.Models.Reimbursment;
import com.revature.ers.employee_reimbursment_system.Services.ReimbService;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;

@RestController
@CrossOrigin("http://localhost:5173/")
@RequestMapping("/reimb")
public class ReimbController 
{
    @Autowired
    ReimbService reimbService;

    // form
    @PostMapping("/add")
    public ResponseEntity<Reimbursment> addTicket(@RequestHeader("Authorization") String token, @RequestBody Reimbursment reim) 
    {
        Reimbursment res = reimbService.addTicket(token, reim);
        return new ResponseEntity<>(res, HttpStatus.OK);
    }

    // table
    @GetMapping("/reimbs")
    public ResponseEntity<List<ReimbursementsDTO>> getReimbById(@RequestHeader("Authorization") String token) 
    {
        return new ResponseEntity<>(reimbService.findReimbByUserId(token), HttpStatus.OK);
    }
    
    // table
    @GetMapping("/admin/pending")
    public ResponseEntity<List<ReimbursementsDTO>> getReimbByPending()
    {
        return new ResponseEntity<>(reimbService.findByPending(), HttpStatus.OK);
    }

    // button
    @PatchMapping("/admin/{id}/{status}")
    public ResponseEntity<Reimbursment> patchReimbStatus(@PathVariable int id, @PathVariable String status)
    {
        return new ResponseEntity<>(reimbService.updateStatus(id, status), HttpStatus.OK);
    }
}
