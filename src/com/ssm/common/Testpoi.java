package com.ssm.common;

import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.io.InputStream;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.apache.poi.hssf.usermodel.HSSFWorkbook;
import org.apache.poi.ss.usermodel.Cell;
import org.apache.poi.ss.usermodel.Row;
import org.apache.poi.ss.usermodel.Sheet;
import org.apache.poi.ss.usermodel.Workbook;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;

import com.ssm.pojo.TOrders;

public class Testpoi {

	public static Map<String, Object> readFile(String filePath) {
		Map<String, Object> result = new HashMap<String, Object>(); 
		List<TOrders> orders = new ArrayList<TOrders>(); 
		Map<String, TOrders> orderMap = new HashMap<String, TOrders>(); 
		Workbook wb = null;
		Sheet sheet = null;
		Row row = null;
		wb = readExcel(filePath);
		if (wb != null) {
			sheet = wb.getSheetAt(0);
			int rownum = sheet.getPhysicalNumberOfRows();
			row = sheet.getRow(1);
			for (int i = 1; i <= rownum; i++) {
				row = sheet.getRow(i);
				TOrders order = new TOrders();
				try {
					if (row != null) {
						order.setOrderNo(String.valueOf(getCellFormatValue(row.getCell(0))));
						order.setReturnAmount(String.valueOf(getCellFormatValue(row.getCell(1))));
						order.setBankNo(String.valueOf(getCellFormatValue(row.getCell(2))));
						order.setBankAccount(String.valueOf(getCellFormatValue(row.getCell(3))));
						orders.add(order);
						orderMap.put(order.getOrderNo(), order);
					} else {
						break;
					}
				}catch(Exception e) {
					e.printStackTrace();
					break;
				}
			}
		}
		
		result.put("list", orders);
		result.put("map", orderMap);
		
		return result;

	}

	public static Workbook readExcel(String filePath) {
		Workbook wb = null;
		if (filePath == null) {
			return null;
		}
		String extString = filePath.substring(filePath.lastIndexOf("."));
		InputStream is = null;
		try {
			is = new FileInputStream(filePath);
			if (".xls".equals(extString)) {
				return wb = new HSSFWorkbook(is);
			} else if (".xlsx".equals(extString)) {
				return wb = new XSSFWorkbook(is);
			} else {
				return wb = null;
			}

		} catch (FileNotFoundException e) {
			e.printStackTrace();
		} catch (IOException e) {
			e.printStackTrace();
		}
		return wb;
	}

	public static Object getCellFormatValue(Cell cell) {
		Object cellValue = null;
		switch(cell.getCellType()){
			case NUMERIC:
				cellValue = cell.getNumericCellValue();
				break;
	        case STRING:
	            cellValue = cell.getStringCellValue();
	            break;
		}
		
		return cellValue;
	}
}
