package com.aurarise.realty.config;

import org.springframework.beans.factory.config.BeanFactoryPostProcessor;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.Statement;

@Configuration
public class DatabaseSetupConfig {

    @Bean
    public static BeanFactoryPostProcessor databaseSetupProcessor() {
        return beanFactory -> {
            try {
                Class.forName("org.postgresql.Driver");
                String masterUrl = "jdbc:postgresql://localhost:5432/postgres";
                String username = System.getenv().getOrDefault("SPRING_DATASOURCE_USERNAME", "postgres");
                String password = System.getenv().getOrDefault("SPRING_DATASOURCE_PASSWORD", "Abhi@3057");

                try (Connection conn = DriverManager.getConnection(masterUrl, username, password);
                     Statement stmt = conn.createStatement()) {

                    ResultSet rs = stmt.executeQuery("SELECT 1 FROM pg_database WHERE datname = 'aurarisedb'");
                    if (!rs.next()) {
                        System.out.println("⚡ Creating PostgreSQL database 'aurarisedb'...");
                        stmt.executeUpdate("CREATE DATABASE aurarisedb");
                        System.out.println("✅ Database 'aurarisedb' created successfully.");
                    } else {
                        System.out.println("✅ Database 'aurarisedb' already exists.");
                    }
                }
            } catch (Exception e) {
                System.err.println("⚠️ Automatic database creation check info: " + e.getMessage());
            }
        };
    }
}
