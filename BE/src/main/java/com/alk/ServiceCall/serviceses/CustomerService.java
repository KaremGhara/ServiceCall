package com.alk.ServiceCall.serviceses;

import java.security.NoSuchAlgorithmException;
import java.security.spec.InvalidKeySpecException;
import java.util.Collections;
import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired; 
import org.springframework.stereotype.Service;

import com.alk.ServiceCall.Helper.PasswordHelper;
import com.alk.ServiceCall.beans.Customer;
import com.alk.ServiceCall.beans.Technician;
import com.alk.ServiceCall.repo.CustomerRepo;

@Service
public class CustomerService {
	
	
	@Autowired
	private CustomerRepo customerRepo;
	
	public boolean addCustomer(Customer customer) {
		Customer exsitingCustomer=customerRepo.findByEmail(customer.getEmail());
		if(exsitingCustomer==null) {
			try {
				String generatedPassword= PasswordHelper.generateStorngPasswordHash(customer.getUserPassword());
				customer.setUserPassword(generatedPassword);
				customer.setUserRole("Customer");
				customerRepo.save(customer);
				return true;
			} catch (NoSuchAlgorithmException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			} catch (InvalidKeySpecException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
			
		}
		return false;
	}
	
	
	@Transactional
	public boolean updateCustomer(Customer  customer) {
		Customer exsitCustomer = customerRepo.findById(customer.getId());
		if(exsitCustomer!=null) {
			customer.setId(exsitCustomer.getId());
			customerRepo.save(customer);
			return true;
		}
		return false;
	}


	
	public boolean deleteCustomer(int id) {
		Customer delCustomer =  customerRepo.findById(id);

		if(delCustomer!=null)
		{
			customerRepo.deleteById(id);
			return true;
		}
		return false;
	}
	
	
	public Customer findById(int id) {
		return customerRepo.findById(id);

	}
	
	public List<Customer> getAllCustomer() {
		List<Customer> allCustomers=customerRepo.findAll();
        Collections.reverse(allCustomers);
		return allCustomers;
	}

}
