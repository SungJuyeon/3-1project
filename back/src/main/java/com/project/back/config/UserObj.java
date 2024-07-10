/*
 * @Author: SungJuyeon tjdwndus1325@gmail.com
 * @Date: 2024-07-07 15:49:46
 * @LastEditors: SungJuyeon tjdwndus1325@gmail.com
 * @LastEditTime: 2024-07-08 00:29:55
 * @FilePath: \full\back\src\main\java\com\project\back\config\UserObj.java
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
package com.project.back.config;

import java.util.Optional;

import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import com.project.back.entity.MemberEntity;
import com.project.back.repository.MemberRepository;

@Service
public class UserObj implements UserDetailsService{
    private final MemberRepository memberRepository;

    public UserObj(MemberRepository memberRepository) {
        this.memberRepository = memberRepository;
    }

    @Override
    public UserDetails loadUserByUsername(String loginId) throws UsernameNotFoundException {
        System.out.println("전달된 아이디: " + loginId);
        if (loginId == null || loginId.trim().isEmpty()) {
            System.out.println("아이디 null이거나 빈 문자열입니다.");
            throw new UsernameNotFoundException("아이디 null이거나 빈 문자열입니다.");
        }
    
        Optional<MemberEntity> user = memberRepository.findByEmail(loginId);
        if (user == null) {
            System.out.println("아이디로 사용자를 찾을 수 없습니다: " + loginId);
            throw new UsernameNotFoundException(loginId);
        }
        return null;
    
        // return new org.springframework.security.core.userdetails.User(
        //     user.getEmail(),
        //     user.getPw(),
        //     null
        // );
    }
    
}
