<!-- eslint-disable vue/multi-word-component-names -->
<script>
import Notification from '@/components/Notification.vue';
import api from '../services/api.service'
export default {
  components: {
    Notification,
  },
  data(){
    return{
      username: "",
    email: "",
    password: "",
    }
  },
  methods: {
    async register() {
        const formData={
          username: this.username,
          email: this.email,
          password: this.password
        }
       api.post('/api/customer/register', formData)
      .then(response=>{
          this.$refs.notification.open('Đăng ký thành công!');
        this.$router.push('/login');
        })
      .catch(error=>{
          this.$refs.notification.open(error.response.data.message);

        })



    },
  },
};
</script>
<style>
.body_register {
  height: 100vh;
  width: 100vw;
}

</style>
<template>
  <body class="body_register max-w-full">
    <section
      class="bg-gray-100 h-full flex box-border justify-center items-center"
    >
      <div
        class="bg-white shadow-xl rounded-2xl flex w-9/12 p-5 items-center h-screen mt-2 mb-2"
      >
      <Notification ref="notification" />
        <div class="md:w-1/2 px-8">
          <h2 class="font-bold text-3xl text-[#002D74]">Đăng ký</h2>
          <p class="text-sm mt-4 text-[#002D74] underline">
            Đăng ký để trải nghiệm trọn vẹn nhất.
          </p>

          <form @submit.prevent="register" class="flex flex-col gap-4">
            <input
              class="p-2 mt-8 rounded-xl border"
              type="username"
              name="username"
              v-model="username"
              placeholder="Tên đăng nhập"
              require
            />
            <input
              class="p-2 rounded-xl border"
              type="email"
              name="email"
              v-model="email"
              placeholder="Email"
              require
            />
            <!-- <div class="relative flex items-center">
              <input
                class="p-2 rounded-xl border w-full"
                type="text"
                name="otp"
                id="otp"
                placeholder="Nhập mã OTP"
                require
              />
              <button
                class="bg-[#002D74] text-white px-4 rounded-xl ml-2 hover:scale-105 duration-300 hover:bg-[#206ab1] font-medium"
                type="button"
              >
                Send OTP
              </button>
            </div> -->

            <div class="relative">
              <input
                class="p-2 rounded-xl border w-full"
                type="password"
                v-model="password"
                name="passwordRegister"
                id="passwordRegister"
                placeholder="Mật khẩu"
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="gray"
                id="togglePassword"
                class="bi bi-eye absolute top-1/2 right-3 -translate-y-1/2 cursor-pointer z-20 opacity-100"
                viewBox="0 0 16 16"
              >
                <path
                  d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z"
                ></path>
                <path
                  d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z"
                ></path>
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-eye-slash-fill absolute top-1/2 right-3 -z-1 -translate-y-1/2 cursor-pointer hidden"
                id="mama"
                viewBox="0 0 16 16"
              >
                <path
                  d="m10.79 12.912-1.614-1.615a3.5 3.5 0 0 1-4.474-4.474l-2.06-2.06C.938 6.278 0 8 0 8s3 5.5 8 5.5a7.029 7.029 0 0 0 2.79-.588zM5.21 3.088A7.028 7.028 0 0 1 8 2.5c5 0 8 5.5 8 5.5s-.939 1.721-2.641 3.238l-2.062-2.062a3.5 3.5 0 0 0-4.474-4.474L5.21 3.089z"
                ></path>
                <path
                  d="M5.525 7.646a2.5 2.5 0 0 0 2.829 2.829l-2.83-2.829zm4.95.708-2.829-2.83a2.5 2.5 0 0 1 2.829 2.829zm3.171 6-12-12 .708-.708 12 12-.708.708z"
                ></path>
              </svg>
            </div>
            <!-- <input
              class="p-2 rounded-xl border"
              type="password"
              name="confirmPassword"
              id="confirmPassword"
              placeholder="Nhập lại mật khẩu"
              require
            /> -->
            <button
              class="bg-[#002D74] text-white py-2 rounded-xl hover:scale-105 duration-300 hover:bg-[#206ab1] font-medium"
              type="submit"
            >
              Đăng ký
            </button>
          </form>
          <div class="mt-10 grid items-center text-gray-400 or-grid">
            <hr class="border-gray-300" />
            <hr class="border-gray-300" />
          </div>

          <div
            class="mt-4 text-sm flex justify-between items-center container-mr"
          >
            <a class="mr-3 md:mr-0 text-[#325285]">Trở về đăng nhập</a>
            <button
              class="register text-white bg-[#002D74] hover:border-gray-400 rounded-xl py-2 px-5 hover:scale-110 hover:bg-[#002c7424] font-semibold duration-300"
            >
              <router-link to="/login">Đăng nhập</router-link>
            </button>
          </div>
        </div>
        <div class="md:block hidden w-1/2">
          <img
            class="rounded-2xl max-h-[1600px]"
            src="../assets/img/background_register.png"
            alt="login form image"
          />
        </div>
      </div>
    </section>
  </body>
</template>
