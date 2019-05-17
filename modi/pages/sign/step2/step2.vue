<template>
	<view class="my-v">
		<video id="my-video" src="../../../static/video.mp4" controls=false autoplay="true" show-center-play-btn = "false"  show-progress:false @ended="endGo"></video>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		onReady: function(){
			
		},
		methods: {
			endGo:function(){
					uni.navigateTo({
					url:"../step3/step3"
				})
			}
		}
	}
</script>

<style lang="scss">
.my-v{
	width: 100%;
	height: 100%;
	video{
		width: 100%;
		height: 100%;
	}
}
</style>
