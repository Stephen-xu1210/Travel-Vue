<template>
	<div class="icons">
		<swiper>
			<swiper-slide v-for="(page,index) of pages" :key="index">
				<div class="icon" v-for="item in page" :key="item.id">
					<div class="icon-img">
					<img class="icon-img-content" :src="item.imgUrl" alt="">
					</div>
					<p class="icon-text">{{item.desc}}</p>
				</div>
			</swiper-slide>
		</swiper>
	</div>
</template>

<script>
	export default{
		name:'HomeIcons',
		data () {
			return{
				iconList:[
				{
					id:'0001',
					imgUrl:'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png',
					desc:'景点门票'
				},{
					id:'0002',
					imgUrl:'http://img1.qunarzz.com/piao/fusion/1803/fa/2548667cb6e902.png',
					desc:'总统府'
				},{
					id:'0003',
					imgUrl:'http://img1.qunarzz.com/piao/fusion/1803/20/831d62d2e1c7be02.png',
					desc:'文化古迹'
				},{
					id:'0004',
					imgUrl:'http://img1.qunarzz.com/piao/fusion/1804/5a/13ceb38dcf262f02.png',
					desc:'一日游'
				},{
					id:'0005',
					imgUrl:'https://img1.qunarzz.com/piao/fusion/1803/20/831d62d2e1c7be02.png',
					desc:'打卡圣地'
				},{
					id:'0006',
					imgUrl:'https://img1.qunarzz.com/piao/fusion/1803/20/831d62d2e1c7be02.png',
					desc:'中山陵'
				},{
					id:'0007',
					imgUrl:'http://img1.qunarzz.com/piao/fusion/1803/fa/2548667cb6e902.png',
					desc:'夫子庙'
				},{
					id:'0008',
					imgUrl:'https://img1.qunarzz.com/piao/fusion/1803/20/831d62d2e1c7be02.png',
					desc:'老门东'
				},{
					id:'0009',
					imgUrl:'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png',
					desc:'长江大桥'
				},{
					id:'0010',
					imgUrl:'https://img1.qunarzz.com/piao/fusion/1803/20/831d62d2e1c7be02.png',
					desc:'栖霞山'
				}]
			}
		},
		computed:{
			pages(){
				const pages = []
				this.iconList.forEach((item,index) => {
					const page = Math.floor(index/8)
					if(!pages[page]){
						pages[page] = []
					}
					pages[page].push(item)
				})
				return pages
			}
		}
	}
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl'
.icons >>> .swiper-container
	height:0
	padding-bottom:50%
	// background:lightblue
.icon
	position:relative
	overflow:hidden
	float:left
	width:25%
	height:0
	// background:blue
	padding-bottom:25%
.icon-img
	position:absolute
	top:0
	left:0
	right:0
	bottom:.44rem
	// background:red
	padding:.1rem
	box-sizing:border-box
.icon-img-content
	margin:0 auto
	display:block
	height:100%
.icon-text
	position:absolute
	left:0
	right:0
	bottom:0
	height:.44rem
	line-height:.44rem
	text-align:center
	color:$parkTextColor
	// overflow:hidden
	// white-space:nowarp;
	// text-overflow:ellipsis
</style>