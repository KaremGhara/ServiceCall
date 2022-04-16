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
import javax.validation.constraints.Digits;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;

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
	
	@NotBlank(message = "Can't Enter Empty Name!")
	private String name;
	
	@Size(min = 10, max = 10, message = "Invalid Phone Number!")
	@Digits(integer = 10, fraction = 0)
	private String phone;
	
	@Email(message = "Invalid Email!")
	@NotBlank(message = "Can't Enter Empty Email!")
	private String email;
	
//	@NotBlank(message = "Can't Enter Empty Phone Description!")
	private String phoneDescription;
	
//	@NotBlank(message = "Can't Enter Empty Phone Type!")
	private String phoneType;
	
//	@NotBlank(message = "Can't Enter Empty Description!")
	private String description;
	
	private LocalDate date;
	
	private boolean isComplete=false;
	
//	@NotBlank(message = "Can't Enter Empty Phone Repier!")
	private String repier;
	

	@ManyToOne(fetch = FetchType.LAZY,cascade = {CascadeType.ALL})
	@JoinColumn(name = "customer_id", referencedColumnName = "customer_id")
	@JsonIgnoreProperties(value = {"requestCustomer", "hibernateLazyInitializer"})
	private Customer customer;

}
