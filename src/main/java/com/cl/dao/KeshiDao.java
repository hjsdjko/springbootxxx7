package com.cl.dao;

import com.cl.entity.KeshiEntity;
import com.baomidou.mybatisplus.mapper.BaseMapper;
import java.util.List;
import java.util.Map;
import com.baomidou.mybatisplus.mapper.Wrapper;
import com.baomidou.mybatisplus.plugins.pagination.Pagination;

import org.apache.ibatis.annotations.Param;
import com.cl.entity.view.KeshiView;


/**
 * 科室
 * 
 * @author 
 * @email 
 * @date 2024-04-30 16:38:09
 */
public interface KeshiDao extends BaseMapper<KeshiEntity> {
	
	List<KeshiView> selectListView(@Param("ew") Wrapper<KeshiEntity> wrapper);

	List<KeshiView> selectListView(Pagination page,@Param("ew") Wrapper<KeshiEntity> wrapper);
	
	KeshiView selectView(@Param("ew") Wrapper<KeshiEntity> wrapper);
	

}
