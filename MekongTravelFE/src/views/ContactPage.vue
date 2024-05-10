<template>
  <NavBar />
  <div>
    <div class="mx-auto max-w-7xl sm:px-6 lg:px-8">
      <div
        class="relative isolate overflow-hidden bg-white px-6 py-20 text-center sm:px-16 sm:shadow-sm"
      >
        <div class="text-yellow-600 tracking-wide">LẤY Ý KIẾN NGƯỜI DÙNG</div>
        <p
          class="mt-4 mx-auto max-w-2xl text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl"
        >
          Chúng tôi sẵn sàng lắng nghe ý kiến của bạn
        </p>
        <div class="font-mono text-[14px] mt-4">
          Nếu muốn nhận những thông tin mới nhất hãy điền email của bạn vào phía
          dưới đây.
        </div>
        <form action="/search">
          <label
            class="mx-auto mt-8 relative bg-white min-w-sm max-w-2xl flex flex-col md:flex-row items-center justify-center border py-2 px-2 rounded-2xl gap-2 shadow-2xl focus-within:border-gray-300"
            for="search-bar"
          >
            <input
              id="search-bar"
              placeholder="Enter your email"
              name="q"
              class="px-6 py-2 w-full rounded-md flex-1 outline-none bg-white"
              required=""
            />
            <button
              type="submit"
              class="w-full md:w-auto px-6 py-3 bg-[#0891b2] hover:bg-white hover:text-black text-white fill-white active:scale-95 duration-100 border will-change-transform overflow-hidden relative rounded-2xl transition-all"
            >
              <div class="flex items-center transition-all opacity-1">
                <span
                  class="text-sm font-semibold whitespace-nowrap truncate mx-auto"
                >
                  Đăng ký
                </span>
              </div>
            </button>
          </label>
        </form>
        <div class="flex mt-4 justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
            />
          </svg>
          <span class="ml-2">Cam kết</span>
          <span class="text-[#4A3AFF] ml-1">100% miễn phí</span>
        </div>
        <div
          class="w-[1200px] h-[80px] shadow-md rounded-md mt-10 bg-white flex items-center justify-around"
        >
          <div class="flex">
            <span
              >Đóng góp địa điểm, ẩm thực hay thông tin bổ ích cho giúp
              tôi.</span
            >
          </div>
        </div>
        <svg
          viewBox="0 0 1024 1024"
          class="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-x-1/2 [mask-image:radial-gradient(closest-side,white,transparent)]"
          aria-hidden="true"
        >
          <circle
            cx="512"
            cy="512"
            r="512"
            fill="url(#827591b1-ce8c-4110-b064-7cb85a0b1217)"
            fill-opacity="0.7"
          ></circle>
          <defs>
            <radialGradient id="827591b1-ce8c-4110-b064-7cb85a0b1217">
              <stop stop-color="#3b82f6"></stop>
              <stop offset="1" stop-color="#1d4ed8"></stop>
            </radialGradient>
          </defs>
        </svg>
      </div>
    </div>

    <section class="bg-blue-50 dark:bg-slate-800" id="contact mt-10">
      <div class="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div class="mb-4">
          <div
            class="mb-6 max-w-3xl text-center sm:text-center md:mx-auto md:mb-12"
          >
            <p
              class="text-base font-semibold uppercase tracking-wide text-blue-600 dark:text-blue-200"
            >
              Góp ý kiến của bạn
            </p>
            <h2
              class="font-heading mb-4 font-bold tracking-tight text-gray-900 dark:text-white text-3xl sm:text-5xl mt-2"
            >
              Liên Hệ
            </h2>
            <p
              class="mx-auto mt-4 max-w-3xl text-xl text-gray-600 dark:text-slate-400"
            >
              Sẵn lòng lắng nghe và thay đổi
            </p>
          </div>
        </div>
        <div class="flex items-stretch justify-center">
          <div class="grid md:grid-cols-2">
            <div class="h-full pr-6">
              <p
                class="mt-3 mb-12 text-lg text-gray-600 dark:text-slate-400 font-monok"
              >
                Chúng tôi luôn sẵn lòng lắng nghe ý kiến và yêu cầu của bạn để
                cải thiện và phục vụ khách hàng tốt hơn. Cảm ơn bạn rất nhiều.
              </p>
              <ul class="mb-6 md:mb-0">
                <li class="flex">
                  <div
                    class="flex h-10 w-10 items-center justify-center rounded bg-blue-900 text-gray-50"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="h-6 w-6"
                    >
                      <path d="M9 11a3 3 0 1 0 6 0a3 3 0 0 0 -6 0"></path>
                      <path
                        d="M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0z"
                      ></path>
                    </svg>
                  </div>
                  <div class="ml-4 mb-4">
                    <h3
                      class="mb-2 text-lg font-medium leading-6 text-gray-900 dark:text-white"
                    >
                      Địa chỉ
                    </h3>
                    <p class="text-gray-600 dark:text-slate-400">
                      Trường Đại học Cần Thơ, Đường 3/2, Ninh Kiều, Cần Thơ
                    </p>
                    <p class="text-gray-600 dark:text-slate-400">Vietnam</p>
                  </div>
                </li>
                <li class="flex">
                  <div
                    class="flex h-10 w-10 items-center justify-center rounded bg-blue-900 text-gray-50"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="h-6 w-6"
                    >
                      <path
                        d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2"
                      ></path>
                      <path d="M15 7a2 2 0 0 1 2 2"></path>
                      <path d="M15 3a6 6 0 0 1 6 6"></path>
                    </svg>
                  </div>
                  <div class="ml-4 mb-4">
                    <h3
                      class="mb-2 text-lg font-medium leading-6 text-gray-900 dark:text-white"
                    >
                      Liên lạc
                    </h3>
                    <p class="text-gray-600 dark:text-slate-400">
                      Mobile: +1 (123) 456-7890
                    </p>
                    <p class="text-gray-600 dark:text-slate-400">
                      Mail: contact@mekongtravel.com
                    </p>
                  </div>
                </li>
                <li class="flex">
                  <div
                    class="flex h-10 w-10 items-center justify-center rounded bg-blue-900 text-gray-50"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="h-6 w-6"
                    >
                      <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0"></path>
                      <path d="M12 7v5l3 3"></path>
                    </svg>
                  </div>
                  <div class="ml-4 mb-4">
                    <h3
                      class="mb-2 text-lg font-medium leading-6 text-gray-900 dark:text-white"
                    >
                      Thời gian làm việc
                    </h3>
                    <p class="text-gray-600 dark:text-slate-400">
                      Thứ 2 - Thứ 6: 08:00 - 17:00
                    </p>
                    <p class="text-gray-600 dark:text-slate-400">
                      Thứ 7 &amp; Chủ nhật: 08:00 - 12:00
                    </p>
                  </div>
                </li>
              </ul>
            </div>
            <div class="card h-fit max-w-6xl p-5 md:p-12" id="form">
              <h2 class="mb-4 text-2xl font-bold">Ready to Get Started?</h2>
              <form @submit.prevent="submitFeedback" id="contactForm">
                <div class="mb-6">
                  <div class="mx-0 mb-1 sm:mb-4">
                    <label
                      for="name"
                      class="pb-1 text-xs uppercase tracking-wider"
                    ></label>
                    <input
                      type="text"
                      id="name"
                      autocomplete="given-name"
                      placeholder="Tên của bạn"
                      class="mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4 shadow-md dark:text-gray-300 sm:mb-0"
                      name="name"
                      v-model="formData.name"
                      required
                    />
                  </div>
                  <div class="mx-0 mb-1 sm:mb-4">
                    <label
                      for="email"
                      class="pb-1 text-xs uppercase tracking-wider"
                    ></label>
                    <input
                      type="email"
                      id="email"
                      autocomplete="email"
                      placeholder="Địa chỉ email của bạn"
                      class="mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4 shadow-md dark:text-gray-300 sm:mb-0"
                      name="email"
                      v-model="formData.email"
                      required
                    />
                  </div>
                </div>
                <div class="mx-0 mb-1 sm:mb-4">
                  <label
                    for="textarea"
                    class="pb-1 text-xs uppercase tracking-wider"
                  ></label>
                  <textarea
                    id="textarea"
                    name="textarea"
                    cols="30"
                    rows="5"
                    placeholder="Ý kiến của bạn..."
                    class="mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4 shadow-md dark:text-gray-300 sm:mb-0"
                    v-model="formData.description"
                    required
                  ></textarea>
                </div>
                <div class="text-center">
                  <button
                    type="submit"
                    class="w-full bg-[#0891b2] text-white px-6 py-3 font-xl rounded-md sm:mb-0"
                  >
                    Gửi ý kiến
                  </button>
                </div>
              </form>
              <!-- Thông báo thành công -->
              <div
                v-if="successMessage"
                class="text-green-500 text-center mt-4"
              >
                {{ successMessage }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
  <Footer />
</template>

<script>
import api from "../services/api.service";
import NavBar from "../components/NavBar.vue";
import Footer from "../components/Footer.vue";
export default {
  data() {
    return {
      formData: {
        name: "",
        email: "",
        description: "",
      },
      successMessage: "",
    };
  },
  components:{
    NavBar,
    Footer
  },
  methods: {
    async submitFeedback() {
      try {
        const response = await api.post("/api/feedback/create", this.formData);
        console.log(response.data);
        // Hiển thị thông báo thành công
        this.successMessage = "Gửi ý kiến thành công!";
        // Xóa dữ liệu trong form sau khi gửi thành công
        this.formData = {
          name: "",
          email: "",
          description: "",
        };
      } catch (error) {
        console.error("Lỗi khi gửi ý kiến:", error);
        // Xử lý lỗi nếu cần
      }
    },
  },
};
</script>

<style></style>
