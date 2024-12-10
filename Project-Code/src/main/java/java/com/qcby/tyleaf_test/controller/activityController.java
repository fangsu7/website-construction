package com.qcby.tyleaf_test.controller;

import com.qcby.tyleaf_test.entity.Activity;
import com.qcby.tyleaf_test.util.DbutilActivityInsert;
import com.qcby.tyleaf_test.util.DbutilUpdate;
import jakarta.validation.Valid;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import java.sql.SQLException;
import java.util.List;
@Controller
public class activityController {

    @GetMapping("/activityData")
    public String activityGet(Activity activity,Model model) {
        System.out.println("进入activity");
        DbutilActivityInsert dbutilActivityInsert = new DbutilActivityInsert();
        List<Activity>activities = null;
        try {
            activities = dbutilActivityInsert.getActivityList();
        } catch (Exception e) {
            throw new RuntimeException(e);
        }
        model.addAttribute("activities", activities);
        return "activity_manager";
    }

    @PostMapping("/activityData")
    public static String activityPost(@Valid @ModelAttribute("activity") Activity activity, BindingResult bindingResult, Model model, RedirectAttributes attr) {
        System.out.println("进入activityPost");
        DbutilActivityInsert dbutilActivityInsert = new DbutilActivityInsert();
        if (bindingResult.hasErrors()) {
            System.out.println(bindingResult.getFieldError().getDefaultMessage());
            try {
                List<Activity> activities = dbutilActivityInsert.getActivityList();
                model.addAttribute("activities", activities);
            } catch (Exception e) {
                throw new RuntimeException("获取活动列表失败", e);
            }
            return "activity_manager";
        }
        // 检查activityId是否已存在
        try{
            Activity existingActivity = dbutilActivityInsert.getActivityById(activity.getActivityId());
            if (existingActivity != null) {
                bindingResult.rejectValue("activityId", "error.activity", "活动ID已存在");
                List<Activity> activities = dbutilActivityInsert.getActivityList();
                model.addAttribute("activities", activities);
                return "activity_manager";
            }
        } catch (Exception e) {
            throw new RuntimeException("获取活动列表失败", e);
        }
        // 插入活动信息
        try {
                int rowsAffected = dbutilActivityInsert.insertActivity(activity.getActivityId(), activity.getActivityName(), activity.getActivityLocation(), activity.getActivityTime(), activity.getActivityDescription());
            System.out.println("插入的行数：" + rowsAffected);
        } catch (Exception e) {
            throw new RuntimeException("插入活动信息失败", e);
        }


        return "redirect:/activityData";
    }
    @GetMapping("/activityData/update")
    public String updateForm(Activity activity, Model model) {
        System.out.println("进入ActivityUpdateForm");
//        System.out.println(user.getStuId());
        DbutilActivityInsert dbutilActivityInsert = new DbutilActivityInsert();
        List<Activity> activities = null;
        try {
            activities = dbutilActivityInsert.getActivityList();
        } catch (SQLException e) {
            throw new RuntimeException(e);
        }
        model.addAttribute("activities", activities);
        return "activity_manager";
    }
    @PostMapping("/activityData/update")
    public String updateUser(@Valid @ModelAttribute("activity") Activity activity, BindingResult bindingResult, Model model, RedirectAttributes attr) {
        DbutilUpdate dbutilUpdate = new DbutilUpdate();
        System.out.println("进入updateActivity");
        System.out.println(activity.getActivityId());
        if (bindingResult.hasErrors()) {
            System.out.println(bindingResult.getFieldError().getDefaultMessage());
            return "activity_manager";
        }
        try {
            dbutilUpdate.updateActivity(activity.getActivityId(), activity.getActivityName(), activity.getActivityLocation(), activity.getActivityTime(), activity.getActivityDescription());
        } catch (SQLException e) {
            throw new RuntimeException("更新用户失败", e);
        }
        return "redirect:/activityData";
    }

    @PostMapping("/activityData/delete/{activityId}")
    public String deleteActivity(@PathVariable("activityId") String activityId, @Valid @ModelAttribute("activity") Activity activity, BindingResult bindingResult, Model model, RedirectAttributes attr) {
        DbutilUpdate dbutilUpdate = new DbutilUpdate();
        System.out.println("进入deleteActivity");
        System.out.println(activityId);
        try {
            dbutilUpdate.deleteActivity(activityId);
            attr.addAttribute("message", "删除成功");
        } catch (SQLException e) {
            throw new RuntimeException("删除活动失败", e);
        }
        return "redirect:/activityData";
    }
}
