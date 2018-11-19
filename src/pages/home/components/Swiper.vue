<template>
	<div class="wrapper">
		<swiper :options="swiperOption">
	    <!-- slides -->
	    <swiper-slide v-for="item of swiperList">
	    	<img 
	    	 class="swiper-img"
	    	 :src="item.imgUrl"
	    	 :key="item.id"
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
		data (){
			return{
				swiperOption:{
					pagination:'.swiper-pagination',
					loop:true
				},
				swiperList:[{
					id:'001',
					imgUrl:'http://img1.qunarzz.com/piao/fusion/1811/4d/6706bf772c05ce02.jpg_750x200_773e75f0.jpg'
				},
				{
					id:'002',
					imgUrl:'http://img1.qunarzz.com/piao/fusion/1811/28/ae196441b9df0502.jpg_750x200_bd9ba240.jpg'
				},
				{
					id:'003',
					imgUrl:'http://img1.qunarzz.com/piao/fusion/1811/b4/ac00a771d74f5a02.jpg_750x200_a71cff60.jpg'
				},
				{
					id:'004',
					imgUrl:'http://img1.qunarzz.com/piao/fusion/1811/2f/5d414b44b44a4c02.jpg_750x200_99fa3ea3.jpg'
				},{
					id:'005',
					imgUrl:'http://img1.qunarzz.com/piao/fusion/1811/ce/77e115fea8f99102.jpg_750x200_a2d0fcd2.jpg'
				}]
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
	padding-bottom:31.25%
.swiper-img
	width:100%	
</style>