package com.ssm.server;

import java.util.List;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.ssm.bean.Base;
import com.ssm.mapping.TUserMapper;
import com.ssm.mapping.TUserPhotoMapper;
import com.ssm.pojo.TUserPhoto;
import com.ssm.pojo.TUserPhotoExample;

@Service("userPhotoService")
public class UserPhotoService {
	@Resource
	private TUserMapper userMapper;
	@Resource
	private TUserPhotoMapper userPhotoMapper;
	@Resource
	private AccountService accountService;
	
	@Transactional
	public int addPhoto(TUserPhoto userPhoto) {
		return userPhotoMapper.insert(userPhoto);
	}
	
	@Transactional
	public Base getPhoto(int accountId) {
		Base<List<TUserPhoto>> base = new Base();
		base.errno = 0;
		TUserPhotoExample example = new TUserPhotoExample();
		example.createCriteria().andUseridEqualTo(accountId);
		base.data = userPhotoMapper.selectByExample(example);
		return base;
	}
	
	@Transactional
	public Base delPhoto(String id, String accountId, String userId) {
		Base<List<TUserPhoto>> base = new Base();
		base.errno = 0;
		int result = userPhotoMapper.deleteByPrimaryKey(Integer.valueOf(id));
		if(result != 1) {
			base.message = "删除二维码失败";
			return base;
		}
		TUserPhotoExample example = new TUserPhotoExample();
		example.createCriteria().andUseridEqualTo(Integer.valueOf(accountId));
		if(userPhotoMapper.selectByExample(example).isEmpty()) {
			// 停用账户
			String operateId = "0";
			accountService.activeAccount(operateId, accountId, userId);
		}
		return base;
	}
	
	@Transactional
	public List<TUserPhoto> getPhotoByPrizeAndAccountId(int accountId, int prize) {
		
		TUserPhotoExample example = new TUserPhotoExample();
		example.createCriteria().andUseridEqualTo(accountId).andPriceEqualTo(prize);
		List<TUserPhoto> userPhotos = userPhotoMapper.selectByExample(example);
		
		return userPhotos;
	}
}
