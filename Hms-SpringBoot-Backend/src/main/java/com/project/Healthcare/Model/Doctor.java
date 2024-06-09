package com.project.Healthcare.Model;

import com.fasterxml.jackson.annotation.JsonIgnore;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import jakarta.persistence.UniqueConstraint;

@Entity
@Table(uniqueConstraints = @UniqueConstraint(columnNames = {"emailId"}))
public class Doctor {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long doctor_id;
	private String password;
	private String emailId;
    private String name;
	private long mobile_number;
	
	@ManyToOne(cascade = CascadeType.ALL)
	@JoinColumn(name="specid")
	@JsonIgnore
    private Specialization specialization;
	
	public Doctor() {
		super();
		// TODO Auto-generated constructor stub
	}
	public Doctor(String password, String emailId, String name, long mobile_number) {
		this.password = password;
		this.emailId = emailId;
		this.name = name;
		this.mobile_number = mobile_number;
	}
	public long getDoctor_id() {
		return doctor_id;
	}
	public void setDoctor_id(long doctor_id) {
		this.doctor_id = doctor_id;
	}
	
	public String getPassword() {
		return password;
	}
	public Specialization getSpecialization() {
		return specialization;
	}
	public void setSpecialization(Specialization specialization) {
		this.specialization = specialization;
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
	@Override
	public String toString() {
		return "Doctor [doctor_id=" + doctor_id + ", password=" + password + ", emailId=" + emailId + ", name=" + name
				+ ", mobile_number=" + mobile_number + ", specialization=" + specialization + "]";
	}
	
	
	
	
}
