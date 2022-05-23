package com.alk.ServiceCall.repo;

import org.springframework.data.jpa.repository.JpaRepository; 
import com.alk.ServiceCall.beans.AnswerTechnician;

public interface AnswerTechnicianRepo extends JpaRepository<AnswerTechnician,Integer>{

	public AnswerTechnician findById(int Id);
	
}
