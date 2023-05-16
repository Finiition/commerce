package com.soundboard3.demo;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class DemoApplication {

	public static void main(String[] args) {
		SpringApplication.run(DemoApplication.class, args);
		System.out.println("\n" +
				"  _                    _ _               _     ___   ___   ___   ___  \n" +
				" | |    ___   ___ __ _| | |__   ___  ___| |_ _( _ ) / _ \\ ( _ ) / _ \\ \n" +
				" | |   / _ \\ / __/ _` | | '_ \\ / _ \\/ __| __(_) _ \\| | | |/ _ \\| | | |\n" +
				" | |__| (_) | (_| (_| | | | | | (_) \\__ \\ |_ | (_) | |_| | (_) | |_| |\n" +
				" |_____\\___/ \\___\\__,_|_|_| |_|\\___/|___/\\__(_)___/ \\___/ \\___/ \\___/ \n" +
				"                                                                      \n");
	}
}
