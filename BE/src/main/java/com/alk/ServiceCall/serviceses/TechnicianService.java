package com.alk.ServiceCall.serviceses;

import java.security.NoSuchAlgorithmException;
import java.security.spec.InvalidKeySpecException;
import java.util.Collections;
import java.util.List;
import javax.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.alk.ServiceCall.Helper.PasswordHelper;
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
		Technician exsitingTechnicianEmail = technicianRepo.findByEmail(technician.getEmail());
		if (exsitingTechnicianEmail == null) {
			try {
				String generatedPassword = PasswordHelper.generateStorngPasswordHash(technician.getUserPassword());
				technician.setUserPassword(generatedPassword);
				technician.setUserRole("Technician");
				technicianRepo.save(technician);
				return true;
			} catch (NoSuchAlgorithmException e) {
				e.printStackTrace();
			} catch (InvalidKeySpecException e) {
				e.printStackTrace();
			}
		}
		return false;
	}

	@Transactional
	public boolean updateTechnician(Technician technician) {
		Technician exsitTechnician = technicianRepo.findById(technician.getId());
		if (exsitTechnician != null) {
			String generatedPassword;
			try {
				if(technician.getUserPassword().equals(exsitTechnician.getUserPassword())) {
					technician.setId(exsitTechnician.getId());
					technicianRepo.save(technician);
					return true;
				}
				else {
					 generatedPassword = PasswordHelper.generateStorngPasswordHash(technician.getUserPassword());
						technician.setUserPassword(generatedPassword);
						technician.setId(exsitTechnician.getId());
						technicianRepo.save(technician);
						return true;
				}
				
				
			} catch (NoSuchAlgorithmException e) {
				e.printStackTrace();
			} catch (InvalidKeySpecException e) {
				e.printStackTrace();
			}
			
		}
		
		return false;
	}

	public boolean deleteTechnician(int id) {
		Technician delTechnician = technicianRepo.findById(id);
		List<RequestCustomer> req = requestCustomerRepo.findBytechnician_idAndDelRequest(id, false);

		if (delTechnician != null) {
			for (RequestCustomer re : req) {
				if (re.isComplete() == false && re.isAttach() == true) {
					re.setAttach(false);
				}
//				re.setTechnician(null);
//				re.setAttach(false);
//				re.setComplete(false);
				re.setDelRequest(false);
				requestCustomerRepo.save(re);
			}
			delTechnician.setDelTechnician(true);
//			technicianRepo.deleteById(id);
			technicianRepo.save(delTechnician);
			return true;
		}
		return false;
	}

	public Technician findById(int id) {
		return technicianRepo.findById(id);

	}

	public List<Technician> getAllTechnician() {
		List<Technician> alltechncians = technicianRepo.findBydelTechnician(false);
		Collections.reverse(alltechncians);
		return alltechncians;
	}

}
