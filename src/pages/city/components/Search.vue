<template>
	<div>
		<div class="search">
			<input v-model="keyword" class="search-input" type="text" placeholder="输入城市名或拼音">
		</div>
		<div class="search-content" ref="search" v-show="keyword">
			<ul>
				<li class="search-item border-bottom" 
				v-for="item of list" 
				:key="item.id" 
				@click="handleCityClick(item.name)"
				>
				{{item.name}}
				</li>
				<li class="search-item border-bottom" v-show="hasNoData">
				没有找到相关地点！
				</li>
			</ul>
		</div>
	</div>
</template>
<script>
import Bscroll from 'better-scroll'
import { mapState,mapMutations } from 'vuex'
export default{
	name:'CitySearch',
	props:{
		cities:Object
	},
	data(){
		return{
			keyword:'',
			list:[],
			timer:null
		}
	},
	computed:{
		hasNoData(){
			return !this.list.length
		}
	},
	watch:{
		keyword(){
			if(this.timer){
				clearTimeout(this.timer)
			}
			if(!this.keyword) {
				this.list = []
				return
			}
			this.timer = setTimeout(() => {
				const result = []
				for(let i in this.cities){
					this.cities[i].forEach((value) => {
						if(value.spell.indexOf(this.keyword) > -1 || value.name.indexOf(this.keyword) > -1){
							result.push(value)
						}
					})
				}
				this.list = result
			},100)
		}
	},
	mounted(){
		this.$nextTick(function(){
			this.scroll = new Bscroll(this.$refs.search,{click:true})
		})
	},
	methods:{
		handleCityClick(city){
			// this.$store.dispatch('changeCity',city)
			this.changeCity(city)
			this.$router.push('/')
			// stephen add
			// this.keyword = null
			// this.list = []
			// return
		},
		handleCityClose(){
			this.list = []
		},
		...mapMutations(['changeCity'])
	}
}
</script>
<style lang="stylus" scoped>
@import '~styles/varibles.styl'
.search
	height:.72rem
	background:$bgColor
	padding:0 .1rem
.search-input
	width:100%
	height:.62rem
	line-height:.62rem
	text-align:center
	border-radius:.06rem
	color:#666
	box-sizing:border-box
	padding:0 .1rem
.search-content
	position:absolute
	overflow:hidden
	top:1.58rem
	left:0
	right:0
	bottom:0
	background:#eee
	z-index:555
.search-item
	line-height:.62rem
	padding-left:.2rem
	background:#fff
</style>	