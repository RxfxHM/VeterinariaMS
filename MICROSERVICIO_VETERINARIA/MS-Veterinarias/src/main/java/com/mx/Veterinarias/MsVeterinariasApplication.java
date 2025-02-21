package com.mx.Veterinarias;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.openfeign.EnableFeignClients;

@SpringBootApplication
@EnableFeignClients
public class MsVeterinariasApplication {

	public static void main(String[] args) {
		SpringApplication.run(MsVeterinariasApplication.class, args);
	}

}
