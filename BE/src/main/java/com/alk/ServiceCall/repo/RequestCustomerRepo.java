package com.alk.ServiceCall.repo;

import java.util.List; 
import org.springframework.data.jpa.repository.JpaRepository;
import com.alk.ServiceCall.beans.RequestCustomer;


public interface RequestCustomerRepo extends JpaRepository<RequestCustomer,Integer>{

	public RequestCustomer findById(int Id);
	public RequestCustomer findByEmail(String email);
	public List<RequestCustomer> findByemail(String costumerEmail);
	public List<RequestCustomer> findBytechnician_id(int technicianId);
	public List<RequestCustomer> findBycustomer_id(int customerId);
}
