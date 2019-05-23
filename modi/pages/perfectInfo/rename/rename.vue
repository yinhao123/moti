<template>
	<view class="wrapper">
		<form action="" class="from-list">
			<view class="from-items">
				<input type="text" name="name" v-model="name" />
				<text class="iconfont">&#xe658;</text>
			</view>

			<view class="hint">
				<text class="iconfont">&#xe6e4;</text>
				<text class="hint-content">您还可以修改{{number}}次</text>
			</view>
		</form>
		<view class="buttom" @click="back(name)">
			保存
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				name: '',
				number: ''
			};
		},
		onLoad: function(option) {
			this.name = option.name;
		},
		methods:{
			back: function (name){
				var url = '../perfectInfo/perfectInfo?name=';
				if(name === '')url='../perfectInfo/perfectInfo';
				uni.reLaunch({
					url:url + name
				})

			}
		}
	}
</script>

<style lang="scss">
	.wrapper {
		height: 100%;
		width: 690upx;
		background: #f6f6f6;
		padding-top: 20upx;
		display: flex;
		flex-direction: column;
		align-items: space-between;

		.from-items {
			width: 100%;
			height: 98upx;
			padding: 0 30upx;
			display: flex;
			justify-content: space-between;
			align-items: center;
			background: #ffffff;
			border: 1px solid #f6f6f6;

			.iconfont {
				padding: 10upx;
				font-size: 40upx;
				color: #3e3e3e;
				opacity: 0.4;
			}

		}

		.hint {
			padding: 20upx 30upx;
			font-size: 22upx;
			font-family: MicrosoftYaHei;
			color: #999999;
			flex: 1;
			display: flex;
			align-items: center;

			.iconfont {
				margin-right: 10upx;
				font-size: 20upx;
			}

		}

		.buttom {
			width: 690upx;
			height: 82upx;
			background-color: #050505;
			border-radius: 10upx;
			line-height: 82upx;
			text-align: center;
			color: #ffffff;
		}



		.errText {
			background: none;
			font-size: 22upx;
			color: #fa5151;
		}
	}
</style>
