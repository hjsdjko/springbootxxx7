package com.cl.dao;

import com.cl.entity.YishengEntity;
import com.baomidou.mybatisplus.mapper.BaseMapper;
import java.util.List;
import java.util.Map;
import com.baomidou.mybatisplus.mapper.Wrapper;
import com.baomidou.mybatisplus.plugins.pagination.Pagination;

import org.apache.ibatis.annotations.Param;
import com.cl.entity.view.YishengView;


/**
 * 医生
 * 
 * @author 
 * @email 
 * @date 2024-04-30 16:38:09
 */
public interface YishengDao extends BaseMapper<YishengEntity> {
	
	List<YishengView> selectListView(@Param("ew") Wrapper<YishengEntity> wrapper);

	List<YishengView> selectListView(Pagination page,@Param("ew") Wrapper<YishengEntity> wrapper);
	
	YishengView selectView(@Param("ew") Wrapper<YishengEntity> wrapper);
	

}
