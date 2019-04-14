package com.ssm.mapping;

import com.ssm.pojo.TPlatform;
import com.ssm.pojo.TPlatformExample;
import java.util.List;
import org.apache.ibatis.annotations.Param;

public interface TPlatformMapper {
    long countByExample(TPlatformExample example);

    int deleteByExample(TPlatformExample example);

    int deleteByPrimaryKey(Integer id);

    int insert(TPlatform record);

    int insertSelective(TPlatform record);

    List<TPlatform> selectByExample(TPlatformExample example);

    TPlatform selectByPrimaryKey(Integer id);

    int updateByExampleSelective(@Param("record") TPlatform record, @Param("example") TPlatformExample example);

    int updateByExample(@Param("record") TPlatform record, @Param("example") TPlatformExample example);

    int updateByPrimaryKeySelective(TPlatform record);

    int updateByPrimaryKey(TPlatform record);
}