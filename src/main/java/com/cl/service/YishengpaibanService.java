package com.cl.service;

import com.baomidou.mybatisplus.mapper.Wrapper;
import com.baomidou.mybatisplus.service.IService;
import com.cl.utils.PageUtils;
import com.cl.entity.YishengpaibanEntity;
import java.util.List;
import java.util.Map;
import org.apache.ibatis.annotations.Param;
import com.cl.entity.view.YishengpaibanView;


/**
 * 医生排班
 *
 * @author 
 * @email 
 * @date 2024-04-30 16:38:09
 */
public interface YishengpaibanService extends IService<YishengpaibanEntity> {

    PageUtils queryPage(Map<String, Object> params);
    
   	List<YishengpaibanView> selectListView(Wrapper<YishengpaibanEntity> wrapper);
   	
   	YishengpaibanView selectView(@Param("ew") Wrapper<YishengpaibanEntity> wrapper);
   	
   	PageUtils queryPage(Map<String, Object> params,Wrapper<YishengpaibanEntity> wrapper);
   	

}

