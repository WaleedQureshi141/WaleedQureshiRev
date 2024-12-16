package com.revature.ers.employee_reimbursment_system.Controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RestController;

import com.revature.ers.employee_reimbursment_system.Models.Reimbursment;
import com.revature.ers.employee_reimbursment_system.Services.ReimbService;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;



@RestController
@RequestMapping("/reimb")
public class ReimbController 
{
    @Autowired
    ReimbService reimbService;

    @PostMapping("/add")
    public ResponseEntity<Reimbursment> addTicket(@RequestBody Reimbursment reim) 
    {
        Reimbursment res = reimbService.addTicket(reim);
        return new ResponseEntity<>(res, HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<List<Reimbursment>> getReimbById(@PathVariable int id) 
    {
        return new ResponseEntity<>(reimbService.findReimbByUserId(id), HttpStatus.OK);
    }
    
    @GetMapping("/pending")
    public ResponseEntity<List<Reimbursment>> getReimbByPending()
    {
        return new ResponseEntity<>(reimbService.findByPending(), HttpStatus.OK);
    }

    @PatchMapping("/{id}/{status}")
    public ResponseEntity<Reimbursment> patchReimbStatus(@PathVariable int id, @PathVariable String status)
    {
        return new ResponseEntity<>(reimbService.updateStatus(id, status), HttpStatus.OK);
    }
}
