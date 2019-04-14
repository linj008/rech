package com.ssm.util;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.Date;

public class DateUtil {
	
	/**
	 * 获取当前时间
	 * @return
	 */
	public static String getCurrentData() {
        SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
        Calendar c = Calendar.getInstance();
        Date date = new Date();
        c.setTime(date);
        return sdf.format(date);
    }
	
	public static String getCurrentDate(String format) {
		SimpleDateFormat sdf = new SimpleDateFormat(format);
        Calendar c = Calendar.getInstance();
        Date date = new Date();
        c.setTime(date);
        return sdf.format(date);
	}
	
	/**
     * 获取后N天的时间
     *
     * @param tvTime
     * @param preDay 后几天
     * @return
     */
    public static String initDate(String dateStr, int preDay) {
        SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd");
        Date date;
		try {
			date = sdf.parse(dateStr);
			if (preDay > 0) {
	            date.setTime(date.getTime() + (preDay * 60 * 60 * 24 * 1000));
	        }
	        
	        return sdf.format(date);
		} catch (ParseException e) {
			e.printStackTrace();
		}
        
        return null;
    }
   

}
