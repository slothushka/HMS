package com.project.Healthcare.Model;

import java.util.ArrayList;
import java.util.List;

import org.springframework.boot.autoconfigure.web.WebProperties.Resources.Chain.Strategy;

import com.fasterxml.jackson.annotation.JsonIgnore;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToMany;

@Entity
public class Specialization {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long specid;
	private String specialty;
	
	@OneToMany(mappedBy = "specialization", cascade = CascadeType.ALL)
	
	private List<Doctor> doctor;

	
	public Specialization() {
		super();
	}

	public Specialization(String specialty) {
		this.specialty = specialty;
	}

	public long getSpecid() {
		return specid;
	}

	public void setSpecid(long specid) {
		this.specid = specid;
	}

	public String getSpecialty() {
		return specialty;
	}

	public void setSpecialty(String specialty) {
		this.specialty = specialty;
	}

	public List<Doctor> getDoctor() {
		return doctor;
	}

	public void setDoctor(List<Doctor> doctor) {
		this.doctor = doctor;
	}

	@Override
	public String toString() {
		return "Specialization [specid=" + specid + ", specialty=" + specialty + ", doctor=" + doctor + "]";
	}
	
}