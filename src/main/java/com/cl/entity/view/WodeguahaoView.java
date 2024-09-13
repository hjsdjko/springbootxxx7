package com.cl.entity.view;

import com.cl.entity.WodeguahaoEntity;

import com.baomidou.mybatisplus.annotations.TableName;
import org.apache.commons.beanutils.BeanUtils;
import java.lang.reflect.InvocationTargetException;
import java.math.BigDecimal;

import java.io.Serializable;
import com.cl.utils.EncryptUtil;
 

/**
 * 我的挂号
 * 后端返回视图实体辅助类   
 * （通常后端关联的表或者自定义的字段需要返回使用）
 * @author 
 * @email 
 * @date 2024-04-30 16:38:09
 */
@TableName("wodeguahao")
public class WodeguahaoView  extends WodeguahaoEntity implements Serializable {
	private static final long serialVersionUID = 1L;

	public WodeguahaoView(){
	}
 
 	public WodeguahaoView(WodeguahaoEntity wodeguahaoEntity){
 	try {
			BeanUtils.copyProperties(this, wodeguahaoEntity);
		} catch (IllegalAccessException | InvocationTargetException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
 		
	}


}
