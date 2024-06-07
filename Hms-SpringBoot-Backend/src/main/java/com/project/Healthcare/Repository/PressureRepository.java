package com.project.Healthcare.Repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.project.Healthcare.Model.Bloodpressure;

@Repository
public interface PressureRepository extends JpaRepository<Bloodpressure, Long>{

	List<Bloodpressure> findByUserid(long a);
}
