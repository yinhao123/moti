<template>
	<view class="content">
		<!-- 轮播图 -->
		<view class="swiper">
			<view class="swiper-box">
				<swiper class="swiperCon" circular="true" autoplay="true" @change="swiperChange">
					<swiper-item class="swiperItem" v-for="swiper in swiperList" :key="swiper.id">
						<image :src="swiper.img" @tap="toSwiper(swiper)" class="bannerImg"></image>
					</swiper-item>
				</swiper>
			</view>
		</view>
		<!-- 分类 -->
		<view class="category-list">
			<!-- 左侧分类导航 -->
			<scroll-view  scroll-y="true" class="left" >
		        <view class="row" v-for="(category,index) in categoryList" :key="category.id" :class="[index==showCategoryIndex?'on':'']" @tap="showCategory(index)">
					<view class="text">
						{{category.title}}
					</view>
				</view>
				
		    </scroll-view>
			<!-- 右侧子导航 -->
			<scroll-view  scroll-y="true" class="right" >
			    <view class="category" v-for="(category,index) in categoryList" :key="category.id" v-show="index==showCategoryIndex" >
					<view class="banner">
						<image :src="category.banner"></image>
					</view>
					<view class="list">
						<view class="box" v-for="(box,i) in category.list" :key="i" @tap="toCategory(box)">
							<!-- <image :src="box.img"></image>
							<view class="text">{{box.name}}</view> -->
							<view class="boxImg">
								<image :src="box.img"></image>
							</view>
							<view class="boxText">
								<view class="name">{{box.name}}</view>
								<view class="other">
									<view class="price">{{box.price}}</view>
									<view><i class="iconfont moti-cart"></i></view>
								</view>
							</view>
						</view>
					</view>
				</view>
			</scroll-view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				// 轮播图片
				swiperList: [
					{ id: 1, src: 'url1', img: 'https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/shuijiao.jpg' },
					{ id: 2, src: 'url2', img: 'https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/muwu.jpg' },
					{ id: 3, src: 'url3', img: 'https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/cbd.jpg' }
				],
				showCategoryIndex:0,
				categoryList:[
					{id:1,title:'物化弹',banner:'https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/cbd.jpg',list:[
						{name:'MOTI物化弹（四颗装）绿豆/芒果 夏日新品',img:'https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/cbd.jpg',price:"299.00"},
						{name:'MOTI物化弹（四颗装）',img:'https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/cbd.jpg',price:"299.00"},
						{name:'MOTI物化弹',img:'https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/cbd.jpg',price:"299.00"},
						{name:'MOTI物化弹',img:'https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/cbd.jpg',price:"299.00"},
						{name:'MOTI物化弹',img:'https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/cbd.jpg',price:"299.00"},
						{name:'MOTI物化弹',img:'https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/cbd.jpg',price:"299.00"}
					]},
					{id:2,title:'购套装',banner:'https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/muwu.jpg',list:[
						{name:'MOTI物化弹（四颗装）绿豆/芒果 夏日新品',img:'https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/muwu.jpg',price:"299.00"},
						{name:'MOTI物化弹（四颗装）',img:'https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/muwu.jpg',price:"299.00"},
						{name:'MOTI物化弹',img:'https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/muwu.jpg',price:"299.00"}
					]},
					{id:3,title:'一次性',banner:'https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/shuijiao.jpg',list:[
						{name:'MOTI物化弹（四颗装）绿豆/芒果 夏日新品',img:'https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/shuijiao.jpg',price:"299.00"},
						{name:'MOTI物化弹（四颗装）',img:'https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/shuijiao.jpg',price:"299.00"},
						{name:'MOTI物化弹',img:'https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/shuijiao.jpg',price:"299.00"}
					]}
				]
			}
		},
		onLoad() {

		},
		methods: {
			//轮播图指示器
			swiperChange(event) {
				this.currentSwiper = event.detail.current;
			},
			//分类切换显示
			showCategory(index){
				this.showCategoryIndex = index;
			}
		}
	}
</script>

<style scoped lang="scss">
	.content{
		height: 100%;
		.swiper-box{
			.swiperCon{
				width: 100%;
				height: 300upx;
				.swiperItem{
					image{
						width: 100%;
						height: 300upx;
					}
				}
			}
		}
		.category-list{
			width: 100%;
			display: flex;
			.left,.right{
				position: absolute;
				top: 300upx;
				bottom: 0upx;
				background: #fff;
			}
			.left{
				width: 170upx;
				left: 0upx;
				border-right: 2upx solid #eeeeee;
				box-sizing: border-box;
				.row{
					width: 100%;
					height: 90upx;
					display: flex;
					align-items: center;
					.text{
						width: 100%;
						position: relative;
						font-size: 26upx;
						display: flex;
						justify-content: center;
						color: #c9c9c9;
					}
					&.on{
						.text{
							font-size: 26upx;
							color: #000000;
							font-weight: 500;
						}
					}
				}
			}
			.right{
				width: calc(100% - 170upx);
				left: 170upx;
				.category{
					padding: 20upx 50upx 0 20upx;
					.banner{
						width: 100%;
						height: 200upx;
						overflow: hidden;
						image{
							width: 100%;
							height: 200upx;
						}
					}
					.list{
						margin-top: 40upx;
						width: 100%;
						display: flex;
						flex-wrap: wrap;
						.box{
							width: 100%;
							margin-bottom: 30upx;
							display: flex;
							justify-content: flex-start;
							align-items: center;
							flex-wrap: nowrap;
							.boxImg{
								image{
									width: 150upx;
									height: 150upx;
								}
							}
							.boxText{
								align-self: flex-start;
								padding-left: 20upx;
								position: relative;
								width: 100%;
								height: 100%;
								.name{
									font-size: 24upx;
									color: #000000;
								}
								.other{
									position: absolute;
									bottom: 0;
									display: flex;
									justify-content: space-between;
									width: 100%;
									.price{
										font-size: 36upx;
										color: #e00005;
										letter-spacing: -2px;
									}
									i{
										font-size: 36upx;
										align-self: center;
									}
								}
							}
						}
					}
				}
			}
		}
	}
</style>
