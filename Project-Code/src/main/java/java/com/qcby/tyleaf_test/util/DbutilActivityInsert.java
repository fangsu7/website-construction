package com.qcby.tyleaf_test.util;

import com.qcby.tyleaf_test.entity.Activity;
import org.apache.commons.dbutils.QueryRunner;
import org.apache.commons.dbutils.handlers.ArrayListHandler;
import org.apache.commons.dbutils.handlers.BeanHandler;

import java.sql.Connection;
import java.sql.SQLException;
import java.sql.Timestamp;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

public class DbutilActivityInsert {
    public static int insertActivity(String activityId, String activityName, String activityLocation, LocalDateTime activityTime, String activityDescription) throws SQLException {
        // 创建dbUtils里面的QueryRunner对象
        QueryRunner queryRunner = new QueryRunner();
        // sql语句
        String sql = "insert into activity(activity_id,activity_name,activity_location,activity_time,activity_description) values(?,?,?,?,?)";
        // 存参数值的数组
        // 将LocalDateTime类型转换为Timestamp类型
        Object[] params = {activityId, activityName, activityLocation, Timestamp.valueOf(activityTime), activityDescription};
        // 获取数据库连接
        Connection connection = JdbcUtil2.getConnection();
        try {
            // 执行sql语句，并返回影响的行数
            int rowsAffected = queryRunner.update(connection, sql, params);
            return rowsAffected;
        } finally {
            // 关闭数据库连接
            if (connection != null) {
                connection.close();
            }
        }
    }

    //通过activity_id查找活动
    public Activity getActivityById(String activityId) throws SQLException {
        Activity activity = null;
        QueryRunner runner = new QueryRunner();
        String sql = "SELECT * FROM activity WHERE activity_id = ?";
        try (Connection connection = JdbcUtil2.getConnection()) {
            activity = runner.query(connection, sql, new BeanHandler<>(Activity.class), activityId);
            return activity;
        }

    }

    //获得活动所有信息
    public List<Activity> getActivityList() throws SQLException {
        QueryRunner queryRunner = new QueryRunner();
        String sql = "select * from activity";
        List<Activity>rs = new ArrayList<>();
        List<Object[]> resultList = new ArrayList<>();
        try(Connection connection = JdbcUtil2.getConnection()){
            resultList = queryRunner.query(connection, sql, new ArrayListHandler());
            for (Object[] item : resultList) {
                Activity activity = new Activity();
                activity.setActivityId((String) item[0]);
                activity.setActivityName((String) item[1]);
                activity.setActivityLocation((String) item[2]);
                //将Object类型转换为LocalDateTime类型
                Timestamp timestamp = (Timestamp) item[3];
                if (timestamp != null) {
                    activity.setActivityTime(timestamp.toLocalDateTime());
                }
//                activity.setActivityTime((LocalDateTime) item[3]);
                activity.setActivityDescription((String) item[4]);
                rs.add(activity);
            }
        } catch (SQLException e) {
            e.printStackTrace();
        }
        return rs;
    }



    public static void main(String[] args) {
//        try {
//            // 调用insertActivity方法插入数据
//            int rowsAffected = insertActivity("001", "test", "test", 2021-06-01 00:00:00, "test");
//            System.out.println("插入的行数：" + rowsAffected);
//
//        } catch (SQLException e) {
//            throw new RuntimeException(e);
//        }
    }
}

