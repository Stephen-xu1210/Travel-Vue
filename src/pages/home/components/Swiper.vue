<template>
	<div class="wrapper">
		<swiper :options="swiperOption" v-if="showSwiper">
	    <!-- slides -->
	    <swiper-slide v-for="item of list" :key="item.id">
	    	<img 
	    	 class="swiper-img"
	    	 :src="item.imgUrl"
	    	  alt="">
	    </swiper-slide>
<!-- 	    <swiper-slide>
	    	<img class="swiper-img" src="http://img1.qunarzz.com/piao/fusion/1811/28/ae196441b9df0502.jpg_750x200_bd9ba240.jpg" alt="">
	    </swiper-slide>
	    <swiper-slide>
	    	<img class="swiper-img" src="http://img1.qunarzz.com/piao/fusion/1811/b4/ac00a771d74f5a02.jpg_750x200_a71cff60.jpg" alt="">
	    </swiper-slide>
	    <swiper-slide>
	    	<img class="swiper-img" src="http://img1.qunarzz.com/piao/fusion/1811/2f/5d414b44b44a4c02.jpg_750x200_99fa3ea3.jpg" alt="">
	    </swiper-slide>
	    <swiper-slide>
	    	<img class="swiper-img" src="http://img1.qunarzz.com/piao/fusion/1811/ce/77e115fea8f99102.jpg_750x200_a2d0fcd2.jpg" alt="">
	    </swiper-slide> -->
	    <!-- Optional controls -->
	    <div class="swiper-pagination"  slot="pagination"></div>
	<!--     <div class="swiper-button-prev" slot="button-prev"></div>
	    <div class="swiper-button-next" slot="button-next"></div>
	    <div class="swiper-scrollbar"   slot="scrollbar"></div> -->
	  </swiper>
  </div>
</template>
<script>
	export default{
		name:'HomeSwiper',
		props:{
			list:Array
		},
		data (){
			return{
				swiperOption:{
					pagination:'.swiper-pagination',
					loop:true,
					autoplay:true,//是否自动轮播
					speed:2000,
					autoplayDisableOnInteraction:false
				}
			}
		},
		computed:{
			showSwiper(){
				return this.list.length
			}
		}
	}
</script>
<style lang="stylus" scoped>
.wrapper >>> .swiper-pagination-bullet-active
	background:#ffffff
.wrapper
	overflow:hidden
	width:100%
	height:0
	// padding-bottom:31.25%
	padding-bottom:26.6%
.swiper-img
	width:100%	
</style>