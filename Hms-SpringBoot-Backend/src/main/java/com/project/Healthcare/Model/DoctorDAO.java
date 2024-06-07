package com.project.Healthcare.Model;

import org.springframework.beans.factory.annotation.Autowired;

import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;

public class DoctorDAO {
	@Autowired
	@GeneratedValue(strategy = GenerationType.AUTO)
    private long id;
	private String emailId;
	private String password;
	public String getEmailId() {
		return emailId;
	}
	public void setEmailId(String emailId) {
		this.emailId = emailId;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	
	
}
