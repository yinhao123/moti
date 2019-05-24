<template>
	<view class="content">
		<text class="hint">身份信息仅对自己可见</text>
		<view class="submit-list">
			<view class="submit-item">
				<text class="hint">真实姓名</text>
				<input type="text" name="name" placeholder="请输入您的真实姓名" v-model="name" />
				<text class="iconfont moti-round_close_fill_light"></text>
			</view>
			<view class="submit-item">
				<text class="hint">身份证号</text>
				<input type="text" name="IDNunber" placeholder="请输入您的18位身份证号" v-model="IDNunber" />
				<text class="iconfont moti-round_close_fill_light"></text>
			</view>
		</view>
		<text class="hint">身份信息一旦保存，无法修改</text>
		<view class="buttom-wrapper">
			<view class="buttom">
				保存
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				name: '',
				IDNunber: ''
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
				.iconfont{
					padding: 5upx;
					color: #3e3e3e;
					opacity:0.4;
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
