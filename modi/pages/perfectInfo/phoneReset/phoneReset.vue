<template>
	<view class="content">
		<view class="hint">
			<text class="hint-text">当前绑定手机号</text>
			<text class="hint-phone">188 **** 4435</text>
		</view>
		<view class="submit-list">
			<view class="submit-item">
				<text class="hint">+86</text>
				<input type="number" name="phone" placeholder="请输入新手机号" v-model="phone" />
				<text class="iconfont moti-round_close_fill_light"></text>
			</view>
			<view class="submit-item">
				<text class="hint">身份证号</text>
				<input type="text" name="code" placeholder="请输入验证码" v-model="code" />
				<view class="getCode">获取验证码</view>
			</view>
		</view>
		<view class="hint">修改手机后，可以使用新手机号登录MOTI到家</view>
		<view class="buttom-wrapper">
			<view class="buttom">
				确定更改手机号码
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				phone:'',
				code:''
			};
		}
	}
</script>

<style lang="scss">
	.content {
		width: 100%;
		height: 100%;
		display: flex;
		flex-direction: column;
		justify-content: space-between;

		.hint,
		.submit-item {
			padding: 0 30upx;
			display: flex;
			align-items: center;
			justify-content: space-between;
			font-size: 22upx;
		}

		.hint {
			height: 82upx;
			line-height: 82upx;
			font-family: MicrosoftYaHei;
			font-weight: normal;
			font-stretch: normal;
			letter-spacing: 0px;
			color: #666666;
		}

		.submit-list {
			background: #ffffff;

			.submit-item {
				border-bottom: 2upx solid #f6f6f6;

				.hint {
					padding-left: 0;
					color: #000000;
				}

				input {
					flex: 1
				}

				.iconfont {
					padding: 5upx;
					color: #3e3e3e;
					opacity: 0.4;
				}
			}
		}

		.buttom-wrapper {
			flex: 1;
			display: flex;
			justify-content: center;
			align-items: flex-end;

			.buttom {
				margin-bottom: 40upx;
				width: 690upx;
				height: 82upx;
				background-color: #050505;
				border-radius: 10upx;
				text-align: center;
				line-height: 82upx;
				font-size: 24upx;
				color: #ffffff;
			}
		}
	}
</style>
