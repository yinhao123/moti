<template>
	<view class="wrapper">
		<form action="" @submit="formSubmit">
			<view class="input-wrapper">
				<text class="iconfont">&#xe660;</text>
				<input type="text" name="input" placeholder="请输入用户名" />
			</view>
			<view class="input-wrapper">
				<text class="iconfont">&#xe628;</text>
				<input type="text" password="true" name="input" placeholder="请输入密码" />
			</view>
			<view class="input-wrapper">
				<text class="iconfont">&#xe633;</text>
				<input type="text" password="true" name="input" placeholder="请输入验证码" />
				<navigator>发送验证码</navigator>
			</view>
			<button formType="submit">立即注册</button>
		</form>
		<view class="agreement">*注册即代表您同意<navigator>《MOTI商城用户协议》</navigator>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {

			};
		},
		methods:{
			formSubmit: function(e) {
				console.log('form发生了submit事件，携带数据为：' + JSON.stringify(e.detail.value))
			}
		}
	}
</script>

<style lang="scss">
	.wrapper {
		min-height: 100%;
		background: url(../../static/zhuceybeij.png) no-repeat center/cover;
		display: flex;
		flex-direction: column;
		align-items: center;

		form {
			width: 670upx;
			margin-bottom: 30upx;
			margin-top: 640upx;
			.input-wrapper {
				width: 100%;
				height: 88upx;
				background: #ffffff;
				border-radius: 44upx;
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
				margin-top: 100upx;
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

		.agreement {
			width: 100%;
			height: 20upx;
			text-align: center;
			font-family: SourceHanSansCN-Regular;
			font-size: 20upx;
			font-weight: normal;
			font-stretch: normal;
			line-height: 10upx;
			letter-spacing: 0upx;
			color: #ffffff;

			navigator {
				color: #ff4a64;
				display: inline-block;
			}
		}
	}
</style>
