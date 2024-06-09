package com.project.Healthcare.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.GetMapping;

import com.project.Healthcare.Model.Appointment;
import com.project.Healthcare.Model.AppointmentDAO;
import com.project.Healthcare.Model.Doctor;
import com.project.Healthcare.Model.Specialization;
import com.project.Healthcare.Repository.AppointmentRepository;
import com.project.Healthcare.Repository.DoctorRegistrationRepository;
import com.project.Healthcare.Repository.SpecializationRepository;
import com.project.Healthcare.Repository.UserRepository;

@Service
public class Appointmentservice {
	@Autowired
	SpecializationRepository Srepo;
	
	@Autowired
	DoctorRegistrationRepository Drepo;
	
	@Autowired
	AppointmentRepository Arepo;
	
	@Autowired
	UserRepository Urepo;

	public List<Specialization> types() {
		
		return Srepo.findAllSpecialization();
	}

	public List<Doctor> name(long a) {
		
		return Drepo.findBySpecialization_specid(a);
	}

	public Appointment book(Appointment apt) {
        apt.setStatus(0);
		return Arepo.save(apt);
	}

	public List<AppointmentDAO> view(long doctor_id) {
		List<Appointment> obj=Arepo.findByDoctorid(doctor_id);
		List<AppointmentDAO> dao=new ArrayList<>();
		for(Appointment e:obj) {
			AppointmentDAO appointmentDAO=new AppointmentDAO();
			if(e.getStatus()==0) {
				String name=Urepo.findByName(e.getUserid());
				appointmentDAO.setAptid(e.getAptid());
				appointmentDAO.setUsername(name);
				appointmentDAO.setDate(e.getDate());
				appointmentDAO.setTime(e.getTime());
				dao.add(appointmentDAO);
				
			}
		}
		return dao;
		
	}

	public String update(long a) {
		Appointment apt=Arepo.findByAptid(a);
		apt.setStatus(1);
		Arepo.save(apt);
		return "accepted";
	}

	public String decline(long b) {
		Appointment apt=Arepo.findByAptid(b);
		apt.setStatus(2);
		Arepo.save(apt);
		return "declined";
	}

	public List<String> show(long user_id) {
		List<Appointment> obj=Arepo.findByUserid(user_id);
		List<String> provider=new ArrayList<>();
		
		for(Appointment e:obj) {
			if(e.getStatus()==1) {
				String doctor=Drepo.findByDoctorname(e.getDoctorid());
				String sentence="your requested Appointment has been approved by doctor "+doctor +" on "+e.getDate() +" at "+e.getTime();
				provider.add(sentence);
				
			}
			else if(e.getStatus()==2) {
				String doctor=Drepo.findByDoctorname(e.getDoctorid());
				String sentence="your requested Appointment has been declined by doctor "+doctor;
				provider.add(sentence);
			}
			else {
				String doctor=Drepo.findByDoctorname(e.getDoctorid());
				String sentence="your requested Appointment is still in pending for the doctor "+doctor;
				provider.add(sentence);
			}
		
		}
		return provider;
	}
}
