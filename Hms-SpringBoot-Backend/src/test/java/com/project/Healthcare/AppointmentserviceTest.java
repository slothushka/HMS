package com.project.Healthcare;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;

import java.util.ArrayList;
import java.util.List;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;

import com.project.Healthcare.Model.Appointment;
import com.project.Healthcare.Model.Doctor;
import com.project.Healthcare.Model.Specialization;
import com.project.Healthcare.Service.Appointmentservice;

@SpringBootTest
class AppointmentserviceTest {

    private Appointmentservice appointmentService;

    @BeforeEach
    void setUp() {
        appointmentService = new Appointmentservice();
    }

    @Test
    void typesTest() {
        List<Specialization> specializations = appointmentService.types();
        assertNotNull(specializations);
        assertEquals(0, specializations.size());
    }

    @Test
    void nameTest() {
        long specializationId = 1; // Assuming this is a valid specialization id
        List<Doctor> doctors = appointmentService.name(specializationId);
        assertNotNull(doctors);
        assertEquals(0, doctors.size());
    }

    @Test
    void bookTest() {
        Appointment appointment = new Appointment();
        // Set appointment properties

        Appointment result = appointmentService.book(appointment);
        assertNotNull(result);
       
    }

   
}
