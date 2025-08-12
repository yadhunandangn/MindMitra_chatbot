package com.login.LoginAuth.Controller;

import com.login.LoginAuth.DTO_dataTransferObject.AuthResponse;
import com.login.LoginAuth.DTO_dataTransferObject.LoginRequest;
import com.login.LoginAuth.DTO_dataTransferObject.RegisterRequest;
import com.login.LoginAuth.Service.AuthService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@CrossOrigin(origins = "http://localhost:5173")
@RequestMapping("/auth")
@RequiredArgsConstructor
public class AuthController {
    private final AuthService authService;

    @PostMapping("/send-otp")
    public String sendOtp(@RequestBody Map<String, String> request) {
        String email = request.get("email");
        return authService.sendOtp(email);
    }



    @PostMapping("/register")
    public String register(@RequestBody RegisterRequest request, @RequestParam String otp) {
        return authService.registerAfterVerification(request, otp);
    }

    @PostMapping("/login")
    public AuthResponse login(@RequestBody LoginRequest request) {
        return authService.login(request);
    }
}
