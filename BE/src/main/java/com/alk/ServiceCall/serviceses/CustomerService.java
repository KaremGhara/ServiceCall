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
import com.alk.ServiceCall.beans.RequestCustomer;
import com.alk.ServiceCall.repo.CustomerRepo;
import com.alk.ServiceCall.repo.RequestCustomerRepo;

@Service
public class CustomerService {

	@Autowired
	private CustomerRepo customerRepo;

	@Autowired
	private RequestCustomerRepo requestCustomerRepo;

	public boolean addCustomer(Customer customer) {
		Customer exsitingCustomer = customerRepo.findByEmail(customer.getEmail());
		if (exsitingCustomer == null) {
			try {
				String generatedPassword = PasswordHelper.generateStorngPasswordHash(customer.getUserPassword());
				customer.setUserPassword(generatedPassword);
				customer.setUserRole("Customer");
				customerRepo.save(customer);
				return true;
			} catch (NoSuchAlgorithmException e) {
				e.printStackTrace();
			} catch (InvalidKeySpecException e) {
				e.printStackTrace();
			}
		}
		return false;
	}

	@Transactional
	public boolean updateCustomer(Customer customer) {
		Customer exsitCustomer = customerRepo.findById(customer.getId());
		if (exsitCustomer != null) {
			customer.setId(exsitCustomer.getId());
			customerRepo.save(customer);
			return true;
		}
		return false;
	}

	public boolean deleteCustomer(int id) {
		Customer delCustomer = customerRepo.findById(id);
		List<RequestCustomer> req = requestCustomerRepo.findBycustomer_id(id);
		if (delCustomer != null) {
			for (RequestCustomer re : req) {
				re.setTechnician(null);
				requestCustomerRepo.save(re);
			}
			customerRepo.deleteById(id);
			return true;
		}
		return false;
	}

	public Customer findById(int id) {
		return customerRepo.findById(id);

	}

	public List<Customer> getAllCustomer() {
		List<Customer> allCustomers = customerRepo.findAll();
		Collections.reverse(allCustomers);
		return allCustomers;
	}

}
