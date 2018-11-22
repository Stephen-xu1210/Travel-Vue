<template>
	<div>
		<div class="title">热销推荐</div>
		<ul>
			<li class="item" v-for="item of recommendList" :key="item.id">
					<img class="item-img" :src="item.imgUrl" alt="">
				<div class="item-info">
					<p class="item-title">{{item.title}}</p>
					<p class="item-desc">{{item.desc}}</p>
					<button class="item-button">查看详情</button>
				</div>
			</li>
		</ul>
	</div>
</template>
<script>
	export default{
		name:'HomeRecommend',
		data(){
			return{
				recommendList:[{
					id:'0001',
					imgUrl:'http://img1.qunarzz.com/sight/p0/1411/b3/1415e635014967c75a3d955ae256a628.water.jpg_200x200_54ee590f.jpg',
					title:'南京汤山一号温泉',
					desc:'特别养生，冬日温暖'
				},{
					id:'0002',
					imgUrl:'http://img1.qunarzz.com/sight/p0/1508/f7/f7c3be996152011c.img.jpg_200x200_0b707f70.jpg',
					title:'南京总统府',
					desc:'见证了太平天国与两江总督衙门的兴衰'
				},{
					id:'0003',
					imgUrl:'http://img1.qunarzz.com/sight/p0/201305/21/d8776b6f1b7ecc46c8d65eac.jpg_200x200_a237da35.jpg',
					title:'中山陵',
					desc:'革命先行者孙中山先生的陵寝'
				},{
					id:'0004',
					imgUrl:'http://img1.qunarzz.com/sight/p0/1603/5e/5ef2033d103ec26a90.water.jpg_200x200_90bbe95a.jpg',
					title:'栖霞山',
					desc:'一座栖霞山，半部金陵史'
				},{
					id:'0005',
					imgUrl:'http://img1.qunarzz.com/sight/p0/1701/b8/b806750f5c23b867a3.img.png_200x200_6dd44adf.png',
					title:'夫子庙',
					desc:'游秦淮河，吃美食，看夜景'
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
.item
	overflow:hidden
	display:flex
	height:1.9rem
.item-img
	width:1.7rem
	height:1.7rem
	padding:.1rem
.item-info
	flex:1
	padding:.1rem
	min-width:0
.item-title
	line-height:.54rem
	font-size:.32rem
	ellipsis()
.item-desc
	color:#ccc
	line-height:.4rem
	ellipsis()
.item-button
	line-height:.44rem
	background:#ff9300
	border-radius:.06rem
	padding:0 .1rem
	margin-top:.16rem
	color:#fff
</style>