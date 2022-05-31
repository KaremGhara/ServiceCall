package com.alk.ServiceCall.beans;

import java.time.LocalDate;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.Data;

@Data
@Entity
@Table(name = "requestCustomer")
public class RequestCustomer {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name="request_customer_id")
	private int id;
	
	@Column(name="cust_name")
	private String CustomerName;
	
	private String phone;

	private String email;
	
	private String problemDescription;
	
	private String deviceType;
	
	private String deviceName;
	
	private LocalDate date;
	
	private boolean isComplete;
	
	private String repairType;
	
	private boolean attach = false;
	
	private String Answerdate;
	
	private String messageTech;
	
	private LocalDate closedate;
	

	@ManyToOne(fetch = FetchType.LAZY,cascade = {CascadeType.ALL})
	@JoinColumn(name = "customer_id", referencedColumnName = "user_id")
	@JsonIgnoreProperties(value = {"requestCustomer", "hibernateLazyInitializer"})
	private Customer customer;
	
	@ManyToOne(fetch = FetchType.LAZY,cascade = {CascadeType.ALL})
	@JoinColumn(name = "technician_id", referencedColumnName = "user_id")
	@JsonIgnoreProperties(value = {"requestsCustomerToTechnician", "hibernateLazyInitializer"})
	private Technician technician;

}
