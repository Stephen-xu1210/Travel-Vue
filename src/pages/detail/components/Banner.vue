<template>
	<div>
		<div class="banner" @click="handleBannerClick">
			<img class="banner-img" src="http://img1.qunarzz.com/sight/p0/1411/b3/1415e635014967c75a3d955ae256a628.water.jpg_600x330_4813a8eb.jpg" alt="">
			<div class="banner-info">
				<div class="banner-text">南京汤山一号温泉</div>
				<div class="banner-number">
					<span class="iconfont banner-icon">&#xe608;</span>
					12
				</div>
			</div>
			<router-link to="/">
				<div class="iconfont back-icon">
					&#xe624;
				</div>
			</router-link>
		</div>
		<common-gallary :imgs="imgs" v-show="showGallary" @close="handleGallaryClose"></common-gallary>
	</div>
</template>
<script>
import CommonGallary from 'common/gallary/Gallary'
	export default{
		name:'DetailBanner',
		data(){
			return{
				showGallary:false,
				imgs:['http://img1.qunarzz.com/sight/p0/1411/b3/1415e635014967c75a3d955ae256a628.water.jpg_r_800x800_e106f500.jpg',
					'http://img1.qunarzz.com/sight/p0/1411/6f/d7bfa1072b37dfebcc9c52592822b2d4.water.jpg_r_800x800_59a68ecf.jpg']
			}
		},
		methods:{
			handleBannerClick(){
				this.showGallary = true
			},
			handleGallaryClose(){
				this.showGallary = false
			}
		},
		components:{
			CommonGallary
		}
	}
</script>
<style lang="stylus" scoped>
	.banner
		position:relative
		overflow:hidden
		height:0
		padding-bottom:55%
		.banner-img
			width:100%
		.banner-info
			position:absolute
			display:flex
			align-items:baseline
			left:0
			right:0
			bottom:0
			color:#fff
			line-height:.6rem
			background-image:linear-gradient(top,rgba(0,0,0,0),rgba(0,0,0,0.8))
			.banner-text
				flex:1
				font-size:.32rem
				padding: 0 .2rem
			.banner-number
				height:.32rem
				line-height:.32rem
				border-radius:.2rem
				background:rgba(0,0,0,.6)
				padding: 0 .4rem
				margin-right:.1rem
				font-size:.24rem
				.banner-icon
					font-size:.24rem	
		.back-icon
			position:absolute
			top:0
			left:0
			width:.64rem
			height:.64rem
			line-height:.64rem
			margin:.1rem .1rem;
			text-align:center
			font-size:.32rem
			color:#fff	
			background:rgba(0,0,0,0.6)
			border-radius:50%
</style>