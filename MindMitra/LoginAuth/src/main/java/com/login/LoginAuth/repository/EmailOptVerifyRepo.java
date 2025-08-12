package com.login.LoginAuth.repository;

import com.login.LoginAuth.entity.EmailVerification;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface EmailOptVerifyRepo extends JpaRepository<EmailVerification , Long> {
    Optional<EmailVerification> findByEmail(String email);
    Optional<EmailVerification> findByEmailAndOtp(String email, String otp);
}
