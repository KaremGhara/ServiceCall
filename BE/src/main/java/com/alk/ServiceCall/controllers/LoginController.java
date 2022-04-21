package com.alk.ServiceCall.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.alk.ServiceCall.beans.Customer;
import com.alk.ServiceCall.beans.LoginUsers;
import com.alk.ServiceCall.beans.User;
import com.alk.ServiceCall.serviceses.LoginService;


@CrossOrigin
@RestController
@RequestMapping("api/login")
public class LoginController {

	
	@Autowired
	private LoginService loginService;
	
//	  @PostMapping("login-user")
//	    public boolean login(@RequestBody LoginUsers user) {
//		  
//			if(this.loginService.userLogin(user)) {
//				return true;
//			}
//			else {return false;}
//	       
//	    }
	  
	  
	  @PostMapping("login")
	    public HttpStatus login(@RequestBody LoginUsers user) {
	       if(loginService.userLogin1(user)!=null) return HttpStatus.ACCEPTED;
	       else {
	    	 return  HttpStatus.BAD_REQUEST;
	       }
	    }

}
