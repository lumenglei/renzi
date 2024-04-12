<template>
	<div class=''>
		<el-container>
			<el-aside :width="isCollapse == true ? '64px' : '200px'">
				<el-menu :default-active="'../views/sy.vue'" text-color="#fff" active-text-color="#43a7fe"
					class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" :collapse="isCollapse" router>
					<div style="text-align: center;margin-top: 20px;">
						<img src="../assets/logo.png" alt="" :width="isCollapse == true ? '64px' : '150px'"
							:height="isCollapse == true ? '50px' : '50px'">
					</div>
					<el-menu-item index="/sy">
						<i class="el-icon-menu"></i>
						<span slot="title">首页</span>
					</el-menu-item>
					<el-menu-item index="2">
						<i class="el-icon-setting"></i>
						<span slot="title">组织架构</span>
					</el-menu-item>
					<el-menu-item index="3">
						<i class="el-icon-setting"></i>
						<span slot="title">员工</span>
					</el-menu-item>
					<el-menu-item index="4">
						<i class="el-icon-setting"></i>
						<span slot="title">公司设置</span>
					</el-menu-item>
					<el-menu-item index="5">
						<i class="el-icon-setting"></i>
						<span slot="title">权限设置</span>
					</el-menu-item>
					<el-menu-item index="6">
						<i class="el-icon-setting"></i>
						<span slot="title">社保</span>
					</el-menu-item>
					<el-menu-item index="7">
						<i class="el-icon-setting"></i>
						<span slot="title">考勤</span>
					</el-menu-item>
					<el-menu-item index="8">
						<i class="el-icon-setting"></i>
						<span slot="title">工资</span>
					</el-menu-item>
					<el-menu-item index="9">
						<i class="el-icon-setting"></i>
						<span slot="title">审批</span>
					</el-menu-item>
				</el-menu>

			</el-aside>
			<el-container>
				<el-header class="hd">
					<div style="display: flex ; ">
						<i :class="isCollapse == true ? 'el-icon-s-unfold' : 'el-icon-s-fold'" style="color: #fff;" @click="fz"></i>
						<p style="color: #fff; font-size: 20px;margin-left: 20px;">江苏传智播客教育科技股份有限公司</p>
						<span class="ty">体验版</span>
					</div>
					<div class="lll">
						<i class="el-icon-search" @click="flag = !flag"><input type="text" v-show="flag == true"></i>
						<i class="el-icon-full-screen" @click="enterFullscreen"></i>
						<i class="el-icon-search"></i>
						<i class="el-icon-search"></i>
						<img src="../assets/bigUserHeader.png" alt="" style="width: 20px;height: 20px;">
						<el-dropdown>
							<span class="el-dropdown-link" style="color: #000;">
								管理员<i class="el-icon-arrow-down el-icon--right"></i>
							</span>
							<el-dropdown-menu slot="dropdown">
								<el-dropdown-item>首页</el-dropdown-item>
								<el-dropdown-item>退出登录</el-dropdown-item>
							</el-dropdown-menu>
						</el-dropdown>

					</div>


				</el-header>
				<el-main style="background-color: #eef0f3;padding: 0;">
					<router-view></router-view>
				</el-main>
			</el-container>
		</el-container>
	</div>
</template>

<script>

export default {
	components: {},
	data() {
		return {
			isCollapse: false,
			flag: false
		};
	},
	computed: {},
	watch: {},

	methods: {
		handleOpen(key, keyPath) {
			console.log(key, keyPath);
		},
		handleClose(key, keyPath) {
			console.log(key, keyPath);
		},
		fz() {
			this.isCollapse = !this.isCollapse
		},
		enterFullscreen() {
			const element = document.documentElement;
			if (element.requestFullscreen) {
				element.requestFullscreen();
			} else if (element.mozRequestFullScreen) {
				element.mozRequestFullScreen();
			} else if (element.webkitRequestFullscreen) {
				element.webkitRequestFullscreen();
			} else if (element.msRequestFullscreen) {
				element.msRequestFullscreen();
			}
		}
	},
}
</script>

<style scoped lang='scss'>
.el-menu-vertical-demo {
	height: 100vh;
	background-image: url(../assets/logBg.png);
	background-size: 100% 100%;
}

.el-main {

	height: calc(100vh - 181px); //181px为顶部header高度+底部footer高度

	overflow-y: auto;

}

.hd {
	height: 60px;
	background-color: #4b7cfb;
	display: flex;
	align-items: center;
	justify-content: space-between;
}

.ty {
	width: 60px;
	height: 40px;
	line-height: 40px;
	text-align: center;
	background-color: rgba(132, 169, 254, 0.9);
	border-radius: 10px;
	color: #fff;
	margin-left: 20px;
}

.lll {
	color: #fff;
}
</style>
