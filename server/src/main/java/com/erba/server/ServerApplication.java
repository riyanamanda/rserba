package com.erba.server;

import com.github.slugify.Slugify;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class ServerApplication implements CommandLineRunner {

	public static void main(String[] args) {
		SpringApplication.run(ServerApplication.class, args);
	}

	@Override
	public void run(String... args) throws Exception {
		final Slugify slg = Slugify.builder().build();
		final String result = slg.slugify("Riyan Amanda Nasution");

		System.out.println(result);
	}
}
