package com.boylegu.springboot.vue.servis;

import com.boylegu.springboot.vue.config.MyConfig;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.FileSystemResource;
import org.springframework.jdbc.datasource.init.ScriptUtils;
import org.springframework.stereotype.Service;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;

@Service
public class Ser1 {


    @Autowired
    public MyConfig url;

    @Autowired
    public MyConfig usename;

    @Autowired
    public MyConfig password;

    public void GetDataDb()

    {


        try {
            Class.forName("org.postgresql.Driver");


            Connection db = DriverManager.getConnection(url.getUrl(), usename.getUsername(), password.getPassword());
            System.out.println("Initializing database and creating tables");
            db.setAutoCommit(false);
            ScriptUtils.executeSqlScript(db, new FileSystemResource("tables_postgres.sql"));
            db.setAutoCommit(true);
            db.close();
            System.out.println("Database initialized");
        } catch (SQLException | ClassNotFoundException e) {
            e.printStackTrace();
            System.out.println("Database isn't initialized");
        }


    }
}
/*		String url = "jdbc:postgresql://localhost:5432/postgres";
		Class.forName("org.postgresql.Driver");
		Connection db = DriverManager.getConnection(url, "postgres", "postgres");
		System.out.println("Initializing database and creating tables");
		db.setAutoCommit(false);
		ScriptUtils.executeSqlScript(db, new FileSystemResource("tables_postgres.sql"));
		db.setAutoCommit(true);
		db.close();
		System.out.println("Database initialized");
*/

