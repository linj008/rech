package com.ssm.mapping;

import com.ssm.pojo.TUserOrder;
import com.ssm.pojo.TUserOrderExample;
import java.util.List;
import org.apache.ibatis.annotations.Param;

public interface TUserOrderMapper {
    long countByExample(TUserOrderExample example);

    int deleteByExample(TUserOrderExample example);

    int deleteByPrimaryKey(Integer id);

    int insert(TUserOrder record);

    int insertSelective(TUserOrder record);

    List<TUserOrder> selectByExample(TUserOrderExample example);

    TUserOrder selectByPrimaryKey(Integer id);

    int updateByExampleSelective(@Param("record") TUserOrder record, @Param("example") TUserOrderExample example);

    int updateByExample(@Param("record") TUserOrder record, @Param("example") TUserOrderExample example);

    int updateByPrimaryKeySelective(TUserOrder record);

    int updateByPrimaryKey(TUserOrder record);
}