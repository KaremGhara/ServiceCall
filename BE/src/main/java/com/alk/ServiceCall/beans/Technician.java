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
import lombok.EqualsAndHashCode;

@Data
@Entity
@Table(name = "technicians")
@EqualsAndHashCode(callSuper = false)
public class Technician extends User {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name="technician_id")
	private int id; 
	
	
	@NotBlank(message = "Can't Enter Empty Job Role!")
	private String jobRole;

}
