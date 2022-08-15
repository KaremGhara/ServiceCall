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
			String generatedPassword;
			try {
				if(customer.getUserPassword().equals(exsitCustomer.getUserPassword())) {
					customer.setId(exsitCustomer.getId());
					customerRepo.save(customer);
					return true;
				}
				else {
					 generatedPassword = PasswordHelper.generateStorngPasswordHash(customer.getUserPassword());
					 customer.setUserPassword(generatedPassword);
					 customer.setId(exsitCustomer.getId());
					 customerRepo.save(customer);
						return true;
				}

			} catch (NoSuchAlgorithmException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			} catch (InvalidKeySpecException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
			
			return true;
		}
		return false;
	}

	public boolean deleteCustomer(int id) {
		Customer delCustomer = customerRepo.findById(id);
		List<RequestCustomer> req = requestCustomerRepo.findBycustomer_idAndDelRequest(id,false);
		if (delCustomer != null) {
			for (RequestCustomer re : req) {
				if (re.isComplete() == true && re.isAttach() == true) {
					re.setDelRequest(false);
				}else {
					re.setDelRequest(true);
				}
//				re.setTechnician(null);
//				re.setAttach(false);
//				re.setComplete(false);
//				re.setDelRequest(true);
//				re.setCustomer(null);
				requestCustomerRepo.save(re);
			}
			delCustomer.setDelCustomer(true);
//			customerRepo.deleteById(id);
			customerRepo.save(delCustomer);
			return true;
		}
		return false;
	}

	public Customer findById(int id) {
		return customerRepo.findById(id);

	}

	public List<Customer> getAllCustomer() {
		List<Customer> allCustomers = customerRepo.findBydelCustomer(false);
		Collections.reverse(allCustomers);
		return allCustomers;
	}

}
