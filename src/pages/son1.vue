<template>
	<div class="app">
		子组件1
		<p @click="handle">{{ total }}</p>
	</div>
</template>

<script>
export default {
	props: {
		total: Number,
	},
	data() {
		return {};
	},

	methods: {
		handle() {
			this.total = 5;
		},
	},
	created() {
		console.log("子组件111111created");
	},
};
</script>

<style></style>
