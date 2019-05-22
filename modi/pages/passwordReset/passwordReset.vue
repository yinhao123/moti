<template>
	<view class="wrapper">
		<from name="passwordReset">
			<view class="from-list">
				<view>
					<text class="iconfont">&#xe655;</text>
					<input type="text"  name="user" placeholder="请输入手机号" />
				</view>
				<view>
					<text class="iconfont">&#xe647;</text>
					<input type="text" name="authCode" placeholder="请输入验证码" />
				</view>
				<view>
					<text class="iconfont lock">&#xe6b3;</text>
					<input type="text" password="true" name="password" placeholder="请输入新密码" />
				</view>
				<view>
					<text class="iconfont lock">&#xe6b3;</text>
					<input type="text" password="true" name="password" placeholder="请再次输入新密码" />
				</view>
			</view>
			<button>确认提交</button>
		</from>
	</view>
</template>

<script>
	export default {
		data() {
			return {

			};
		}
	}
</script>

<style lang="scss">
	.wrapper {
		height: 100%;
		width: 100%;
		background: #f6f6f6;
		padding-top: 20upx;
		display: flex;
		align-items: stretch;
		from {
			height: 100%;
			display: flex;
			flex-direction: column;
			justify-content: space-between;

			align-content: space-between;
			.from-list {
				view {
					height: 98upx;
					padding-left: 30upx;
					display: flex;
					align-items: center;
					background: #ffffff;
					border: 1px solid #f6f6f6;

					.iconfont {
						font-size: 48upx;
						margin-right: 30upx;
					}

					.lock {
						margin-left: 5upx;
						margin-right: 34upx;
						font-size: 38upx;
					}
				}
			}

			button {
				width: 690upx;
				height: 82upx;
				background:#050505;
				border-radius:10upx;
				color: #ffffff;
				font-size: 24upx;
				line-height: 82upx;
			}
		}
	}
</style>
