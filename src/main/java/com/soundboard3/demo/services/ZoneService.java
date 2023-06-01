package com.soundboard3.demo.services;

import com.soundboard3.demo.entity.Zone;

import java.util.List;
import java.util.Optional;

public interface ZoneService {
    Zone createZone(Zone zone);
    Optional<Zone> getZoneById(Long id);

    List<Zone> getAllZones();

    Zone updateZone(Zone zone);

    void deleteZone(Long id);
}
