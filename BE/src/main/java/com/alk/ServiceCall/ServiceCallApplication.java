package com.alk.ServiceCall;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class ServiceCallApplication {

	public static void main(String[] args) {
		SpringApplication.run(ServiceCallApplication.class, args);
		
		System.out.println("Server is Ready");
	}

}
