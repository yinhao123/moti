<template>
	<view class="content">
		<view class="detailHeader">
			<view class="headerImg">
				<i class="iconfont moti-daifahuo"></i>
			</view>
			<view class="headerText">
				<p class="textName">待收货</p>
				<p class="textInfo">宝贝准备中。。。</p>
			</view>
		</view>
		<view class="detailAddress">
			<view class="userText">
				<span class="name">{{detail.address.name}}</span>
				<span>{{detail.address.tel}}</span>
			</view>
			<view class="addressText">{{detail.address.address}}</view>
		</view>
		<view class="detailGoods">
			<view class="goodsImg">
				<image :src="detail.goods.imgUrl" mode=""></image>
			</view>
			<view class="goodsText">
				<view class="goodsInfo">
					<p class="goodsName">{{detail.goods.name}}</p>
					<p class="goodsDetail">{{detail.goods.detail}}</p>
				</view>
				<view class="goodsOther">
					<view class="goodsPrice">{{detail.goods.price}}元</view>
					<view class="goodsNum">x{{detail.goods.num}}</view>
				</view>
			</view>
		</view>
		<view class="orderInfo">
			<view class="orderList" v-for="(list,index) in detail.order" :key="index">
				<view>{{list.name}}</view>
				<view :class="list.name=='实付款'?'priceText':''">{{list.num}}</view>
			</view>
		</view>
		<view class="lianxikf">
			<view class="kf">联系客服</view>
		</view>
		<view class="detailBottom">
			<view class="btn" @tap="toHome">返回首页</view>
			<view class="btn" @tap="toRefund">申请退款</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				detail:{
					address:{name:"木木",tel:"13422222222",address:"北京市北京市朝阳区东煌大厦19层1917室"},
					goods:{
						imgUrl:"/static/logo.png",
						name:"MOJO一次性雾化棒 单只",
						detail:"浓情雪茄",
						num: 1,
						price:"39.00"
					},
					order:[
						{name:"商品总价",num:"39.00"},
						{name:"邮费",num:"12.00"},
						{name:"优惠券",num:"10.00"},
						{name:"满减",num:"-0.00"},
						{name:"实付款",num:"41.00"}
					]
				}
			}
		},
		methods: {
			toHome:function (){
				uni.switchTab({
					url: '/pages/index/index'
				})
			},
			toRefund:function (){
				uni.navigateTo({
					url: "/pages/refund/refund"
				});
			}
		}
	}
</script>

<style scoped lang="scss">
	.content{
		height: 100%;
		.detailHeader{
			height: 190upx;
			display: flex;
			justify-content: flex-start;
			align-items: center;
			padding: 0 30upx;
			background: #ffffff;
			.headerImg{
				width: 130upx;
				height: 130upx;
				line-height: 130upx;
				text-align: center;
				background: #f9f9f9;
				border-radius: 50%;
				margin-right: 20upx;
				i{font-size: 60upx}
			}
			.headerText{
				p{
					font-size: 24upx;
					color: #000000;
					font-family: MicrosoftYaHei;
				}
				.textInfo{
					font-size: 22upx;
					color: #9a9a9a;
				}
			}
		}
		.detailAddress{
			margin-top: 30upx;
			height: 150upx;
			background: #ffffff;
			padding: 36upx 30upx;
			.userText{
				font-size: 24upx;
				color: #000000;
				.name{margin-right: 42upx}
			}
			.addressText{
				font-size: 22upx;
				color: #9a9a9a;
				margin-top: 30upx;
			}
		}
		.detailGoods{
			height: 300upx;
			margin-top: 30upx;
			background: #ffffff;
			padding: 65upx 30upx;
			display: flex;
			justify-content: flex-start;
			align-items: center;
			.goodsImg{
				image{
					width: 150upx;
					height: 150upx;
				}
			}
			.goodsText{
				width: 100%;
				padding-left: 20upx;
				.goodsInfo{
					.goodsName{
						font-size: 24upx;
						color: #000000;
					}
					.goodsDetail{
						font-size: 22upx;
						color: #9a9a9a
					}
				}
				.goodsOther{
					display: flex;
					justify-content: space-between;
					margin-top: 65upx;
					.goodsPrice{
						font-size: 30upx;
						color: #ff0000;
					}
					.goodsNum{
						font-size: 30upx;
					}
				}
			}
		}
		.orderInfo{
			background: #ffffff;
			padding: 30upx;
			margin-top: 20upx;
			.orderList{
				display: flex;
				justify-content: space-between;
				font-size: 22upx;
				color: #000000;
				margin-bottom: 20upx;
				.priceText{
					font-size: 30upx;
					color: #ff0000;
				}
			}
		}
		.lianxikf{
			height: 275upx;
			display: flex;
			justify-content: flex-end;
			.kf{
				width: 180upx;
				height: 50upx;
				text-align: center;
				line-height: 50upx;
				background: #ffffff;
				border-radius: 10upx;
				border:2upx solid #a2a2a2;
				margin:40upx 30upx 0 0;
				color: #9a9a9a;
				font-size: 26upx;
				box-sizing: border-box;
			}
		}
		.detailBottom{
			height: 100upx;
			width: 100%;
			background: #ffffff;
			position: fixed;
			bottom: 0;
			display: flex;
			justify-content: flex-end;
			.btn{
				width: 180upx;
				height: 50upx;
				text-align: center;
				line-height: 50upx;
				background: #ffffff;
				border-radius: 10upx;
				border:2upx solid #a2a2a2;
				margin:24upx 20upx;
				color: #9a9a9a;
				font-size: 26upx;
				box-sizing: border-box;
			}
		}
	}
</style>
