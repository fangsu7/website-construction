package com.qcby.tyleaf_test.util;

import com.qcby.tyleaf_test.entity.User;
import org.apache.commons.dbutils.QueryRunner;
import org.apache.commons.dbutils.handlers.ArrayListHandler;
import org.apache.commons.dbutils.handlers.BeanHandler;

import java.sql.Connection;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;
public class GetUserList {
    public static List<User> getUserList() throws SQLException {
        // 创建dbUtils里面的QueryRunner对象
        QueryRunner queryRunner = new QueryRunner();
        // sql语句，选择user表中的所有记录
        String sql = "select * from user";
        // 存储查询结果的列表
        List<User> rs = new ArrayList<>();
        List<Object[]> resultList = new ArrayList<>();

        // 获取数据库连接
        try (Connection connection = JdbcUtil2.getConnection()) {
            // 执行查询，并以数组的形式返回查询结果（new ArrayListHandler()返回所有查询到的记录）
            resultList = queryRunner.query(connection, sql, new ArrayListHandler());
            // 将查询结果转换为User对象
            for (Object[] item : resultList) {
                User user = new User();
                user.setStuId((String) item[1]);
                user.setUsername((String) item[0]);
                user.setPassword((String) item[2]);
                user.setPermission((String) item[3]);
                rs.add(user);
            }
        } catch (SQLException e) {
            // 处理可能的数据库连接异常
            e.printStackTrace();
        } finally {
            // 确保数据库连接被关闭
            JdbcUtil2.closeConnection(JdbcUtil2.getConnection());
        }

        // 返回查询结果
        return rs;
    }

    //通过用户ID返回用户所有信息
    public User getUserById(String stuId) throws SQLException {
        User user = null;
        QueryRunner queryRunner = new QueryRunner();
        String sql = "SELECT * FROM user WHERE user_id = ?";
        try(Connection connection = JdbcUtil2.getConnection()){
            user = queryRunner.query(connection, sql, new BeanHandler<>(User.class), stuId);
            return user;
        }

    }

    public static void main(String[] args) throws SQLException {
        //创建dbUtils里面的QueryRunner对象
        QueryRunner queryRunner = new QueryRunner();
        //sql语句
        String sql = "select * from user where user_id like ?";
        //获取数据库连接
        Connection connection = JdbcUtil2.getConnection();
        //存参数值的数组
        Object[] params = {"%"};
        //执行查询，并以数组的形式返回查询结果（new ArrayListHandler()返回所有查询到的记录）
        List<Object[]> lists = queryRunner.query(connection,sql, new ArrayListHandler(),params);
        List<User> rs = new ArrayList<>();
        for(Object[] item:lists){
            User user = new User();
            user.setStuId((String) item[1]);
            user.setUsername((String) item[0]);
            user.setPassword((String) item[2]);
            user.setPermission((String) item[3]);
            rs.add(user);
        }
//        for(Object[] item:lists){
//            System.out.println(Arrays.toString(item));
//        }
        for(User user:rs){
            System.out.print("StuID:");
            System.out.println(user.getStuId());
            System.out.print("Username:");
            System.out.println(user.getUsername());
            System.out.print("Password:");
            System.out.println(user.getPassword());
            System.out.print("Permission:");
            System.out.println(user.getPermission());
            System.out.println("===================================");
        }
        //关闭数据库连接
        connection.close();
    }
}
