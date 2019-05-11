<template>
	<view class="content">
		<view class="exchange">
			<view class="exchangeInput">
				<input type="text" value="" placeholder="请输入兑换口令"/>
			</view>
			<view class="subBtn">提交</view>
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

<style scoped lang="scss">
	.content{
		height: 100%;
		background: #ffffff;
		display: flex;
		align-items: center;
		.exchange{
			width: 100%;
			.exchangeInput{
				width: 50%;
				margin: 0 auto;
				text-align: center;
				padding-bottom: 10upx;
				border-bottom: 1px solid #000000;
				box-sizing: border-box;
			}
		}
		.subBtn{
			width: 170upx;
			height: 60upx;
			margin:0 auto;
			margin-top: 120upx;
			line-height: 60upx;
			text-align: center;
			font-size: 22upx;
			color: #000000;
			border:1upx solid #000000;
			box-sizing: border-box;
		}
	}
</style>
