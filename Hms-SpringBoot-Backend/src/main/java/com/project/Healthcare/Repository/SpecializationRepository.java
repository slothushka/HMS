package com.project.Healthcare.Repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.project.Healthcare.Model.Specialization;

@Repository
public interface SpecializationRepository extends JpaRepository<Specialization, Long>{

	
    public Specialization findBySpecialty(String a);
   
//    public String findBySpecialty(long a);
    
    @Query("from Specialization s")
    public List<Specialization> findAllSpecialization();
}
