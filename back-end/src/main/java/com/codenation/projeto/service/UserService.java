package com.codenation.projeto.service;

import com.codenation.projeto.model.User;
import com.codenation.projeto.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    public List<User> list() {
        return userRepository.findAll();
    }

    public User save(User user) {
        String pwd = user.getPassword();
        user.setPassword(new BCryptPasswordEncoder().encode(pwd));
        return userRepository.save(user);
    }
}
