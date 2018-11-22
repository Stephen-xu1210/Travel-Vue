<template>
	<div>
		<div class="title">周末去哪儿</div>
		<ul>
			<li class="item" v-for="item of recommendList" :key="item.id">
				<div class="item-img-wrapper">
					<img class="item-img" :src="item.imgUrl" alt="">
				</div>	
				<div class="item-info">
					<p class="item-title">{{item.title}}</p>
					<p class="item-desc">{{item.desc}}</p>
				</div>
			</li>
		</ul>
	</div>
</template>
<script>
	export default{
		name:'HomeWeekend',
		data(){
			return{
				recommendList:[{
					id:'0001',
					imgUrl:'http://img1.qunarzz.com/sight/source/1507/ae/bf7adc6c9b80fe.jpg_r_640x214_8e68e99f.jpg',
					title:'细数南京温泉',
					desc:'品四季温泉，探汤泉神韵'
				},{
					id:'0002',
					imgUrl:'http://img1.qunarzz.com/sight/source/1505/f1/ae9d4299b8aaea.jpg_r_640x214_0c555905.jpg',
					title:'南京必游TOP10',
					desc:'看尽王侯将相荣辱成败，六朝金粉潮起潮落'
				},{
					id:'0003',
					imgUrl:'http://img1.qunarzz.com/sight/source/1811/58/a02ad3ab47e3e3.jpg_r_640x214_08977098.jpg',
					title:'扬州大明寺',
					desc:'在这里感受大唐盛世之下的佛教'
				},{
					id:'0004',
					imgUrl:'http://img1.qunarzz.com/sight/source/1505/e1/cdbf56d837da59.jpg_r_640x214_105fc3f2.jpg',
					title:'民国情怀国共风华',
					desc:'找到你心中想要的那个民国时期的南京'
				},{
					id:'0005',
					imgUrl:'http://img1.qunarzz.com/sight/source/1811/ed/bf2bc72af591d5.jpg_r_640x214_f9f1bfcc.jpg',
					title:'扬州温泉必游',
					desc:'冬天来啦，我们热热的泡个热汤！'
				}]
			}
		}
	}
</script>
<style lang="stylus" scoped>
@import '~styles/mixins.styl'
.title
	line-height:.8rem
	background:#eee
	text-indent:.2rem
	margin-top:.2rem
.item-img-wrapper
	overflow:hidden
	height:0
	padding-bottom:38%
.item-img
	 width:100%
.item-info
	padding:.1rem
.item-title
	line-height:.54rem
	font-size:.32rem
	ellipsis()
.item-desc
	color:#ccc
	line-height:.4rem
	ellipsis()
</style>