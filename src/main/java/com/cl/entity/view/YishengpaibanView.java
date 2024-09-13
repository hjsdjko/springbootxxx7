package com.cl.entity.view;

import com.cl.entity.YishengpaibanEntity;

import com.baomidou.mybatisplus.annotations.TableName;
import org.apache.commons.beanutils.BeanUtils;
import java.lang.reflect.InvocationTargetException;
import java.math.BigDecimal;

import java.io.Serializable;
import com.cl.utils.EncryptUtil;
 

/**
 * 医生排班
 * 后端返回视图实体辅助类   
 * （通常后端关联的表或者自定义的字段需要返回使用）
 * @author 
 * @email 
 * @date 2024-04-30 16:38:09
 */
@TableName("yishengpaiban")
public class YishengpaibanView  extends YishengpaibanEntity implements Serializable {
	private static final long serialVersionUID = 1L;

	public YishengpaibanView(){
	}
 
 	public YishengpaibanView(YishengpaibanEntity yishengpaibanEntity){
 	try {
			BeanUtils.copyProperties(this, yishengpaibanEntity);
		} catch (IllegalAccessException | InvocationTargetException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
 		
	}


}
