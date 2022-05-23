package com.alk.ServiceCall.repo;

import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;
import com.alk.ServiceCall.beans.Customer;

public interface CustomerRepo extends JpaRepository<Customer,Integer>{

	public Customer findById(int Id);
	public Customer findByEmail(String email);
	public Customer findByuserPassword(String password);
	public Optional<Customer> findByEmailEquals(String email);

	
}
