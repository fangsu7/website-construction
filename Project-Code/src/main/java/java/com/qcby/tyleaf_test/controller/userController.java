package com.qcby.tyleaf_test.controller;

import com.qcby.tyleaf_test.entity.User;
import com.qcby.tyleaf_test.util.DbutilInsertUser;
import com.qcby.tyleaf_test.util.GetUserList;
import jakarta.validation.Valid;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;
import com.qcby.tyleaf_test.util.DbutilUpdate;

import java.sql.SQLException;
import java.util.List;
@Controller
public class userController {
    @GetMapping("/userData")
    public String showForm(User user,Model model) {
//        System.out.println(user);
        GetUserList getUser = new GetUserList();
        List<User> users = null;
        try {
            users = getUser.getUserList();
        } catch (SQLException e) {
            throw new RuntimeException(e);
        }

        System.out.println("进入showForm");
//        System.out.println(user.getStuId());
        // 将获取的用户数据传递到前端页面
        model.addAttribute("users", users); // 将 users 数据传递给前端
        return "user_manager";
    }
    @PostMapping("/userData")
    public String checkUser(@Valid @ModelAttribute("user") User user, BindingResult bindingResult, Model model, RedirectAttributes attr) {
        System.out.println("进入checkUser");
        DbutilInsertUser dbutilInsertUser = new DbutilInsertUser();
        GetUserList getUser = new GetUserList();
        if (bindingResult.hasErrors()) {
            System.out.println(bindingResult.getFieldError().getDefaultMessage());
            try {
                List<User> users = getUser.getUserList();
                model.addAttribute("users", users);
            } catch (SQLException e) {
                throw new RuntimeException("获取用户列表失败", e);
            }
            return "user_manager";
        }

        // 检查stuId是否已存在
        try {
            User existingUser = dbutilInsertUser.getUserById(user.getStuId());
            if (existingUser != null) {
                bindingResult.rejectValue("stuId", "error.user", "用户ID已存在");
                List<User> users = getUser.getUserList();
                model.addAttribute("users", users);
                return "user_manager";
            }
        } catch (SQLException e) {
            throw new RuntimeException("检查用户ID失败", e);
        }

        // 插入新用户
        try {
            dbutilInsertUser.insertStudent(user.getStuId(), user.getUsername(), user.getPassword(), user.getPermission());
        } catch (SQLException e) {
            throw new RuntimeException("插入用户失败", e);
        }

        return "redirect:/userData";
    }

//    public String checkUser(@Valid User user, BindingResult bindingResult, RedirectAttributes attr) {
//        System.out.println("进入checkUser");
//        DbutilInsertUser dbutilInsertUser = new DbutilInsertUser();
//        if (bindingResult.hasErrors()) {
//            System.out.println(bindingResult.getFieldError().getDefaultMessage());
//            return "user_manager";
//        }
//        attr.addFlashAttribute("user", user);
//
//
//        try {
//            dbutilInsertUser.insertStudent(user.getStuId(),user.getUsername(),user.getPassword(),user.getPermission());
//        } catch (Exception e) {
//            throw new RuntimeException(e);
//        }
//
//        System.out.println(user.getStuId());
//        return "redirect:/userData";
//    }


//    @GetMapping("/userData/update")
//    public String updateForm(User user,Model model) {
//        System.out.println("进入updateForm");
//        System.out.println(user.getStuId());
//        GetUserList getUser = new GetUserList();
//        return "user_manager";
//    }
    @GetMapping("/userData/update")
    public String updateForm(User user,Model model) {
        System.out.println("进入updateForm");
//        System.out.println(user.getStuId());
        GetUserList getUser = new GetUserList();
        List<User> users = null;
        try {
            users = getUser.getUserList();
        } catch (SQLException e) {
            throw new RuntimeException(e);
        }
        model.addAttribute("users", users);
        return "user_manager";
    }
    @PostMapping("/userData/update")
    public String updateUser(@Valid @ModelAttribute("user") User user, BindingResult bindingResult, Model model, RedirectAttributes attr) {
            DbutilUpdate dbutilUpdate = new DbutilUpdate();
            System.out.println("进入updateUser");
            System.out.println(user.getStuId());
            GetUserList getUser = new GetUserList();
        if (bindingResult.hasErrors()) {
            System.out.println(bindingResult.getFieldError().getDefaultMessage());
            return "user_manager";
        }
        try {
            dbutilUpdate.updateStudent(user.getStuId(), user.getUsername(), user.getPassword(), user.getPermission());
        } catch (SQLException e) {
            throw new RuntimeException("更新用户失败", e);
        }
        return "redirect:/userData";
    }



    @PostMapping("/userData/delete/{id}")
    public String deleteUser(@PathVariable("id") String stuId, @Valid @ModelAttribute("user") User user, BindingResult bindingResult, Model model, RedirectAttributes attr) {
        DbutilUpdate dbutilUpdate = new DbutilUpdate();
        System.out.println("进入deleteUser");
        System.out.println(stuId);
        GetUserList getUser = new GetUserList();
        try {
            dbutilUpdate.deleteStudent(stuId);
            attr.addAttribute("message", "删除成功");
        } catch (SQLException e) {
            throw new RuntimeException("删除用户失败", e);
        }
        return "redirect:/userData";
    }


}

