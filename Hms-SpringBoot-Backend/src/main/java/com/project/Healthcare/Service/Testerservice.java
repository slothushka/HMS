package com.project.Healthcare.Service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.project.Healthcare.Model.Bloodpressure;
import com.project.Healthcare.Model.Bloodtest;
import com.project.Healthcare.Model.Sugartest;
import com.project.Healthcare.Repository.BloodtestRepository;
import com.project.Healthcare.Repository.PressureRepository;
import com.project.Healthcare.Repository.SugarRepository;

@Service
public class Testerservice {
	
	@Autowired
	SugarRepository Srepo;
	
	@Autowired
	BloodtestRepository Brepo;
	
	@Autowired
	PressureRepository Prepo;

	public Sugartest sugartest(Sugartest sugar) {
		return Srepo.save(sugar);
		
	}

	public Bloodtest bloodtest(Bloodtest blood) {
		return Brepo.save(blood);
	}

	public Bloodpressure pressure(Bloodpressure pressure) {
		return Prepo.save(pressure);
		
	}

	public List<Sugartest> showsugar(long userid) {
		return Srepo.findByUserid(userid);
	}

	public List<Bloodtest> showblood(long userid) {
		return Brepo.findByUserid(userid);
	}

	public List<Bloodpressure> showpressure(long userid) {
		
		return Prepo.findByUserid(userid);
	}
}
