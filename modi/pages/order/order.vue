<template>
	<view class="content">
		<view class="orderItems" v-for="(items,index) in orderList" :key="index">
			<view class="itemsTitle">
				<view>订单编号：{{items.order}}</view>
				<view>{{items.orderType}}</view>
			</view>
			<view class="itemsInfo" @tap="orderDetailPath">
				<view class="goodsItem" v-for="(goods,index0) in items.orderInfo" :key="index0">
					<view class="goodsImg">
						<image :src="goods.imgUrl" mode=""></image>
					</view>
					<view class="goodsInfo">
						<view class="goodsTop">
							<view class="goodsName">{{goods.goodsName}}</view>
							<view>x{{goods.goodsNum}}</view>
						</view>
						<view class="goodsBottom">
							<view>{{goods.goodsInfo}}</view>
							<view class="goodsPrice">x{{goods.goodsPrice}}</view>
						</view>
					</view>
				</view>
			</view>
			<view class="itemsFooter">
				<view>共 {{items.orderNum}} 件</view>
				<view>应付总额：<span>{{items.orderPrice}} 元</span></view>
			</view>
			<view class="itemsBtn">
				<view class="btn">退款中</view>
				<view class="btn">付款</view>
				<view class="btn cancel">取消订单</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				orderList:[{
						id:0,
						order:"213123129123",
						orderStatus:0,
						orderType:"退款中",
						orderPrice:459.00,
						orderNum:1,
						orderInfo:[
							{
								imgUrl:"/static/logo.png",
								goodsNum:1,
								goodsName:"MOTI大礼盒（1杆+10物化弹+4MOJO）",
								goodsInfo:"MOTOxMOJO大礼盒 礼盒版499.00",
								goodsPrice:499.00
							}
						]
					},
					{
						id:1,
						order:"223423429123",
						orderStatus:1,
						orderType:"待付款",
						orderInfo:[
							{
								imgUrl:"/static/logo.png",
								goodsNum:1,
								goodsName:"MOTI一次性物化棒 一次性物化棒单只",
								goodsInfo:"浓情雪茄 39.00",
								goodsPrice:39.00
							},
							{
								imgUrl:"/static/logo.png",
								goodsNum:1,
								goodsName:"MOTI一次性物化棒 一次性物化棒单只",
								goodsInfo:"浓情雪茄 39.00",
								goodsPrice:39.00
							}
						],
						orderPrice:78.00,
						orderNum:2
					}]
				
			}
		},
		methods: {
			orderDetailPath:function (){
				uni.navigateTo({
					url: "/pages/orderDetail/orderDetail"
				});
			}
		}
	}
</script>

<style scoped lang="scss">
	.content{
		height: 100%;
		.orderItems{
			margin-top: 30upx;
			background: #ffffff;
			padding-left:30upx;
			.itemsTitle{
				padding-right:30upx;
				height: 84upx;
				display: flex;
				justify-content: space-between;
				align-items: center;
				view{
					font-size: 20upx;
					color: #9a9a9a;
				}
			}
			.itemsInfo{
				padding-right:30upx;
				border-top: 1upx solid #e8e8e8;
				border-bottom: 1upx solid #e8e8e8;
				box-sizing: border-box;
				.goodsItem{
					height: 210upx;
					display: flex;
					justify-content: space-between;
					align-items: center;
					.goodsImg{
						image{
							width: 150upx;
							height: 150upx;
						}
					}
					.goodsInfo{
						padding-left: 30upx;
						width: 100%;
						display: flex;
						flex-direction: column;
						.goodsTop,.goodsBottom{
							display: flex;
							justify-content: space-between;
							width: 100%;
						}
						.goodsTop{
							min-height: 80upx;
							align-self:flex-start;
							view{
								align-self:flex-start;
								font-size: 30upx;
								font-family: ArialMT;
							}
							.goodsName{
								width: 80%;
							}
						}
						.goodsBottom{
							align-self:flex-end;
							view{
								align-self:flex-end;
								font-size: 22upx;
								color: #9a9a9a;
							}
							.goodsPrice{
								font-size: 30upx;
								color: #000000;
								font-family: ArialMT;
							}
						}
					}
				}
			}
			.itemsFooter{
				padding-right:30upx;
				display: flex;
				justify-content: flex-end;
				align-items: center;
				height: 120upx;
				border-bottom: 1upx solid #e8e8e8;
				box-sizing: border-box;
				view{
					font-family: AdobeHeitiStd-Regular;
					font-size: 32upx;
					margin-left: 50upx;
					span{
						color: #e00005;
					}
				}
			}
			.itemsBtn{
				padding-right:30upx;
				height: 130upx;
				display: flex;
				justify-content: flex-end;
				align-items: center;
				.btn{
					width: 210upx;
					height: 50upx;
					line-height: 50upx;
					text-align: center;
					background: #000000;
					color: #ffffff;
					font-size: 22upx;
					border-radius: 10upx;
					margin: 0 10upx;
				}
				.cancel{
					background: #fff;
					border: 2upx solid #a2a2a2;
					border-radius: 10upx;
					box-sizing: border-box;
					color: #9a9a9a;
				}
			}
		}
	}
</style>
