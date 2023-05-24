package com.soundboard3.demo;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class DemoApplication {

	public static void main(String[] args) {
		SpringApplication.run(DemoApplication.class, args);
		System.out.println("""

				  _                    _ _               _     ___   ___   ___   ___ \s
				 | |    ___   ___ __ _| | |__   ___  ___| |_ _( _ ) / _ \\ ( _ ) / _ \\\s
				 | |   / _ \\ / __/ _` | | '_ \\ / _ \\/ __| __(_) _ \\| | | |/ _ \\| | | |
				 | |__| (_) | (_| (_| | | | | | (_) \\__ \\ |_ | (_) | |_| | (_) | |_| |
				 |_____\\___/ \\___\\__,_|_|_| |_|\\___/|___/\\__(_)___/ \\___/ \\___/ \\___/\s
				                                                                     \s
				""");
	}
}
