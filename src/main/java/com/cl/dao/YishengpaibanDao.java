package com.cl.dao;

import com.cl.entity.YishengpaibanEntity;
import com.baomidou.mybatisplus.mapper.BaseMapper;
import java.util.List;
import java.util.Map;
import com.baomidou.mybatisplus.mapper.Wrapper;
import com.baomidou.mybatisplus.plugins.pagination.Pagination;

import org.apache.ibatis.annotations.Param;
import com.cl.entity.view.YishengpaibanView;


/**
 * 医生排班
 * 
 * @author 
 * @email 
 * @date 2024-04-30 16:38:09
 */
public interface YishengpaibanDao extends BaseMapper<YishengpaibanEntity> {
	
	List<YishengpaibanView> selectListView(@Param("ew") Wrapper<YishengpaibanEntity> wrapper);

	List<YishengpaibanView> selectListView(Pagination page,@Param("ew") Wrapper<YishengpaibanEntity> wrapper);
	
	YishengpaibanView selectView(@Param("ew") Wrapper<YishengpaibanEntity> wrapper);
	

}
