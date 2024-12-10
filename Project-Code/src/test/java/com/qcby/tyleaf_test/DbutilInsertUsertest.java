package com.qcby.tyleaf_test;

import com.qcby.tyleaf_test.entity.User;
import com.qcby.tyleaf_test.util.JdbcUtil2;
import org.apache.commons.dbutils.QueryRunner;
import org.junit.jupiter.api.Test;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;

public class DbutilInsertUsertest {
    @Test
    public void insertStudent() throws SQLException {
        // 创建dbUtils里面的QueryRunner对象
        QueryRunner queryRunner = new QueryRunner();
        // sql语句
        String sql = "insert into user(user_id,user_name,user_pwd,user_permission) values(?,?,?,?)";
        // 存参数值的数组(插入数据库中不存在的数据)
        Object[] params = {"23", "Bruce", "123456","user"};
        // 获取数据库连接
        Connection connection = JdbcUtil2.getConnection();
        try {
            // 执行sql语句，并返回影响的行数
            int rowsAffected = queryRunner.update(connection, sql, params);
            System.out.println("测试成功");
        } finally {
            // 关闭数据库连接
            if (connection != null) {
                connection.close();
            }
        }
    }
    @Test
    public void insertStudent1() throws SQLException {
        // 创建dbUtils里面的QueryRunner对象
        QueryRunner queryRunner = new QueryRunner();
        // sql语句
        String sql = "insert into user(user_id,user_name,user_pwd,user_permission) values(?,?,?,?)";
        // 存参数值的数组(插入数据库中已经存在的数据)
        Object[] params = {"19", "Bruce", "123456","user"};
        // 获取数据库连接
        Connection connection = JdbcUtil2.getConnection();
        try {
            // 执行sql语句，并返回影响的行数
            int rowsAffected = queryRunner.update(connection, sql, params);
            System.out.println("测试成功");
        } finally {
            // 关闭数据库连接
            if (connection != null) {
                connection.close();
            }
        }
    }

    //通过user_id查找用户
   @Test public void getUserById() throws SQLException {
       User user = null;
       QueryRunner runner = new QueryRunner();
       String sql = "SELECT * FROM user WHERE user_id = ?";
       try (Connection connection = JdbcUtil2.getConnection()) {
           PreparedStatement preparedStatement = connection.prepareStatement(sql);

           preparedStatement.setString(1, "20");
           try (ResultSet resultSet = preparedStatement.executeQuery()) {
               if (resultSet.next()) {
                   user = new User();
                   user.setStuId(resultSet.getString("user_id"));
                   user.setUsername(resultSet.getString("user_name"));
                   user.setPassword(resultSet.getString("user_pwd"));
                   user.setPermission(resultSet.getString("user_permission"));
               }
           }

           System.out.println("测试成功");
       }

   }
}
