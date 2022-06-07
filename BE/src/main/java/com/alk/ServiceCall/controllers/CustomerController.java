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
import com.alk.ServiceCall.beans.Customer;
import com.alk.ServiceCall.serviceses.CustomerService;

@CrossOrigin
@RestController
@RequestMapping("api/customers")
public class CustomerController {

	@Autowired
	private CustomerService customerService;

	@PostMapping("add-customer")
	public boolean addCustomer(@RequestBody Customer customer) {
		if (this.customerService.addCustomer(customer)) {
			return true;
		} else {
			return false;
		}
	}

	@GetMapping("get-all-customer")
	public List<Customer> getAll() {
		return customerService.getAllCustomer();
	}

	@PutMapping("update-customer")
	public HttpStatus editStudent(@RequestBody Customer customer) {
		if (customerService.updateCustomer(customer) == true)
			return HttpStatus.ACCEPTED;
		else {
			return HttpStatus.BAD_REQUEST;
		}
	}

	@GetMapping("get-customer-By-Id")
	public Customer findById(int id) {
		return customerService.findById(id);
	}

	@DeleteMapping("delete-customer")
	public HttpStatus deleteStudent(int id) {
		if (customerService.deleteCustomer(id) == true)
			return HttpStatus.ACCEPTED;
		else {
			return HttpStatus.BAD_REQUEST;
		}
	}
}
