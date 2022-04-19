package com.alk.ServiceCall.beans;



import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import javax.validation.constraints.Digits;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;

import com.fasterxml.jackson.annotation.JsonIgnore;

import lombok.Data;

@Data
@Entity
@Table(name = "customers")
public class Customer {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name="customer_id")
	private int id; 
	
	
	@NotBlank(message = "Can't Enter Empty Name!")
	private String name;
	
	@Size(min = 10, max = 10, message = "Invalid Phone Number!")
	@Digits(integer = 10, fraction = 0)
	private String phone;
	
	@NotBlank (message = "Address Can't be empty")
	private String address;
	
	@Email(message = "Invalid Email!")
	@NotBlank(message = "Can't Enter Empty Email!")
	private String email;
	
	@NotBlank(message = "Can't Enter Empty Password!")
	@Size(min = 6, max = 10, message = "Invalid Password!")
	private String password;
	
	private String Image;
	
	@JsonIgnore
    @OneToMany(cascade=CascadeType.REMOVE, mappedBy="customer")
	private List<RequestCustomer> requestCustomer;
}
