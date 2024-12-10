package com.qcby.tyleaf_test.entity;


import jakarta.validation.constraints.*;

import java.io.Serializable;


public class User implements Serializable {
    /**
     * 主键ID
     */
    private Long id;

    @NotBlank(message = "学号不能为空")
    private String stuId;

//    @NotNull(message = "年龄不能为空")
//    @Min(value = 18 ,message = "最小18岁")
//    @Max(value = 111111111,message = "最大60岁")
//    private Integer age;

/*    @NotBlank(message = "电话不可以为空")
    @Length(min = 1, max = 13, message = "电话长度需要在13个字符以内")
    private String phone;*/

    @Email(message = "请输入邮箱")
//    @NotBlank(message = "邮箱不能为空")
    private String email;

//    @NotBlank(message = "用户名不能为空")
    private String username;

    @NotNull(message = "密码不能为空")
    @Size(min = 6, message = "密码长度至少需要6个字符")
    private String password;
   /* @NotNull(message = "必须指定用户状态")
    @Min(value = 0, message = "用户状态不合法")
    @Max(value = 1, message = "用户状态不合法")
    private Integer status;*/
//    @NotNull(message = "必须指定用户权限")
    //    @Pattern(regexp = "^(管理员|普通用户)$", message = "用户权限不合法")
    private String permission;
//    @MyConstraint
//    private String answer;


    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getStuId() {
        return stuId;
    }

    public void setStuId(String name) {
        this.stuId = name;
    }

//    public Integer getAge() {
//        return age;
//    }
//
//    public void setAge(Integer age) {
//        this.age = age;
//    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

//    public String getAnswer() {
//        return answer;
//    }
//
//    public void setAnswer(String answer) {
//        this.answer = answer;
//    }

    public String getUsername() {
        return username;
    }
    //setUsername
    public void setUsername(String username) {
        this.username = username;
    }
    //getPassword
    public String getPassword() {
        return password;
    }
    //setPassword
    public void setPassword(String password) {
        this.password = password;
    }

    public String getPermission() {
        return permission;
    }
    //setPermission
    public void setPermission(String permission) {
        this.permission = permission;
    }
}

