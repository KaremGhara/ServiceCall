package com.alk.ServiceCall.serviceses;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.alk.ServiceCall.beans.Admin;
import com.alk.ServiceCall.repo.AdminRepo;

@Service
public class AdminService {

	@Autowired
	private AdminRepo adminRepo;
	
	public boolean addAdmin(Admin admin) {
		Admin exsitingAdmin=adminRepo.findByEmail(admin.getEmail());
		if(exsitingAdmin==null) {
			admin.setUserRole("Admin");
			adminRepo.save(admin);
			return true;
		}
		return false;
	}
}
