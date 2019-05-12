<template>
	<view class="content">
		<view class="emptyCart">
			<i class="iconfont moti-cart"></i>
			<text>您还没有选购商品</text>
			<view class="goBuy" @tap="goBuy">
				去逛逛
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			goBuy: function(){
				uni.switchTab({
					url:'/pages/index/index'
				})
			}
		}
	}
</script>

<style lang="scss">
.content{
	.emptyCart{
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
		i{
			padding-top: 200upx;
			font-size: 160upx;
			color: #ababab;
		}
		text{
			line-height: 80upx;
			color: #ababab;
		}
		.goBuy{
			width: 300upx;
			line-height: 70upx;
			border: 1upx solid #ababab;
			border-radius: 10upx;
			text-align: center;
			color: #9a9a9a;
		}
	}
}
</style>
