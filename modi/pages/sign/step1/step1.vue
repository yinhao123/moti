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
					url:"../step2/step2"
				})
			}
		}
	}
</script>

<style lang="scss">
	.by{
		// background-color: #ff0000;
		height: 100%;
		background: url("../../../static/step1.png") no-repeat;
		background-size: 100% 99%;
		}
.bg1{
	display: flex;
		width: 100%;
	height: 100%;
}
</style>
