package com.ssm.pojo;

import java.util.Comparator;

public class SortOrderByNo implements Comparator<TOrders>{

	@Override
	public int compare(TOrders arg0, TOrders arg1) {
		TOrders s1 = (TOrders) arg0;
        TOrders s2 = (TOrders) arg1;
        return s1.getOrderNo().compareTo(s2.getOrderNo());
	}

}
