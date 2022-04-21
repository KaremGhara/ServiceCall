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
import lombok.EqualsAndHashCode;
import net.bytebuddy.implementation.bind.annotation.Super;

@Data
@Entity
@Table(name = "customers")
@EqualsAndHashCode(callSuper=false)
public class Customer extends User {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name="customer_id")
	private int id; 
	
	private String Image;


	
//	@JsonIgnore
//    @OneToMany(cascade=CascadeType.REMOVE, mappedBy="customer")
//	private List<RequestCustomer> requestCustomer;
}
