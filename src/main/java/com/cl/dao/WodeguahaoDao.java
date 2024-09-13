package com.cl.dao;

import com.cl.entity.WodeguahaoEntity;
import com.baomidou.mybatisplus.mapper.BaseMapper;
import java.util.List;
import java.util.Map;
import com.baomidou.mybatisplus.mapper.Wrapper;
import com.baomidou.mybatisplus.plugins.pagination.Pagination;

import org.apache.ibatis.annotations.Param;
import com.cl.entity.view.WodeguahaoView;


/**
 * 我的挂号
 * 
 * @author 
 * @email 
 * @date 2024-04-30 16:38:09
 */
public interface WodeguahaoDao extends BaseMapper<WodeguahaoEntity> {
	
	List<WodeguahaoView> selectListView(@Param("ew") Wrapper<WodeguahaoEntity> wrapper);

	List<WodeguahaoView> selectListView(Pagination page,@Param("ew") Wrapper<WodeguahaoEntity> wrapper);
	
	WodeguahaoView selectView(@Param("ew") Wrapper<WodeguahaoEntity> wrapper);
	

}
