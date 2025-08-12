package com.login.LoginAuth.Service;

import com.login.LoginAuth.DTO_dataTransferObject.*;
import com.login.LoginAuth.config.jwtUtil;
import com.login.LoginAuth.entity.*;
import com.login.LoginAuth.repository.*;
import lombok.RequiredArgsConstructor;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import java.time.LocalDateTime;

@Service
@RequiredArgsConstructor
public class AuthService {

    private final UserRepository userRepository;
    private final EmailOptVerifyRepo verificationRepository;
    private final PasswordEncoder passwordEncoder;
    private final MailService mailService;
    private final jwtUtil jwtUtil;
    private final AuthenticationManager authenticationManager;


    public String sendOtp(String email) {
        if (userRepository.existsByEmail(email)) {
            throw new RuntimeException("Email already registered!");
        }
        String otp = String.valueOf((int) (Math.random() * 900000) + 100000); // Generate 6-digit OTP
        EmailVerification verification = new EmailVerification(null, email, otp, LocalDateTime.now().plusMinutes(5));
        verificationRepository.save(verification);


        String subject = "Email Verification OTP";
        String message = "Your OTP for registration is: " + otp + "\nThis OTP is valid for 5 minutes.";
        mailService.sendMail(email, subject, message);

        return "OTP sent to " + email;
    }

    public String registerAfterVerification(RegisterRequest request, String otp) {
        EmailVerification verification = verificationRepository.findByEmailAndOtp(request.getEmail(), otp)
                .orElseThrow(() -> new RuntimeException("Invalid OTP or Email"));

        if (verification.getExpiryTime().isBefore(LocalDateTime.now())) {
            throw new RuntimeException("OTP expired");
        }

        User user = new User();
        user.setUsername(request.getUsername());
        user.setEmail(request.getEmail());
        user.setPassword(passwordEncoder.encode(request.getPassword()));

        User savedUser = userRepository.save(user);
        savedUser.setUserId("USR" + String.format("%03d", savedUser.getId()) + "_" + savedUser.getUsername());
        userRepository.save(savedUser);

        verificationRepository.delete(verification);
        return "Email verified and user registered successfully with ID: " + savedUser.getUserId();
    }

    public AuthResponse login(LoginRequest request) {
        authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(request.getEmail(), request.getPassword())
        );
        String token = jwtUtil.GenerateToken(request.getEmail());
        User user = userRepository.findByEmail(request.getEmail())
                .orElseThrow(() -> new RuntimeException("User not found!"));
        return new AuthResponse(token, user.getUserId() , user.getUsername());
    }
}
