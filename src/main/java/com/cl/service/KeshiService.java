package com.cl.service;

import com.baomidou.mybatisplus.mapper.Wrapper;
import com.baomidou.mybatisplus.service.IService;
import com.cl.utils.PageUtils;
import com.cl.entity.KeshiEntity;
import java.util.List;
import java.util.Map;
import org.apache.ibatis.annotations.Param;
import com.cl.entity.view.KeshiView;


/**
 * 科室
 *
 * @author 
 * @email 
 * @date 2024-04-30 16:38:09
 */
public interface KeshiService extends IService<KeshiEntity> {

    PageUtils queryPage(Map<String, Object> params);
    
   	List<KeshiView> selectListView(Wrapper<KeshiEntity> wrapper);
   	
   	KeshiView selectView(@Param("ew") Wrapper<KeshiEntity> wrapper);
   	
   	PageUtils queryPage(Map<String, Object> params,Wrapper<KeshiEntity> wrapper);
   	

}

