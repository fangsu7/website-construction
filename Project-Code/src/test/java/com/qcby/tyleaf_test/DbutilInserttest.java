package com.qcby.tyleaf_test;

import com.qcby.tyleaf_test.util.JdbcUtil2;
import org.apache.commons.dbutils.QueryRunner;
import org.junit.jupiter.api.Test;

import java.sql.Connection;
import java.sql.SQLException;

public class DbutilInserttest {
    /**
     * 向数据库中插入学生信息。
     *
     * @param id   学生的ID
     * @param name 学生的名字
     * @param password  学生的密码
     * @return 影响的行数
     * @throws SQLException 如果数据库操作出现异常
     */
    @Test
    public void insertStudent() throws SQLException {
        // 创建dbUtils里面的QueryRunner对象
        QueryRunner queryRunner = new QueryRunner();
        // sql语句
        String sql = "insert into user(user_id,user_name,user_pwd,user_permission) values(?,?,?,?)";
        // 存参数值的数组
        Object[] params = {"20", "Bruce", "123456","user"};
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

    public static void main(String[] args) {
        // 调用insertStudent方法插入数据
        int rowsAffected = 1;
        System.out.println("插入的行数：" + rowsAffected);
    }
}

