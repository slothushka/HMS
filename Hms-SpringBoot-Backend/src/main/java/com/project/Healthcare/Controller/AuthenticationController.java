package com.project.Healthcare.Controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.project.Healthcare.Model.User;
import com.project.Healthcare.Security.AuthenticationResponse;
import com.project.Healthcare.Security.AuthenticationService;

@RestController
@CrossOrigin(origins = "http://localhost:4200/")
public class AuthenticationController {
 
    private final AuthenticationService authService;
 
    public AuthenticationController(AuthenticationService authService) {
        this.authService = authService;
    }
 
 
    @PostMapping("/register")
    public ResponseEntity<AuthenticationResponse> register(
            @RequestBody User request
            ) {
        return ResponseEntity.ok(authService.register(request));
    }
 
    @PostMapping("/login")
    public ResponseEntity<AuthenticationResponse> login(
            @RequestBody User request
    ) {
        return ResponseEntity.ok(authService.authenticate(request));
    }
}