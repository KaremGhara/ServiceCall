package com.alk.ServiceCall.repo;

import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import com.alk.ServiceCall.beans.RequestCustomer;

public interface RequestCustomerRepo extends JpaRepository<RequestCustomer, Integer> {

	public RequestCustomer findById(int Id);

	public RequestCustomer findByEmail(String email);

	public List<RequestCustomer> findByemail(String costumerEmail);

	public List<RequestCustomer> findBytechnician_idAndDelRequest(int technicianId,boolean delRequest);

	public List<RequestCustomer> findBycustomer_idAndDelRequest(int customerId,boolean delRequest);

	public List<RequestCustomer> findByattachAndDelRequest(boolean attach,boolean delRequest);

	public List<RequestCustomer> findByisCompleteAndDelRequest(boolean isComplete,boolean delRequest);

	public List<RequestCustomer> findByisCompleteAndAttachAndDelRequest(boolean isComplete, boolean attach,boolean delRequest);
	
	public List<RequestCustomer> findBydelRequest(boolean delRequest);
}
