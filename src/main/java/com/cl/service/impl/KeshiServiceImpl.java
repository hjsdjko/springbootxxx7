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


import com.cl.dao.KeshiDao;
import com.cl.entity.KeshiEntity;
import com.cl.service.KeshiService;
import com.cl.entity.view.KeshiView;

@Service("keshiService")
public class KeshiServiceImpl extends ServiceImpl<KeshiDao, KeshiEntity> implements KeshiService {
	
	
    @Override
    public PageUtils queryPage(Map<String, Object> params) {
        Page<KeshiEntity> page = this.selectPage(
                new Query<KeshiEntity>(params).getPage(),
                new EntityWrapper<KeshiEntity>()
        );
        return new PageUtils(page);
    }
    
    @Override
	public PageUtils queryPage(Map<String, Object> params, Wrapper<KeshiEntity> wrapper) {
		  Page<KeshiView> page =new Query<KeshiView>(params).getPage();
	        page.setRecords(baseMapper.selectListView(page,wrapper));
	    	PageUtils pageUtil = new PageUtils(page);
	    	return pageUtil;
 	}
    
	@Override
	public List<KeshiView> selectListView(Wrapper<KeshiEntity> wrapper) {
		return baseMapper.selectListView(wrapper);
	}

	@Override
	public KeshiView selectView(Wrapper<KeshiEntity> wrapper) {
		return baseMapper.selectView(wrapper);
	}


}
