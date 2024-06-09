package com.project.Healthcare.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.project.Healthcare.Model.Bloodpressure;
import com.project.Healthcare.Model.Bloodtest;
import com.project.Healthcare.Model.Sugartest;
import com.project.Healthcare.Service.Testerservice;

@RestController
@CrossOrigin(origins = "*")
public class TesterController {
	
	@Autowired
	Testerservice Tservice;

	@PostMapping("/sugar")
	public Sugartest sugartest(@RequestBody Sugartest sugar) {
		System.out.println(sugar.getGulcosetest());
		return Tservice.sugartest(sugar);
	
	}
	
	@PostMapping("/blood")
	public Bloodtest bloodtest(@RequestBody Bloodtest blood) {
		return Tservice.bloodtest(blood);
	}
	@PostMapping("/pressure")
	public Bloodpressure pressure(@RequestBody Bloodpressure pressure) {
		return Tservice.pressure(pressure);
	}
	
	@GetMapping("/sugar/{userid}")
	public List<Sugartest> showsugar(@PathVariable long userid) {
		return Tservice.showsugar(userid);
	}
	
	@GetMapping("/blood/{userid}")
	public List<Bloodtest> showblood(@PathVariable long userid) {
		return Tservice.showblood(userid);
	}
	
	@GetMapping("/pressure/{userid}")
	public List<Bloodpressure> showpressure(@PathVariable long userid) {
		return Tservice.showpressure(userid);
	}
}
