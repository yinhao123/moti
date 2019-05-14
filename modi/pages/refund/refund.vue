<template>
	<view class="content">
		<!-- 底部按钮 -->
		<view class="bottom">
			<view class="btn">提交</view>
		</view>
		<view class="refundHead">
			<view>订单编号</view>
			<view>{{orderNum}}</view>
		</view>
		<view class="uni-common-mt">
			<form>
				<view class="uni-list">
					<view class="uni-list-cell">
						<view class="uni-list-cell-left">
							<view class="uni-label">退款原因</view>
						</view>
						<view class="uni-list-cell-right">
							<picker :range="sourceType" @change="sourceTypeChange" :value="sourceTypeIndex" mode="selector">
								<view class="uni-input">{{sourceType[sourceTypeIndex]}}</view>
							</picker>
						</view>
					</view>

					<view class="uni-list-cell">
						<view class="uni-list-cell-left">
							<view class="uni-label">退款金额</view>
						</view>
						<view class="uni-list-cell-right">
							<picker :range="sizeType" @change="sizeTypeChange" :value="sizeTypeIndex" mode="selector">
								<view class="uni-input">{{sizeType[sizeTypeIndex]}}</view>
							</picker>
						</view>
					</view>
					<!-- <view class="uni-list-cell">
						<view class="uni-list-cell-left">
							<view class="uni-label">数量限制</view>
						</view>
						<view class="uni-list-cell-right">
							<picker :range="count" @change="countChange" mode="selector">
								<view class="uni-input">{{count[countIndex]}}</view>
							</picker>
						</view>
					</view> -->
				</view>
				<view class="uni-list list-pd">
					<view class="uni-list-cell cell-pd">
						<view class="uni-uploader">
							<view class="uni-uploader-head">
								<view class="uni-uploader-title">上传图片</view>
							</view>	
							<view class="uni-uploader-body">
								<view class="uni-uploader__files">
									<block v-for="(image,index) in imageList" :key="index">
										<view class="uni-uploader__file">
											<image class="uni-uploader__img" :src="image" :data-src="image" @tap="previewImage"></image>
										</view>
									</block>
									<view class="uni-uploader__input-box">
										<view class="uni-uploader__input" @tap="chooseImage"></view>
									</view>
								</view>
							</view>
						</view>
					</view>
				</view>
			</form>
		</view>
	</view>
</template>
<script>
	var sourceType = [
		['camera'],
		['album'],
		['camera', 'album']
	]
	var sizeType = [
		['compressed'],
		['original'],
		['compressed', 'original']
	]
	export default {
		data() {
			return {
				orderNum:"12315234",
				title: 'choose/previewImage',
				imageList: [],
				sourceTypeIndex: 0,
				sourceType: ['请选择','有损坏', '不想要了', '没钱了'],
				sizeTypeIndex: 0,
				sizeType: ['请选择','8元', '16元', '32元'],
				countIndex: 8,
				count: [1, 2, 3, 4, 5, 6, 7, 8, 9]
			}
		},
		onUnload() {
			this.imageList = [],
				this.sourceTypeIndex = 2,
				this.sourceType = ['拍照', '相册', '拍照或相册'],
				this.sizeTypeIndex = 2,
				this.sizeType = ['压缩', '原图', '压缩或原图'],
				this.countIndex = 8;
		},
		methods: {
			sourceTypeChange: function(e) {
				this.sourceTypeIndex = e.target.value
			},
			sizeTypeChange: function(e) {
				this.sizeTypeIndex = e.target.value
			},
			countChange: function(e) {
				this.countIndex = e.target.value;
			},
			chooseImage: async function() {
					if (this.imageList.length === 9) {
						let isContinue = await this.isFullImg();
						console.log("是否继续?", isContinue);
						if (!isContinue) {
							return;
						}
					}
					uni.chooseImage({
						sourceType: sourceType[this.sourceTypeIndex],
						sizeType: sizeType[this.sizeTypeIndex],
						count: this.imageList.length + this.count[this.countIndex] > 9 ? 9 - this.imageList.length : this.count[this.countIndex],
						success: (res) => {
							this.imageList = this.imageList.concat(res.tempFilePaths);
						}
					})
				},
				isFullImg: function() {
					return new Promise((res) => {
						uni.showModal({
							content: "已经有9张图片了,是否清空现有图片？",
							success: (e) => {
								if (e.confirm) {
									this.imageList = [];
									res(true);
								} else {
									res(false)
								}
							},
							fail: () => {
								res(false)
							}
						})
					})
				},
				previewImage: function(e) {
					var current = e.target.dataset.src
					uni.previewImage({
						current: current,
						urls: this.imageList
					})
				}
		}
	}
</script>

<style lang="scss" scoped>
	.content{
		height: 100%;
		.uni-common-mt{margin-top: 20upx}
		.refundHead{
			display: flex;
			justify-content: space-between;
			align-items: center;
			height: 100upx;
			padding: 0 30upx;
			background: #fff;
		}
		.uni-list::before{height: 0}
		.uni-list{
			.uni-list-cell-left{
				padding: 0;
				.uni-label{
					text-indent: 30upx;
				}
			}
			.uni-uploader{
				.uni-uploader-head{
					height: 100upx;
					line-height: 100upx;
					padding: 0 30upx;
				}
				.uni-uploader-body{
					margin: 0;
					padding: 0 30upx 60upx 30upx;
				}
			}
		}
		.bottom{
			width: 100%;
			height: 100upx;
			position: fixed;
			bottom: 40upx;
			.btn{
				width: 95%;
				text-align: center;
				margin: 0 auto;
				line-height: 100upx;
				background: #000;
				color: #fff;
			}
		}
	}
</style>
