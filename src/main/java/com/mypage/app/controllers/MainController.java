package com.mypage.app.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;

@Controller
public class MainController {

    @GetMapping("/")
    public String index(@RequestParam(required = false) String lang) {
        if (lang != null && lang.equals("EN")) {
            return "indexEN";
        }
        return "index";
    }
}
