package com.qcby.tyleaf_test.util;

import org.apache.commons.dbutils.QueryRunner;
import org.apache.commons.dbutils.handlers.ArrayListHandler;

import java.sql.Connection;
import java.sql.SQLException;
import java.util.Arrays;
import java.util.List;

public class UtilsSelectArrayListHandler {
    public static void main(String[] args) throws SQLException {
        //创建dbUtils里面的QueryRunner对象
        QueryRunner queryRunner = new QueryRunner();
        //sql语句
        String sql = "select * from stu where age>?";
        //获取数据库连接
        Connection connection = JdbcUtil2.getConnection();
        //存参数值的数组
        Object[] params = {9
        };
        //执行查询，并以数组的形式返回查询结果（new ArrayListHandler()返回所有查询到的记录）
        List<Object[]> lists = queryRunner.query(connection,sql, new ArrayListHandler(),params);
        for(Object[] item:lists){
            System.out.println(Arrays.toString(item));
        }
        //关闭数据库连接
        connection.close();
    }
}