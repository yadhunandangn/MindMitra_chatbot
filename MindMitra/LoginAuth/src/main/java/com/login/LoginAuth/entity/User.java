package com.login.LoginAuth.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "tbl_users")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column(unique = true , nullable = false)
    private String userId;
    private String username;
    @Column(unique = true, nullable = false)
    private String email;
    private String password;
    @PrePersist
    public void generateCustomUserId() {
        if (this.userId == null && this.username != null) {
            this.userId = "USR" + String.format("%03d", this.id == null ? 0 : this.id) + "_" + this.username;
        }
    }
}
