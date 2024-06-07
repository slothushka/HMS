package com.project.Healthcare.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.project.Healthcare.Exception.InvalidPasswordException;
import com.project.Healthcare.Model.Doctor;
import com.project.Healthcare.Model.DoctorDAO;
import com.project.Healthcare.Model.Tester;
import com.project.Healthcare.Model.TesterDAO;
import com.project.Healthcare.Model.User;
import com.project.Healthcare.Model.userDAO;
import com.project.Healthcare.Service.LoginService;

@RestController
@CrossOrigin(origins = "*")
public class LoginController {
	@Autowired
	LoginService service;
	
	@PostMapping("/userlogin")
	public ResponseEntity<String> usera(@RequestBody userDAO userdao){
		return service.usr(userdao);
	}
	
	@PostMapping("/doctorlogin")
	public ResponseEntity<String> doctora(@RequestBody DoctorDAO Doctor){
		return service.doct(Doctor);
	}
	
	@PostMapping("/testlogin")
	public ResponseEntity<String> testa(@RequestBody TesterDAO tester){
		return service.testr(tester);
	}

	@PostMapping("/userobj")
	public User find(@RequestBody userDAO userdao) {
		return service.dao(userdao);
	}
	@PostMapping("/doctorobj")
	public Doctor findD(@RequestBody DoctorDAO doctordao) {
		return service.daodoc(doctordao);
	}
}
