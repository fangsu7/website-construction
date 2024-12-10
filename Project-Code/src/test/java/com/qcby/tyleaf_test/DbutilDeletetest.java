package com.qcby.tyleaf_test;

import com.qcby.tyleaf_test.util.JdbcUtil2;
import org.apache.commons.dbutils.QueryRunner;
import org.junit.jupiter.api.Test;

import java.sql.Connection;
import java.sql.SQLException;

public class DbutilDeletetest {
   @Test
    public void main() throws SQLException {
        //创建dbUtils里面的QueryRunner对象
        QueryRunner queryRunner = new QueryRunner();
        //sql语句
        String sql = "delete from stu where id=?";
        //存参数值的数组
        Object[] objects = {1};
        //获取数据库连接
        Connection connection = JdbcUtil2.getConnection();
        //执行sql语句，并返回影响的行数
        int i = queryRunner.update(connection,sql,objects);
        System.out.println(i);
       System.out.println("测试成功");
        //关闭数据库连接
        connection.close();
    }
}
