package com.alk.ServiceCall.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.alk.ServiceCall.beans.Admin;
import com.alk.ServiceCall.serviceses.AdminService;

@CrossOrigin
@RestController
@RequestMapping("api/admin")
public class AdminController {
	
	@Autowired
	private AdminService adminService;

	
	@PostMapping("add-admin")
	public boolean addAdmin(@RequestBody Admin  admin) {
		if(this.adminService.addAdmin(admin)) {
			return true;
		}
		else {return false;}
	}
	
	@PutMapping("update-admin")
	public HttpStatus editAdmin(@RequestBody Admin admin) {
		if(adminService.updateAdmin(admin)==true) return HttpStatus.ACCEPTED;
		else {return HttpStatus.BAD_REQUEST;}
	}
	
	@GetMapping("get-admin-By-Id")
	public Admin findById(int id)
	{
		return adminService.findById(id);
	}
}
