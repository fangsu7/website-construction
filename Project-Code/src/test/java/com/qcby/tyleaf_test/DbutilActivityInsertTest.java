package com.qcby.tyleaf_test;

import com.qcby.tyleaf_test.entity.Activity;
import com.qcby.tyleaf_test.util.DbutilActivityInsert;
import com.qcby.tyleaf_test.util.JdbcUtil2;
import org.apache.commons.dbutils.QueryRunner;
import org.apache.commons.dbutils.handlers.ArrayListHandler;
import org.apache.commons.dbutils.handlers.BeanHandler;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.Mockito;

import java.sql.Connection;
import java.sql.SQLException;
import java.sql.Timestamp;
import java.util.ArrayList;
import java.util.List;

public class DbutilActivityInsertTest {

    private DbutilActivityInsert dbutilActivityInsert;
    private JdbcUtil2 jdbcUtil2Mock;

    @BeforeEach
    void setUp() {
        dbutilActivityInsert = new DbutilActivityInsert();
        jdbcUtil2Mock = Mockito.mock(JdbcUtil2.class);
    }

    // 测试insertActivity方法
    @Test
    public void insertActivitytest() throws SQLException {
        // 创建dbUtils里面的QueryRunner对象
        QueryRunner queryRunner = new QueryRunner();
        // sql语句
        String sql = "insert into activity(activity_id,activity_name,activity_location,activity_time,activity_description) values(?,?,?,?,?)";
        // 存参数值的数组
        // 将LocalDateTime类型转换为Timestamp类型
        Object[] params = {"1", "test", "test", "2021-06-01 00:00:00", "test"};
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
    public void getActivityByIdtest() throws SQLException {
        Activity activity = null;
        QueryRunner runner = new QueryRunner();
        String sql = "SELECT * FROM activity WHERE activity_id = ?";
        try (Connection connection = JdbcUtil2.getConnection()) {
            activity = runner.query(connection, sql, new BeanHandler<>(Activity.class), "001");
            System.out.println("测试成功");
        }

    }
    @Test
    public void getActivityList() throws SQLException {
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
        System.out.println("测试成功");
    }
}