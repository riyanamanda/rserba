package com.erba.server.entities;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;
import lombok.experimental.SuperBuilder;

@EqualsAndHashCode(callSuper = true)
@Data
@AllArgsConstructor
@NoArgsConstructor
@SuperBuilder
@Entity
@Table(name = "doctors")
public class Doctor extends BaseEntity {

    @Column(nullable = false)
    private String name;

    @Column(name = "image_url")
    private String imageUrl = null;

    @Column(name = "is_active", nullable = false)
    private Boolean isActive = true;

}
