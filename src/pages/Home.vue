<template>
	<div>
		<div
			@click="
				() => {
					this.$router.push('/UrlBack');
				}
			"
		>
			跳转
		</div>
		<!-- <Son></Son> -->
		<!-- <button @click="handleClick2">按钮2</button> -->
		<!-- <div v-show="bool == 2">
			父组件2
			<son-two>子组件</son-two>
		</div> -->
	</div>
</template>
<script>
// import Son from "./son1";
// import SonTwo from "./son2";
// import Son from "./son3";
export default {
	// components: {
	// 	Son,
	// 	// SonTwo,
	// },
	data: function () {
		return {
			// total: 3,
			// bool: 3,
		};
	},
	methods: {
		// handleClick() {
		// 	this.total == 2;
		// },
		// handleClick2() {
		// 	this.bool = 2;
		// },
	},
	created() {
		console.log("父组件created");
	},
};
</script>
<style></style>
