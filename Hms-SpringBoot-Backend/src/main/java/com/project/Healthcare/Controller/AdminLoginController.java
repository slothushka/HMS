package com.project.Healthcare.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.project.Healthcare.Model.Admin;
import com.project.Healthcare.Service.AdminLoginService;

@RestController
@CrossOrigin("*")
public class AdminLoginController {
	
	@Autowired
	AdminLoginService service;

	@PostMapping("/adminlogin")
	public ResponseEntity<String> sendd(@RequestBody Admin admin) {
		return service.send(admin);
	}
	
}
