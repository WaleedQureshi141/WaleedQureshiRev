package com.revature.ers.employee_reimbursment_system.Services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import com.revature.ers.employee_reimbursment_system.Repositories.UserRepo;

@Service
public class UserDetailsImpl implements UserDetailsService
{
    @Autowired
    UserRepo userRepo;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException 
    {
        return userRepo.findByUsername(username).orElseThrow(
            () -> new UsernameNotFoundException("User Not Found")
        );
    }
}
