package com.project.back.dto;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class MemberResponseDto {
    private String sessionId;
    private String message;
    private User user;

    @Getter
    @Setter
    public static class User{
        private String loginId;
        private String name;
        //private MemberType memberType;

        public String getLoginId() {
            return loginId;
        }
        public String getName() {
            return name;
        }
        //public MemberType getMemberType() {
        //    return memberType;
        //}
        public void setLoginId(String loginId) {
            this.loginId = loginId;
        }
        public void setName(String name) {
            this.name = name;
        }
        //public void setMemberType(MemberType memberType) {
        //    this.memberType = memberType;
        //}
        
    }
}
