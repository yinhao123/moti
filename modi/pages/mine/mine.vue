<template>
	<view class="content">
		<view class="userInfo">
			<view class="user">
				<view class="userImg"></view>
				<view class="userName">请叫我锦鲤</view>
			</view>
			<view class="iconfont moti-xiaoxi"></view>
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
	export default {
		data() {
			return {
				othersList:[
					{id:0,text:"订单",path:"",icon:"moti-calendar"},
					{id:0,text:"口令兑换",path:"/pages/exchange/exchange",icon:"moti-calendar"},
					{id:0,text:"收获地址",path:"/pages/address/address",icon:"moti-dizhi"},
					{id:0,text:"优惠券",path:"",icon:"moti-youhuiquan"}
				]
			}
		},
		methods: {
			toPath:function (path){
				let url = path;
				uni.navigateTo({
					url: url
				});
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
					overflow: hidden
				}
				.userName{
					margin-left: 20upx;
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
