<template>
	<view>
		<view class="payRes">
			<view class="tis">
				支付成功
			</view>
			<view class="icon">
				<image src="/static/success.png"></image>
			</view>
			<!-- <view class="pay-amount">
				支付金额:{{amount}}元
			</view> -->
			<view class="btnGroup">
				<view class="bakIndex" @tap="goPage('/pages/index/index')">
					返回首页
				</view>
				<view class="toOrder" @tap="goOrder('/pages/order/order')">
					查看订单
				</view>
			</view>
		</view>
		<view class="orderCode">
			<text>订单编号</text>
			<text>201903092340238</text>
		</view>
		<view class="buyerInfo">
			<text>收货人：木木</text>
			<text>收货地址：北京市北京市朝阳区东煌大厦19层</text>
			<text>联系电话：13901009900</text>
		</view>
<!-- 		<view class="back">
			<view class="btn" @tap="toUser">个人中心</view>
		</view> -->
	</view>
</template>

<script>
	export default {
		data() {
			return {
				amount: 0
			};
		},
		onLoad(e) {
			this.amount = parseFloat(e.amount).toFixed(2);
		},
		methods: {
			toUser() {
				uni.switchTab({
					url: '/pages/tabBar/user'
				});
			},
			goPage(link){
				uni.switchTab({
					url:link
				})
			},
			goOrder(link){
				uni.navigateTo({
					url:link
				})
			}
		},
	}
</script>

<style lang="scss">
	page {
		// background-color: #ffffff;
	}

	view {
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
	}
.payRes{
	padding-top: 50upx;
	padding-bottom: 50upx;
	background-color: #fff;
	width: 100%;
	.btnGroup{
		display: flex;
		margin-top: 30upx;
		view{
			width: 170upx;
			height: 70upx;
			border: 1px #a2a2a2 solid;
			display: flex;
			justify-content: center;
			align-items: center;
			margin-right: 10upx;
			border-radius: 8upx;
			color: #606060;
		}
	}
}
.orderCode{
	width: 100%;
	background-color:#fff;
	display: flex;
	justify-content: space-between;
	margin-top: 30upx;
	padding: 20upx 3%;
}
.buyerInfo{
	width: 100%;
	background-color: #fff;
	display: flex;
	flex-direction: column;
	margin-top: 30upx;
	padding: 20upx 3%;
	text{
		padding: 10upx 0;
	}
}
	.icon {
		width: 100%;
		margin-top: 10vw;

		image {
			width: 25vw;
			height: 25vw;
		}
	}

	.tis {
		width: 100%;
		
		font-size: 48upx;
	}

	.pay-amount {
		width: 100%;
		margin-top: 10upx;
		font-size: 32upx;
	}

	.back {
		position: absolute;
		width: 100%;
		bottom: 80upx;

		.btn {
			padding: 0 50upx;
			height: 70upx;
			border: solid 2upx #f06c7a;
			color: #f06c7a;
			align-items: center;
			border-radius: 10upx;
			font-size: 34upx;
		}
	}
</style>
