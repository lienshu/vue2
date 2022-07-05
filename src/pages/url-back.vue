<template>
	<div>
		<div>组件111</div>
		<div>组件111</div>
		<div>组件111</div>
		<div>组件111</div>
	</div>
</template>

<script>
export default {
	data() {
		return {};
	},
	// 监听浏览器返回按钮触发弹窗
	beforeRouteLeave(to, form, next) {
		setTimeout(() => {
			this.$confirm(
				"当前添加或修改的数据未提交，返回将会丢失，是否确定返回?",
				"提示",
				{
					confirmButtonText: "确定",
					cancelButtonText: "取消",
					showClose: false,
					closeOnClickModal: false,
					type: "warning",
				}
			)
				.then(() => {
					next();
				})
				.catch(() => {
					next(false);
				});
		}, 200);
	},

	created() {
		console.log("子组件created");
	},
};
</script>

<style></style>
