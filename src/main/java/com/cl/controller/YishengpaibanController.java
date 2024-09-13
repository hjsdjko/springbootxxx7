package com.cl.controller;

import java.math.BigDecimal;
import java.text.SimpleDateFormat;
import java.text.ParseException;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Calendar;
import java.util.Map;
import java.util.HashMap;
import java.util.Iterator;
import java.util.Date;
import java.util.List;
import javax.servlet.http.HttpServletRequest;

import com.cl.utils.ValidatorUtils;
import org.apache.commons.lang3.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import com.baomidou.mybatisplus.mapper.EntityWrapper;
import com.baomidou.mybatisplus.mapper.Wrapper;
import com.cl.annotation.IgnoreAuth;

import com.cl.entity.YishengpaibanEntity;
import com.cl.entity.view.YishengpaibanView;

import com.cl.service.YishengpaibanService;
import com.cl.service.TokenService;
import com.cl.utils.PageUtils;
import com.cl.utils.R;
import com.cl.utils.MPUtil;
import com.cl.utils.CommonUtil;
import java.io.IOException;

/**
 * 医生排班
 * 后端接口
 * @author 
 * @email 
 * @date 2024-04-30 16:38:09
 */
@RestController
@RequestMapping("/yishengpaiban")
public class YishengpaibanController {
    @Autowired
    private YishengpaibanService yishengpaibanService;



    


    /**
     * 后端列表
     */
    @RequestMapping("/page")
    public R page(@RequestParam Map<String, Object> params,YishengpaibanEntity yishengpaiban,
		HttpServletRequest request){
		String tableName = request.getSession().getAttribute("tableName").toString();
		if(tableName.equals("yisheng")) {
			yishengpaiban.setYishengzhanghao((String)request.getSession().getAttribute("username"));
		}
        EntityWrapper<YishengpaibanEntity> ew = new EntityWrapper<YishengpaibanEntity>();

		PageUtils page = yishengpaibanService.queryPage(params, MPUtil.sort(MPUtil.between(MPUtil.likeOrEq(ew, yishengpaiban), params), params));

        return R.ok().put("data", page);
    }
    
    /**
     * 前端列表
     */
	@IgnoreAuth
    @RequestMapping("/list")
    public R list(@RequestParam Map<String, Object> params,YishengpaibanEntity yishengpaiban, 
		HttpServletRequest request){
        EntityWrapper<YishengpaibanEntity> ew = new EntityWrapper<YishengpaibanEntity>();

		PageUtils page = yishengpaibanService.queryPage(params, MPUtil.sort(MPUtil.between(MPUtil.likeOrEq(ew, yishengpaiban), params), params));
        return R.ok().put("data", page);
    }

	/**
     * 列表
     */
    @RequestMapping("/lists")
    public R list( YishengpaibanEntity yishengpaiban){
       	EntityWrapper<YishengpaibanEntity> ew = new EntityWrapper<YishengpaibanEntity>();
      	ew.allEq(MPUtil.allEQMapPre( yishengpaiban, "yishengpaiban")); 
        return R.ok().put("data", yishengpaibanService.selectListView(ew));
    }

	 /**
     * 查询
     */
    @RequestMapping("/query")
    public R query(YishengpaibanEntity yishengpaiban){
        EntityWrapper< YishengpaibanEntity> ew = new EntityWrapper< YishengpaibanEntity>();
 		ew.allEq(MPUtil.allEQMapPre( yishengpaiban, "yishengpaiban")); 
		YishengpaibanView yishengpaibanView =  yishengpaibanService.selectView(ew);
		return R.ok("查询医生排班成功").put("data", yishengpaibanView);
    }
	
    /**
     * 后端详情
     */
    @RequestMapping("/info/{id}")
    public R info(@PathVariable("id") Long id){
        YishengpaibanEntity yishengpaiban = yishengpaibanService.selectById(id);
		yishengpaiban = yishengpaibanService.selectView(new EntityWrapper<YishengpaibanEntity>().eq("id", id));
        return R.ok().put("data", yishengpaiban);
    }

    /**
     * 前端详情
     */
	@IgnoreAuth
    @RequestMapping("/detail/{id}")
    public R detail(@PathVariable("id") Long id){
        YishengpaibanEntity yishengpaiban = yishengpaibanService.selectById(id);
		yishengpaiban = yishengpaibanService.selectView(new EntityWrapper<YishengpaibanEntity>().eq("id", id));
        return R.ok().put("data", yishengpaiban);
    }
    



    /**
     * 后端保存
     */
    @RequestMapping("/save")
    public R save(@RequestBody YishengpaibanEntity yishengpaiban, HttpServletRequest request){
    	yishengpaiban.setId(new Date().getTime()+new Double(Math.floor(Math.random()*1000)).longValue());
    	//ValidatorUtils.validateEntity(yishengpaiban);
        yishengpaibanService.insert(yishengpaiban);
        return R.ok();
    }
    
    /**
     * 前端保存
     */
    @RequestMapping("/add")
    public R add(@RequestBody YishengpaibanEntity yishengpaiban, HttpServletRequest request){
    	yishengpaiban.setId(new Date().getTime()+new Double(Math.floor(Math.random()*1000)).longValue());
    	//ValidatorUtils.validateEntity(yishengpaiban);
        yishengpaibanService.insert(yishengpaiban);
        return R.ok();
    }



    /**
     * 修改
     */
    @RequestMapping("/update")
    @Transactional
    public R update(@RequestBody YishengpaibanEntity yishengpaiban, HttpServletRequest request){
        //ValidatorUtils.validateEntity(yishengpaiban);
        yishengpaibanService.updateById(yishengpaiban);//全部更新
        return R.ok();
    }



    

    /**
     * 删除
     */
    @RequestMapping("/delete")
    public R delete(@RequestBody Long[] ids){
        yishengpaibanService.deleteBatchIds(Arrays.asList(ids));
        return R.ok();
    }
    
	








}
