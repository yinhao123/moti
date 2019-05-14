<template>
	<view class="content">
		<view class="refundHeader">
			<view>订单编号</view>
			<view>{{refundInfo.orderNum}}</view>
		</view>
		<view class="refundOther">
			<view class="inputItems">
				<view><span class="red">*</span>退款原因：</view>
				<view class="inputCon">
					<input class="formInput" type="text" value=""/>
				</view>
			</view>
			<view class="inputItems">
				<view><span class="red">*</span>退款金额：</view>
				<view class="inputCon">
					<input class="formInput" type="text" value=""/>
				</view>
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
		</view>
		<view class="btnCon">
			
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				refundInfo:{
					orderNum:"12312323123"
				}
			}
		},
		methods: {
			
		}
	}
</script>

<style scoped lang="scss">
	.content{
		height: 100%;
		.refundHeader{
			height: 100upx;
			display: flex;
			justify-content: space-between;
			align-items: center;
			background: #ffffff;
			padding: 0 30upx;
			view{
				font-size: 24upx;
				color: #000000;
			}
		}
		.refundOther{
			margin-top: 20upx;
			padding: 0 30upx;
			background: #ffffff;
			.inputItems{
				display: flex;
				justify-content: flex-start;
				view{
					height: 100upx;
					line-height: 100upx;
					
				}
				.inputCon{
					width: 75%;
					.formInput{
						width: 100%;
						height: 100upx;
					}
				}
				.red{
					color: #ff0000;
				}
			}
		}
		.btnCon{
			width: 100%;
		}
	}
</style>
