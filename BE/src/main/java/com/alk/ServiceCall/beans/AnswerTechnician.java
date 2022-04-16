package com.alk.ServiceCall.beans;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.validation.constraints.NotBlank;

import lombok.Data;

@Data
@Entity
@Table(name = "answerTechnician")
public class AnswerTechnician {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name="answer_technician_id")
	private int id;
	
	private String employeeId;
	
	private String code;
	
	@NotBlank(message = "Can't Enter Empty Coment!")
	private String coment;
	
	private String date;

}
