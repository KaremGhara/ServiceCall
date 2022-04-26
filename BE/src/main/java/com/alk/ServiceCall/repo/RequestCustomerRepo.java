package com.alk.ServiceCall.repo;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.alk.ServiceCall.beans.Customer;
import com.alk.ServiceCall.beans.RequestCustomer;


public interface RequestCustomerRepo extends JpaRepository<RequestCustomer,Integer>{

	public RequestCustomer findById(int Id);
//	public List<RequestCustomer> findById(int costumerId);
	public List<RequestCustomer> findByemail(String costumerEmail);


}
