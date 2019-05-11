<template>
	<view class="content">
		<view class="userInfo">
			<view class="user">
				<view class="userImg"></view>
				<view class="userName">请叫我锦鲤</view>
			</view>
			<view class="">icon</view>
		</view>
		<view class="others">
			<view class="othersItem" v-for="(item,index) in othersList" :key="index">
				<view class="itemIcon">icon</view>
				<view :class="index == othersList.length-1?'item lastChild':'item'"
					@click="toPath(item.path)">
					<view class="">{{item.text}}</view>
					<view class="icon">></view>
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
					{id:0,text:"订单",path:""},
					{id:0,text:"口令兑换",path:""},
					{id:0,text:"收获地址",path:"/pages/address/address"},
					{id:0,text:"优惠券",path:""}
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
				width: 90%;
				height: 130upx;
				padding: 0 30upx;
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
