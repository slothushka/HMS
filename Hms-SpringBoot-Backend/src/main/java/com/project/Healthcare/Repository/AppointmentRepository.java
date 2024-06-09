package com.project.Healthcare.Repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.project.Healthcare.Model.Appointment;

@Repository
public interface AppointmentRepository extends JpaRepository<Appointment, Long>{
	
	@Query("select a from Appointment a where a.status=0 and a.doctorid=:a")
	public List<Appointment> findByDoctorid(long a);
	
	public Appointment findByAptid(long b);
	
	public List<Appointment> findByUserid(long c);
	
}
