<template>
	<view>
		<view class="news">
			<view class="time">
				<text><text class="dot">●</text>打卡成功</text>
				<text>12:59</text>
			</view>
			<view class="noteTxt">
				<text>今日打卡成功！获得10魔币奖励！</text>
			</view>
		</view>
		<view class="news">
			<view class="time">
				<text>打卡成功</text>
				<text>昨日 12:59</text>
			</view>
			<view class="noteTxt">
				<text>今日打卡成功！获得10魔币奖励！</text>
			</view>
		</view>
		<view class="news">
			<view class="time">
				<text>打卡成功</text>
				<text>5月13日 12:59</text>
			</view>
			<view class="noteTxt">
				<text>今日打卡成功！获得10魔币奖励！</text>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			
		}
	}
</script>

<style lang="scss">
.news{	
	width: 94%;
	background-color: #fff;
	padding: 30upx 3%;
	margin: 20upx 0;
	.time{
		display: flex;
		justify-content: space-between;
		margin-bottom: 10upx;
		.dot{
			color: #ff0000;
		}
	}
	.noteTxt{
		color: #9a9a9a;
	}
}
</style>
