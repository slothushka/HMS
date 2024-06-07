package com.project.Healthcare.Model;

import java.time.LocalDate;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Sugartest {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long testid;
    private long userid;
    private int age;
    private String gender;
    private LocalDate date;
	@Column(name="fasting sugartest(mmol/L")
	private double fastingtest;
	@Column(name="Gulcosetest(mmol/L")
	private double gulcosetest;
	@Column(name ="AICtest")
	private double aictest;
	
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
	public long getUserid() {
		return userid;
	}
	public void setUserid(long userid) {
		this.userid = userid;
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
	public double getFastingtest() {
		return fastingtest;
	}
	public void setFastingtest(double fastingtest) {
		this.fastingtest = fastingtest;
	}
	public double getGulcosetest() {
		return gulcosetest;
	}
	public void setGulcosetest(double gulcosetest) {
		this.gulcosetest = gulcosetest;
	}
	public double getAictest() {
		return aictest;
	}
	public void setAictest(double aictest) {
		this.aictest = aictest;
	}
	
	
}
