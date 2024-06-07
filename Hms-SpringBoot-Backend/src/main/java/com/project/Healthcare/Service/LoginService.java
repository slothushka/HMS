package com.project.Healthcare.Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.project.Healthcare.Exception.InvalidEmailidException;
import com.project.Healthcare.Exception.InvalidPasswordException;
import com.project.Healthcare.Model.Doctor;
import com.project.Healthcare.Model.DoctorDAO;
import com.project.Healthcare.Model.Tester;
import com.project.Healthcare.Model.TesterDAO;
import com.project.Healthcare.Model.User;
import com.project.Healthcare.Model.userDAO;
import com.project.Healthcare.Repository.DoctorRegistrationRepository;
import com.project.Healthcare.Repository.RegistrationRepository;
import com.project.Healthcare.Repository.TesterloginRepository;

@Service
public class LoginService {
	
	@Autowired
	RegistrationRepository Rrepo;
	
	@Autowired
	DoctorRegistrationRepository Drepo;
	
	@Autowired
	TesterloginRepository Trepo;
	
	
	public ResponseEntity<String> usr(userDAO user) {
		User us=Rrepo.findByEmailId(user.getEmailId());
		if(us!=null) {
			if(us.getPassword().equals(user.getPassword())) {
				return ResponseEntity.ok("Login successfully");
			}
			else {
				throw new InvalidPasswordException("invalid user password");
			}
		}
		throw new InvalidEmailidException("invalid user emaildId");
	}

	public ResponseEntity<String> doct(DoctorDAO doctor) {
		Doctor doc=Drepo.findByEmailId(doctor.getEmailId());
		if(doc!=null) {
			if(doc.getPassword().equals(doctor.getPassword())) {
				return ResponseEntity.ok("Login successfully");
			}
			else {
				throw new InvalidPasswordException("invalid Doctor password");
			}
		}
		throw new InvalidEmailidException("invalid Doctor mailid");
	}

	public ResponseEntity<String> testr(TesterDAO tester) {
		Tester tes=Trepo.findByEmailId(tester.getEmailId());
		if(tes!=null) {
			if(tes.getPassword().equals(tester.getPassword())) {
				return ResponseEntity.ok("Login successfully");
			}
			else {
				throw new InvalidPasswordException("invalid Tester password");
			}
		}
		throw new InvalidEmailidException("invalid Tester mailid");
	}

	public User dao(userDAO userdao) {
		User us=Rrepo.findByEmailId(userdao.getEmailId());
		return us;
	}

	public Doctor daodoc(DoctorDAO doctordao) {
		Doctor doc=Drepo.findByEmailId(doctordao.getEmailId());
		return doc;
	}

}
