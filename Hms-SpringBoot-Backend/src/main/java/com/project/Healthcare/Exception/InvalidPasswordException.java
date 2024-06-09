package com.project.Healthcare.Exception;

public class InvalidPasswordException extends RuntimeException{
	public InvalidPasswordException(String msg) {
	super(msg);
	}
}
