package com.qcby.tyleaf_test.util;

import com.qcby.tyleaf_test.entity.User;
import org.apache.commons.dbutils.QueryRunner;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;

public class DbutilInsertUser {
    /**
     * 向数据库中插入学生信息。
     *
     * @param id   学生的ID
     * @param name 学生的名字
     * @param password  学生的密码
     * @param permission  学生的权限
     * @return 影响的行数
     * @throws SQLException 如果数据库操作出现异常
     */
    public static int insertStudent(String id, String name, String password,String permission) throws SQLException {
        // 创建dbUtils里面的QueryRunner对象
        QueryRunner queryRunner = new QueryRunner();
        // sql语句
        String sql = "insert into user(user_id,user_name,user_pwd,user_permission) values(?,?,?,?)";
        // 存参数值的数组
        Object[] params = {id, name, password, permission};
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

    //通过user_id查找用户
    public static User getUserById(String stuId) throws SQLException {
        User user = null;
        QueryRunner runner = new QueryRunner();
        String sql = "SELECT * FROM user WHERE user_id = ?";
        try(Connection connection = JdbcUtil2.getConnection()){
            PreparedStatement preparedStatement = connection.prepareStatement(sql);

            preparedStatement.setString(1, stuId);
            try(ResultSet resultSet = preparedStatement.executeQuery()){
                if (resultSet.next()) {
                    user = new User();
                    user.setStuId(resultSet.getString("user_id"));
                    user.setUsername(resultSet.getString("user_name"));
                    user.setPassword(resultSet.getString("user_pwd"));
                    user.setPermission(resultSet.getString("user_permission"));
                }
            }

            return user;
        }

    }

    public static void main(String[] args) {
        try {
            // 调用insertStudent方法插入数据
//            int rowsAffected = insertStudent("001", "fangsdas@qq.com", "Bruce", "管理员");

            System.out.println((getUserById("001")).getUsername());

//            System.out.println("插入的行数：" + rowsAffected);
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