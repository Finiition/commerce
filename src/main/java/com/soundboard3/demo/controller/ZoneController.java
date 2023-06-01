package com.soundboard3.demo.controller;

import com.soundboard3.demo.entity.Zone;
import com.soundboard3.demo.services.ZoneService;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@AllArgsConstructor
@RequestMapping("api/zone")
public class ZoneController {
    private ZoneService zoneService;

    @GetMapping("test")
    @ResponseStatus(HttpStatus.CREATED)
    public List<Zone> getAllZone(){
        return zoneService.getAllZones();
    }

    // build create User REST API
    @PostMapping
    public ResponseEntity<Zone> createZone(@RequestBody Zone zone){
        Zone savedZone = zoneService.createZone(zone);
        return new ResponseEntity<>(savedZone, HttpStatus.CREATED);
    }
}
