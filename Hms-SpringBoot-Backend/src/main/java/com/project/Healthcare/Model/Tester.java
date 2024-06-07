package com.project.Healthcare.Model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Tester {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long tester_id;
	private String password;
	@Column(unique = true)
	private String emailId;
    private String name;
	private long mobile_number;
	
	public long getTester_id() {
		return tester_id;
	}
	public void setTester_id(long tester_id) {
		this.tester_id = tester_id;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	public String getEmailId() {
		return emailId;
	}
	public void setEmailId(String emailId) {
		this.emailId = emailId;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public long getMobile_number() {
		return mobile_number;
	}
	public void setMobile_number(long mobile_number) {
		this.mobile_number = mobile_number;
	}


}
