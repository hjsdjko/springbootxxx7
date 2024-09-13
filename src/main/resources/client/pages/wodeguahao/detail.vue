
<template>
<view>
<mescroll-uni @init="mescrollInit" :up="upOption" :down="downOption" @down="downCallback" @up="upCallback">
	<view class="content">
		<view class="container" :style='{"width":"100%","padding":"0px","position":"relative","background":"#ffffff","height":"auto"}'>
            <view :style='{"padding":"24rpx 24rpx 24rpx 24rpx","flexWrap":"wrap","background":"#ffffff","display":"flex","width":"100%","justifyContent":"space-between","height":"auto"}' class="detail-content">

				<view :style='{"margin":"0 0 12rpx 0","borderColor":"#cccccc","borderWidth":"0 0 0px 0","background":"#ffffff","display":"flex","width":"100%","borderStyle":"solid","height":"auto"}' class="detail-list-item title">
					<view :style='{"width":"auto","padding":"0 20rpx 0 0","lineHeight":"48rpx","fontSize":"28rpx","color":"#333333","textAlign":"right"}' class="lable">医生姓名：</view>
					<view :style='{"padding":"0px 0 0 0","margin":"0 0 0 0","lineHeight":"48rpx","fontSize":"28rpx","color":"#666666"}' class="text">{{detail.yishengxingming}}</view>
				</view>
				<view :style='{"margin":"0 0 12rpx 0","borderColor":"#cccccc","borderWidth":"0 0 0px 0","background":"#ffffff","display":"flex","width":"100%","borderStyle":"solid","height":"auto"}' class="detail-list-item title">
					<view :style='{"width":"auto","padding":"0 20rpx 0 0","lineHeight":"48rpx","fontSize":"28rpx","color":"#333333","textAlign":"right"}' class="lable">科室：</view>
					<view :style='{"padding":"0px 0 0 0","margin":"0 0 0 0","lineHeight":"48rpx","fontSize":"28rpx","color":"#666666"}' class="text">{{detail.keshi}}</view>
				</view>
				<view :style='{"margin":"0 0 12rpx 0","borderColor":"#cccccc","borderWidth":"0 0 0px 0","background":"#ffffff","display":"flex","width":"100%","borderStyle":"solid","height":"auto"}' class="detail-list-item title">
					<view :style='{"width":"auto","padding":"0 20rpx 0 0","lineHeight":"48rpx","fontSize":"28rpx","color":"#333333","textAlign":"right"}' class="lable">诊室：</view>
					<view :style='{"padding":"0px 0 0 0","margin":"0 0 0 0","lineHeight":"48rpx","fontSize":"28rpx","color":"#666666"}' class="text">{{detail.zhenshi}}</view>
				</view>
				<view :style='{"margin":"0 0 12rpx 0","borderColor":"#cccccc","borderWidth":"0 0 0px 0","background":"#ffffff","display":"flex","width":"100%","borderStyle":"solid","height":"auto"}' class="detail-list-item title">
					<view :style='{"width":"auto","padding":"0 20rpx 0 0","lineHeight":"48rpx","fontSize":"28rpx","color":"#333333","textAlign":"right"}' class="lable">挂号费：</view>
					<view :style='{"padding":"0px 0 0 0","margin":"0 0 0 0","lineHeight":"48rpx","fontSize":"28rpx","color":"#666666"}' class="text">{{detail.guahaofei}}</view>
				</view>

				<view class="detail-list-item" :style='{"margin":"0 0 12rpx 0","borderColor":"#cccccc","borderWidth":"0 0 0px 0","background":"#ffffff","display":"flex","width":"100%","borderStyle":"solid","height":"auto"}'>
					<view class="lable" :style='{"width":"auto","padding":"0 20rpx 0 0","lineHeight":"48rpx","fontSize":"28rpx","color":"#333333","textAlign":"right"}'>预约单号：</view>
					<view  class="text" :style='{"padding":"0px 0 0 0","margin":"0 0 0 0","lineHeight":"48rpx","fontSize":"28rpx","color":"#666666"}'>{{detail.yuyuedanhao}}</view>
				</view>
				<view class="detail-list-item" :style='{"margin":"0 0 12rpx 0","borderColor":"#cccccc","borderWidth":"0 0 0px 0","background":"#ffffff","display":"flex","width":"100%","borderStyle":"solid","height":"auto"}'>
					<view class="lable" :style='{"width":"auto","padding":"0 20rpx 0 0","lineHeight":"48rpx","fontSize":"28rpx","color":"#333333","textAlign":"right"}'>医生账号：</view>
					<view  class="text" :style='{"padding":"0px 0 0 0","margin":"0 0 0 0","lineHeight":"48rpx","fontSize":"28rpx","color":"#666666"}'>{{detail.yishengzhanghao}}</view>
				</view>
				<view class="detail-list-item" :style='{"margin":"0 0 12rpx 0","borderColor":"#cccccc","borderWidth":"0 0 0px 0","background":"#ffffff","display":"flex","width":"100%","borderStyle":"solid","height":"auto"}'>
					<view class="lable" :style='{"width":"auto","padding":"0 20rpx 0 0","lineHeight":"48rpx","fontSize":"28rpx","color":"#333333","textAlign":"right"}'>挂号时间：</view>
					<view  class="text" :style='{"padding":"0px 0 0 0","margin":"0 0 0 0","lineHeight":"48rpx","fontSize":"28rpx","color":"#666666"}'>{{detail.guahaoshijian}}</view>
				</view>
				<view class="detail-list-item" :style='{"margin":"0 0 12rpx 0","borderColor":"#cccccc","borderWidth":"0 0 0px 0","background":"#ffffff","display":"flex","width":"100%","borderStyle":"solid","height":"auto"}'>
					<view class="lable" :style='{"width":"auto","padding":"0 20rpx 0 0","lineHeight":"48rpx","fontSize":"28rpx","color":"#333333","textAlign":"right"}'>账号：</view>
					<view  class="text" :style='{"padding":"0px 0 0 0","margin":"0 0 0 0","lineHeight":"48rpx","fontSize":"28rpx","color":"#666666"}'>{{detail.zhanghao}}</view>
				</view>
				<view class="detail-list-item" :style='{"margin":"0 0 12rpx 0","borderColor":"#cccccc","borderWidth":"0 0 0px 0","background":"#ffffff","display":"flex","width":"100%","borderStyle":"solid","height":"auto"}'>
					<view class="lable" :style='{"width":"auto","padding":"0 20rpx 0 0","lineHeight":"48rpx","fontSize":"28rpx","color":"#333333","textAlign":"right"}'>姓名：</view>
					<view  class="text" :style='{"padding":"0px 0 0 0","margin":"0 0 0 0","lineHeight":"48rpx","fontSize":"28rpx","color":"#666666"}'>{{detail.xingming}}</view>
				</view>



				<view class="detail-list-item" :style='{"margin":"0 0 12rpx 0","borderColor":"#cccccc","borderWidth":"0 0 0px 0","background":"#ffffff","display":"flex","width":"100%","borderStyle":"solid","height":"auto"}'>
					<view class="lable" :style='{"width":"auto","padding":"0 20rpx 0 0","lineHeight":"48rpx","fontSize":"28rpx","color":"#333333","textAlign":"right"}'>备注</view>
					<view class="text" :style='{"padding":"0px 0 0 0","margin":"0 0 0 0","lineHeight":"48rpx","fontSize":"28rpx","color":"#666666"}'>{{detail.beizhu}}</view>
				</view>





				<view class="bottom-content bg-white tabbar border shop" :style='{"width":"100%","padding":"0","flexWrap":"wrap","background":"none","display":"flex","height":"auto"}'>

					<button :style='{"border":"0","padding":"0 20rpx 0 20rpx","margin":"0 20rpx 12rpx 0","color":"#ffffff","background":"#cc0000","width":"auto","fontSize":"28rpx","height":"80rpx"}' @tap="onPayTap" v-if="userid&&isAuth('wodeguahao','支付') && detail.ispay!='已支付'"  class="cu-btn bg-brown round shadow-blur">支付</button>
					<button :style='{"border":"0","padding":"0 20rpx 0 20rpx","margin":"0 20rpx 12rpx 0","color":"#ffffff","background":"#cc0000","width":"auto","fontSize":"28rpx","height":"80rpx"}' @tap="onPayTap" v-if="!userid&&isAuthFront('wodeguahao','支付') && detail.ispay!='已支付'"  class="cu-btn bg-brown round shadow-blur">支付</button>
					<button :style='{"border":"0","padding":"0 20rpx 0 20rpx","margin":"0 20rpx 12rpx 0","color":"#ffffff","background":"#cc0000","width":"auto","fontSize":"28rpx","height":"80rpx"}' v-if="!isAuth('wodeguahao','支付') && detail.ispay!='已支付'" class="cu-btn bg-brown round shadow-blur">未支付</button>
					<button :style='{"border":"0","padding":"0 20rpx 0 20rpx","margin":"0 20rpx 12rpx 0","color":"#ffffff","background":"#cc0000","width":"auto","fontSize":"28rpx","height":"80rpx"}' v-if="detail.ispay=='已支付'"  class="cu-btn bg-brown round shadow-blur">已支付</button>
				</view>
			</view>

		</view>
	</view>
</mescroll-uni>
</view>
</template>

<script>
	export default {
		data() {
			return {
				btnColor: ['#409eff','#67c23a','#909399','#e6a23c','#f56c6c','#356c6c','#351c6c','#f093a9','#a7c23a','#104eff','#10441f','#a21233','#503319'],
				id: '',
                userid: '',
				detail: {},
				swiperList: [],
				commentList: [],
				mescroll: null, //mescroll实例对象
				downOption: {
					auto: false //是否在初始化后,自动执行下拉回调callback; 默认true
				},
				upOption: {
					noMoreSize: 3, //如果列表已无数据,可设置列表的总数量要大于半页才显示无更多数据;避免列表数据过少(比如只有一条数据),显示无更多数据会不好看; 默认5
					textNoMore: '~ 没有更多了 ~',
				},
				hasNext: true,
				user: null,
				count: 0,
				timer: null
			}
		},
		computed: {
			baseUrl() {
				return this.$base.url;
			},
		},
		async onLoad(options) {
			this.id = options.id;
            if(options.userid) {
                this.userid = options.userid;
            }
			// 渲染数据
			this.init();
		},
        onUnload() {
            if(this.timer) {
                clearInterval(this.timer);
            }
        },
		async onShow(options) {
			let table = uni.getStorageSync("nowTable");
			// 获取用户信息
			let res = await this.$api.session(table);
			this.user = res.data;
			this.btnColor = this.btnColor.sort(()=> {
				return (0.5-Math.random());
			});
			let crossCleanType = uni.getStorageSync('crossCleanType')
            if(crossCleanType) {
				uni.removeStorageSync('crossCleanType')
                res = await this.$api.info('wodeguahao', this.id);
                this.detail = res.data;
            }
		},
		destroyed: function() {
			//window.clearInterval(this.inter);
		},
		methods: {
			// 支付
			onPayTap(){
				uni.setStorageSync('paytable','wodeguahao');
				uni.setStorageSync('payObject',this.detail);
				this.$utils.jump('../pay-confirm/pay-confirm?type=1')
			},
            onDetailTap(item) {
                uni.setStorageSync("useridTag",this.userid);
                this.$utils.jump(`./detail?id=${item.id}&userid=`+this.userid)
            },
			// 跨表
			onAcrossTap(tableName,crossOptAudit,statusColumnName,tips,statusColumnValue){
				if(!this.user){
					
					return false
				}
				uni.setStorageSync('crossTable','wodeguahao');
				uni.setStorageSync(`crossObj`, this.detail);
				uni.setStorageSync(`statusColumnName`, statusColumnName);
				uni.setStorageSync(`statusColumnValue`, statusColumnValue);
				uni.setStorageSync(`tips`, tips);
				if(statusColumnName!=''&&!statusColumnName.startsWith("[")) {
					var obj = uni.getStorageSync('crossObj');
					for (var o in obj){
						if(o==statusColumnName && obj[o]==statusColumnValue){
							this.$utils.msg(tips);
							return
						}
					}
				}
				this.$utils.jump(`../${tableName}/add-or-update?cross=true`);
			},
			// 获取详情
			async init(){
                if(this.timer) {
                    clearInterval(this.timer);
                }
				let res = await this.$api.info('wodeguahao', this.id);
				this.detail = res.data;
			},

			// mescroll组件初始化的回调,可获取到mescroll对象
			mescrollInit(mescroll) {
				this.mescroll = mescroll;
			},

			/*下拉刷新的回调 */
			downCallback(mescroll) {
				this.hasNext = true
				mescroll.resetUpScroll()
			},

			/*上拉加载的回调: mescroll携带page的参数, 其中num:当前页 从1开始, size:每页数据条数,默认10 */
			async upCallback(mescroll) {
				mescroll.endSuccess(mescroll.size, this.hasNext);

            },



			onChatTap() {
				this.$utils.jump('../chat/chat')
			},
			// 下载
			download(url){
				let _this = this;
				url=_this.$base.url +  url;
				uni.downloadFile({
					url: url,
					success: (res) => {
						if (res.statusCode === 200) {
							_this.$utils.msg('下载成功');
							 window.open(url);
						}
					}
				});
			},
			//
			onCartTabTap() {
				this.$utils.tab('../shop-cart/shop-cart')
			},
			// 添加评论
			async onCommentTap() {
				if(!this.user){
					
					return false
				}
				this.$utils.jump(`../discusswodeguahao/add-or-update?refid=${this.id}`)
			},
			onSHTap() {
				if(!this.user){
					
					return false
				}
				this.$refs.popup.open()
			},
		}
	}
</script>

<style lang="scss" scoped>
	.content {
		min-height: calc(100vh - 44px);
		box-sizing: border-box;
	}
	
	.seat-list {
		display: flex;
		align-items: center;
		flex-wrap: wrap;
		background: #FFFFFF;
		margin: 20upx;
		border-radius: 20upx;
		padding: 20upx;
		font-size: 30upx;
		.seat-item {
			width: 33.33%;
			display: flex;
			align-items: center;
			flex-direction: column;
			margin-bottom: 20upx;
	
			.seat-icon {
				width: 50upx;
				height: 50upx;
				margin-bottom: 10upx;
			}
		}
	}
	
	audio {
		display: flex;
		flex-direction: column;
	}
	
	.audio /deep/ .uni-audio-default {
		width: inherit;
	}
</style>
