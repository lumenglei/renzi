<template>
	<div class='bg'>
		<div class="box">
			<img src="../assets/login-logo.png" alt="">
			<el-form :model="ruleForm" :rules="rules" ref="ruleForm" class="demo-ruleForm">
				<el-form-item prop="mobile">
					<el-input v-model="ruleForm.mobile" prefix-icon="el-icon-user"></el-input>
				</el-form-item>
				<el-form-item prop="password">
					<el-input v-model="ruleForm.password" show-password prefix-icon="el-icon-lock"></el-input>
				</el-form-item>
				<el-form-item>
					<el-button class="btn" type="primary" @click="submitForm('ruleForm')">登录</el-button>
				</el-form-item>
			</el-form>
		</div>
	</div>
</template>

<script>
import http from "../utils/httpRequest"
import { setToken } from "../utils/auth"
export default {
	components: {},
	data() {
		return {
			ruleForm: {
				mobile: '13800000002',
				password: '.888itcastCN764%...'
			},
			rules: {
				name: [
					{ required: true, message: '请输入用户名', trigger: 'blur' },
				],
				password: [
					{ required: true, message: '请输入密码', trigger: 'change' }
				],
			}
		}
	},
	computed: {},
	watch: {},
	methods: {
		submitForm(formName) {
			this.$refs[formName].validate((valid) => {
				if (valid) {
					// alert('submit!');
					http.post("/api/sys/login", this.ruleForm).then(res => {
						console.log(res);
						setToken(res.data)
						this.$router.push('/sy')
					})
				} else {
					console.log('error submit!!');
					return false;
				}
			});
		},
	},
}
</script>

<style scoped lang='scss'>
.bg {
	width: 100%;
	height: 100vh;
	background-image: url(../assets/login.jpg);
	background-size: 100%;
	display: flex;
	justify-content: center;
	align-items: center;

	.box {
		width: 436px;

		img {
			margin-bottom: 30px;
		}

		.btn {
			width: 100%;
		}

		.inp {
			height: 80px;
		}
	}
}
</style>
