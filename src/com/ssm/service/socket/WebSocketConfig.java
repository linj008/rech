package com.ssm.service.socket;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;
import org.springframework.web.socket.WebSocketHandler;
import org.springframework.web.socket.config.annotation.EnableWebSocket;
import org.springframework.web.socket.config.annotation.WebSocketConfigurer;
import org.springframework.web.socket.config.annotation.WebSocketHandlerRegistry;

@Configuration
@EnableWebMvc
@EnableWebSocket
public class WebSocketConfig implements WebSocketConfigurer{
	@Override
    public void registerWebSocketHandlers(WebSocketHandlerRegistry registry) {
		try {
			registry.addHandler(myHandler(), "myHandler.do").addInterceptors(new WebSocketInterceptor());
		}catch(Exception e) {
			e.printStackTrace();
		}
    }

    @Bean
    public WebSocketHandler myHandler() {
        return new MyHandler();
    }
}
