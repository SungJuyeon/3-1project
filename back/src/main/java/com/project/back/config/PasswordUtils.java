/*
 * @Author: SungJuyeon tjdwndus1325@gmail.com
 * @Date: 2024-07-10 04:20:54
 * @LastEditors: SungJuyeon tjdwndus1325@gmail.com
 * @LastEditTime: 2024-07-10 04:21:17
 * @FilePath: \full\back\src\main\java\com\project\back\config\PasswordUtils.java
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
package com.project.back.config;

import java.util.regex.Pattern;

public class PasswordUtils {

    private static final Pattern BCRYPT_PATTERN = Pattern.compile("\\A\\$2[ayb]\\$.{56}\\z");

    public static boolean isBCryptPassword(String password) {
        return BCRYPT_PATTERN.matcher(password).matches();
    }
}