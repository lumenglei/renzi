<template>
	<div class='sy'>
		<div class="top">
			<img src="../assets/head.jpg" alt="" style="width: 8%;height: 60%;">
			<div>
				<p>早安，管理员，祝你开心每一天！</p><br />
				<p>管理员 | 传智播客-总裁办</p>
			</div>
		</div>
		<div class="box">


			<div class="d1">
				<el-calendar v-model="value">
				</el-calendar>
			</div>
			<div class="d2">
				<div style="width: 80px; height: 50px;border-bottom: 5px solid #8a97f8;line-height: 50px;">
					<p style="font-size: 20px;">流程申请</p>
				</div>
				<el-button>加班离职</el-button>
				<el-button>请假调休</el-button>
				<el-button>审批列表</el-button>
				<el-button>我的信息</el-button>
			</div>
			<div style="width: 700px;height: 400px;background-color: #fff;float: left;margin-top: 20px;">
				<h4>公告</h4>
				<hr />
				<div class="lml">
					<img src="../assets/img.jpeg" alt="" style="width: 60px;height: 60px;">
					<span style="color: #8a97f8;">朱继柳 </span>发布了 第1期"传智大讲堂"互动讨论获奖名单公布2018-07-21 15:21:38
				</div>
				<hr />
				<div class="lml">
					<img src="../assets/img.jpeg" alt="" style="width: 60px;height: 60px;">
					<span style="color: #8a97f8;">朱继柳 </span> 发布了 第2期"传智大讲堂"互动讨论获奖名单公布2018-07-21 15:21:38
				</div>
				<hr />
				<div class="lml">
					<img src="../assets/img.jpeg" alt="" style="width: 60px;height: 60px;">
					<span style="color: #8a97f8;">朱继柳 </span> 发布了 第3期"传智大讲堂"互动讨论获奖名单公布2018-07-21 15:21:38
				</div>
				<hr />
			</div>
			<div style="float: right;width: 570px;height: 260px;background-color: #fff;margin-top: -120px;	padding: 20px;
	box-sizing: border-box;">
				<div style="width: 169px; height: 50px;border-bottom: 5px solid #8a97f8;line-height: 50px;">
					<p style="font-size: 20px;">快速开始/便捷导航</p>
				</div>
				<el-button>人事月报</el-button>
				<el-button>考勤查询</el-button>
				<el-button>考勤统计</el-button>
				<el-button>员工审核</el-button>
				<el-button>组织架构</el-button>
			</div>
			<div style="float: right;width: 570px;height: 260px;background-color: #fff;margin-top: 20px;	padding: 20px;
	box-sizing: border-box;">
				<div style="width: 80px; height: 50px;border-bottom: 5px solid #8a97f8;line-height: 50px;">
					<p style="font-size: 20px;">帮助链接</p>
				</div>
				<img src="../assets/icon.png" alt="">
			</div>
		</div>
	</div>
</template>

<script>

export default {
	components: {},
	data() {
		return {
			value: new Date()
		};
	},
	computed: {},
	watch: {},
	methods: {

	},
}
</script>

<style scoped lang='scss'>
.lml {
	width: 444px;
	height: 60px;
	display: flex;
	flex-direction: column;
	flex-wrap: wrap;
}

::v-deep .el-calendar {
	font-size: 14px;

	.next {
		border: none;
	}

	td {
		border: none;
	}

	.el-calendar-day {
		height: 35px !important;
		text-align: center;
		border: none;
	}

	.el-calendar__header {
		justify-content: space-between;
	}

	.is-selected {
		background-color: #1d8dd8;
		color: #fff;
	}
}

.sy {
	padding: 15px;
	overflow-y: auto;
}

.top {
	width: 100%;
	height: 160px;
	background-color: #fff;
	border-radius: 5px;
	display: flex;
	align-items: center;
	padding-left: 50px;
	box-sizing: border-box;
	border: 1px solid #ebeef5;

	p:first-child {
		font-size: 25px;
	}

	p:last-child {
		font-size: 20px;
		color: gray;
	}
}

.box {
	padding-top: 25px;
	box-sizing: border-box;
}

.d1 {
	width: 700px;
	height: 400px;
	background-color: #fff;
	float: left;
}

.d2 {
	float: right;
	width: 570px;
	height: 260px;
	background-color: #fff;
	padding: 20px;
	box-sizing: border-box;

	.el-button {
		width: 100px;
		height: 60px;
		font-size: 15px;
	}
}
</style>
