package com.mypage.app.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;

@Controller
public class MainController {

    @GetMapping("/")
    public String index(@RequestParam(required = false) String lang) {
        if (lang != null && lang.equals("EN")) {
            return "EN/indexEN";
        }
        return "HU/index";
    }

    @GetMapping("/studies")
    public String studies(@RequestParam(required = false) String lang) {
        if (lang != null && lang.equals("EN")) {
            return "EN/studiesEN";
        }
        return "HU/studies";
    }

    @GetMapping("/contact")
    public String contact(@RequestParam(required = false) String lang) {
        if (lang != null && lang.equals("EN")) {
            return "EN/contactEN";
        }
        return "HU/contact";
    }
}
