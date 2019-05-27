<template>
	<view class="contentBody">
		<!-- 底部菜单 -->
		<view class="footer">
			<view class="icons">
				<view class="box footerCart" @tap="toCart">
					<view class="iconfont moti-cart_light"></view>
					<view class="cartNum">{{cartNum}}</view>
				</view>
				<!-- <view class="box" @tap="share">
					<view class="iconfont moti-share_light"></view>
				</view> -->
				<view class="box" @tap="toChat">
					<view class="iconfont moti-service_light"></view>
				</view>
			</view>
			<view class="btn">
				<view class="joinCart" @tap="joinCart">加入购物车</view>
				<view class="buy" @tap="buy">下单</view>
			</view>
		</view>
		<!-- share弹窗 -->
		<view class="share" :class="shareClass" @touchmove.stop.prevent="discard" @tap="hideShare">
			<view class="mask"></view>
			<view class="layer" @tap.stop="discard">
				<view class="h1">分享</view>
				<view class="list">
					<view class="box">
						<image src="../../static/img/share/wx.png"></image>
						<view class="title">
							微信好友
						</view>
					</view>
					<view class="box">
						<image src="../../static/img/share/pyq.png"></image>
						<view class="title">
							朋友圈
						</view>
					</view>
					<view class="box">
						<image src="../../static/img/share/wb.png"></image>
						<view class="title">
							新浪微博
						</view>
					</view>
					<view class="box">
						<image src="../../static/img/share/qq.png"></image>
						<view class="title">
							QQ
						</view>
					</view>
				</view>
				<view class="btn" @tap="hideShare">
					取消
				</view>
			</view>
		</view>
		<!-- 满减-模态层弹窗 -->
		<view class="popup fullReduce" :class="fullReduceClass" @touchmove.stop.prevent="discard" @tap="hidefullReduce">
			<!-- 遮罩层 -->
			<view class="mask"></view>
			<view class="layer" @tap.stop="discard">
				<view class="content">
					<view class="row" v-for="(item,index) in goodsData" :key="index">
						<view class="title">{{item.title}}</view>
						<view class="description">{{item.content}}</view>
					</view>
				</view>
				<view class="btn">
					<view class="button" @tap="hidefullReduce">我知道了</view>
				</view>
			</view>
		</view>
		<!-- 服务-模态层弹窗 -->
		<view class="popup service" :class="serviceClass" @touchmove.stop.prevent="discard" @tap="hideService">
			<!-- 遮罩层 -->
			<view class="mask"></view>
			<view class="layer" @tap.stop="discard">
				<view class="content">
					<view class="row" v-for="(item,index) in goodsData.service" :key="index">
						<view class="title">{{item.name}}</view>
						<view class="description">{{item.description}}</view>
					</view>
				</view>
				<view class="btn">
					<view class="button" @tap="hideService">我知道了</view>
				</view>
			</view>
		</view>
		<!-- 规格-模态层弹窗 -->
		<view class="popup spec" :class="specClass" @touchmove.stop.prevent="discard" @tap="hideSpec">
			<!-- 遮罩层 -->
			<view class="mask"></view>
			<view class="layer" @tap.stop="discard">
				<view class="content" v-for="attrItem in good.attr">
					<view class="title">口味</view>
					<view class="sp">
						<view v-for="(items,index0) in goodsData.spec0" @tap="setSelectSpec(0,index0)" :key="index0" :class="[selectSpec0 == index0?'on':'']">
							{{items}}
						</view>
					</view>
				</view>
		<!-- 		<view class="content">
					<view class="title">规格</view>
					<view class="sp">
						<view v-for="(items,index1) in goodsData.spec1" @tap="setSelectSpec(1,index1)" :key="index1" :class="[selectSpec1 == index1?'on':'']">
							{{items}}
						</view>
					</view>
				</view> -->
				<!-- <view class="content" v-for="(items,index) in goodsData.spec" :key="index">
					<view class="title">{{items.title}}</view>
					<view class="sp">
						<view v-for="(item,index0) in items.type" :key="index0"
						:class="[item.checked?'on':'']"
						@tap="setSelectSpec(index,index0)">{{item.name}}</view>
					</view>
				</view> -->
				<view class="btn">
					<view class="button" @tap="hideSpec">完成</view>
				</view>
			</view>
		</view>
		<!-- 商品主图轮播 -->
		<view class="swiper-box">
			<swiper circular="true" autoplay="true" @change="swiperChange">
				<swiper-item v-for="swiper in swiperList" :key="swiper.id">
					<image :src="swiper.img"></image>
				</swiper-item>
			</swiper>
			<view class="indicator">{{currentSwiper+1}}/{{swiperList.length}}</view>
		</view>
		<!-- 标题 价格 -->
		<view class="info-box goods-info">
			<view class="price">￥<span>{{good.marketPrice}}</span></view>
			<view class="title">
				{{good.name}}
			</view>
			<view class="other">
				<view>快递：<span>{{goodsData.kd}}</span></view>
				<view>销量：<span>{{goodsData.sell}}</span></view>
			</view>
		</view>
		<!-- 服务-规则选择 -->
		<view class="info-box spec">
			<view class="row" @tap="showfullReduce">
				<view class="text">促销</view>
				<view class="content no-between">
					<text class="serviceitem" v-for="activityItem in good.activityList">{{activityItem.name}}</text>
				</view>
				<view class="arrow">
					<view class="iconfont moti-right"></view>
				</view>
			</view>
			<view class="row" @tap="showService">
				<view class="text">优惠</view>
				<view class="content no-between">
					<text class="serviceitem" v-for="couponItem in good.couponList">{{couponItem.service}}</text>
				</view>
				<view class="arrow">
					<view class="iconfont moti-right"></view>
				</view>
			</view>
			<view class="row" @tap="showSpec(false)">
				<view class="text">规格</view>
				<view class="content">
					<view class="sp">
						<view>{{goodsData.specDefault}}</view>
					</view>
				</view>
				<view class="arrow">
					<view class="iconfont moti-right"></view>
				</view>
			</view>
		</view>
		<!-- 详情 -->
		<view class="description">
			<view class="title">商品详情</view>
			<view class="content">
				<rich-text :nodes="descriptionStr"></rich-text>
			</view>
		</view>
		<!-- 评价 -->
		<view class="info-box comments" id="comments">
			<view class="row">
				<view class="text">商品评价({{goodsData.comment.number}})</view>
				<view class="arrow">
					<view class="show" @tap="showComments(goodsData.id)">
						查看全部
						<view class="iconfont moti-right"></view>
					</view>
				</view>
			</view>
			<view class="comment">
				<view class="user-info">
					<view class="face">
						<image :src="goodsData.comment.userface"></image>
					</view>
					<view class="username">{{goodsData.comment.username}}</view>
				</view>
				<view class="content">
					{{goodsData.comment.content}}
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import {goodsSpuQuery} from '@/common/request.js'
	
	const ERR_OK = 0;
	// 后端返回的活动类型对照
	const activityType = {
		'1':'直降',
		'2':'满减',
		'3':'秒杀'
	};
	 
	export default {
		data() {
			return {
				//主页传来的商品id
				id: '',
				//控制渐变标题栏的参数
				beforeHeaderzIndex: 11, //层级
				afterHeaderzIndex: 10, //层级
				beforeHeaderOpacity: 1, //不透明度
				afterHeaderOpacity: 0, //不透明度
				//是否显示返回按钮
				// #ifndef MP
				showBack: true,
				// #endif
				cartNum: 0,
				//轮播主图数据
				swiperList: [{
						id: 1,
						img: 'https://s2.ax1x.com/2019/03/28/AdOfUJ.jpg'
					},
					{
						id: 2,
						img: 'https://s2.ax1x.com/2019/03/28/AdOWE4.jpg'
					},
					{
						id: 3,
						img: 'https://s2.ax1x.com/2019/03/28/AdO2bF.jpg'
					},
					{
						id: 4,
						img: 'https://s2.ax1x.com/2019/03/28/AdOh59.jpg'
					}
				],
				//轮播图下标
				currentSwiper: 0,
				anchorlist: [], //导航条锚点
				selectAnchor: 0, //选中锚点
				fullReduceClass: '', //满减弹窗css类，控制开关动画
				serviceClass: '', //服务弹窗css类，控制开关动画
				specClass: '', //规格弹窗css类，控制开关动画
				shareClass: '', //分享弹窗css类，控制开关动画
				// 商品信息
				good:{},
				goodsData: {
					id: 1,
					name: "MOTI雾化弹 补充替换装（相同口味4颗）",
					price: "127.00",
					number: 1,
					kd: "满99包邮",
					sell: "12314",
					fullReduce: [{
						"title": "满减",
						content: "满298.00减20.00元、满445.00减30.00元、满298.00减20.00元"
					}],
					discount: "满298.00减20.00元、满445.00减30.00元、满298.00减20.00元",
					service: "优惠券x3",
					specDefault: "(新品)绿豆冰沙 4支装",
					spec0: ["(新品)绿豆冰沙", "(新品)风情芒果", "经典烟草", "香醇烟草", "强劲薄荷"],
					spec1: ["单支装", "4只装"],
					comment: {
						number: 102,
						userface: '../../static/img/face.jpg',
						username: '大黑哥',
						content: '很不错，之前买了很多次了，很好看，能放很久，和图片色差不大，值得购买！'
					}

				},
				selectSpec0: null, //选中规格
				selectSpec1: null, //选中规格
				isKeep: false, //收藏
				//商品描述html
				descriptionStr: '<div style="text-align:center;"><img width="100%" src="https://s2.ax1x.com/2019/03/28/AdOogx.jpg"/><img width="100%" src="https://s2.ax1x.com/2019/03/28/AdOHKK.jpg"/><img width="100%" src="https://s2.ax1x.com/2019/03/28/AdOTv6.jpg"/></div>'
			};
		},
		onLoad(option) {
			// #ifdef MP
			//小程序隐藏返回按钮
			this.showBack = false;
			// #endif
			//option为object类型，会序列化上个页面传递的参数
			// console.log(option.cid); //打印出上个页面传递的参数。
			this.id = option.cid;
		},
		onReady() {
			this.calcAnchor(); //计算锚点高度，页面数据是ajax加载时，请把此行放在数据渲染完成事件中执行以保证高度计算正确
		},
		onPageScroll(e) {
			//锚点切换
			this.selectAnchor = e.scrollTop >= this.anchorlist[2].top ? 2 : e.scrollTop >= this.anchorlist[1].top ? 1 : 0;
			//导航栏渐变
			let tmpY = 375;
			e.scrollTop = e.scrollTop > tmpY ? 375 : e.scrollTop;
			this.afterHeaderOpacity = e.scrollTop * (1 / tmpY);
			this.beforeHeaderOpacity = 1 - this.afterHeaderOpacity;
			//切换层级
			this.beforeHeaderzIndex = e.scrollTop > 0 ? 10 : 11;
			this.afterHeaderzIndex = e.scrollTop > 0 ? 11 : 10;
		},
		//上拉加载，需要自己在page.json文件中配置"onReachBottomDistance"
		onReachBottom() {
			uni.showToast({
				title: '触发上拉加载'
			});
		},
		mounted() {
			this.getGood()
		},
		methods: {
			//轮播图指示器
			swiperChange(event) {
				this.currentSwiper = event.detail.current;
			},
			async getGood() {
				let {data} = await goodsSpuQuery(112415102440)
				if(data.code == ERR_OK){
					this.good= data.result;
				}
			},
			toCart() {
				uni.switchTab({
					url: "/pages/cart/cart"
				})
			},
			// 客服
			toChat() {
				uni.showToast({
					title: "联系客服"
				});
				// uni.navigateTo({
				// 	url:"../msg/chat/chat?name=客服008"
				// })
			},
			// 分享
			share() {
				this.shareClass = 'show';
			},
			hideShare() {
				this.shareClass = 'hide';
				setTimeout(() => {
					this.shareClass = 'none';
				}, 150);
			},
			//收藏
			// keep(){
			// 	this.isKeep = this.isKeep?false:true;
			// },
			// 加入购物车
			joinCart() {
				return this.showSpec(() => {
					uni.showToast({
						title: "已加入购物车"
					});
				});
			},
			//立即购买
			buy() {
				return this.showSpec(() => {
					this.toConfirmation();
				});
				this.toConfirmation();
			},
			//跳转确认订单页面
			toConfirmation() {
				let tmpList = [];
				let goods = {
					id: this.goodsData.id,
					img: '../../static/img/goods/p1.jpg',
					name: this.goodsData.name,
					spec: '规格:' + this.goodsData.spec[this.selectSpec],
					price: this.goodsData.price,
					number: this.goodsData.number
				};
				tmpList.push(goods);
				uni.setStorage({
					key: 'buylist',
					data: tmpList,
					success: () => {
						uni.navigateTo({
							url: '/pages/placeOrder/placeOrder'
						})
					}
				})
			},
			//跳转评论列表
			showComments(goodsid) {
				console.log("跳转评论列表")
			},
			//选择规格
			setSelectSpec(id, index) {
				if (id == 0) {
					this.selectSpec0 = index
				} else {
					this.selectSpec1 = index
				}
			},
			//减少数量
			sub() {
				if (this.goodsData.number <= 1) {
					return;
				}
				this.goodsData.number--;
			},
			//增加数量
			add() {
				this.goodsData.number++;
			},
			//跳转锚点
			toAnchor(index) {
				this.selectAnchor = index;
				uni.pageScrollTo({
					scrollTop: this.anchorlist[index].top,
					duration: 200
				});
			},
			//计算锚点高度
			calcAnchor() {
				this.anchorlist = [{
						name: '主图',
						top: 0
					},
					{
						name: '评价',
						top: 0
					},
					{
						name: '详情',
						top: 0
					}
				]
				let commentsView = uni.createSelectorQuery().select("#comments");
				commentsView.boundingClientRect((data) => {
					let statusbarHeight = 0;
					//APP内还要计算状态栏高度
					// #ifdef APP-PLUS
					statusbarHeight = plus.navigator.getStatusbarHeight()
					// #endif
					let headerHeight = uni.upx2px(100);
					this.anchorlist[1].top = data.top - headerHeight - statusbarHeight;
					this.anchorlist[2].top = data.bottom - headerHeight - statusbarHeight;

				}).exec();
			},
			//返回上一页
			back() {
				uni.navigateBack();
			},
			//满减弹窗
			showfullReduce() {
				console.log('show');
				this.fullReduceClass = 'show';
			},
			//关闭满减弹窗
			hidefullReduce() {
				this.fullReduceClass = 'hide';
				setTimeout(() => {
					this.fullReduceClass = 'none';
				}, 200);
			},
			//服务弹窗
			showService() {
				console.log('show');
				this.serviceClass = 'show';
			},
			//关闭服务弹窗
			hideService() {
				this.serviceClass = 'hide';
				setTimeout(() => {
					this.serviceClass = 'none';
				}, 200);
			},
			//规格弹窗
			showSpec(fun) {
				console.log('show');
				this.specClass = 'show';
				this.specCallback = fun;
			},
			specCallback() {
				return;
			},
			//关闭规格弹窗
			hideSpec() {
				this.specClass = 'hide';
				//回调
				this.selectSpec && this.specCallback && this.specCallback();
				this.specCallback = false;
				setTimeout(() => {
					this.specClass = 'none';
				}, 200);
			},
			discard() {
				//丢弃
			}
		}
	};
</script>

<style lang="scss" scoped>
	.no-between{
		justify-content: flex-start !important;
	}
	.contentBody {
		padding-bottom: 100upx;
	}

	@keyframes showPopup {
		0% {
			opacity: 0;
		}

		100% {
			opacity: 1;
		}
	}

	@keyframes hidePopup {
		0% {
			opacity: 1;
		}

		100% {
			opacity: 0;
		}
	}

	@keyframes showLayer {
		0% {
			transform: translateY(0);
		}

		100% {
			transform: translateY(-100%);
		}
	}

	@keyframes hideLayer {
		0% {
			transform: translateY(-100%);
		}

		100% {
			transform: translateY(0);
		}
	}

	@font-face {
		font-family: 'HMfont-home';
		src: url('data:application/x-font-woff2;charset=utf-8;base64,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') format('woff2');
	}

	.icon {
		font-family: 'HMfont-home' !important;
		font-size: 26upx;
		font-style: normal;

		&.fenxiang {
			&:before {
				content: '\e642';
			}
		}

		&.xiangqian {
			&:before {
				content: '\e634';
			}
		}

		&.shoucangsel {
			&:before {
				content: '\e62c';
			}
		}

		&.shoucang {
			&:before {
				content: '\e62e';
			}
		}

		&.tongzhi {
			&:before {
				content: '\e729';
			}
		}

		&.kefu {
			&:before {
				content: '\e61e';
			}
		}

		&.cart {
			&:before {
				content: '\e614';
			}
		}

		&.jia {
			&:before {
				content: "\e641";
			}
		}

		&.jian {
			&:before {
				content: "\e643";
			}
		}
	}

	.swiper-box {
		position: relative;
		width: 100%;
		height: 100vw;

		swiper {
			width: 100%;
			height: 100vw;

			swiper-item {
				image {
					width: 100%;
					height: 100vw;
				}
			}
		}

		.indicator {
			display: flex;
			justify-content: center;
			align-items: center;
			padding: 0 25upx;
			height: 40upx;
			border-radius: 40upx;
			font-size: 22upx;
			position: absolute;
			bottom: 20upx;
			right: 20upx;
			color: #fff;
			background-color: rgba(0, 0, 0, 0.2);
		}
	}

	.info-box {
		width: 92%;
		padding: 20upx 4%;
		background-color: #fff;
		margin-bottom: 20upx;
	}

	.goods-info {
		.price {
			color: #e00005;

			span {
				font-size: 60upx;
				letter-spacing: -3px;
			}
		}

		.title {
			margin-top: 30upx;
			font-size: 30upx;
			letter-spacing: 0px;
			color: #000000;
		}

		.other {
			display: flex;
			justify-content: space-between;
			margin-top: 30upx;

			view {
				font-size: 22upx;
				color: #9a9a9a;
			}
		}
	}

	.spec {
		.row {
			width: 100%;
			height: 80upx;
			display: flex;
			border-bottom: 1upx solid #eeeeee;
			box-sizing: border-box;
			justify-content: flex-start;
			align-items: center;

			.text {
				font-size: 24upx;
				color: #000000;
				margin-right: 20upx;
			}

			.content {
				width: 90%;
				display: flex;
				justify-content: space-between;
				color: #e00005;

				.serviceitem {
					font-size: 24upx;
					margin-right: 10upx;
					overflow: hidden;
					text-overflow: ellipsis;
					white-space: nowrap;
				}

				.sp {
					width: 100%;
					display: flex;

					view {
						padding: 5upx 10upx;
						color: #999;
						margin-right: 10upx;
						font-size: 20upx;
						border-radius: 5upx;

						&.on {
							border: solid 1upx #f47952;
							padding: 4upx 8upx;
						}
					}
				}
			}

			.arrow {
				position: absolute;
				right: 4%;

				.iconfont {
					color: #e8e8e8;
				}
			}
		}
	}

	.comments {
		.row {
			width: 100%;
			height: 40upx;
			display: flex;
			align-items: center;
			margin: 0 0 30upx 0;

			.text {
				font-size: 30upx;
			}

			.arrow {
				font-size: 28upx;
				position: absolute;
				right: 4%;
				color: #17e6a1;

				.show {
					display: flex;
					align-items: center;

					.icon {
						color: #17e6a1;
					}
				}
			}
		}

		.comment {
			width: 100%;

			.user-info {
				width: 100%;
				height: 40upx;
				display: flex;
				align-items: center;

				.face {
					width: 40upx;
					height: 40upx;
					margin-right: 8upx;

					image {
						width: 40upx;
						height: 40upx;
						border-radius: 100%;
					}
				}

				.username {
					font-size: 24upx;
					color: #999;
				}
			}

			.content {
				margin-top: 10upx;
				font-size: 26upx;
			}
		}
	}

	.description {
		.title {
			width: 100%;
			height: 80upx;
			display: flex;
			padding-left: 30upx;
			align-items: center;
			font-size: 26upx;
			color: #999;
			background: #ffffff;
		}
	}

	.footer {
		position: fixed;
		bottom: 0upx;
		width: 100%;
		height: 100upx;
		border-top: 1upx solid #eee;
		background: #fff;
		z-index: 2;
		display: flex;
		justify-content: space-between;
		align-items: center;

		.icons {
			display: flex;

			.box {
				width: 105upx;
				height: 100upx;
				display: flex;
				justify-content: center;
				align-items: center;
				flex-wrap: wrap;
				box-sizing: border-box;
				border-right: 1upx solid #f7f7f7;

				.iconfont {
					font-size: 46upx;
					color: #828282;
				}
			}

			.footerCart {
				position: relative;

				.cartNum {
					position: absolute;
					top: 50%;
					right: 50%;
					width: 24upx;
					height: 24upx;
					line-height: 24upx;
					margin-top: -30upx;
					margin-right: -30upx;
					border-radius: 50%;
					background: #e00005;
					color: #ffffff;
					font-size: 22upx;
					text-align: center;
				}
			}
		}

		.btn {
			height: 100upx;
			overflow: hidden;
			display: flex;

			.joinCart,
			.buy {
				width: 270upx;
				height: 100upx;
				line-height: 100upx;
				padding: 0 40upx;
				text-align: center;
				color: #fff;
				font-size: 22upx;
			}

			.joinCart {
				background-color: #ffffff;
				color: #000000;
			}

			.buy {
				background-color: #000000;
			}
		}
	}

	.popup {
		position: fixed;
		top: 0;
		width: 100%;
		height: 100%;
		z-index: 20;
		display: none;

		.mask {
			position: fixed;
			top: 0;
			width: 100%;
			height: 100%;
			z-index: 21;
			background-color: rgba(0, 0, 0, 0.6);
		}

		.layer {
			position: fixed;
			z-index: 22;
			bottom: -70%;
			width: 92%;
			padding: 0 4%;
			height: 70%;
			border-radius: 20upx 20upx 0 0;
			background-color: #fff;
			display: flex;
			flex-wrap: wrap;
			align-content: space-between;

			.content {
				width: 100%;
				padding: 20upx 0;
			}

			.btn {
				width: 100%;
				height: 150upx;

				.button {
					width: 100%;
					height: 90upx;
					background: #000000;
					color: #fff;
					display: flex;
					align-items: center;
					justify-content: center;
					font-size: 22upx;
				}
			}
		}

		&.show {
			display: block;

			.mask {
				animation: showPopup 0.2s linear both;
			}

			.layer {
				animation: showLayer 0.2s linear both;
			}
		}

		&.hide {
			display: block;

			.mask {
				animation: hidePopup 0.2s linear both;
			}

			.layer {
				animation: hideLayer 0.2s linear both;
			}
		}

		&.none {
			display: none;
		}

		&.fullReduce {
			.row {
				margin: 30upx 0;
				display: flex;
				justify-content: space-between;

				.title {
					font-size: 22upx;
					width: 100upx;
					height: 40upx;
					text-align: center;
					line-height: 40upx;
					background: #fff;
					color: #e00005;
					border: 1upx solid #e00005;
					box-sizing: border-box;
					margin-right: 20upx;
				}

				.description {
					font-size: 22upx;
					color: #000000;
				}
			}
		}

		&.service {
			.row {
				margin: 30upx 0;

				.title {
					font-size: 30upx;
					margin: 10upx 0;
				}

				.description {
					font-size: 28upx;
					color: #999;
				}
			}
		}

		&.spec {
			.title {
				font-size: 24upx;
				margin: 30upx 0;
			}

			.sp {
				view {
					display: inline-block;
					font-size: 22upx;
					padding: 10upx 20upx;
					height: 40upx;
					line-height: 40upx;
					margin: 10upx;
					background-color: #fff;
					color: #000000;
					border-radius: 10upx;
					border: 2upx solid #bababa;

					&.on {
						background-color: #000;
						color: #fff;
						border: 2upx solid #000;
					}
				}
			}
		}
	}

	.share {
		display: none;

		&.show {
			display: block;

			.mask {
				animation: showPopup 0.15s linear both;
			}

			.layer {
				animation: showLayer 0.15s linear both;
			}
		}

		&.hide {
			display: block;

			.mask {
				animation: hidePopup 0.15s linear both;
			}

			.layer {
				animation: hideLayer 0.15s linear both;
			}
		}

		&.none {
			display: none;
		}

		.mask {
			background-color: rgba(0, 0, 0, .5);
			position: fixed;
			width: 100%;
			height: 100%;
			top: 0;
			z-index: 11;
		}

		.layer {
			width: 92%;
			position: fixed;
			z-index: 12;
			padding: 0 4%;
			top: 100%;
			background-color: rgba(255, 255, 255, 0.9);

			.list {
				width: 100%;
				display: flex;
				padding: 10upx 0 30upx 0;

				.box {
					width: 25%;
					display: flex;
					justify-content: center;
					flex-wrap: wrap;

					image {
						width: 13.8vw;
						height: 13.8vw;
					}

					.title {
						margin-top: 10upx;
						display: flex;
						justify-content: center;
						width: 100%;
						font-size: 26upx;
					}
				}
			}

			.btn {
				width: 100%;
				height: 100upx;
				display: flex;
				justify-content: center;
				align-items: center;
				font-size: 28upx;
				border-top: solid 1upx #666666;
			}

			.h1 {
				width: 100%;
				height: 80upx;
				display: flex;
				justify-content: center;
				align-items: center;
				font-size: 34upx;
			}
		}
	}
</style>
