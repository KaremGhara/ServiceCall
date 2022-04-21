package com.alk.ServiceCall.serviceses;

import java.util.Optional;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.alk.ServiceCall.beans.LoginUsers;
import com.alk.ServiceCall.beans.User;
import com.alk.ServiceCall.repo.UserRepo;


@Service
public class LoginService {


	
	@Autowired
	private UserRepo userRepo;
	

	
//	public boolean userLogin(LoginUsers userLoginData) {
//		
//		Customer userEmil = customerRepo.findByEmail(userLoginData.getEmail());
//		if(userEmil!=null) {
//			Customer userPass = customerRepo.findByPassword(userLoginData.getPassword());
//			if(userPass!=null) {
//				if(userEmil.getEmail()==userPass.getEmail() && userEmil.getPassword()==userPass.getPassword()) {
//					
//					return true;
//				}	
//			}
//			
//		}
//		
//		return false;
//	}
	
	public User userLogin1(LoginUsers users) {
		User user = userRepo.findByEmail(users.getEmail());
		if (user == null || !user.getUserPassword().equals(users.getPassword())) {
			return null;
		}
		return user;
	}

	
	
}
