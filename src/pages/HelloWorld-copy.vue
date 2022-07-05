<template>
	<div id="app">
		<div @click="handleClick()" :style="colorStyle(clickCount)"></div>
	</div>
</template>
<script>
export default {
	data: function () {
		return {
			clickCount: 1,
			totle: 50,
			divStyle: [],
		};
	},
	methods: {
		handleClick() {
			this.clickCount += 1;
			if (this.clickCount > 4) {
				this.clickCount = 1;
				console.log(this.clickCount);
			}
		},
	},

	computed: {
		colorStyle() {
			/* eslint-disable */
			return function (clickCount) {
				return clickCount === 1
					? {
							backgroundColor: "red",
							height: "50px",
							width: "50px",
							border: "1px solid #000",
					  }
					: clickCount === 2
					? {
							backgroundColor: "green",
							height: "50px",
							width: "50px",
							border: "1px solid #000",
					  }
					: clickCount === 3
					? {
							backgroundColor: "blue",
							height: "50px",
							width: "50px",
							border: "1px solid #000",
					  }
					: {
							backgroundColor: "yellow",
							height: "50px",
							width: "50px",
							border: "1px solid #000",
					  };
			};
		},
	},

	// watch: {
	// 	clickCount: {
	// 		colorStyle(index) {
	// 			if (index == 1) {
	// 				{
	// 					backgroundColor: "red";
	// 				}
	// 			} else if (index === 2) {
	// 				{
	// 					backgroundColor: "green";
	// 				}
	// 			} else if (index === 3) {
	// 				{
	// 					backgroundColor: "blue";
	// 				}
	// 			} else if (index === 4) {
	// 				{
	// 					backgroundColor: "yellow";
	// 				}
	// 			}
	// 		},
	// 	},
	// },
};
</script>
