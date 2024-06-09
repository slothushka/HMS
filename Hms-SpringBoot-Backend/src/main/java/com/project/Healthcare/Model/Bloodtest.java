package com.project.Healthcare.Model;

import java.time.LocalDate;
import java.time.LocalTime;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Bloodtest {
	@Id
    @GeneratedValue(strategy = GenerationType.AUTO)
	private long testid;
	private long userid;
	private LocalDate date;
    private int age;
    private String gender;
    
	@Column(name="Hemoglobin(g/dl")
	private double Hemoglobin;
	@Column(name="RBC(10^6/ul")
	private double RBC;
	@Column(name="WBC(n/mm2)")
	private double WBC;
	@Column(name="platelet(n/mm3)")
	private double platelet;
	@Column(name="calcium(g/dl)")
	private double calcium;
	public long getUserid() {
		return userid;
	}
	public void setUserid(long userid) {
		this.userid = userid;
	}
	
	public long getTestid() {
		return testid;
	}
	public void setTestid(long testid) {
		this.testid = testid;
	}
	public LocalDate getDate() {
		return date;
	}
	public void setDate(LocalDate date) {
		this.date = date;
	}
	public double getHemoglobin() {
		return Hemoglobin;
	}
	public void setHemoglobin(double hemoglobin) {
		Hemoglobin = hemoglobin;
	}
	public double getRBC() {
		return RBC;
	}
	public void setRBC(double rBC) {
		RBC = rBC;
	}
	public double getWBC() {
		return WBC;
	}
	public void setWBC(double wBC) {
		WBC = wBC;
	}
	public double getPlatelet() {
		return platelet;
	}
	public void setPlatelet(double platelet) {
		this.platelet = platelet;
	}
	public double getCalcium() {
		return calcium;
	}
	public void setCalcium(double calcium) {
		this.calcium = calcium;
	}
	public int getAge() {
		return age;
	}
	public void setAge(int age) {
		this.age = age;
	}
	public String getGender() {
		return gender;
	}
	public void setGender(String gender) {
		this.gender = gender;
	}
	
	
}
