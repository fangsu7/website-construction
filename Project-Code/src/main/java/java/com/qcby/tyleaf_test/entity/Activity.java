package com.qcby.tyleaf_test.entity;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import org.springframework.format.annotation.DateTimeFormat;

import java.io.Serializable;
import java.time.LocalDateTime;

public class Activity implements Serializable {
    private long id;

    @NotBlank(message = "活动编号不能为空")
    private String activityId;

    @NotBlank(message = "活动名称不能为空")
    private String activityName;

    @NotBlank(message = "活动地点不能为空")
    private String activityLocation;

    @NotNull(message = "活动时间不能为空")
    @DateTimeFormat(pattern = "yyyy-MM-dd HH:mm:ss")
    private LocalDateTime activityTime;

    private String activityDescription;

    //为以上创建相应的getter和setter方法
    public long getId() {
        return id;
    }
    public void setId(long id) {
        this.id = id;
    }

    public String getActivityId() {
        return activityId;
    }
    public void setActivityId(String activityId) {
        this.activityId = activityId;
    }

    public String getActivityName() {
        return activityName;
    }
    public void setActivityName(String activityName) {
        this.activityName = activityName;
    }

    public String getActivityLocation() {
        return activityLocation;
    }
    public void setActivityLocation(String activityLocation) {
        this.activityLocation = activityLocation;
    }

    public LocalDateTime getActivityTime() {
        return activityTime;
    }
    public void setActivityTime(LocalDateTime activityTime) {
        this.activityTime = activityTime;
    }

    public String getActivityDescription() {
        return activityDescription;
    }
    public void setActivityDescription(String activityDescription) {
        this.activityDescription = activityDescription;
    }
}
