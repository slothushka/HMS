package com.project.Healthcare.Repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.project.Healthcare.Model.Bloodtest;

@Repository
public interface BloodtestRepository extends JpaRepository<Bloodtest,Long>{

	List<Bloodtest> findByUserid(long a);
}
