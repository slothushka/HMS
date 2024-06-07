package com.project.Healthcare.Service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.project.Healthcare.Model.Doctor;
import com.project.Healthcare.Model.Specialization;
import com.project.Healthcare.Repository.DoctorRegistrationRepository;
import com.project.Healthcare.Repository.SpecializationRepository;

import jakarta.transaction.Transactional;
//import com.project.Healthcare.Repository.SpeciallizationRepository;

@Service
public class DoctorRegistrationService {
	
	@Autowired
	DoctorRegistrationRepository repo;
	
	@Autowired
	SpecializationRepository srepo;


	public String spec(Specialization specialization) {
          String name=specialization.getSpecialty();
          Specialization s=srepo.findBySpecialty(name);
          if(s==null) {
          Specialization sp1=new Specialization(specialization.getSpecialty());
          List<Doctor> list=new ArrayList<>();
          
          for(Doctor e:specialization.getDoctor()) {
        	  Doctor dc1=new Doctor(e.getPassword(),e.getEmailId(),e.getName(),e.getMobile_number());
        	  dc1.setSpecialization(sp1);
        	  list.add(dc1);
          }
          sp1.setDoctor(list);
          
          srepo.save(sp1);
          return "register successfully";
          }
          else {
        	  Specialization sp=srepo.findBySpecialty(name);
        	  for(Doctor e:specialization.getDoctor()) {
            	  Doctor dc1=new Doctor(e.getPassword(),e.getEmailId(),e.getName(),e.getMobile_number());
            	  dc1.setSpecialization(sp);
            	  repo.save(dc1);
              }
          }
          return "register successfully";
	    
	}
}