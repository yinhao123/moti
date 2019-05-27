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
			<scroll-view scroll-y="true" class="left">
				<view class="row" v-for="(category,index) in categoryList" :key="index" :class="[index==showCategoryIndex?'on':'']"
				 @tap="switchCategory(index)">
					<view class="text">
						{{category.name}}
					</view>
				</view>

			</scroll-view>
			<!-- 右侧子导航 -->
			<scroll-view scroll-y="true" class="right" v-for="(category,categoryIndex) in categoryList" :key="categoryIndex" @scrolltolower="pullUpLoad(categoryIndex)" v-show="categoryIndex==showCategoryIndex">
				<view class="category">
					<view class="banner">
						<image :src="category.banner"></image>
					</view>
					<view class="list">
						<view class="box" v-if="category" v-for="(box,boxIndex) in category.list" :key="boxIndex" @tap="toGoodsDetail(box.id)">
							<view class="boxImg">
								<image :src="box.img"></image>
							</view>
							<view class="boxText">
								<view class="name">{{box.name}}</view>
								<view class="other">
									<view class="price">{{box.price}}</view>
									<view><i class="iconfont moti-cart" @tap.stop="addToCart(box.id)"></i></view>
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
	import {
		addCar,
		queryGoodsSpuByCategroy,
		queryCategroyList,
		checkLoginName
	} from '@/common/request.js'

	export default {
		data() {
			return {
				// 轮播图片
				swiperList: [{
						id: 1,
						src: 'url1',
						img: '../../static/banner1.png'
					},
					{
						id: 2,
						src: 'url2',
						img: '../../static/banner2.jpg'
					},
					{
						id: 3,
						src: 'url3',
						img: '../../static/banner1.png'
					}
				],
				showCategoryIndex: 0, // 显示类别索引
				categoryList: [], // 商品列表数据总数组
			}
		},
		onLoad() {
//checkLoginName("abcdefg");

			this.getCategoryData()
		},
		methods: {
			async getCategoryData () { // 获取商品列表左侧栏目数据
				let {data} = await queryCategroyList(-1)

				if (data.code === "0") {
					this.categoryList = data.result.map((item) => {
						return {
							id: item.id,
							name: item.name,
							banner: '../../static/ad.png',
							page: 1,
							list: []
						}
					})
					
					this.getGoodsList(0, data.result[0].id) // 获取商品列表
				}
			},
			async getGoodsList (index, cId, page, rows) { // 获取商品列表
				page = page || 1 		// 默认请求第一页
				rows = rows || 10		// 默认一页10条数据
				let category = this.categoryList[index] 
				
				let {data} = await queryGoodsSpuByCategroy(cId, page, rows)
				
				if (data.code === "0") {
					if (!data.result.rows.length) {
						category.isGone = true
						this.promptBox('没有商品了')
						return false
					}
					
					category.list = category.list.concat(data.result.rows.map(item => {
							return {
								id: item.id,
								cid: item.cid,
								name: item.name,
								img: "../../static/u1.png", // 这个字段暂无
								price: item.marketPrice
							}	
						}) 
					)
					category.list.total = data.result.total
					category.isLoad = true // 存储该栏目第一次已经请求过的状态
				}
			},
			//轮播图指示器
			swiperChange(event) {
				this.currentSwiper = event.detail.current;
			},
			//分类切换显示
			switchCategory (index) {
				this.showCategoryIndex = index;
				
				if (this.categoryList[index].isLoad) return false // 如果已经点击栏目加载过，那么不重复请求
				
				this.getGoodsList(index, this.categoryList[index].id) // 获取第一页的数据
			},
			// 点击跳转到 商品详情页面
			toGoodsDetail (goodsId) { // 商品的ID
				uni.navigateTo({
					url: "/pages/goods/goods?goodsId=" + goodsId
				});
			},
			// 上拉加载下一页
			pullUpLoad (index) { // 参数：栏目的索引
				let category = this.categoryList[index]
				
				if (category.isGone) { // 数据已经加载完了，拦截请求
					this.promptBox('没有商品了')
					return false
				}
				
				// 加载下一页数据
				this.getGoodsList(index, category.id, ++ category.page) // page属性记录的是已经加载过的页面的页码。这里加载下一页要加1
			},
			promptBox (title) {
				uni.showToast({
					title,
					icon: 'none'
				})
			},
			// 添加到购物车
			async addToCart (id) {
				let {data} = await addCar(id, 1)
				let text = data.code === "0" ? '添加成功' : data.msg
				this.promptBox(text)
			}
		}
	}
</script>

<style scoped lang="scss">
	.content {
		height: 100%;

		.swiper-box {
			.swiperCon {
				width: 100%;
				height: 300upx;

				.swiperItem {
					image {
						width: 100%;
						height: 300upx;
					}
				}
			}
		}

		.category-list {
			width: 100%;
			display: flex;

			.left,
			.right {
				position: absolute;
				top: 300upx;
				bottom: 0upx;
				background: #fff;
			}

			.left {
				width: 170upx;
				left: 0upx;
				border-right: 2upx solid #eeeeee;
				box-sizing: border-box;

				.row {
					width: 100%;
					height: 90upx;
					display: flex;
					align-items: center;

					.text {
						width: 100%;
						position: relative;
						font-size: 26upx;
						display: flex;
						justify-content: center;
						color: #c9c9c9;
					}

					&.on {
						.text {
							font-size: 26upx;
							color: #000000;
							font-weight: 500;
						}
					}
				}
			}

			.right {
				width: calc(100% - 170upx);
				left: 170upx;

				.category {
					padding: 20upx 50upx 0 20upx;

					.banner {
						width: 100%;
						height: 200upx;
						overflow: hidden;

						image {
							width: 100%;
							height: 200upx;
						}
					}

					.list {
						margin-top: 40upx;
						width: 100%;
						display: flex;
						flex-wrap: wrap;

						.box {
							width: 100%;
							margin-bottom: 30upx;
							display: flex;
							justify-content: flex-start;
							align-items: center;
							flex-wrap: nowrap;

							.boxImg {
								image {
									width: 150upx;
									height: 150upx;
								}
							}

							.boxText {
								align-self: flex-start;
								padding-left: 20upx;
								position: relative;
								width: 100%;
								height: 100%;

								.name {
									font-size: 24upx;
									color: #000000;
								}

								.other {
									position: absolute;
									bottom: 0;
									display: flex;
									justify-content: space-between;
									width: 100%;

									.price {
										font-size: 36upx;
										color: #e00005;
										letter-spacing: -2px;
									}

									i {
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
