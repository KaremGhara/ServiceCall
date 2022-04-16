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

import com.alk.ServiceCall.beans.Technician;
import com.alk.ServiceCall.serviceses.TechnicianService;

@CrossOrigin
@RestController
@RequestMapping("api/technicianController")
public class TechnicianController {

	@Autowired
	private TechnicianService technicianService;
	

	@PostMapping("add-technician")
	public boolean addTechnician(@RequestBody Technician  technician) {
		if(this.technicianService.addTechnician(technician)) {
			return true;
		}
		else {return false;}
	}
	
	
	@GetMapping("get-all-technician")
	public List<Technician> getAll(){
		return technicianService.getAllTechnician();
	}

	@PutMapping("update-technician")
	public HttpStatus editTechnician(@RequestBody Technician technician) {
		if(technicianService.updateTechnician(technician)==true) return HttpStatus.ACCEPTED;
		else {return HttpStatus.BAD_REQUEST;}

	}
	
	
	@GetMapping("get-technician-By-Id")
	public Technician findById(int id)
	{
		return technicianService.findById(id);
	}
	@DeleteMapping("delete-technician")
	public HttpStatus deleteTechnician(int id) {
		if(technicianService.deleteTechnician(id)==true) return HttpStatus.ACCEPTED;
		else {return HttpStatus.BAD_REQUEST;}
	}
}
