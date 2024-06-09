package com.project.Healthcare.Model;

import java.time.LocalDate;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Prescriptiondetails {
	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
	private long presid;
	private long userid;
	private long doctorid;
	private LocalDate date;
	private String tabletname;
	private int tabletcount;
	private boolean morning;
	private boolean afternoon;
	private boolean night;
	public long getPresid() {
		return presid;
	}
	public void setPresid(long presid) {
		this.presid = presid;
	}
	public long getUserid() {
		return userid;
	}
	public void setUserid(long userid) {
		this.userid = userid;
	}
	public long getDoctorid() {
		return doctorid;
	}
	public void setDoctorid(long doctorid) {
		this.doctorid = doctorid;
	}
	public LocalDate getDate() {
		return date;
	}
	public void setDate(LocalDate date) {
		this.date = date;
	}
	public String getTabletname() {
		return tabletname;
	}
	public void setTabletname(String tabletname) {
		this.tabletname = tabletname;
	}
	public int getTabletcount() {
		return tabletcount;
	}
	public void setTabletcount(int tabletcount) {
		this.tabletcount = tabletcount;
	}
	public boolean isMorning() {
		return morning;
	}
	public void setMorning(boolean morning) {
		this.morning = morning;
	}
	public boolean isAfternoon() {
		return afternoon;
	}
	public void setAfternoon(boolean afternoon) {
		this.afternoon = afternoon;
	}
	public boolean isNight() {
		return night;
	}
	public void setNight(boolean night) {
		this.night = night;
	}
	@Override
	public String toString() {
		return "Prescriptiondetails [presid=" + presid + ", userid=" + userid + ", doctorid=" + doctorid + ", date="
				+ date + ", tabletname=" + tabletname + ", tabletcount=" + tabletcount + ", morning=" + morning
				+ ", afternoon=" + afternoon + ", night=" + night + "]";
	}

	
	
	
	

}
