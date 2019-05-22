<template>
	<view class="by" @tap="goVideo">
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			goVideo: function(){
				uni.navigateTo({
					url:"../sign"
				})
			}
		}
	}
</script>

<style lang="scss">
	.by{
		// background-color: #ff0000;
		height: 100%;
		background: url("../../../static/step3.png") no-repeat;
		background-size: 100% 99%;
		}
.bg1{
	display: flex;
		width: 100%;
	height: 100%;
}
</style>
