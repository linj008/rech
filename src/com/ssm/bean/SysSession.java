package com.ssm.bean;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.web.socket.WebSocketSession;


public class SysSession {
	public static List<WebSocketSession> wxSessionList = new ArrayList<>();
	public static Map<String, WebSocketSession> wxSessionMap = new HashMap<String, WebSocketSession>();
	public static Map<String, WebSocketSession> tWxSessionMap = new HashMap<String, WebSocketSession>();
	
	public static List<WebSocketSession> aliSessionList = new ArrayList<>();
	public static Map<String, WebSocketSession> aliSessionMap = new HashMap<String, WebSocketSession>();
	public static Map<String, WebSocketSession> tAliSessionMap = new HashMap<String, WebSocketSession>();
}
