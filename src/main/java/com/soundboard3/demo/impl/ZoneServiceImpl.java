package com.soundboard3.demo.impl;

import com.soundboard3.demo.entity.Zone;
import com.soundboard3.demo.repository.ZoneRepository;
import com.soundboard3.demo.services.ZoneService;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@AllArgsConstructor
public class ZoneServiceImpl implements ZoneService {
    private ZoneRepository zoneRepository;


    @Override
    public Zone createZone(Zone zone) {
        return zoneRepository.save(zone);
    }

    @Override
    public Optional<Zone> getZoneById(Long id) {
        return zoneRepository.findById(id);
    }

    @Override
    public List<Zone> getAllZones() {
        return zoneRepository.findAll();
    }

    @Override
    public Zone updateZone(Zone zone) {
        Zone existingZone = zoneRepository.findById(zone.getId()).get();
        existingZone.setNom(zone.getNom());
        return zoneRepository.save(existingZone);
    }

    @Override
    public void deleteZone(Long id) {
        zoneRepository.deleteById(id);
    }
}
