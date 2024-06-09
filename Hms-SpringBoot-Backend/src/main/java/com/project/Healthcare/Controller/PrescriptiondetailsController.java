package com.project.Healthcare.Controller;

import java.util.ArrayList;

import org.hibernate.mapping.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.project.Healthcare.Model.Prescriptiondetails;
import com.project.Healthcare.Service.PrescriptiondetailsService;


@RestController
@CrossOrigin("*")
public class PrescriptiondetailsController {
	
	@Autowired
	PrescriptiondetailsService Pservice;
	
    @PostMapping("/tabletsend")
	public Prescriptiondetails send(@RequestBody Prescriptiondetails pres) {
		return Pservice.send(pres);
	}
    @GetMapping("/tabletreturn/{userid}")
    public ArrayList<Prescriptiondetails> gettablets(@PathVariable long userid) {
    	return Pservice.gettablets(userid);
    }
}
