<template>
	<view class="content">
		<view class="userInfo">
			<view class="user">
				<view class="userImg">
					<image :src="headImage" mode=""></image>
				</view>
				<view class="userFlex" @tap="goInfo">				
					<view class="userName">请叫我锦鲤</view>
					<view class="personFile">完善资料 <text class="iconfont moti-right"></text> </view>
				</view>
			</view>
			<view class="iconfont moti-xiaoxi" @tap="goNotes"></view>
		</view>
		<view class="others">
			<view class="othersItem" v-for="(item,index) in othersList" :key="index">
				<view class="iconfont itemIcon" :class="item.icon"></view>
				<view :class="index == othersList.length-1?'item lastChild':'item'"
					@tap="toPath(item.path)">
					<view class="">{{item.text}}</view>
					<view class="iconfont moti-jiantou"></view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import { loadInfo } from '@/common/request.js'
	export default {
		data() {
			return {
				othersList:[
					{id:0,text:"订单",path:"/pages/order/order",icon:"moti-calendar"},
					{id:0,text:"口令兑换",path:"/pages/exchange/exchange",icon:"moti-iconfontduihuan"},
					{id:0,text:"收获地址",path:"/pages/address/address",icon:"moti-dizhi"},
					{id:0,text:"优惠券",path:"/pages/coupon/coupon",icon:"moti-youhuiquan"}
				],
				headImage:null
			};
			
			
		},
		onShow:function() {
			loadInfo();
			let userInfo = uni.getStorageSync("userInfo");
			this.userInfo = userInfo;
			this.headImage = userInfo.avatarPicSrc;
		},
		methods: {
			toPath:function (path){
				let url = path;
				uni.navigateTo({
					url: url
				});
			},
			goNotes:function (){
				uni.navigateTo({
					url:"../notes/notes"
				})
			},
			goInfo:function(){
				uni.navigateTo({
					url:'../perfectInfo/perfectInfo'
				})
			}
		}
	}
</script>

<style scoped lang="scss">
	.content{
		background: #ffffff;
		.userInfo{
			display: flex;
			justify-content: space-between;
			align-items:center;
			height: 360upx;
			padding: 0 30upx;
			border-bottom:1upx solid #eeeeee;
			box-sizing: border-box;
			.user{
				display: flex;
				align-items:center;
				.userImg{
					width: 110upx;
					height: 110upx;
					border-radius: 50%;
					background: #d7d7d7;
					display: inline-block;
					overflow: hidden;
					image{
						width: 110upx;
						height: 110upx;
					}
				}
				.userFlex{
					display: flex;
					flex-direction: column;
					margin-left: 20upx;
					view{
						height: 48upx;
					}
					.personFile{
						color: #999999;
					}
				}
			}
		}
		.others{
			.othersItem{
				display: flex;
				justify-content: space-between;
				height: 130upx;
				padding: 0 30upx;
				.itemIcon{
					margin-right: 30upx;
				}
				view{
					line-height: 130upx;
				}
				.item{
					display: flex;
					justify-content: space-between;
					width: 100%;
					border-bottom:1upx solid #eeeeee;
					box-sizing: border-box;
				}
				.lastChild{
					border: 0;
				}
			}
		}
	}
</style>
