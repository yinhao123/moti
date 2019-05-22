<template>
	<view class="wrapper">
		<image src="../../static/logn.png" class="logn"></image>
		<form action="">
			<view class="input-wrapper">
				<text class="iconfont">&#xe660;</text>
				<input type="text" name="input" placeholder="请输入用户名" />
			</view>
			<view class="input-wrapper">
				<text class="iconfont">&#xe628;</text>
				<input type="text" password="true" name="input" placeholder="请输入密码" />
				<navigator>忘记密码？</navigator>
			</view>
			<button>登录</button>
		</form>
		<navigator url="/pages/logUp/logUp">注册</navigator>
		<view class="sign">
			
			<view class="text">其他登录方式</view>
		</view>
			<navigator class="iconfont">&#xe67a;</navigator>
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
	.wrapper {
		min-height: 100%;
		min-width: 100%;
		background: url(../../static/dlybj.png) no-repeat center/cover;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		.logn {
			width: 380upx;
			height: 160upx;
		}

		form {
			width: 670upx;
			padding-top: 130upx;
			margin-bottom: 30upx;

			.input-wrapper {
				width: 100%;
				height: 88upx;
				background: #ffffff;
				border-radius: 44upx;
				opacity: 0.8;
				margin-bottom: 20upx;
				display: flex;
				align-items: center;

				.iconfont {
					margin: 0 30upx;
					font-size: 44upx;
					height: 88upx;
					line-height: 88upx;
					color: #3e3e3e;
				}

				input {
					width: 425upx;
					line-height: 88upx;
					font-size: 26upx;
				}

				navigator {
					font-size: 26upx;
					color: #ff4a64;
				}

			}

			button {
				margin-top: 60upx;
				width: 470upx;
				height: 88upx;
				background-color: #ff4a64;
				border-radius: 44upx;
				color: #ffffff;
				font-size: 30upx;
				line-height: 88upx;
				text-align: center;
			}
		}

		navigator {
			width: 290upx;
			height: 68upx;
			line-height: 68upx;
			text-align: center;
			background-color: #ffffff;
			border-radius: 34upx;
			opacity: 0.6;
			font-size: 30upx;
			font-family: SourceHanSansCN-Regular;
		}

		.sign {
			margin-top: 100upx;
			display: flex;
			width: 670upx;

			.line {
				flex: 1;
				position: relative;
				top: -14upx;
				border-bottom: 1upx solid rgba(255, 255, 255, 0.4);
			}

			.text {
				padding: 0 12upx;
				font-weight: 700;
				font-size: 20upx;
				font-weight: normal;
				font-family: SourceHanSansCN-Regular;
				color: #ffffff;
				opacity: 0.4;
			}
		}

		.log-in-link {
			margin-top: 46upx;
			width: 330upx;
			height: 70upx;
			display: flex;
			justify-content: space-between;

			navigator {
				width: 70upx;
				height: 70upx;
				border-radius: 35upx;
				text-align: center;
				line-height: 70upx;
				color: #000;
				background: #ffffff;
				font-size: 50upx;
				opacity: 0.4;
			}
		}
	}
</style>
