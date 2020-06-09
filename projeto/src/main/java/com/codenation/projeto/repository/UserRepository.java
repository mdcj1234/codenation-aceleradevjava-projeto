package com.codenation.projeto.repository;

import com.codenation.projeto.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Long> {
}
