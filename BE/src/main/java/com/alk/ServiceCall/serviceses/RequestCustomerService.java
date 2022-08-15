package com.alk.ServiceCall.serviceses;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
import javax.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.alk.ServiceCall.beans.Customer;
import com.alk.ServiceCall.beans.RequestCustomer;
import com.alk.ServiceCall.repo.CustomerRepo;
import com.alk.ServiceCall.repo.RequestCustomerRepo;

@Service
public class RequestCustomerService {

	@Autowired
	private RequestCustomerRepo requestCustomerRepo;

	@Autowired
	private CustomerRepo customerRepo;

	public boolean addRequestCustomer(RequestCustomer requestCustomer, int customerId) {
		Customer eCustomer = customerRepo.findById(customerId);
		requestCustomer.setCustomer(eCustomer);
		requestCustomerRepo.save(requestCustomer);
		return true;
	}

	@Transactional
	public boolean updateRequestCustomer(RequestCustomer requestCustomer) {
		RequestCustomer exsitRequestCustomer = requestCustomerRepo.findById(requestCustomer.getId());
		if (exsitRequestCustomer != null) {
			requestCustomer.setId(exsitRequestCustomer.getId());
			requestCustomerRepo.save(requestCustomer);
			return true;
		}
		return false;
	}

	public boolean deleteRequestCustomer(int id) {
		RequestCustomer delRequestCustomer = requestCustomerRepo.findById(id);
//		delRequestCustomer.setCustomer(null);
//		delRequestCustomer.setTechnician(null);
//		delRequestCustomer.setAttach(false);
//		delRequestCustomer.setComplete(false);
		delRequestCustomer.setDelRequest(true);
		requestCustomerRepo.save(delRequestCustomer);
		return true;

//		if (delRequestCustomer != null) {
//			requestCustomerRepo.deleteById(id);
//			return true;
//		}
//		return false;
	}

	public RequestCustomer findById(int id) {
		return requestCustomerRepo.findById(id);
	}

	public RequestCustomer findByEmail(String email) {
		if (email != null) {
			return requestCustomerRepo.findByEmail(email);
		}
		return null;
	}

	public List<RequestCustomer> getAllRequestCustomer() {
		List<RequestCustomer> allReq = requestCustomerRepo.findBydelRequest(false);
		Collections.reverse(allReq);
		return allReq;
	}

	// when the admin not attach the request
	public List<RequestCustomer> getAllRequestCustomerByAttach() {
		List<RequestCustomer> allReq = requestCustomerRepo.findByattachAndDelRequest(false, false);
		Collections.reverse(allReq);
		return allReq;
	}

	// the request is (not completed by technician)
	public List<RequestCustomer> getAllRequestCustomerByIsCompletFalse() {
		List<RequestCustomer> allReq = requestCustomerRepo.findByisCompleteAndAttachAndDelRequest(false, true, false);
		Collections.reverse(allReq);
		return allReq;
	}

	// the request is completed
	public List<RequestCustomer> getAllRequestCustomerByIsCompletTrue() {
		List<RequestCustomer> allReq = requestCustomerRepo.findByisCompleteAndDelRequest(true, false);
		Collections.reverse(allReq);
		return allReq;
	}

	public List<RequestCustomer> getAllRequestCustomerBycostomerId(int costumerId) {
		List<RequestCustomer> allReq = requestCustomerRepo.findBycustomer_idAndDelRequest(costumerId, false);
		Collections.reverse(allReq);
		return allReq;
	}

	public List<RequestCustomer> getAllRequestCustomerByTechnicianId(int TechnicianId) {
		List<RequestCustomer> allReq = requestCustomerRepo.findBytechnician_idAndDelRequest(TechnicianId, false);
		Collections.reverse(allReq);
		return allReq;
	}

	
	public List<RequestCustomer> getAllRequestCustomerNotLinked() {
		List<RequestCustomer> newlistSt = new ArrayList<RequestCustomer>();
		List<RequestCustomer> listSt1 = requestCustomerRepo.findBydelRequest(false);

		for (RequestCustomer list : listSt1) {
			if (list.isAttach() == false) {
				newlistSt.add(list);
			}
		}
		Collections.reverse(newlistSt);
		return newlistSt;
	}

	// for google chars to technician request
	public List<Integer> getAllRequestCustomerByComleted(int techId) {
		List<RequestCustomer> all = requestCustomerRepo.findBytechnician_idAndDelRequest(techId, false);
		List<Integer> newlistSt = new ArrayList<Integer>();

		int isComlete = 0;
		int isNotComlete = 0;
		for (RequestCustomer list : all) {
			if (list.isComplete() == true) {
				isComlete++;
			} else {
				isNotComlete++;
			}
		}
		newlistSt.add(isComlete);
		newlistSt.add(isNotComlete);
		return newlistSt;
	}

	// for google chars to all requests
	public List<Integer> getAllRequestCustomerByComletedOrNotOrAttach() {
		List<RequestCustomer> all = requestCustomerRepo.findBydelRequest(false);
		List<Integer> newlistSt = new ArrayList<Integer>();

		int isComlete = 0;
		int isNotComlete = 0;
		int notAttach = 0;
		for (RequestCustomer list : all) {
			if (list.isComplete() == false && list.isAttach() == true) {
				notAttach++;
			} else if (list.isComplete() == false) {
				isNotComlete++;
			} else {
				isComlete++;
			}
		}
		newlistSt.add(isComlete);
		newlistSt.add(isNotComlete);
		newlistSt.add(notAttach);
		return newlistSt;
	}

	// *************************************************************************//

	// if the admin attach request to technician home
	public List<RequestCustomer> getAllRequestCustomerNotLinkedHome() {
		List<RequestCustomer> newlistSt = new ArrayList<RequestCustomer>();
		List<RequestCustomer> listSt1 = requestCustomerRepo.findBydelRequest(false);
		for (RequestCustomer list : listSt1) {
			if (list.isAttach() == false) {
				if (list.getRepairType().equals("תיקון בבית")) {
					newlistSt.add(list);
				}
			}
		}
		Collections.reverse(newlistSt);
		return newlistSt;
	}

	// if the admin attach request to technician Work
	public List<RequestCustomer> getAllRequestCustomerNotLinkedWork() {
		List<RequestCustomer> newlistSt = new ArrayList<RequestCustomer>();
		List<RequestCustomer> listSt1 = requestCustomerRepo.findBydelRequest(false);
		for (RequestCustomer list : listSt1) {
			if (list.isAttach() == false) {
				if (list.getRepairType().equals("תיקון במעבדה")) {
					newlistSt.add(list);
				}
			}
		}
		Collections.reverse(newlistSt);
		return newlistSt;
	}

}
