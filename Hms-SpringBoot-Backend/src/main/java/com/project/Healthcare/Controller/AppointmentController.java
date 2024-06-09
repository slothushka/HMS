package com.project.Healthcare.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.project.Healthcare.Model.Appointment;
import com.project.Healthcare.Model.AppointmentDAO;
import com.project.Healthcare.Model.Doctor;
import com.project.Healthcare.Model.Specialization;
import com.project.Healthcare.Service.Appointmentservice;

@RestController
@CrossOrigin("*")
public class AppointmentController {
	
	@Autowired
	Appointmentservice Aservice;
	
	@GetMapping("/spectype")
	//used to view list of specialization
	public List<Specialization> types(){
		return Aservice.types();
	}
	@GetMapping("/docname/{specid}")
	@CrossOrigin("*")
	//it will filter the docname based on specialization
	public List<Doctor> name(@PathVariable long specid){
		return Aservice.name(specid);
	}
	
	@PostMapping("/appointmentbook")
	//it is used to save the appointment
	public Appointment book(@RequestBody Appointment apt) {
		return Aservice.book(apt);
	}
	
	@GetMapping("/appointmentview/{doctor_id}")
	//it display the patient booking details to logged in doc
	public List<AppointmentDAO> view(@PathVariable long doctor_id){
		return Aservice.view(doctor_id);
	}
	
	@PutMapping("/statusupdate/{aptid}")
	//To accept appointment
	public String update(@PathVariable long aptid) {
		return Aservice.update(aptid);
	}
	
	@PutMapping("/statusdecline/{aptid}")
	//To decline appointment
	public String decline(@PathVariable long aptid) {
		return Aservice.decline(aptid);
	}

	@GetMapping("/showappointment/{user_id}")
	// To see appointment status
	public List<String> show(@PathVariable long user_id){
		return Aservice.show(user_id);
	}
}
