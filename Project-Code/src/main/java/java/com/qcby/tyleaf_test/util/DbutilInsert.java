package com.qcby.tyleaf_test.util;

import org.apache.commons.dbutils.QueryRunner;
import java.sql.Connection;
import java.sql.SQLException;

public class DbutilInsert {
    /**
     * 向数据库中插入学生信息。
     *
     * @param id   学生的ID
     * @param name 学生的名字
     * @param password  学生的密码
     * @return 影响的行数
     * @throws SQLException 如果数据库操作出现异常
     */
    public static int insertStudent(String id, String name, String password) throws SQLException {
        // 创建dbUtils里面的QueryRunner对象
        QueryRunner queryRunner = new QueryRunner();
        // sql语句
        String sql = "insert into user(user_id,user_name,user_pwd,user_permission) values(?,?,?,?)";
        // 存参数值的数组
        Object[] params = {id, name, password,"user"};
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

    public static void main(String[] args) {
        try {
            // 调用insertStudent方法插入数据
            int rowsAffected = insertStudent("20", "Bruce", "123456");
            System.out.println("插入的行数：" + rowsAffected);
        } catch (SQLException e) {
            e.printStackTrace();
        }
    }
}



//package com.qcby.tyleaf_test.util;
//
//import org.apache.commons.dbutils.QueryRunner;
//
//import java.sql.Connection;
//import java.sql.SQLException;
//
//public class DbutilInsert {
//    public static void main(String[] args) throws SQLException {
//        //创建dbUtils里面的QueryRunner对象
//        QueryRunner queryRunner = new QueryRunner();
//        //sql语句
//        String sql = "insert into stu(id,name,age) values(?,?,?)";
//        //存参数值的数组
//        Object[] objects = {20,"sdsa",16};
//        //获取数据库连接
//        Connection connection = JdbcUtil2.getConnection();
//        //执行sql语句，并返回影响的行数
//        int i = queryRunner.update(connection,sql,objects);
//        System.out.println(i);
//        //关闭数据库连接
//        connection.close();
//    }
//}