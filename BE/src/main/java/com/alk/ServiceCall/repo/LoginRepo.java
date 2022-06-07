package com.alk.ServiceCall.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import com.alk.ServiceCall.beans.LoginUsers;

public interface LoginRepo extends JpaRepository<LoginUsers, Integer> {

	LoginUsers findById(int id);

}
