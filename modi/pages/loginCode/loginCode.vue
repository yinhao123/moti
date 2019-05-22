<template>
	<view class="content">
		<view class="title">输入验证码</view>
		<view class="text">6位验证码已发送至</view>
		<view class="mobile">
			<view class="left">
				<span>+86</span>
				<text>{{mobile}}</text>
			</view>
			<view class="right">
				{{time}}
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				mobile:'',
				time:60
			}
		},
		onLoad:function (option) {
			this.mobile = option.mobile;
		},
		methods: {
			
		}
	}
</script>

<style scoped lang="scss">
	.content{
		padding: 120upx 80upx;
		height: 100%;
		background: #fff;
		.title{
			font-size: 48upx;
			font-family: MicrosoftYaHei-Bold;
		}
		.text{
			margin-top: 60upx;
			font-size: 24upx;
			color: #999;
		}
		.mobile{
			margin-top: 30upx;
			display: flex;
			align-items: center;
			justify-content: space-between;
			.left{
				font-size: 30upx;
				color: #000;
				span{
					margin-right: 30upx;
				}
			}
			.right{
				font-size: 22upx;
				color: #999;
			}
		}
	}
</style>
