package com.alk.ServiceCall;


import org.springframework.beans.factory.annotation.Autowired; 
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication; 
import org.springframework.boot.autoconfigure.SpringBootApplication;

import com.alk.ServiceCall.Helper.PasswordHelper;
import com.alk.ServiceCall.beans.Admin;
import com.alk.ServiceCall.beans.Customer;
import com.alk.ServiceCall.beans.RequestCustomer;
import com.alk.ServiceCall.beans.Technician;
import com.alk.ServiceCall.serviceses.AdminService;
import com.alk.ServiceCall.serviceses.CustomerService;
import com.alk.ServiceCall.serviceses.RequestCustomerService;
import com.alk.ServiceCall.serviceses.TechnicianService;


@SpringBootApplication
public class ServiceCallApplication implements CommandLineRunner {

	public static void main(String[] args) {
		SpringApplication.run(ServiceCallApplication.class, args);
		
		System.out.println("Server is Ready");
	}
	
	@Autowired
	private AdminService adminService;
	
	@Autowired
	private CustomerService customerService;
	
	@Autowired
	private TechnicianService technicianService;
	
	@Autowired
	private RequestCustomerService requestCustomerService;
	
	@Override
	public void run(String... args) throws Exception {
		try
		{
			
			Admin admin=new Admin();
			admin.setEmail("admin@gmail.com");
			admin.setSocialId("316185008");
			admin.setUserAddress("umm");
			admin.setUserName("mahmod");
			String pass=PasswordHelper.generateStorngPasswordHash("123456");
			admin.setUserPassword(pass);
			admin.setUserPhone("0547807860");
			admin.setUserRole("Admin");
			adminService.addAdmin(admin);
			
			Customer customer=new Customer();
			customer.setEmail("karem@gmail.com");
			customer.setSocialId("318519923");
			customer.setUserAddress("Jatt");
			customer.setUserName("Karem Ghara");
			customer.setUserPassword("123456");
			customer.setUserPhone("0542842721");
			customer.setUserRole("Customer");
			customerService.addCustomer(customer);
		
			
			
	    	Technician technician1=new Technician();
	    	technician1.setUserName("belal");
	    	technician1.setUserPhone("0526682999");
	    	technician1.setSocialId("316185111");
	    	technician1.setUserAddress("umm");	    	
	    	technician1.setEmail("belal@gmail.com");
			String custPass3=PasswordHelper.generateStorngPasswordHash("123456");
	    	technician1.setUserPassword(custPass3);
	    	technician1.setJobRole("מתקין בבית");
	    	technician1.setUserRole("Technician");
	    	technicianService.addTechnician(technician1);
			
	    	Technician technician2=new Technician();
	    	technician2.setEmail("helal@gmail.com");
	    	technician2.setUserAddress("kforkree");
	    	technician2.setSocialId("316185222");
	    	technician2.setUserName("helal");
			String custPass4=PasswordHelper.generateStorngPasswordHash("123456");
	    	technician2.setUserPassword(custPass4);
	    	technician2.setUserPhone("0526682555");
	    	technician2.setJobRole("מתקין בבית");
	    	technician2.setUserRole("Technician");
	    	technicianService.addTechnician(technician2);
	
	    	 
//	    	RequestCustomer RequestCustomer1=new RequestCustomer();
//	    	RequestCustomer1.setCustomerName("karem");
//	    	RequestCustomer1.setDate(null);
//	    	RequestCustomer1.setEmail("karem@gmail.com");
//	    	RequestCustomer1.setPhone("0526682215");
//	    	RequestCustomer1.setDeviceName("hp");
//	    	RequestCustomer1.setDeviceType("מחשב נייד");
//	    	RequestCustomer1.setProblemDescription("broke the screen");
//	    	RequestCustomer1.setRepairType("Onsite");
//	    	requestCustomerService.addRequestCustomer(RequestCustomer1, 2);
	    	
	    	
		
		}
		catch(Exception e )
		{
			
		}

	}
	


}
