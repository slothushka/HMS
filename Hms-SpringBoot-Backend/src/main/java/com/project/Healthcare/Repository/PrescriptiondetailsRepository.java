package com.project.Healthcare.Repository;

import java.util.ArrayList;

import org.hibernate.mapping.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.project.Healthcare.Model.Prescriptiondetails;

@Repository
public interface PrescriptiondetailsRepository extends JpaRepository<Prescriptiondetails, Long>{

	ArrayList<Prescriptiondetails> findByUserid(Long a);
}
