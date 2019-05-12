<template>
	<view class="content">
		<template v-if="couponList.length > 0">
			<view class="couponCon" v-for="(item,index) in couponList" :key="index">
				<view class="couponItem" style="background: url(../../static/coupon.png) no-repeat 100% 100%;">
					<view class="couponInfo">
						<view>
							<p class="couponName">{{item.name}}</p>
							<p class="couponOther">{{item.info}}</p>
						</view>
						<view class="couponData">有效期至 : {{item.data}}</view>
					</view>
					<view class="couponNum">
						<view class="couponPrice">{{item.price}}<span> 元 </span></view>
						<view class="useCoupon">立即使用</view>
					</view>
				</view>
			</view>
		</template>
		<template v-else>
			<view  class="noCoupon">
				<view>
					暂无可用优惠券
				</view>
			</view>
		</template>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				couponList:[
					{id:0,name:"10元抵扣券",info:"*全品类通用，单件商品除外",data:"2019-01-17",price:"10.00"},
					{id:1,name:"8元抵扣券",info:"*全品类通用，单件商品除外",data:"2019-01-17",price:"8.00"},
					{id:2,name:"3元抵扣券",info:"*全品类通用，单件商品除外",data:"2019-01-17",price:"3.00"}
				]
			}
		},
		methods: {
			
		}
	}
</script>

<style scoped lang="scss">
	.content{
		height: 100%;
		font-family: MicrosoftYaHei;
		.couponCon{
			height: 200upx;
			// margin-bottom: 30upx;
			padding: 20upx;
			.couponItem{
				height: 100%;
				display: flex;
				justify-content: space-between;
				// background: #ffffff;
				.couponInfo{
					padding: 30upx 20upx;
					.couponName{
						font-size: 24upx;
					}
					.couponOther{
						color: #606060;
						font-size: 22upx;
					}
					.couponData{
						color: #9a9a9a;
						font-size: 22upx;
						margin-top: 30upx;
					}
				}
				.couponNum{
					padding: 40upx;
					view{
						width: 100%;
						text-align: center;
					}
					.couponPrice{
						font-size: 48upx;
						font-weight: normal;
						font-stretch: normal;
						letter-spacing: -2px;
						color: #e00005;
						span{
							font-size: 22upx;
							margin-left: 10upx;
						}
					}
					.useCoupon{
						width: 130upx;
						height: 30upx;
						background-color: #000000;
						border-radius: 15upx;	
						color: #ffffff;
						font-size: 18upx;
					}
				}
			}
		}
		.noCoupon{
			height: 100%;
			display: flex;
			align-items: center;
			color: #9a9a9a;
			view{
				width: 100%;
				font-size: 30upx;
				text-align: center;
			}
		}
	}
</style>
