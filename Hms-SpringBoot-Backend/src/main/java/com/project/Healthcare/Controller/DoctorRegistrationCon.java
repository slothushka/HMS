package com.project.Healthcare.Controller;

import org.hibernate.mapping.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import java.util.*;
import com.project.Healthcare.Model.Doctor;
import com.project.Healthcare.Model.Specialization;
//import com.project.Healthcare.Model.Doctor;
import com.project.Healthcare.Service.DoctorRegistrationService;
@CrossOrigin(origins = "*")
@RestController
public class DoctorRegistrationCon {
	
	@Autowired
	DoctorRegistrationService rser;
	
	@PostMapping("/spec")
	public String spec(@RequestBody Specialization specialization) {
		return rser.spec(specialization);
		
	}

}
