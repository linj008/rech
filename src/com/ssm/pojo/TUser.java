package com.ssm.pojo;

public class TUser {
    private Integer id;

    private Integer roleId;
    
    private String role;

    private String username;

    private String password;

    private Integer availableQuota;

    private Integer totalQuota;

    private Integer accountType;

    private Integer status;

    private String phoneNum;

    private String wxNum;

    private String taobaoNum;

    private Integer orderStatus;

    private Integer isAdmin;

    private String info;

    private String addDate;

    private String address;

    private Integer sex;
    
    private String accountTypeLable;
    
    private String statusLable;
    
    private String orderStatusLable;

    private String bankName;

    private String accountNum;

    private Integer parentId;

    private String accountName;
    
    private String token;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public Integer getRoleId() {
        return roleId;
    }

    public void setRoleId(Integer roleId) {
        this.roleId = roleId;
    }

    public String getRole() {
		return role;
	}

	public void setRole(String role) {
		this.role = role;
	}

	public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username == null ? null : username.trim();
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password == null ? null : password.trim();
    }

    public Integer getAvailableQuota() {
        return availableQuota;
    }

    public void setAvailableQuota(Integer availableQuota) {
        this.availableQuota = availableQuota;
    }

    public Integer getTotalQuota() {
        return totalQuota;
    }

    public void setTotalQuota(Integer totalQuota) {
        this.totalQuota = totalQuota;
    }

    public Integer getAccountType() {
        return accountType;
    }

    public void setAccountType(Integer accountType) {
        this.accountType = accountType;
    }

    public Integer getStatus() {
        return status;
    }

    public void setStatus(Integer status) {
        this.status = status;
    }

    public String getPhoneNum() {
        return phoneNum;
    }

    public void setPhoneNum(String phoneNum) {
        this.phoneNum = phoneNum == null ? null : phoneNum.trim();
    }

    public String getWxNum() {
        return wxNum;
    }

    public void setWxNum(String wxNum) {
        this.wxNum = wxNum == null ? null : wxNum.trim();
    }

    public String getTaobaoNum() {
        return taobaoNum;
    }

    public void setTaobaoNum(String taobaoNum) {
        this.taobaoNum = taobaoNum == null ? null : taobaoNum.trim();
    }

    public Integer getOrderStatus() {
        return orderStatus;
    }

    public void setOrderStatus(Integer orderStatus) {
        this.orderStatus = orderStatus;
    }

    public Integer getIsAdmin() {
        return isAdmin;
    }

    public void setIsAdmin(Integer isAdmin) {
        this.isAdmin = isAdmin;
    }

    public String getInfo() {
        return info;
    }

    public void setInfo(String info) {
        this.info = info == null ? null : info.trim();
    }

    public String getAddDate() {
        return addDate;
    }

    public void setAddDate(String addDate) {
        this.addDate = addDate == null ? null : addDate.trim();
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address == null ? null : address.trim();
    }

    public Integer getSex() {
        return sex;
    }

    public void setSex(Integer sex) {
        this.sex = sex;
    }
    
    public String getToken() {
		return token;
	}

	public void setToken(String token) {
		this.token = token;
	}

    public String getBankName() {
        return bankName;
    }

    public void setBankName(String bankName) {
        this.bankName = bankName == null ? null : bankName.trim();
    }

    public String getAccountNum() {
        return accountNum;
    }

    public void setAccountNum(String accountNum) {
        this.accountNum = accountNum == null ? null : accountNum.trim();
    }

    public Integer getParentId() {
        return parentId;
    }

    public void setParentId(Integer parentId) {
        this.parentId = parentId;
    }

    public String getAccountName() {
        return accountName;
    }

    public void setAccountName(String accountName) {
        this.accountName = accountName == null ? null : accountName.trim();
    }
    
    public String getAccountTypeLable() {
		return accountTypeLable;
	}

	public String getStatusLable() {
		return statusLable;
	}

	public String getOrderStatusLable() {
		return orderStatusLable;
	}
	
	public void setAccount() {
		if(this.accountType != null) {
			accountTypeLable = this.accountType == 1 ? "微信" : "支付宝";
		}
    }
    
    public void setStatusLable() {
    	if(this.status != null) {
    		statusLable = this.status == 1 ? "已激活" : this.status == 2 ? "已删除" : "未激活";
    	}
    }
    
    public void setOrderStatusLable() {
    	if(this.orderStatus != null) {
    		orderStatusLable = this.orderStatus == 1 ? "已接单" : this.orderStatus == 2 ? "接单中" : "未接单";
    	}
    }
}