package com.alk.ServiceCall.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.alk.ServiceCall.beans.LoginUsers;
import com.alk.ServiceCall.beans.User;
import com.alk.ServiceCall.serviceses.LoginService;

@CrossOrigin
@RestController
@RequestMapping("api/login")
public class LoginController {

	@Autowired
	private LoginService loginService;

	@PostMapping("login")
	public User login(@RequestBody LoginUsers user) {
		return loginService.userLogin1(user);

	}

}
