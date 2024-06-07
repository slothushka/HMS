package com.project.Healthcare.Exception;

import java.time.LocalDate;

import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

@ControllerAdvice
public class GlobalException {
	@ExceptionHandler(Exception.class)
	

	public ResponseEntity handleAllExceptions(Exception exp) {
		ResponseVariables variables=new ResponseVariables(LocalDate.now(),404,"Internal Server Error",exp.getMessage());
	    return new ResponseEntity<>(variables,HttpStatus.NOT_FOUND);
	}


	@ExceptionHandler(DataIntegrityViolationException.class)
	
	public ResponseEntity handleAllExceptions(DataIntegrityViolationException exp) {
			ResponseVariables variables=new ResponseVariables(LocalDate.now(),400,"Internal Server Error","Entered doctor mailId already exists");
			return new ResponseEntity<>(variables, HttpStatus.BAD_REQUEST);
	}
}