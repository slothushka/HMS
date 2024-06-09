package com.project.Healthcare.Model;

import java.time.LocalDate;
import java.time.LocalTime;

public class AppointmentDAO {
	private long aptid;
	private String username;
	private LocalDate date;
	private LocalTime time;
	public long getAptid() {
		return aptid;
	}
	public void setAptid(long aptid) {
		this.aptid = aptid;
	}
	public String getUsername() {
		return username;
	}
	public void setUsername(String username) {
		this.username = username;
	}
	public LocalDate getDate() {
		return date;
	}
	public void setDate(LocalDate date) {
		this.date = date;
	}
	public LocalTime getTime() {
		return time;
	}
	public void setTime(LocalTime time) {
		this.time = time;
	}
	
	
   
}
