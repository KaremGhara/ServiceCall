package com.alk.ServiceCall.controllers;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.alk.ServiceCall.beans.RequestCustomer;
import com.alk.ServiceCall.serviceses.RequestCustomerService;

@CrossOrigin
@RestController
@RequestMapping("api/requestCustomer")
public class RequestCustomerController {

	@Autowired
	private RequestCustomerService requestCustomerService;
	

	@PostMapping("add-request_customer")
	public boolean addRequestCustomer(@RequestBody RequestCustomer  requestCustomer, int customerId) {
		if(this.requestCustomerService.addRequestCustomer(requestCustomer,customerId)) {
			return true;
		}
		else {return false;}	
	}
	
	
	@GetMapping("get-all-request_customer")
	public List<RequestCustomer> getAll(){
		return requestCustomerService.getAllRequestCustomer();
	}

	@PutMapping("update-request_customer")
	public HttpStatus editRequestCustomer(@RequestBody RequestCustomer requestCustomer) {
		if(requestCustomerService.updateRequestCustomer(requestCustomer)==true) return HttpStatus.ACCEPTED;
		else {return HttpStatus.BAD_REQUEST;}

	}
	
	
	@GetMapping("get-request_customer-By-Id")
	public RequestCustomer findById(int id)
	{
		return requestCustomerService.findById(id);
	}
	
	@GetMapping("get-request_customer-By-Email")
	public RequestCustomer findByEmail(String email)
	{
		return requestCustomerService.findByEmail(email);
	}
	
	@DeleteMapping("delete-request_customer")
	public HttpStatus deleteRequestCustomer(int id) {
		if(requestCustomerService.deleteRequestCustomer(id)==true) return HttpStatus.ACCEPTED;
		else {return HttpStatus.BAD_REQUEST;}
	}
	
	@GetMapping("get-request_customer-By-costumerEmail")
	public List<RequestCustomer> findByCostomerId(String costumerEmail)
	{
		return requestCustomerService.getAllRequestCustomerBycostomerEmail(costumerEmail);
	}
	
	@GetMapping("get-request_customer-By-technician-id")
	public List<RequestCustomer> findByReqByTechnId(int technicianId)
	{
		return requestCustomerService.getAllRequestCustomerByTechnicianId(technicianId);
	}
	
	@GetMapping("get-all-request_customer-not-linked")
	public List<RequestCustomer> getAllRequestCustomerNotLinked(){
		return requestCustomerService.getAllRequestCustomerNotLinked();
	}
	
	@GetMapping("get-all-request_customer-by-complete")
	public List<Integer> getAllRequestCustomerByComplete(int techId){
		return requestCustomerService.getAllRequestCustomerByComleted(techId);
	}
}
