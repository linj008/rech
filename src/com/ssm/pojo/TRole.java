package com.ssm.pojo;

public class TRole {
    private Integer id;

    private String roleName;

    private String wxRate;

    private String aliRate;

    private Integer isMember;

    private Integer isAdmin;

    private Integer parentId;

    private String detail;

    private Integer level;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getRoleName() {
        return roleName;
    }

    public void setRoleName(String roleName) {
        this.roleName = roleName == null ? null : roleName.trim();
    }

    public String getWxRate() {
        return wxRate;
    }

    public void setWxRate(String wxRate) {
        this.wxRate = wxRate == null ? null : wxRate.trim();
    }

    public String getAliRate() {
        return aliRate;
    }

    public void setAliRate(String aliRate) {
        this.aliRate = aliRate == null ? null : aliRate.trim();
    }

    public Integer getIsMember() {
        return isMember;
    }

    public void setIsMember(Integer isMember) {
        this.isMember = isMember;
    }

    public Integer getIsAdmin() {
        return isAdmin;
    }

    public void setIsAdmin(Integer isAdmin) {
        this.isAdmin = isAdmin;
    }

    public Integer getParentId() {
        return parentId;
    }

    public void setParentId(Integer parentId) {
        this.parentId = parentId;
    }

    public String getDetail() {
        return detail;
    }

    public void setDetail(String detail) {
        this.detail = detail == null ? null : detail.trim();
    }

    public Integer getLevel() {
        return level;
    }

    public void setLevel(Integer level) {
        this.level = level;
    }
}