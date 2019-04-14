package com.ssm.server;

import java.io.File;
import java.util.ArrayList;
import java.util.List;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.ssm.bean.Base;
import com.ssm.mapping.TAccountMapper;
import com.ssm.mapping.TUserPhotoMapper;
import com.ssm.pojo.TAccount;
import com.ssm.pojo.TAccountExample;
import com.ssm.pojo.TUserPhoto;
import com.ssm.pojo.TUserPhotoExample;

@Service("accountService")
public class AccountService {
	@Resource
	private TAccountMapper accountMapper;
	@Resource
	private TUserPhotoMapper userPhotoMapper;
	
	@Transactional
	public Base getAccount(String userId) {
		Base<List<TAccount>> base = new Base<List<TAccount>>();
		base.errno = 0;
		TAccountExample example = new TAccountExample();
		example.createCriteria().andUserIdEqualTo(Integer.valueOf(userId));
		base.data = accountMapper.selectByExample(example);
		return base;
	}
	
	@Transactional
	public Base addAccount(TAccount account) {
		Base base = new Base();
		base.errno = 0;
		TAccountExample example = new TAccountExample();
		example.createCriteria().andAccountnameEqualTo(account.getAccountname()).andAccounttypeEqualTo(account.getAccounttype());
		if(!accountMapper.selectByExample(example).isEmpty()) {
			base.errno = 100005;
			base.message = "账户已存在";
			return base;
		}
		int result = accountMapper.insert(account);
		if(result == 1) {
			base.message = "增加账户成功";
		}else {
			base.errno = 100001;
			base.message = "增加账户失败，请联系工作人员";
		}
		return base;
	}
	
	/**
	 * 激活账户
	 * @param operateId 1-激活， 0-停用
	 * @param accountId
	 * @return
	 */
	@Transactional
	public int activeAccount(String operateId, String accountId, String userId) {
		TAccount account = new TAccount();
		account.setStatus(Integer.valueOf(operateId));
		
		if("1".equals(operateId)) {
			
			TUserPhotoExample userPhotoExample = new TUserPhotoExample();
			userPhotoExample.createCriteria().andUseridEqualTo(Integer.valueOf(accountId));
			List<TUserPhoto> userPhotos = userPhotoMapper.selectByExample(userPhotoExample);
			if(userPhotos.isEmpty()) {
				return 300001;
			}
			
			TAccount updateAccount = new TAccount();
			updateAccount.setStatus(0);
			TAccountExample example = new TAccountExample();
			example.createCriteria().andStatusEqualTo(Integer.valueOf(operateId)).andIdNotEqualTo(Integer.valueOf(accountId)).andUserIdEqualTo(Integer.valueOf(userId));
			accountMapper.updateByExampleSelective(updateAccount, example);
		}
		
		TAccountExample example = new TAccountExample();
		example.createCriteria().andIdEqualTo(Integer.valueOf(accountId));
		return accountMapper.updateByExampleSelective(account, example);
	}
	
	/**
	 * 删除账户
	 * @param id
	 * @return
	 */
	@Transactional
	public Base deleteAccount(int id) {
		Base base = new Base();
		base.errno = 0;
		base.message = "删除账户成功";
		TAccount account = accountMapper.selectByPrimaryKey(id);
		if(account.getStatus() == 1) {
			base.errno = 100003;
			base.message = "被激活的账户不能删除";
		}else {

			List<Integer> userPhotoIds = new ArrayList<Integer>();
			TUserPhotoExample userPhotoExample = new TUserPhotoExample();
			userPhotoExample.createCriteria().andUseridEqualTo(id);
			List<TUserPhoto> userPhotos = userPhotoMapper.selectByExample(userPhotoExample);
			for(TUserPhoto userPhoto : userPhotos) {
				userPhotoIds.add(userPhoto.getId());
			}
			
			int delPhotoResult = -1;
			if(!userPhotoIds.isEmpty()) {
				TUserPhotoExample userPhotoexample = new TUserPhotoExample();
				userPhotoexample.createCriteria().andIdIn(userPhotoIds);
				delPhotoResult = userPhotoMapper.deleteByExample(userPhotoexample);
			}
			
			int result = accountMapper.deleteByPrimaryKey(id);
			
			if(delPhotoResult != 0 && result != 0) {
				for(TUserPhoto userPhoto : userPhotos) {
					File file = new File(userPhoto.getImgpath());
					file.delete();
				}
			}else{
				base.errno = 100004;
				base.message = "删除账户失败";
			}
		}
		return base;
	}
}
