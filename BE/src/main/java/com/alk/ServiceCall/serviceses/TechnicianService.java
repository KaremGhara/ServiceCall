package com.alk.ServiceCall.serviceses;

import java.security.NoSuchAlgorithmException; 
import java.security.spec.InvalidKeySpecException;
import java.util.Collections;
import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.alk.ServiceCall.Helper.PasswordHelper;
import com.alk.ServiceCall.beans.Customer;
import com.alk.ServiceCall.beans.RequestCustomer;
import com.alk.ServiceCall.beans.Technician;
import com.alk.ServiceCall.repo.RequestCustomerRepo;
import com.alk.ServiceCall.repo.TechnicianRepo;

@Service
public class TechnicianService {

	@Autowired
	private TechnicianRepo technicianRepo;
	
	@Autowired
	private RequestCustomerRepo requestCustomerRepo;
	
	public boolean addTechnician(Technician technician) {
		Technician exsitingTechnicianEmail=technicianRepo.findByEmail(technician.getEmail());
		if(exsitingTechnicianEmail==null) {
			try {
				String generatedPassword= PasswordHelper.generateStorngPasswordHash(technician.getUserPassword());
				technician.setUserPassword(generatedPassword);
				technician.setUserRole("Technician");
				technicianRepo.save(technician);
				return true;
			} catch (NoSuchAlgorithmException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			} catch (InvalidKeySpecException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
			
		}
		return false;
	}
	
	
	@Transactional
	public boolean updateTechnician(Technician  technician) {
		Technician exsitTechnician = technicianRepo.findById(technician.getId());
		if(exsitTechnician!=null) {
			try {
				String generatedPassword = PasswordHelper.generateStorngPasswordHash(technician.getUserPassword());
				technician.setUserPassword(generatedPassword);
				technician.setId(exsitTechnician.getId());
				technicianRepo.save(technician);
				return true;
			} catch (NoSuchAlgorithmException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			} catch (InvalidKeySpecException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
			
		}
		return false;
	}


	
	public boolean deleteTechnician(int id) {
		Technician delTechnician =  technicianRepo.findById(id);
		List<RequestCustomer> req=requestCustomerRepo.findBytechnician_id(id);

		if(delTechnician!=null)
		{
			for(RequestCustomer re:req) {
				re.setTechnician(null);
				re.setAttach(false);
				re.setComplete(false);
				requestCustomerRepo.save(re);
			}
			technicianRepo.deleteById(id);
			return true;
		}
		return false;
	}
	
	public Technician findById(int id) {
		return technicianRepo.findById(id);

	}
	
	public List<Technician> getAllTechnician() {
		List<Technician> alltechncians=technicianRepo.findAll();
        Collections.reverse(alltechncians);
		return alltechncians;
	}

}
