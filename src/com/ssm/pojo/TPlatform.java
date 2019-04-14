package com.ssm.pojo;

public class TPlatform {
    private Integer id;

    private String platformCode;

    private String name;

    private Integer platformQuota;

    private Integer aviPlatformQuota;

    private Integer status;

    private String createDate;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getPlatformCode() {
        return platformCode;
    }

    public void setPlatformCode(String platformCode) {
        this.platformCode = platformCode == null ? null : platformCode.trim();
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name == null ? null : name.trim();
    }

    public Integer getPlatformQuota() {
        return platformQuota;
    }

    public void setPlatformQuota(Integer platformQuota) {
        this.platformQuota = platformQuota;
    }

    public Integer getAviPlatformQuota() {
        return aviPlatformQuota;
    }

    public void setAviPlatformQuota(Integer aviPlatformQuota) {
        this.aviPlatformQuota = aviPlatformQuota;
    }

    public Integer getStatus() {
        return status;
    }

    public void setStatus(Integer status) {
        this.status = status;
    }

    public String getCreateDate() {
        return createDate;
    }

    public void setCreateDate(String createDate) {
        this.createDate = createDate == null ? null : createDate.trim();
    }
}