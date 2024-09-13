package com.cl.service.impl;

import org.springframework.stereotype.Service;
import java.util.Map;
import java.util.List;

import com.baomidou.mybatisplus.mapper.Wrapper;
import com.baomidou.mybatisplus.mapper.EntityWrapper;
import com.baomidou.mybatisplus.plugins.Page;
import com.baomidou.mybatisplus.service.impl.ServiceImpl;
import com.cl.utils.PageUtils;
import com.cl.utils.Query;


import com.cl.dao.YishengpaibanDao;
import com.cl.entity.YishengpaibanEntity;
import com.cl.service.YishengpaibanService;
import com.cl.entity.view.YishengpaibanView;

@Service("yishengpaibanService")
public class YishengpaibanServiceImpl extends ServiceImpl<YishengpaibanDao, YishengpaibanEntity> implements YishengpaibanService {
	
	
    @Override
    public PageUtils queryPage(Map<String, Object> params) {
        Page<YishengpaibanEntity> page = this.selectPage(
                new Query<YishengpaibanEntity>(params).getPage(),
                new EntityWrapper<YishengpaibanEntity>()
        );
        return new PageUtils(page);
    }
    
    @Override
	public PageUtils queryPage(Map<String, Object> params, Wrapper<YishengpaibanEntity> wrapper) {
		  Page<YishengpaibanView> page =new Query<YishengpaibanView>(params).getPage();
	        page.setRecords(baseMapper.selectListView(page,wrapper));
	    	PageUtils pageUtil = new PageUtils(page);
	    	return pageUtil;
 	}
    
	@Override
	public List<YishengpaibanView> selectListView(Wrapper<YishengpaibanEntity> wrapper) {
		return baseMapper.selectListView(wrapper);
	}

	@Override
	public YishengpaibanView selectView(Wrapper<YishengpaibanEntity> wrapper) {
		return baseMapper.selectView(wrapper);
	}


}
