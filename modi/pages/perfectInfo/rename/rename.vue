<template>
	<view class="content-wrapper">
		<view class="content">
			<view class="input-text">
				<text class="iconfont user-icon">&#xe61a;</text>
				<input type="text" confirm-type="next" v-model="name" focus name="name" placeholder="请输入用户名" />
				<text class="iconfont moti-round_close_fill_light" @tap="clear"></text>
			</view>
			<view class="hint">您的用户还可以修改<text>{{sum?sum:'0'}}</text>次</view>
		</view>
		<view class="btn-wrapper">
			<view class="btn">确定更改用户名
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				name: '',
				sum: '12'
			};
		},
		onLoad: function(option) {
			this.name = option.name;
				this.sum = option.sum;
		},
		methods:{
			clear:function() {
				this.name = ''
			}
		}
	}
</script>


<style lang="scss">
	.content-wrapper {
		width: 100%;
		height: 100%;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		align-items: center;
		background: #f6f6f6;

		.content {
			width: 100%;

			.input-text {
				height: 98upx;
				padding: 0 30upx;
				display: flex;
				justify-content: space-between;
				align-items: center;
				background: #ffffff;
				.iconfont{
					margin-right: 15upx;
				}
				input {
					flex: 1;
					font-size: 24upx;
				}

				.iconfont {
					color: #999999;
					font-size: 34upx;
				}
			}
			.hint{
				width: 100%;
				padding: 20upx 30upx;
				font-size: 24upx;
				color: #999999;
				text{
					color: darkred;
					font-size: 24upx;
				}
			}
		}

		.btn-wrapper {
			flex: 1;
			display: flex;
			justify-content: center;
			align-items: flex-end;

			.btn {
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
