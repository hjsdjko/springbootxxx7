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


import com.cl.dao.WodeguahaoDao;
import com.cl.entity.WodeguahaoEntity;
import com.cl.service.WodeguahaoService;
import com.cl.entity.view.WodeguahaoView;

@Service("wodeguahaoService")
public class WodeguahaoServiceImpl extends ServiceImpl<WodeguahaoDao, WodeguahaoEntity> implements WodeguahaoService {
	
	
    @Override
    public PageUtils queryPage(Map<String, Object> params) {
        Page<WodeguahaoEntity> page = this.selectPage(
                new Query<WodeguahaoEntity>(params).getPage(),
                new EntityWrapper<WodeguahaoEntity>()
        );
        return new PageUtils(page);
    }
    
    @Override
	public PageUtils queryPage(Map<String, Object> params, Wrapper<WodeguahaoEntity> wrapper) {
		  Page<WodeguahaoView> page =new Query<WodeguahaoView>(params).getPage();
	        page.setRecords(baseMapper.selectListView(page,wrapper));
	    	PageUtils pageUtil = new PageUtils(page);
	    	return pageUtil;
 	}
    
	@Override
	public List<WodeguahaoView> selectListView(Wrapper<WodeguahaoEntity> wrapper) {
		return baseMapper.selectListView(wrapper);
	}

	@Override
	public WodeguahaoView selectView(Wrapper<WodeguahaoEntity> wrapper) {
		return baseMapper.selectView(wrapper);
	}


}
