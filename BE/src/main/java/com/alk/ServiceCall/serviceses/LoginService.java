package com.alk.ServiceCall.serviceses;

import java.security.NoSuchAlgorithmException;
import java.security.spec.InvalidKeySpecException;
import java.util.Optional;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.alk.ServiceCall.Helper.PasswordHelper;
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
		try {
			if(PasswordHelper.validatePassword(users.getPassword(),user.getUserPassword()))
			{
				return user;
			}
		} catch (NoSuchAlgorithmException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} catch (InvalidKeySpecException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return null;
	}

	
	
}
