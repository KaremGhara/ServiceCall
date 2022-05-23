package com.alk.ServiceCall.serviceses;

import java.security.NoSuchAlgorithmException; 
import java.security.spec.InvalidKeySpecException;
import java.util.List;
import java.util.Optional;
import com.alk.ServiceCall.Helper.PasswordHelper;
import javax.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestBody;
import com.alk.ServiceCall.beans.User;
import com.alk.ServiceCall.repo.UserRepo;

@Service
public class UserService {

	
	@Autowired
	private UserRepo userRepo;
	
	
	
	public boolean createSystemUser(User user) {
		Optional<User> existUser = userRepo.findByEmailEquals(user.getEmail());
		if (existUser.isPresent())
		{
			throw new IllegalStateException("User #" + existUser.get().getId() + "-" +
					existUser.get().getUserName() +" Already Exists!");
		}
		else {
			try {
				String generatedPassword=PasswordHelper.generateStorngPasswordHash(user.getUserPassword());
				user.setUserPassword(generatedPassword);
				userRepo.save(user);
				return true;
			} catch (NoSuchAlgorithmException e) {
				e.printStackTrace();
			} catch (InvalidKeySpecException e) {
				e.printStackTrace();
			}
			
		}
		return false;
	}
	
	@Transactional
	public boolean editUser(@RequestBody  User user) {
		User userToUpdate = userRepo.findById(user.getId());
			user.setId(userToUpdate.getId());
			userRepo.save(user);
			return true;
	}
	
	
	public boolean deleteUser(int id) {
		User user = userRepo.findById(id);

		if (user != null) {
			userRepo.deleteById(user.getId());
			return true;
		}
		return false;

	}
	
	public User getUserBySocialId(String socialId) {
		Optional<User> user = userRepo.findBySocialIdEquals(socialId);
		if (user.isEmpty())
			throw new IllegalStateException("User with ID: " + socialId + " Doesn't Exist!");
		else
			return user.get();
	}
	
	public User getUserById(int id) {
		return userRepo.findById(id);
	}
	
	public List<User> getUserByRole(String role) {
		return userRepo.findByuserRoleEquals(role);
	}
	
	public List<User> getAllUsers() {
		return userRepo.findAll();
	}

}
