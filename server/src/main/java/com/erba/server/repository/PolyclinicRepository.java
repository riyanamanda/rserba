package com.erba.server.repository;

import com.erba.server.models.entity.Polyclinic;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PolyclinicRepository extends JpaRepository<Polyclinic, Integer> {
}
