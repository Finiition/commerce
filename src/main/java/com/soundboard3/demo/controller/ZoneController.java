package com.soundboard3.demo.controller;

import com.soundboard3.demo.entity.Zone;
import com.soundboard3.demo.services.ZoneService;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@AllArgsConstructor
@RequestMapping("api/zone")
public class ZoneController {
    private ZoneService zoneService;

    // CREATE
    @PostMapping
    public ResponseEntity<Zone> createZone(@RequestBody Zone zone){
        Zone savedZone = zoneService.createZone(zone);
        return new ResponseEntity<>(savedZone, HttpStatus.CREATED);
    }

    // READ
    @GetMapping
    @ResponseStatus(HttpStatus.CREATED)
    public List<Zone> getAllZone(){
        return zoneService.getAllZones();
    }

    // UPDATE

    // DELETE
    @DeleteMapping(value = "{id}")
    public ResponseEntity<Object> deleteZone(@PathVariable Long id){
        Optional<Zone> zoneOptional = zoneService.getZoneById(id);

        if (zoneOptional.isPresent()) {
            zoneService.deleteZone(id);
            return ResponseEntity.ok("Resource deleted successfully");
        } else {
            return ResponseEntity.notFound().build();
        }
    }
}
