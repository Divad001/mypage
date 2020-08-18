package com.mypage.app.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class MainController {

    @GetMapping("/")
    public String index() {
        return "index";
    }

    @GetMapping("/studies")
    public String studies() {
        return "studies";
    }

    @GetMapping("/contact")
    public String contact() {
        return "contact";
    }
}
