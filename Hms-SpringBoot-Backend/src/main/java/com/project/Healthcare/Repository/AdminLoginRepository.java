package com.project.Healthcare.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.project.Healthcare.Model.Admin;

@Repository
public interface AdminLoginRepository extends JpaRepository<Admin, Long>{

	public Admin findByEmailId(String a);
}
