package com.soundboard3.demo.services;

import com.soundboard3.demo.entity.Zone;

import java.util.List;

public interface ZoneService {
    Zone createZone(Zone zone);
    Zone getZoneById(Long id);

    List<Zone> getAllZones();

    Zone updateZone(Zone zone);

    void deleteZone(Long id);
}
