package com.alk.ServiceCall.serviceses;

import java.security.NoSuchAlgorithmException;
import java.security.spec.InvalidKeySpecException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.alk.ServiceCall.Helper.PasswordHelper;
import com.alk.ServiceCall.beans.Customer;
import com.alk.ServiceCall.beans.LoginUsers;
import com.alk.ServiceCall.beans.Technician;
import com.alk.ServiceCall.beans.User;
import com.alk.ServiceCall.repo.CustomerRepo;
import com.alk.ServiceCall.repo.TechnicianRepo;
import com.alk.ServiceCall.repo.UserRepo;

@Service
public class LoginService {

	@Autowired
	private UserRepo userRepo;
	
	@Autowired
	private TechnicianRepo technicianRepo;
	
	@Autowired
	private CustomerRepo customerRepo;

	public User userLogin1(LoginUsers users) {
		User user = userRepo.findByEmail(users.getEmail());
		Technician technician = technicianRepo.findByEmailAndDelTechnician(users.getEmail(),false);
		Customer customer = customerRepo.findByEmailAndDelCustomer(users.getEmail(),false);
		try {
			if(technician==null && customer!=null) {
				if (PasswordHelper.validatePassword(users.getPassword(), user.getUserPassword())) {
					return user;
				}
			}
			else if(technician!=null && customer==null)
			{
				if (PasswordHelper.validatePassword(users.getPassword(), user.getUserPassword())) {
					return user;
				}
			}
			else if(technician==null && customer==null && user.getUserRole().equals("Admin")){
				if (PasswordHelper.validatePassword(users.getPassword(), user.getUserPassword())) {
					return user;
				}
			}
			
			
		} catch (NoSuchAlgorithmException e) {
			e.printStackTrace();
		} catch (InvalidKeySpecException e) {
			e.printStackTrace();
		}
		return null;
	}

}
