package com.alk.ServiceCall.beans;

import java.time.LocalDate;
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
	@Column(name = "answer_technician_id")
	private int id;

	private int repairCode;

	@NotBlank(message = "Can't Enter Empty Coment!")
	private String repairInfo;

	private String Answerdate;

	private boolean isComplete;

	private LocalDate date;

}
