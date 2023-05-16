package com.soundboard3.demo.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class controller_hello {
    @GetMapping("/hello")
    public String hello() {
        return "Hello !";
    }

    @GetMapping("/")
    public String index() {
        return "" +
                "" +
                "<di>Greetings from Spring Boot!<div>" +
                "<t>test<t>" +
                "" +
                "";
    }
}
