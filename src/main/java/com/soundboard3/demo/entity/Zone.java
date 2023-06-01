package com.soundboard3.demo.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "zone")
public class Zone {
    @Id
    private Long id;

    @Column(nullable = false)
    private String nom;
}
