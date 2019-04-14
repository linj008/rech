package com.ssm.pojo;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;

public class TOrders {
	public String[] statusLables = new String[] {"未支付", "已收款", "已支付", "支付过期", "已回款"};
	
	public int afterMini = 3;
	
    private Integer id;

    private String platformId;

    private Integer userId;
    
    private String userName;

    private String status;

    private Integer amount;

    private String createDate;

    private String receivablesDate;

    private String tOrderscol;

    private String merchantNo;

    private String orderNo;

    private String accountId;
    
    private String accountName;

    private String payWay;

    private String returnAmount;

    private String bankNo;

    private String bankAccount;

    private String reciveAccountName;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getPlatformId() {
        return platformId;
    }

    public void setPlatformId(String platformId) {
        this.platformId = platformId == null ? null : platformId.trim();
    }

    public Integer getUserId() {
        return userId;
    }

    public void setUserId(Integer userId) {
        this.userId = userId;
    }
    
    public String getUserName() {
		return userName;
	}

	public void setUserName(String userName) {
		this.userName = userName;
	}

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status == null ? null : status.trim();
    }

    public Integer getAmount() {
        return amount;
    }

    public void setAmount(Integer amount) {
        this.amount = amount;
    }

    public String getCreateDate() {
        return createDate;
    }

    public void setCreateDate(String createDate) {
        this.createDate = createDate == null ? null : createDate.trim();
    }

    public String getReceivablesDate() {
        return receivablesDate;
    }

    public void setReceivablesDate(String receivablesDate) {
        this.receivablesDate = receivablesDate == null ? null : receivablesDate.trim();
    }

    public String gettOrderscol() {
        return tOrderscol;
    }

    public void settOrderscol(String tOrderscol) {
        this.tOrderscol = tOrderscol == null ? null : tOrderscol.trim();
    }

    public String getMerchantNo() {
        return merchantNo;
    }

    public void setMerchantNo(String merchantNo) {
        this.merchantNo = merchantNo == null ? null : merchantNo.trim();
    }

    public String getOrderNo() {
        return orderNo;
    }

    public void setOrderNo(String orderNo) {
        this.orderNo = orderNo == null ? null : orderNo.trim();
    }

    public String getAccountId() {
        return accountId;
    }

    public void setAccountId(String accountId) {
        this.accountId = accountId == null ? null : accountId.trim();
    }
    
    public String getAccountName() {
		return accountName;
	}

	public void setAccountName(String accountName) {
		this.accountName = accountName;
	}

    public String getPayWay() {
        return payWay;
    }

    public void setPayWay(String payWay) {
        this.payWay = payWay == null ? null : payWay.trim();
    }

    public String getReturnAmount() {
        return returnAmount;
    }

    public void setReturnAmount(String returnAmount) {
        this.returnAmount = returnAmount == null ? null : returnAmount.trim();
    }

    public String getBankNo() {
        return bankNo;
    }

    public void setBankNo(String bankNo) {
        this.bankNo = bankNo == null ? null : bankNo.trim();
    }

    public String getBankAccount() {
        return bankAccount;
    }

    public void setBankAccount(String bankAccount) {
        this.bankAccount = bankAccount == null ? null : bankAccount.trim();
    }

    public String getReciveAccountName() {
        return reciveAccountName;
    }

    public void setReciveAccountName(String reciveAccountName) {
        this.reciveAccountName = reciveAccountName == null ? null : reciveAccountName.trim();
    }
    
    public String getOrderStatus(String dateStr) {
        SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
        Date date;
		try {
			date = sdf.parse(dateStr);
			if(new Date().getTime() - date.getTime() > afterMini * 60 * 1000) {
				return "支付过期";
			}else {
				return "未支付";
			}
	        
		} catch (ParseException e) {
			e.printStackTrace();
		}
        
        return null;
    }
	
	public String getOrderStatus() {
		return statusLables[Integer.valueOf(this.status)];
	}
}