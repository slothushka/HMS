package com.project.Healthcare.Security;

import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import com.project.Healthcare.Repository.UserRepository;


@Service
public class UserDetailsServiceImp implements UserDetailsService {
 
    private final UserRepository repository;
 
    public UserDetailsServiceImp(UserRepository repository) {
        this.repository = repository;
    }
 
    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        return repository.findByEmailId(username)
                .orElseThrow(()-> new UsernameNotFoundException("User not found"));
    }
}
