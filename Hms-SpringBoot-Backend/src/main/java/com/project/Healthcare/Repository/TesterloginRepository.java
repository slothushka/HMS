package com.project.Healthcare.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.project.Healthcare.Model.Tester;

@Repository
public interface TesterloginRepository extends JpaRepository<Tester, Long>{
	public Tester findByEmailId(String a);
 
}
