package com.boylegu.springboot.vue;
import org.springframework.context.annotation.Configuration;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.core.io.FileSystemResource;
import org.springframework.jdbc.datasource.init.ScriptUtils;

import java.sql.Connection;
import java.sql.DriverManager;


@Configuration
@SpringBootApplication
public class App {

	public static void main(String[] args)throws Exception {
		SpringApplication.run(App.class, args);

		String url = "jdbc:postgresql://localhost:5432/postgres";
		Class.forName("org.postgresql.Driver");
		Connection db = DriverManager.getConnection(url, "postgres", "postgres");
		System.out.println("Initializing database and creating tables");
		db.setAutoCommit(false);
		ScriptUtils.executeSqlScript(db, new FileSystemResource("tables_postgres.sql"));
		db.setAutoCommit(true);
		db.close();
		System.out.println("Database initialized");
	}
}
