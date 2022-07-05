<template>
	<div class="app2">
		子组件2
		<p>{{ total }}</p>
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

	methods: {},
	created() {
		console.log("子组件22222created");
	},
};
</script>

<style></style>
