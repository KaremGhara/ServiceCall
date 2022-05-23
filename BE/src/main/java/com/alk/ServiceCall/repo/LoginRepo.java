package com.alk.ServiceCall.repo;

import java.util.Optional; 
import org.springframework.data.jpa.repository.JpaRepository;
import com.alk.ServiceCall.beans.LoginUsers;

public interface LoginRepo extends JpaRepository<LoginUsers, Integer>{
	
	Optional<LoginUsers> findByEmailEquals(String email);
	LoginUsers findById(int id);

}
