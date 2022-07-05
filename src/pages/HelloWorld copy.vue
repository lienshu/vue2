<template>
	<div>
		<div
			v-for="(item, index) in total"
			:key="index"
			class="app-pag"
			@click="handleClick"
		></div>
		<!-- <div class="app" @click="handleClick"></div> -->
	</div>
</template>
<script>
export default {
	data: function () {
		return {
			clickCount: 0,
			total: 2,
			divStyle: ["red", "green", "blue", "yellow"],
		};
	},
	methods: {
		handleClick(value) {
			if (this.clickCount == 4) {
				this.clickCount = 0;
			}
			this.clickCount += 1;
			value.target.style.backgroundColor = this.divStyle[this.clickCount % 4];
		},
	},
	created() {},
};
</script>
<style>
.app-pag {
	width: 50px;
	height: 50px;
	background: red;
	border: 1px solid #000;
}
.app {
	width: 50px;
	height: 50px;
	background: red;
	border: 1px solid #000;
}
</style>
