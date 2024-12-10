package com.qcby.tyleaf_test.util;

import org.apache.commons.dbutils.QueryRunner;

import java.sql.Connection;
import java.sql.SQLException;
import java.sql.Timestamp;
import java.time.LocalDateTime;

public class DbutilUpdate {
    public static void updateStudent(String id,String name,String pwd,String permission) throws SQLException {
        //创建dbUtils里面的QueryRunner对象
        QueryRunner queryRunner = new QueryRunner();
        //sql语句
        String sql = "update user set user_name=?,user_permission=?,user_pwd=?  where user_id=?";
        //存参数值的数组
        Object[] objects = {name,permission,pwd,id};
        //获取数据库连接
        Connection connection = JdbcUtil2.getConnection();
        //执行sql语句，并返回影响的行数
        int i = queryRunner.update(connection,sql,objects);
        System.out.println(i);
        //关闭数据库连接
        connection.close();
    }

    public void deleteStudent(String id) throws SQLException {
        //创建dbUtils里面的QueryRunner对象
        QueryRunner queryRunner = new QueryRunner();
        //sql语句
        String sql = "delete from user where user_id=?";
        //存参数值的数组
        Object[] objects = {id};
        //获取数据库连接
        Connection connection = JdbcUtil2.getConnection();
        //执行sql语句，并返回影响的行数
        int i = queryRunner.update(connection,sql,objects);
        System.out.println("影响的行数: "+i);
        //关闭数据库连接
        connection.close();
    }


    public static void updateActivity(String activityId, String activityName, String activityLocation, LocalDateTime activityTime, String activityDescription) throws SQLException {
        //创建dbUtils里面的QueryRunner对象
        QueryRunner queryRunner = new QueryRunner();
        //sql语句
        String sql = "update activity set activity_name=?,activity_location=?,activity_time=? ,activity_description=? where activity_id=?";
        //存参数值的数组
        Object[] params = { activityName, activityLocation, Timestamp.valueOf(activityTime), activityDescription,activityId};
        //获取数据库连接
        Connection connection = JdbcUtil2.getConnection();
        //执行sql语句，并返回影响的行数
        int i = queryRunner.update(connection,sql,params);
        System.out.println(i);
        //关闭数据库连接
        connection.close();
    }

    public void deleteActivity(String activityId) throws SQLException {
        //创建dbUtils里面的QueryRunner对象
        QueryRunner queryRunner = new QueryRunner();
        //sql语句
        String sql = "delete from activity where activity_id=?";
        //存参数值的数组
        Object[] objects = {activityId};
        //获取数据库连接
        Connection connection = JdbcUtil2.getConnection();
        //执行sql语句，并返回影响的行数
        int i = queryRunner.update(connection,sql,objects);
        System.out.println("影响的行数: "+i);
        //关闭数据库连接
        connection.close();
    }

    public static void main(String[] args) throws SQLException {
        //创建dbUtils里面的QueryRunner对象
        QueryRunner queryRunner = new QueryRunner();
        //sql语句
        String sql = "update stu set name=? where id=?";
        //存参数值的数组
        Object[] objects = {"红红",21};
        //获取数据库连接
        Connection connection = JdbcUtil2.getConnection();
        //执行sql语句，并返回影响的行数
        int i = queryRunner.update(connection,sql,objects);
        System.out.println(i);
        //关闭数据库连接
        connection.close();
    }
}