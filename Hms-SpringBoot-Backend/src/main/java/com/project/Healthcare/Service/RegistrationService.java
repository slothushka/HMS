package com.project.Healthcare.Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.project.Healthcare.Model.Tester;
import com.project.Healthcare.Model.User;
import com.project.Healthcare.Repository.RegistrationRepository;
import com.project.Healthcare.Repository.TesterloginRepository;

import jakarta.servlet.Registration;

@Service
public class RegistrationService {
	
	@Autowired
	RegistrationRepository repo;


	public User register(User user) {
		return repo.save(user);
	}


}
