package com.project.Healthcare.Controller;

import javax.imageio.spi.RegisterableService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.project.Healthcare.Model.Tester;
import com.project.Healthcare.Model.User;
import com.project.Healthcare.Service.RegistrationService;

import jakarta.servlet.Registration;

@RestController
@CrossOrigin(origins = "*")
public class RegistrationController {
 
	@Autowired
	RegistrationService rser;
	
	@PostMapping("/userregister")
	public String register(@RequestBody User user) {
	rser.register(user);
		return "successfully registered";
	}
}
