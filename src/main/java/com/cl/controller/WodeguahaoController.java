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

import com.cl.entity.WodeguahaoEntity;
import com.cl.entity.view.WodeguahaoView;

import com.cl.service.WodeguahaoService;
import com.cl.service.TokenService;
import com.cl.utils.PageUtils;
import com.cl.utils.R;
import com.cl.utils.MPUtil;
import com.cl.utils.CommonUtil;
import java.io.IOException;

/**
 * 我的挂号
 * 后端接口
 * @author 
 * @email 
 * @date 2024-04-30 16:38:09
 */
@RestController
@RequestMapping("/wodeguahao")
public class WodeguahaoController {
    @Autowired
    private WodeguahaoService wodeguahaoService;



    


    /**
     * 后端列表
     */
    @RequestMapping("/page")
    public R page(@RequestParam Map<String, Object> params,WodeguahaoEntity wodeguahao,
		HttpServletRequest request){
		String tableName = request.getSession().getAttribute("tableName").toString();
		if(tableName.equals("yisheng")) {
			wodeguahao.setYishengzhanghao((String)request.getSession().getAttribute("username"));
		}
		if(tableName.equals("yonghu")) {
			wodeguahao.setZhanghao((String)request.getSession().getAttribute("username"));
		}
        EntityWrapper<WodeguahaoEntity> ew = new EntityWrapper<WodeguahaoEntity>();

		PageUtils page = wodeguahaoService.queryPage(params, MPUtil.sort(MPUtil.between(MPUtil.likeOrEq(ew, wodeguahao), params), params));

        return R.ok().put("data", page);
    }
    
    /**
     * 前端列表
     */
	@IgnoreAuth
    @RequestMapping("/list")
    public R list(@RequestParam Map<String, Object> params,WodeguahaoEntity wodeguahao, 
		HttpServletRequest request){
        EntityWrapper<WodeguahaoEntity> ew = new EntityWrapper<WodeguahaoEntity>();

		PageUtils page = wodeguahaoService.queryPage(params, MPUtil.sort(MPUtil.between(MPUtil.likeOrEq(ew, wodeguahao), params), params));
        return R.ok().put("data", page);
    }

	/**
     * 列表
     */
    @RequestMapping("/lists")
    public R list( WodeguahaoEntity wodeguahao){
       	EntityWrapper<WodeguahaoEntity> ew = new EntityWrapper<WodeguahaoEntity>();
      	ew.allEq(MPUtil.allEQMapPre( wodeguahao, "wodeguahao")); 
        return R.ok().put("data", wodeguahaoService.selectListView(ew));
    }

	 /**
     * 查询
     */
    @RequestMapping("/query")
    public R query(WodeguahaoEntity wodeguahao){
        EntityWrapper< WodeguahaoEntity> ew = new EntityWrapper< WodeguahaoEntity>();
 		ew.allEq(MPUtil.allEQMapPre( wodeguahao, "wodeguahao")); 
		WodeguahaoView wodeguahaoView =  wodeguahaoService.selectView(ew);
		return R.ok("查询我的挂号成功").put("data", wodeguahaoView);
    }
	
    /**
     * 后端详情
     */
    @RequestMapping("/info/{id}")
    public R info(@PathVariable("id") Long id){
        WodeguahaoEntity wodeguahao = wodeguahaoService.selectById(id);
		wodeguahao = wodeguahaoService.selectView(new EntityWrapper<WodeguahaoEntity>().eq("id", id));
        return R.ok().put("data", wodeguahao);
    }

    /**
     * 前端详情
     */
    @RequestMapping("/detail/{id}")
    public R detail(@PathVariable("id") Long id){
        WodeguahaoEntity wodeguahao = wodeguahaoService.selectById(id);
		wodeguahao = wodeguahaoService.selectView(new EntityWrapper<WodeguahaoEntity>().eq("id", id));
        return R.ok().put("data", wodeguahao);
    }
    



    /**
     * 后端保存
     */
    @RequestMapping("/save")
    public R save(@RequestBody WodeguahaoEntity wodeguahao, HttpServletRequest request){
    	wodeguahao.setId(new Date().getTime()+new Double(Math.floor(Math.random()*1000)).longValue());
    	//ValidatorUtils.validateEntity(wodeguahao);
        wodeguahaoService.insert(wodeguahao);
        return R.ok();
    }
    
    /**
     * 前端保存
     */
    @RequestMapping("/add")
    public R add(@RequestBody WodeguahaoEntity wodeguahao, HttpServletRequest request){
    	wodeguahao.setId(new Date().getTime()+new Double(Math.floor(Math.random()*1000)).longValue());
    	//ValidatorUtils.validateEntity(wodeguahao);
        wodeguahaoService.insert(wodeguahao);
        return R.ok();
    }



    /**
     * 修改
     */
    @RequestMapping("/update")
    @Transactional
    public R update(@RequestBody WodeguahaoEntity wodeguahao, HttpServletRequest request){
        //ValidatorUtils.validateEntity(wodeguahao);
        wodeguahaoService.updateById(wodeguahao);//全部更新
        return R.ok();
    }



    

    /**
     * 删除
     */
    @RequestMapping("/delete")
    public R delete(@RequestBody Long[] ids){
        wodeguahaoService.deleteBatchIds(Arrays.asList(ids));
        return R.ok();
    }
    
	








}
