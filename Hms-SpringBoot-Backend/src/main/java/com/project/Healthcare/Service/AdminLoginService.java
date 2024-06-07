package com.project.Healthcare.Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.project.Healthcare.Exception.InvalidEmailidException;
import com.project.Healthcare.Exception.InvalidPasswordException;
import com.project.Healthcare.Model.Admin;
import com.project.Healthcare.Model.Tester;
import com.project.Healthcare.Repository.AdminLoginRepository;

@Service
public class AdminLoginService {

	@Autowired
	AdminLoginRepository Arepo;
	
	public ResponseEntity<String> send(Admin admin) {
		Admin adm=Arepo.findByEmailId(admin.getEmailId());
		if(adm!=null) {
			if(adm.getPassword().equals(admin.getPassword())) {
				return ResponseEntity.ok("Login successfully");
			}
			else {
				throw new InvalidPasswordException("invalid Admin password");
			}
		}
		throw new InvalidEmailidException("invalid Admin mailid");
	}
}

	

