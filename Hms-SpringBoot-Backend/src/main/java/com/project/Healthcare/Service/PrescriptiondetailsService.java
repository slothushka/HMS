package com.project.Healthcare.Service;

import java.time.LocalDate;
import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


import com.project.Healthcare.Model.Prescriptiondetails;
import com.project.Healthcare.Repository.PrescriptiondetailsRepository;

@Service
public class PrescriptiondetailsService {

	@Autowired
	PrescriptiondetailsRepository Prepo;
	
	public Prescriptiondetails send(Prescriptiondetails pres) {
		LocalDate date=LocalDate.now();
		pres.setDate(date);
		System.out.println(pres);
		return Prepo.save(pres);
	}

	public ArrayList<Prescriptiondetails> gettablets(long userid) {
		ArrayList<Prescriptiondetails> tablets=Prepo.findByUserid(userid);
		return tablets;
	}

}
