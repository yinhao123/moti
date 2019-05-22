<template>
	<view class="wrapper">
		<from name="passwordReset">
			<view class="from-list">
				<view class="from-items"> 
					<text class="iconfont">&#xe655;</text>
					<input type="text"  name="user" placeholder="请输入手机号" />
				</view>
				<view class="from-items codeCon">
					<view class="code">
						<text class="iconfont">&#xe647;</text>
						<input type="text" name="authCode" placeholder="请输入验证码" />
					</view>
					<view class="getCode">
						获取验证码
					</view>
				</view>
				<view class="from-items">
					<text class="iconfont lock">&#xe6b3;</text>
					<input type="text" password="true" name="password" placeholder="请输入新密码" />
				</view>
				<view class="from-items">
					<text class="iconfont lock">&#xe6b3;</text>
					<input type="text" password="true" name="password" placeholder="请再次输入新密码" />
				</view>
				<view class="from-items errText">
					错误提示位置
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

<style lang="scss" scoped>
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

			align-content: space-between;
			.from-list {
				.from-items {
					height: 98upx;
					padding-left: 30upx;
					display: flex;
					align-items: center;
					background: #ffffff;
					border: 1px solid #f6f6f6;
					.code{
						display: flex;
						justify-content: space-around;
					}
					.getCode{
						width: 180upx;
						height: 60upx;
						background: #fa5151;
						color: #fff;
						font-size: 22upx;
						text-align: center;
						line-height: 60upx;
						border-radius: 8upx;
					}
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
				.codeCon{
					justify-content: space-between;
					padding-right: 30upx;
				}
				.errText{
					background: none;
					font-size: 22upx;
					color: #fa5151;
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
