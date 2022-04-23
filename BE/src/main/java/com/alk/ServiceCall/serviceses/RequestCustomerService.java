package com.alk.ServiceCall.serviceses;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.format.datetime.standard.DateTimeContext;
import org.springframework.format.datetime.standard.DateTimeContextHolder;
import org.springframework.stereotype.Service;

import com.alk.ServiceCall.beans.Customer;
import com.alk.ServiceCall.beans.RequestCustomer;
import com.alk.ServiceCall.repo.CustomerRepo;
import com.alk.ServiceCall.repo.RequestCustomerRepo;

@Service
public class RequestCustomerService {
	
	@Autowired
	private RequestCustomerRepo requestCustomerRepo;

	@Autowired
	private CustomerRepo customerRepo;
	
	public boolean addRequestCustomer(RequestCustomer requestCustomer,int customerId) {
		Customer eCustomer =  customerRepo.findById(customerId);
		requestCustomer.setCustomer(eCustomer);
			requestCustomerRepo.save(requestCustomer);
					return true;
	}
	
	
	@Transactional
	public boolean updateRequestCustomer(RequestCustomer  requestCustomer) {
		RequestCustomer exsitRequestCustomer = requestCustomerRepo.findById(requestCustomer.getId());
		if(exsitRequestCustomer!=null) {
			requestCustomer.setId(exsitRequestCustomer.getId());
			requestCustomerRepo.save(requestCustomer);
			return true;
		}
		return false;
	}


	
	public boolean deleteRequestCustomer(int id) {
		RequestCustomer delRequestCustomer =  requestCustomerRepo.findById(id);

		if(delRequestCustomer!=null)
		{
			requestCustomerRepo.deleteById(id);
			return true;
		}
		return false;
	}
	
	
	public RequestCustomer findById(int id) {
		return requestCustomerRepo.findById(id);

	}
	
	public List<RequestCustomer> getAllRequestCustomer() {
		return requestCustomerRepo.findAll();
	}
	
	public List<RequestCustomer> getAllRequestCustomerBycostomerId(int costomerId) {
		return requestCustomerRepo.findByCustomer_id(costomerId);
	}


}
