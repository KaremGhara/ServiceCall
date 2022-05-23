package com.alk.ServiceCall.serviceses;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collections;
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
//		requestCustomer.setCustomerName(eCustomer.getUserName());
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
		delRequestCustomer.setCustomer(null);
		delRequestCustomer.setTechnician(null);
		delRequestCustomer.setAttach(false);
		delRequestCustomer.setComplete(false);
		requestCustomerRepo.save(delRequestCustomer);

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
	
	
	public RequestCustomer findByEmail(String email) {
		if(email!=null) {
			return requestCustomerRepo.findByEmail(email);
		}
		return null;
	}
	
//	public List<RequestCustomer> getAllRequestCustomer() {
//		return requestCustomerRepo.findAll();
//	}
	
	public List<RequestCustomer> getAllRequestCustomer() {
		List<RequestCustomer> allReq=requestCustomerRepo.findAll();
        Collections.reverse(allReq);
		return allReq;
	}
	
	
	public List<RequestCustomer> getAllRequestCustomerBycostomerId(String costumerEmail) {
		List<RequestCustomer> allReq=requestCustomerRepo.findByemail(costumerEmail);
		Collections.reverse(allReq);
		return allReq;
	}
	
	public List<RequestCustomer> getAllRequestCustomerByTechnicianId(int TechnicianId) {
		List<RequestCustomer> allReq=requestCustomerRepo.findBytechnician_id(TechnicianId);
		Collections.reverse(allReq);
		return allReq;
	}
	
	public List<RequestCustomer> getAllRequestCustomerNotLinked() {
		List<RequestCustomer> newlistSt=new ArrayList<RequestCustomer>();
		List<RequestCustomer> listSt1=requestCustomerRepo.findAll();
		
		for(RequestCustomer list:listSt1) {
			if(list.isAttach()==false) {
				newlistSt.add(list);
			}
		}
		Collections.reverse(newlistSt);
		return newlistSt;
	}
	
	public List<Integer> getAllRequestCustomerByComleted(int  techId) {
		List<RequestCustomer> all=requestCustomerRepo.findBytechnician_id(techId);
		List<Integer> newlistSt=new ArrayList<Integer>();
		
		int isComlete=0;
		int isNotComlete=0;
		for(RequestCustomer list:all) {
			if(list.isComplete()==true) {
				isComlete++;
			}
			else {
				isNotComlete++;
			}
		}
		newlistSt.add(isComlete);
		newlistSt.add(isNotComlete);
		return newlistSt;
	}




	


}
