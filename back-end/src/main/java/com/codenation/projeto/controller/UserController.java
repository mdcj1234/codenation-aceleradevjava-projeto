package com.codenation.projeto.controller;

import com.codenation.projeto.model.User;
import com.codenation.projeto.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletResponse;
import java.util.List;

@RestController
@CrossOrigin
@RequestMapping("/users")
public class UserController {

    @Autowired
    private UserService userService;

    @GetMapping
    public List<User> list() {
        return userService.list();
    }

    @PostMapping
    public ResponseEntity<User> create(@Validated @RequestBody User user, HttpServletResponse response) {
        User logSalvo = userService.save(user);
        return ResponseEntity.status(HttpStatus.CREATED).body(logSalvo);
    }
}
