/*
 * @Author: SungJuyeon tjdwndus1325@gmail.com
 * @Date: 2024-07-10 04:37:01
 * @LastEditors: SungJuyeon tjdwndus1325@gmail.com
 * @LastEditTime: 2024-07-10 04:37:15
 * @FilePath: \full\back\src\main\java\com\project\back\config\PasswordEncoderInitializer.java
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
package com.project.back.config;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.project.back.service.PasswordEncoderService;

import jakarta.annotation.PostConstruct;

@Component
public class PasswordEncoderInitializer {

    @Autowired
    private PasswordEncoderService passwordEncoderService;

    @PostConstruct
    public void init() {
        passwordEncoderService.encodePasswords();
        System.out.println("All passwords have been encoded using BCrypt.");
    }
}
