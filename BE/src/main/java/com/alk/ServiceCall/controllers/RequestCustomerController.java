package com.alk.ServiceCall.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.repository.query.Param;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.alk.ServiceCall.beans.Customer;
import com.alk.ServiceCall.beans.RequestCustomer;
import com.alk.ServiceCall.serviceses.RequestCustomerService;

@CrossOrigin
@RestController
@RequestMapping("api/requestCustomer")
public class RequestCustomerController {

	@Autowired
	private RequestCustomerService requestCustomerService;
	

	@PostMapping("add-request_customer")
	public boolean addRequestCustomer(@RequestBody RequestCustomer  requestCustomer) {
		if(this.requestCustomerService.addRequestCustomer(requestCustomer)) {
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
	@DeleteMapping("delete-request_customer")
	public HttpStatus deleteRequestCustomer(int id) {
		if(requestCustomerService.deleteRequestCustomer(id)==true) return HttpStatus.ACCEPTED;
		else {return HttpStatus.BAD_REQUEST;}
	}
	
	@GetMapping("get-request_customer-By-IdCostomer")
	public List<RequestCustomer> findByCostomerId(int costomerId)
	{
		return requestCustomerService.getAllRequestCustomerBycostomerId(costomerId);
	}
}
