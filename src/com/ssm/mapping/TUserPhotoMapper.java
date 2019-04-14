package com.ssm.mapping;

import com.ssm.pojo.TUserPhoto;
import com.ssm.pojo.TUserPhotoExample;
import java.util.List;
import org.apache.ibatis.annotations.Param;

public interface TUserPhotoMapper {
    long countByExample(TUserPhotoExample example);

    int deleteByExample(TUserPhotoExample example);

    int deleteByPrimaryKey(Integer id);

    int insert(TUserPhoto record);

    int insertSelective(TUserPhoto record);

    List<TUserPhoto> selectByExample(TUserPhotoExample example);

    TUserPhoto selectByPrimaryKey(Integer id);

    int updateByExampleSelective(@Param("record") TUserPhoto record, @Param("example") TUserPhotoExample example);

    int updateByExample(@Param("record") TUserPhoto record, @Param("example") TUserPhotoExample example);

    int updateByPrimaryKeySelective(TUserPhoto record);

    int updateByPrimaryKey(TUserPhoto record);
}