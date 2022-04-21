package com.alk.ServiceCall.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.alk.ServiceCall.beans.User;
import com.alk.ServiceCall.serviceses.UserService;

@CrossOrigin
@RestController
@RequestMapping("api/users")
public class UserController {
	@Autowired
    UserService userService;
	
	
	@GetMapping("get-all-users")
    public List<User> getAllUsers() {
        return userService.getAllUsers();
    }
	@PostMapping("create-user")
    public HttpStatus createNewSystemUser(@RequestBody User user) {
        if (this.userService.createSystemUser(user) == true) {
            return HttpStatus.CREATED;
        } else {
            return HttpStatus.NOT_ACCEPTABLE;
        }

    }
	
	@DeleteMapping("delete-user")
    public HttpStatus deleteUser(int id) {
        if (userService.deleteUser(id))
            return HttpStatus.ACCEPTED;
        else {
            return HttpStatus.BAD_REQUEST;
        }
    }
	
	@PutMapping("edit-user")
    public HttpStatus editUser(@RequestBody User user) {
        if (userService.editUser(user) == true) {
            return HttpStatus.ACCEPTED;
        } else {
            return HttpStatus.BAD_REQUEST;
        }
    }
//	@GetMapping("get-user-by-socialId")
//    public User getUserBySocialId(String socialId) {
//        return userService.getUserBySocialId(socialId);
//    }
	@GetMapping("get-user-by-id")
    public User getUserById(int id) {
        return userService.getUserById(id);
    }
	@GetMapping("get-user-by-role")
    public List<User> getUserByRole(String role) {
        return userService.getUserByRole(role);
    }


	
}
