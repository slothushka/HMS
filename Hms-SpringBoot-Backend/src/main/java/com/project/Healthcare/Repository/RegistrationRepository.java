package com.project.Healthcare.Repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.project.Healthcare.Model.User;

@Repository
public interface RegistrationRepository extends JpaRepository<User, Long>{

	 User findByEmailId(String a);
}
