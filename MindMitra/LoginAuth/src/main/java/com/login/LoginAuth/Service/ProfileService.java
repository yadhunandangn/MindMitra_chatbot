package com.login.LoginAuth.Service;

import com.login.LoginAuth.entity.User;
import com.login.LoginAuth.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
@RequiredArgsConstructor
public class ProfileService {

    private final UserRepository userRepository;
    private final MailService mailService;

    /**
     * Fetch user profile details by email
     */
    public User getUserProfile(String email) {
        return userRepository.findByEmail(email)
                .orElseThrow(() -> new RuntimeException("User not found for email: " + email));
    }

    /**
     * Update user profile details
     */
    public User updateUserProfile(String email, User updatedUser) {
        User existingUser = userRepository.findByEmail(email)
                .orElseThrow(() -> new RuntimeException("User not found for email: " + email));

        existingUser.setUsername(updatedUser.getUsername());
        existingUser.setPassword(updatedUser.getPassword()); // Already encoded in AuthService
        return userRepository.save(existingUser);
    }

    /**
     * Send an email (can be used for notifications or confirmation)
     */
    public String sendProfileUpdateNotification(String email) {
        String subject = "Profile Updated Successfully";
        String message = "Hello,\n\nYour profile details were successfully updated.\n\nThanks,\nTeam";
        mailService.sendMail(email, subject, message);
        return "Profile update notification sent to: " + email;
    }

    /**
     * Delete user account
     */
    public String deleteUserProfile(String email) {
        Optional<User> userOpt = userRepository.findByEmail(email);
        if (userOpt.isPresent()) {
            userRepository.delete(userOpt.get());
            return "User with email " + email + " deleted successfully.";
        }
        throw new RuntimeException("User not found for email: " + email);
    }
}
