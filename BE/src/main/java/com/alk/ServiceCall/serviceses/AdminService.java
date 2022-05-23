package com.alk.ServiceCall.serviceses;

import javax.transaction.Transactional;
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
	
	
	@Transactional
	public boolean updateAdmin(Admin  admin) {
		Admin exsitAdmin = adminRepo.findById(admin.getId());
		if(exsitAdmin!=null) {
			admin.setId(exsitAdmin.getId());
			adminRepo.save(admin);
			return true;
		}
		return false;
	}
	
	public Admin findById(int id) {
		return adminRepo.findById(id);

	}
}
