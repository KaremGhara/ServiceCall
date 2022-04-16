package com.alk.ServiceCall.serviceses;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.alk.ServiceCall.beans.Technician;
import com.alk.ServiceCall.repo.TechnicianRepo;

@Service
public class TechnicianService {

	@Autowired
	private TechnicianRepo technicianRepo;
	

	public boolean addTechnician(Technician technician) {
		Technician exsitingTechnicianEmail=technicianRepo.findByEmail(technician.getEmail());
		Technician exsitingTechnicianId=technicianRepo.findById(technician.getId());
		if(exsitingTechnicianEmail==null && exsitingTechnicianId==null) {
			technicianRepo.save(technician);
			return true;
		}
		return false;
	}
	
	
	@Transactional
	public boolean updateTechnician(Technician  technician) {
		Technician exsitTechnician = technicianRepo.findById(technician.getId());
		if(exsitTechnician!=null) {
			technician.setId(exsitTechnician.getId());
			technicianRepo.save(technician);
			return true;
		}
		return false;
	}


	
	public boolean deleteTechnician(int id) {
		Technician delTechnician =  technicianRepo.findById(id);

		if(delTechnician!=null)
		{
			technicianRepo.deleteById(id);
			return true;
		}
		return false;
	}
	
	
	public Technician findById(int id) {
		return technicianRepo.findById(id);

	}
	
	public List<Technician> getAllTechnician() {
		return technicianRepo.findAll();
	}

}
