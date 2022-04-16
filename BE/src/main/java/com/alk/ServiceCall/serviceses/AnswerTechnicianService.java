package com.alk.ServiceCall.serviceses;

import java.util.List; 

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.alk.ServiceCall.beans.AnswerTechnician;
import com.alk.ServiceCall.repo.AnswerTechnicianRepo;

@Service
public class AnswerTechnicianService {
	
	@Autowired
	private AnswerTechnicianRepo answerTechnicianRepo;
	

	public void addAnswerTechnician(AnswerTechnician answerTechnician) {
		answerTechnicianRepo.save(answerTechnician);		
	}
	
	
	@Transactional
	public boolean updateAnswerTechnician(AnswerTechnician  answerTechnician) {
		AnswerTechnician exsitAnswerTechnician = answerTechnicianRepo.findById(answerTechnician.getId());
		if(exsitAnswerTechnician!=null) {
			answerTechnician.setId(exsitAnswerTechnician.getId());
			answerTechnicianRepo.save(answerTechnician);
			return true;
		}
		return false;
	}


	
	public boolean deleteAnswerTechnician(int id) {
		AnswerTechnician delAnswerTechnician =  answerTechnicianRepo.findById(id);

		if(delAnswerTechnician!=null)
		{
			answerTechnicianRepo.deleteById(id);
			return true;
		}
		return false;
	}
	
	
	public AnswerTechnician findById(int id) {
		return answerTechnicianRepo.findById(id);

	}
	
	public List<AnswerTechnician> getAllAnswerTechnician() {
		return answerTechnicianRepo.findAll();
	}
}
