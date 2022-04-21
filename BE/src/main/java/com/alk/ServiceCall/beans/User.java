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
@Table(name = "users")
public abstract class User {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name="user_id")
	private int id; 
	
	@Column(name="name")
	@NotBlank(message = "Can't Enter Empty Name!")
	private String userName;
	
	@Column(name="password")
	@NotBlank (message = "password Can't be empty")
	@Size(min=6,max=6)
	private String userPassword;
	
	@Size(min = 9, max = 9)
	@NotBlank(message = "Can't Enter Empty Social ID Number!")
	private String socialId;
	
	@Column(name="phone")
	@Size(min = 10, max = 10, message = "Invalid Phone Number!")
	@Digits(integer = 10, fraction = 0)
	private String userPhone;
	
	@Column(name="address")
	@NotBlank (message = "Address Can't be empty")
	private String userAddress;
	
	@NotBlank (message = "role Can't be empty")
	private String userRole;
	
	
	@Email(message = "Invalid Email!")
	@NotBlank(message = "Can't Enter Empty Email!")
	private String email;
	
	
	

}
