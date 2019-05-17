<template>
	<view class="content" style="background: url(../../static/bg.png) no-repeat;">
		<view class="signHead">
			<view>获取魔币</view>
			<view class="musicImg"><image src="/static/music.png" mode=""></image></view>
		</view>
		<view class="mobi">
			<view class="mobiTop">当前魔币</view>
			<view class="mobiNum">50</view>
		</view>
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
		<view class="signInfo">
			<view class="infoTitle">物化弹套餐75折券</view>
			<view class="infoDec">物化弹套餐75折券</view>
			<view class="progress-box">
				<progress percent="30" active stroke-width="6" activeColor="#EAC774" backgroundColor="#000000"/>
			</view>
			<view class="infoNum">
				<view><span>50</span>/300</view>
				<view>30%</view>
			</view>
		</view>
		<view class="signBottom">
			<view>魔币不足，无法兑换</view>
			<view class="mobiBtn">
				<view class="btn">
					邀请好友赚魔币
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				// 轮播图片
				swiperList: [
					{ id: 1, src: 'url1', img: '../../static/dk1.png' },
					{ id: 2, src: 'url2', img: '../../static/dk2.png' },
					{ id: 3, src: 'url3', img: '../../static/dk3.png' },
					{ id: 4, src: 'url4', img: '../../static/dk4.png' }
				]
			}
		},
		onBackPress: function(){
			// // uni.switchTab({
			// // 	url:"/pages/index/index"
			// // });
			// uni.navigateBack({
			// 	delta: 3
			// });
			uni.switchTab({
				url:"/pages/index/index"
			})
		},
		methods: {
			//轮播图指示器
			swiperChange(event) {
				this.currentSwiper = event.detail.current;
			}
		}
	}
</script>

<style scoped lang="scss">
	.content{
		height: 100%;
		color: #fff;
		.signHead{
			display: flex;
			padding: 60upx 40upx;
			padding-bottom: 0;
			justify-content: space-between;
			align-items: center;
			view{
				font-size: 22upx;
			}
			.musicImg{
				image{
					width: 65upx;
					height: 65upx;
				}
			}
		}
		.mobi{
			height: 80upx;
			view{text-align: center;}
			.mobiTop{
				font-size: 22upx;
			}
			.mobiNum{
				font-size: 48upx;
			}
		}
		.swiper{
			width: 80%;
			margin:40upx auto;
			.swiperCon{
				height: 450upx;
			}
		}
		.signInfo{
			width: 80%;
			margin:40upx auto;
			view{
				margin-bottom: 20upx;
			}
			.infoTitle{
				font-size: 24upx;
			}
			.infoDec{
				font-size: 20upx;
				color: #666666;
			}
			.infoNum{
				display: flex;
				justify-content: space-between;
				view{
					font-size: 20upx;
					color: #666666;
					span{
						color: #fff;
					}
				}
			}
		}
		.signBottom{
			margin-top: 50upx;
			view{
				font-size: 22upx;
				color: #666666;
				text-align: center;
			}
			.mobiBtn{
				margin-top: 20upx;
				.btn{
					width: 280upx;
					height: 70upx;
					margin: 0 auto;
					color: #fff;
					text-align: center;
					line-height: 70upx;
					border: 2upx solid #666;
					border-radius: 10upx;
				}
			}
		}
	}
</style>
