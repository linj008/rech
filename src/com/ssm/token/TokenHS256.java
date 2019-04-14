package com.ssm.token;

import java.text.ParseException;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;

import com.nimbusds.jose.JOSEException;

import net.minidev.json.JSONObject;

public class TokenHS256 {


    /**
     * 这个方法采取的是HS256 对称加密算法
     */

    //生成token的业务逻辑
    public static String tokenTest(String uid) {
        //获取生成token
        Map<String, Object> map = new HashMap<>();

        //建立载荷，这些数据根据业务，自己定义。
        map.put("uid", uid);
        //生成时间
        map.put("sta", new Date().getTime());
        //过期时间
        map.put("exp", new Date().getTime() + 1000*60*30);
        try {
            String token = TokenUtils.creatTokenHS256(map);
            System.out.println("token="+token);
            return token;
        } catch (JOSEException e) {
            System.out.println("生成token失败");
            e.printStackTrace();
        }
        return null;

    }
    
  //生成token的业务逻辑
    public static String tokenGenerate(Map<String, Object> map) {
        try {
            String token = TokenUtils.creatTokenHS256(map);
            System.out.println("token="+token);
            return token;
        } catch (JOSEException e) {
            System.out.println("生成token失败");
            e.printStackTrace();
        }
        return null;

    }

    //处理解析的业务逻辑
    public static JSONObject ValidToken(String token) {
        //解析token
    	JSONObject jsonObject = null;
        try {
            if (token != null) {

                Map<String, Object> validMap = TokenUtils.validHS256(token);
                jsonObject = (JSONObject) validMap.get("data");
                int i = (int) validMap.get("Result");
                if (i == 0) {
                	jsonObject.put("result", 0);
                    jsonObject = (JSONObject) validMap.get("data");
                } else if (i == 2) {
                	jsonObject.put("result", 1);
                    jsonObject = (JSONObject) validMap.get("data");
                    System.out.println("token已经过期");
                }
            }
        } catch (ParseException e) {
            e.printStackTrace();
        } catch (JOSEException e) {
            e.printStackTrace();
        }
        return jsonObject;
    }
    
  //处理解析的业务逻辑
    public static String ValidPassword(String password) {
        //解析token
    	JSONObject jsonObject = null;
        try {
            if (password != null) {

                Map<String, Object> validMap = TokenUtils.validPwdHS256(password);
                int i = (int) validMap.get("Result");
                if (i == 0) {
                    System.out.println("password解析成功");
                    jsonObject = (JSONObject) validMap.get("data");
                    password = jsonObject.get("password").toString();
                    System.out.println("password是" + jsonObject.get("password"));
                } else if (i == 1) {
                	password = null;
                    System.out.println("password错误");
                }
            }
        } catch (ParseException e) {
            e.printStackTrace();
        } catch (JOSEException e) {
            e.printStackTrace();
        }
        return password;
    }

    public static void main(String[] ages) {

        //获取token
        String uid = "25";
        String token = tokenTest(uid);
        //解析token
        ValidToken(token);

    }
}
