package com.alk.ServiceCall.serviceses;

import javax.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.alk.ServiceCall.beans.AnswerTechnician;
import com.alk.ServiceCall.beans.RequestCustomer;
import com.alk.ServiceCall.repo.AnswerTechnicianRepo;
import com.alk.ServiceCall.repo.RequestCustomerRepo;

@Service
public class AnswerTechnicianService {

	@Autowired
	private AnswerTechnicianRepo answerTechnicianRepo;

	@Autowired
	private RequestCustomerRepo requestCustomerRepo;

	public void addAnswerTechnician(AnswerTechnician answerTechnician) {
		if (answerTechnician.isComplete() == true) {
			RequestCustomer requestCustomer = requestCustomerRepo.findById(answerTechnician.getRepairCode());
			requestCustomer.setComplete(true);
			requestCustomer.setAnswerdate(answerTechnician.getAnswerdate());
			requestCustomer.setId(requestCustomer.getId());
			requestCustomer.setClosedate(answerTechnician.getDate());
			requestCustomerRepo.save(requestCustomer);
			answerTechnicianRepo.save(answerTechnician);
		} else if (answerTechnician.isComplete() == false) {
			RequestCustomer requestCustomer = requestCustomerRepo.findById(answerTechnician.getRepairCode());
			requestCustomer.setComplete(false);
			requestCustomer.setAnswerdate(answerTechnician.getAnswerdate());
			requestCustomer.setId(requestCustomer.getId());
			requestCustomerRepo.save(requestCustomer);
			answerTechnicianRepo.save(answerTechnician);
		}
	}

	@Transactional
	public boolean updateAnswerTechnician(AnswerTechnician answerTechnician) {
		AnswerTechnician exsitAnswerTechnician = answerTechnicianRepo.findById(answerTechnician.getId());
		if (exsitAnswerTechnician != null) {
			answerTechnician.setId(exsitAnswerTechnician.getId());
			answerTechnicianRepo.save(answerTechnician);
			return true;
		}
		return false;
	}

}
