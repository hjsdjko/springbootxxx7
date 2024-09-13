package com.cl.service;

import com.baomidou.mybatisplus.mapper.Wrapper;
import com.baomidou.mybatisplus.service.IService;
import com.cl.utils.PageUtils;
import com.cl.entity.YishengEntity;
import java.util.List;
import java.util.Map;
import org.apache.ibatis.annotations.Param;
import com.cl.entity.view.YishengView;


/**
 * 医生
 *
 * @author 
 * @email 
 * @date 2024-04-30 16:38:09
 */
public interface YishengService extends IService<YishengEntity> {

    PageUtils queryPage(Map<String, Object> params);
    
   	List<YishengView> selectListView(Wrapper<YishengEntity> wrapper);
   	
   	YishengView selectView(@Param("ew") Wrapper<YishengEntity> wrapper);
   	
   	PageUtils queryPage(Map<String, Object> params,Wrapper<YishengEntity> wrapper);
   	

}

