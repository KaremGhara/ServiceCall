package com.alk.ServiceCall.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.alk.ServiceCall.beans.AnswerTechnician;
import com.alk.ServiceCall.serviceses.AnswerTechnicianService;

@CrossOrigin
@RestController
@RequestMapping("api/answerTechnician")
public class AnswerTechnicianController {

	@Autowired
	private AnswerTechnicianService answerTechnicianService;

	@PostMapping("add-answer-technician")
	public void addAnswerTechnician(@RequestBody AnswerTechnician answerTechnician) {
		this.answerTechnicianService.addAnswerTechnician(answerTechnician);

	}

	@PutMapping("update-answer-technician")
	public HttpStatus editAnswerTechnician(@RequestBody AnswerTechnician answerTechnician) {
		if (answerTechnicianService.updateAnswerTechnician(answerTechnician) == true)
			return HttpStatus.ACCEPTED;
		else {
			return HttpStatus.BAD_REQUEST;
		}

	}

}
