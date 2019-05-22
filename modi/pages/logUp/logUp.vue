<template>
	<view class="wrapper">
		<from action="">
			<view class="from-list">
				<view>
					<text class="iconfont user-icon">&#xe61a;</text>
					<input type="text" @blur="" name="user" placeholder="请输入用户名" />
				</view>
				<view>
					<text class="iconfont">&#xe655;</text>
					<input type="number" name="user" placeholder="请输入手机号" />
				</view>
				<view>
					<text class="iconfont">&#xe647;</text>
					<input type="text" name="authCode" placeholder="请输入验证码" />
					<button>获取验证码</button>
				</view>
				<view>
					<text class="iconfont lock">&#xe6b3;</text>
					<input type="text" password="true" name="password" placeholder="请输入登录密码" />
					<text class="iconfont is-show">&#xe73d;</text>
				</view>
				<view>
					<text class="iconfont lock">&#xe6b3;</text>
					<input type="text" password="true" name="repeatPassword" placeholder="请再次输入登录密码" />
					<text class="iconfont is-show">&#xe7b2;</text>
				</view>
			</view>
			<button>注册</button>
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
			width: 100%;
			height: 100%;
			display: flex;
			flex-direction: column;
			justify-content: space-between;
			align-content: center;

			.from-list {
				view {
					height: 98upx;
					padding: 0 30upx;
					display: flex;
					justify-content: space-between;
					align-items: center;
					background: #ffffff;
					border: 1px solid #f6f6f6;

					.iconfont {
						font-size: 48upx;
						margin-right: 30upx;
						color: #999999;
					}
					.is-show{
						margin-right: 0;
						font-size: 46upx;
					}
					input {
						flex: 1;
						font-family: MicrosoftYaHei;
						color:#999999;
					}

					button {
						width: 180upx;
						height: 60upx;
						background: #ff4a64;
						border-radius: 8px;
						font-size: 22upx;
						color: #ffffff;
					}

					.lock {
						margin-left: 5upx;
						margin-right: 34upx;
						font-size: 38upx;
					}
				}
			}

			>button {
				width: 690upx;
				height: 82upx;
				background: #050505;
				border-radius: 10upx;
				color: #ffffff;
				font-size: 24upx;
				line-height: 82upx;
				margin-bottom: 40upx;
			}
		}
	}
</style>
