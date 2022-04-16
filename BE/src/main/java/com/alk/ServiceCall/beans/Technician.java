package com.alk.ServiceCall.beans;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.validation.constraints.Digits;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;

import lombok.Data;

@Data
@Entity
@Table(name = "technicians")
public class Technician {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name="technician_id")
	private int id; 
	
	@NotBlank(message = "Can't Enter Empty Name!")
	private String name;
	
	@Size(min = 9, max = 9)
	@NotBlank(message = "Can't Enter Empty Social ID Number!")
	private String socialId;
	
	@Size(min = 10, max = 10, message = "Invalid Phone Number!")
	@Digits(integer = 10, fraction = 0)
	private String phone;
	
	@NotBlank (message = "Address Can't be empty")
	private String address;
	
	
	@Email(message = "Invalid Email!")
	@NotBlank(message = "Can't Enter Empty Email!")
	private String email;
	
	@NotBlank(message = "Can't Enter Empty Worker Type!")
	private String workerType;
	
	@NotBlank(message = "Can't Enter Empty Job Role!")
	private String jobRole;

}
