package com.project.Healthcare.Repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.project.Healthcare.Model.User;

@Repository
public interface UserRepository extends JpaRepository<User, Long>{
 
	@Query("select u.name from User u where u.user_id=:a")
	public String findByName(long a);
	
	
	Optional<User> findByEmailId(String email);
}
