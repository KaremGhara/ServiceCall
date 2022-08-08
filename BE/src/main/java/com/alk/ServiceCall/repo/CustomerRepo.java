package com.alk.ServiceCall.repo;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import com.alk.ServiceCall.beans.Customer;

public interface CustomerRepo extends JpaRepository<Customer, Integer> {

	public Customer findById(int Id);

	public Customer findByEmail(String email);
	
	public List<Customer> findBydelCustomer(boolean delCustomer);

}
