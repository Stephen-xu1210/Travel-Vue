<template>
	<div class="container" @click="handleGallaryClick">
		<div class="wrapper">
			<swiper :options="swiperOptions">
			    <swiper-slide 
			    v-for="(item , index) in imgs"
				:key="index"
			    >
			    	<img class="gallary-img" :src="item" >
			    </swiper-slide>
			    <div class="swiper-pagination"  slot="pagination"></div>
			</swiper>
		</div>
	</div>
</template>
<script>
	export default{
		name:'CommonGallary',
		props:{
			imgs:{
				type:Array,
				default(){
					return []
				}
			}
		},
		methods:{
			handleGallaryClick(){
				this.$emit('close')
			}
		},
		data(){
			return{
				swiperOptions:{
					pagination:'.swiper-pagination',
					paginationType:'fraction',
					observeParents:true,
					observer:true
				}
			}
		}
	}
</script>
<style lang="stylus" scoped>
.container >>> .swiper-container
	overflow:inherit
.container
	position:absolute
	display:flex
	justify-content:center
	flex-direction:column
	left:0
	right:0
	top:0
	bottom:0
	background:#000
	z-index:99
	.wrapper
		height:0
		// overflow:hidden
		padding-bottom:50%
		width:100%
		.gallary-img
			width:100%
		.swiper-pagination
			color:#fff
			bottom:-1rem
</style>