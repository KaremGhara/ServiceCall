package com.alk.ServiceCall.repo;

import java.util.List; 
import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;
import com.alk.ServiceCall.beans.User;

public interface UserRepo extends JpaRepository<User, Integer> {
	
	Optional<User> findByEmailEquals(String email);
	User findById(int id);
	User findByEmail(String email);
	List<User> findByuserRoleEquals(String role);
	Optional<User> findBySocialIdEquals(String socialId);

}
