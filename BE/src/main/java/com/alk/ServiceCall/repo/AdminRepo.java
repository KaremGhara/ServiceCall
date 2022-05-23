package com.alk.ServiceCall.repo;

import java.util.Optional; 
import org.springframework.data.jpa.repository.JpaRepository;
import com.alk.ServiceCall.beans.Admin;

public interface AdminRepo extends JpaRepository<Admin, Integer> {
	
	public Admin findById(int Id);
	public Admin findByEmail(String email);
	public Admin findByuserPassword(String password);
	public Optional<Admin> findByEmailEquals(String email);
}
