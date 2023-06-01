package com.soundboard3.demo.repository;

import com.soundboard3.demo.entity.Zone;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ZoneRepository extends JpaRepository<Zone, Long> {
}
