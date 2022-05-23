package com.alk.ServiceCall.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import com.alk.ServiceCall.beans.Technician;


public interface TechnicianRepo extends JpaRepository<Technician,Integer>{

	public Technician findById(int Id);
	public Technician findByEmail(String email);
}
