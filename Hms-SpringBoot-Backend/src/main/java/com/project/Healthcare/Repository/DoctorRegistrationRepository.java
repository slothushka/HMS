package com.project.Healthcare.Repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.project.Healthcare.Model.Doctor;
import com.project.Healthcare.Model.Specialization;

@Repository
public interface DoctorRegistrationRepository extends JpaRepository<Doctor, Long>{
	public Doctor findByEmailId(String a);
	
	public List<Doctor> findBySpecialization_specid(long a);

//    public List<Doctor> findBySpecialization_Specid(long a);
	
    @Query("select d.name from Doctor d where d.doctor_id=:b")
	public String findByDoctorname(long b);
}