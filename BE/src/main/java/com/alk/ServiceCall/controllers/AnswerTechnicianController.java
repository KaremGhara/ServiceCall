package com.alk.ServiceCall.controllers;

import java.util.List; 
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
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
	public void addAnswerTechnician(@RequestBody AnswerTechnician  answerTechnician) {
		this.answerTechnicianService.addAnswerTechnician(answerTechnician);
		
	}
	
	
	@GetMapping("get-all-answer-technician")
	public List<AnswerTechnician> getAll(){
		return answerTechnicianService.getAllAnswerTechnician();
	}

	@PutMapping("update-answer-technician")
	public HttpStatus editAnswerTechnician(@RequestBody AnswerTechnician answerTechnician) {
		if(answerTechnicianService.updateAnswerTechnician(answerTechnician)==true) return HttpStatus.ACCEPTED;
		else {return HttpStatus.BAD_REQUEST;}

	}
	
	
	@GetMapping("get-answer-technician-By-Id")
	public AnswerTechnician findById(int id)
	{
		return answerTechnicianService.findById(id);
	}
	
	@DeleteMapping("delete-answer-technician")
	public HttpStatus deleteAnswerTechnician(int id) {
		if(answerTechnicianService.deleteAnswerTechnician(id)==true) return HttpStatus.ACCEPTED;
		else {return HttpStatus.BAD_REQUEST;}
	}
	
}
