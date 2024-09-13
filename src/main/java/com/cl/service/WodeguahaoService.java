package com.cl.service;

import com.baomidou.mybatisplus.mapper.Wrapper;
import com.baomidou.mybatisplus.service.IService;
import com.cl.utils.PageUtils;
import com.cl.entity.WodeguahaoEntity;
import java.util.List;
import java.util.Map;
import org.apache.ibatis.annotations.Param;
import com.cl.entity.view.WodeguahaoView;


/**
 * 我的挂号
 *
 * @author 
 * @email 
 * @date 2024-04-30 16:38:09
 */
public interface WodeguahaoService extends IService<WodeguahaoEntity> {

    PageUtils queryPage(Map<String, Object> params);
    
   	List<WodeguahaoView> selectListView(Wrapper<WodeguahaoEntity> wrapper);
   	
   	WodeguahaoView selectView(@Param("ew") Wrapper<WodeguahaoEntity> wrapper);
   	
   	PageUtils queryPage(Map<String, Object> params,Wrapper<WodeguahaoEntity> wrapper);
   	

}

