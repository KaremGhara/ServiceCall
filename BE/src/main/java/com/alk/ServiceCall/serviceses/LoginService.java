package com.alk.ServiceCall.serviceses;

import java.util.Optional;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.alk.ServiceCall.beans.Customer;
import com.alk.ServiceCall.beans.LoginUsers;
import com.alk.ServiceCall.repo.CustomerRepo;
import com.alk.ServiceCall.repo.LoginRepo;


@Service
public class LoginService {

	@Autowired
	private LoginRepo loginRepo;
	
	@Autowired
	private CustomerRepo customerRepo;
	
	public boolean userLogin(LoginUsers userLoginData) {
		
		Customer userEmil = customerRepo.findByEmail(userLoginData.getEmail());
		if(userEmil!=null) {
			Customer userPass = customerRepo.findByPassword(userLoginData.getPassword());
			if(userPass!=null) {
				if(userEmil.getEmail()==userPass.getEmail() && userEmil.getPassword()==userPass.getPassword()) {
					
					return true;
				}	
			}
			
		}
		
		return false;
	}
	
	public Customer userLogin1(LoginUsers userLoginData) {
		Optional<Customer> user = customerRepo.findByEmailEquals(userLoginData.getEmail());
		if (user.isEmpty() || !user.get().getPassword().equals(userLoginData.getPassword())) {
			return null;
		}
		return user.get();
	}

	
	
}
