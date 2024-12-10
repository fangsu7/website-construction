package com.qcby.tyleaf_test.controller;


import com.qcby.tyleaf_test.entity.User;
import com.qcby.tyleaf_test.util.DbutilInsert;
import com.qcby.tyleaf_test.util.DbutilInsertUser;
import com.qcby.tyleaf_test.util.DbutilUpdate;
import jakarta.validation.Valid;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import java.sql.SQLException;

//设置一个全局变量，用于存储用户信息



@Controller
public class TestValidator {

    User globalUserData = new User();

    @GetMapping("/test")
    public String showForm(User user) {
//        打印一下user对象
//        System.out.println(user);
//        System.out.println("进入form");
        System.out.println(user.getStuId());
        return "form";
    }


    @GetMapping("/results")
    public String results() {

        return "results";
    }

    @PostMapping("/test")
    public String checkUser(@Valid User user, BindingResult bindingResult, RedirectAttributes attr) {
        //特别注意实体中的属性必须都验证过了，不然不会成功
        System.out.println("进入checkUser");
        System.out.println(user.getStuId());
        if (bindingResult.hasErrors()) {
            //打印一下错误信息
            System.out.println(bindingResult.getFieldError().getDefaultMessage());
            return "form";
        }
        /**
         * @Description:
         * 1.使用RedirectAttributes的addAttribute方法传递参数会跟随在URL后面 ，如上代码即为?name=long&age=45
         * 2.使用addFlashAttribute不会跟随在URL后面，会把该参数值暂时保存于session，待重定向url获取该参数后从session中移除，
         * 这里的redirect必须是方法映射路径。你会发现redirect后的值只会出现一次，刷新后不会出现了,对于重复提交可以使用此来完成。
         */
        attr.addFlashAttribute("user", user);
        System.out.println("进入checkUser");
        System.out.println(user.getStuId());
        System.out.println(user.getEmail());
        user.setPermission("user");
        DbutilInsert dbutilInsert = new DbutilInsert();
        try {
            dbutilInsert.insertStudent(user.getStuId(),user.getUsername(),user.getPassword());
        } catch (SQLException e) {
            throw new RuntimeException(e);
        }

        return "redirect:/results";

    }

    @GetMapping("/main")
    public String main() {
        return "index";
    }


//    @GetMapping("/main/activity")
//    public String showActivity() {
//        return "activity";
//    }

    @GetMapping("/main/member")
    public String showMember() {
        return "member";
    }

    @GetMapping("/main/contact")
    public String showContact() {
        return "contact";
    }

    @GetMapping("/main/activity")
    public String showActivity() {
        return "activity";
    }

    @GetMapping("/main/individual")
    public String showIndividual(Model model) {
        model.addAttribute("user", globalUserData);

        return "individual";
    }
    @PostMapping("/main/individual")
    public String saveProfile(@Valid @ModelAttribute("user") User user, BindingResult bindingResult,Model model) {
        // 保存用户信息，更新数据库或其他操作
        try {
            // 假设你有一个方法来保存用户信息
            if(bindingResult.hasErrors()) {
                System.out.println(bindingResult.getFieldError().getDefaultMessage());
                return "individual";
            }
            DbutilUpdate dbutilUpdate = new DbutilUpdate();
            try{
                dbutilUpdate.updateStudent(user.getStuId(),user.getUsername(),user.getPassword(),"user");
            } catch (SQLException e) {
                throw new RuntimeException("更新用户失败", e);
            }
            // 将更新后的用户信息重新传递给模型
            model.addAttribute("user", user);
            model.addAttribute("message", "资料已更新");

        } catch (Exception e) {
            model.addAttribute("message", "更新失败，请稍后重试");
        }
        return "individual";  // 返回相同的页面，显示更新后的信息
    }

    @GetMapping("/main/login")
    public String showLogin(Model model) {
        model.addAttribute("user", new User());
        return "login";
    }

    @PostMapping("/main/login")
    public String checkLogin(@Valid @ModelAttribute("user") User user, BindingResult bindingResult, Model model, RedirectAttributes attr) {
        System.out.println("进入checkLogin");
        System.out.println(user.getStuId());


        if(bindingResult.hasErrors()) {
            System.out.println(bindingResult.getFieldError().getDefaultMessage());
            return "login";
        }
        DbutilInsertUser dbutilInsertUser = new DbutilInsertUser();
        try {
            User user1 = dbutilInsertUser.getUserById(user.getStuId());
            if(user1 == null) {
                model.addAttribute("message", "用户不存在");
                return "login";
            }
            if (!user1.getPassword().equals(user.getPassword())) {
                model.addAttribute("message", "密码错误");
                return "login";
            }
//            if(user1.getPassword().equals(user.getPassword())) {
//                return "redirect:/main";
//            }
            globalUserData = user1;
            System.out.println(user1.getPermission());

//            session.setAttribute("user", user1);
            //设置闪存属性
            attr.addFlashAttribute("welcomeMessage", "欢迎，" + user1.getUsername() + "!");
            if("admin".equals(user1.getPermission())) {
                return "redirect:/userData";
            } else {
                return "redirect:/main";
            }
        } catch (SQLException e) {
            throw new RuntimeException("检查用户ID失败", e);
        }

    }



}
