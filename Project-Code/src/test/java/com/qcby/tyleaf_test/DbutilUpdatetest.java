package com.qcby.tyleaf_test;

import com.qcby.tyleaf_test.util.JdbcUtil2;
import org.apache.commons.dbutils.QueryRunner;
import org.junit.jupiter.api.Test;

import java.sql.Connection;
import java.sql.SQLException;

public class DbutilUpdatetest {
    @Test
     public void updateStudent() throws SQLException {
        //创建dbUtils里面的QueryRunner对象
        QueryRunner queryRunner = new QueryRunner();
        //sql语句
        String sql = "update user set user_name=?,user_permission=?,user_pwd=?  where user_id=?";
        //存参数值的数组
        Object[] objects = {"红红","admin","123456","21"};
        //获取数据库连接
        Connection connection = JdbcUtil2.getConnection();
        //执行sql语句，并返回影响的行数
        int i = queryRunner.update(connection,sql,objects);
        System.out.println(i);
        System.out.println("测试成功");
        //关闭数据库连接
        connection.close();
    }
@Test
    public void deleteStudent() throws SQLException {
        //创建dbUtils里面的QueryRunner对象
        QueryRunner queryRunner = new QueryRunner();
        //sql语句
        String sql = "delete from user where user_id=?";
        //存参数值的数组
        Object[] objects = {"21"};
        //获取数据库连接
        Connection connection = JdbcUtil2.getConnection();
        //执行sql语句，并返回影响的行数
        int i = queryRunner.update(connection,sql,objects);
        System.out.println("影响的行数: "+i);
    System.out.println("测试成功");
        //关闭数据库连接
        connection.close();
    }

@Test
    public void updateActivity() throws SQLException {
        //创建dbUtils里面的QueryRunner对象
        QueryRunner queryRunner = new QueryRunner();
        //sql语句
        String sql = "update activity set activity_name=?,activity_location=?,activity_time=? ,activity_description=? where activity_id=?";
        //存参数值的数组
        Object[] params = { "活动1", "南京", "2021-06-01 12:00:00", "活动描述1","1"};
        //获取数据库连接
        Connection connection = JdbcUtil2.getConnection();
        //执行sql语句，并返回影响的行数
        int i = queryRunner.update(connection,sql,params);
        System.out.println(i);
    System.out.println("测试成功");
        //关闭数据库连接
        connection.close();
    }
@Test
    public void deleteActivity() throws SQLException {
        //创建dbUtils里面的QueryRunner对象
        QueryRunner queryRunner = new QueryRunner();
        //sql语句
        String sql = "delete from activity where activity_id=?";
        //存参数值的数组
        Object[] objects = {"1"};
        //获取数据库连接
        Connection connection = JdbcUtil2.getConnection();
        //执行sql语句，并返回影响的行数
        int i = queryRunner.update(connection,sql,objects);
        System.out.println("影响的行数: "+i);
    System.out.println("测试成功");
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
