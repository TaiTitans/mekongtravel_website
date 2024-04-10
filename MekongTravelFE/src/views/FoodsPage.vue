<!-- eslint-disable vue/valid-template-root -->
<!-- eslint-disable prettier/prettier -->
<template>
  <div>

    <div class="relative slide" id="foodsCarousel">
      <div class="carousel-indicators absolute bottom-0 flex bg-yellow-100 h-24 w-full justify-center items-center">
        <ol class="z-50 flex w-4/12 justify-center">
          <li v-for="(img, i) in images" :key="i" class="md:w-2 md:h-2 bg-gray-300 rounded-full cursor-pointer mx-2">
          </li>
        </ol>
      </div>
      <div class="carousel-inner relative overflow-hidden w-full">
        <div v-for="(img, i) in images" :id="`slide-${i}`" :key="i" :class="`${active === i ? 'active' : 'left-full'}`"
          class="carousel-item inset-0 relative w-full transform transition-all duration-500 ease-in-out">
          <img class="block w-full" :src="img" alt="First slide" />
        </div>
      </div>
    </div>
    <div class="flex mt-6 mb-4 justify-center text-[26px] font-bold text-sky-700">
      Ẩm Thực
    </div>

    <div
      class="relative flex flex-col items-center max-w-screen-xl px-4 mx-auto md:flex-row sm:px-6 rounded-md shadow-xl shadow-cyan-500/50">
      <div class="flex items-center py-5 md:w-1/2 md:pb-20 md:pt-10 md:pr-10">
        <div class="text-left">
          <h2
            class="text-4xl font-extrabold leading-10 tracking-tight text-gray-800 sm:text-5xl sm:leading-none md:text-6xl">
            Mekong
            <span class="font-bold text-blue-500">Foods</span>
            <span class="text-xl font-semibold rounded-full text-blueGray-500">1.0</span>
          </h2>
          <p class="max-w-md mx-auto mt-3 text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
            "Miền Tây được biết đến và thu hút khách du lịch khắp nơi nhờ cảnh đẹp thanh bình, sông nước hiền hòa cùng
            con
            người khí thế hào sảng nhưng lại vô cùng giản dị và chất phác. Cùng với sự trải nghiệm khám phá các địa điểm
            đẹp, chắc chắn bạn sẽ không thể bỏ lỡ văn hóa ẩm thực tại nơi đây. 'Mẹ thiên nhiên' đã hào phóng ban tặng
            người
            dân 4 mùa luôn có cây xanh tươi tốt, đa dạng các loại hình động thực vật thiên nhiên, nên những món ăn ở
            vùng
            sông nước này có 1 sự phong phú, hấp dẫn với vô vàn hương vị thơm ngon khiến cho bạn không thể chối từ."
          </p>
          <div class="mt-5 sm:flex md:mt-8">
            <div class="rounded-md shadow"><a href="#1"
                class="flex items-center justify-center w-full px-8 py-3 text-base font-medium leading-6 text-white transition duration-150 ease-in-out bg-[#36cef9] border border-transparent rounded-md hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue md:py-4 md:text-lg md:px-10">
                Khám phá
              </a></div>
          </div>
        </div>
      </div>
      <div class="flex items-center py-5 md:w-1/2 md:pb-20 md:pt-10 md:pl-10">
        <div class="relative w-full p-3 rounded  md:p-8">
          <div class="rounded-lg bg-white text-black w-full">
            <img src="../assets/img/foodspage/bg.jpg" />
          </div>
        </div>
      </div>
    </div>


    <div class="card rounded-md shadow-2xl border-1 border-solid mt-6" id="1">
      <Splitter style="height: 1000px">
        <SplitterPanel class="flex flex-col items-center justify-center" :size="25" :minSize="10">
          <div>
            <div class="flex justify-start text-[30px] font-bold text-[#36CEF9] mt-6">
              Mục lục
            </div>
            <div class="mt-4 text-[20px] font-mono font-semibold">Tỉnh Thành</div>

            <div class="mt-4">
              <Button v-for="province in provinces" :key="province.code" @click="showProvince(province.code)"
                class="w-full border-1 shadow-md pt-2 pb-2 mb-4 hover:bg-[#36cef9] hover:text-white flex justify-center">
                <span class="text-lg font-mono">{{ province.name }}</span>
              </Button>
            </div>


          </div>
        </SplitterPanel>
        <SplitterPanel class="flex items-center justify-center" :size="75">
          <!-- Hiển thị nội dung của các tỉnh thành -->
          <div v-if="activeProvince">
            {{ getProvinceContent(activeProvince) }}
          </div>
          <!-- Thêm phần hiển thị nội dung cho các tỉnh khác nếu cần -->
        </SplitterPanel>
      </Splitter>
    </div>
    <div class="mx-auto max-w-7xl sm:px-6 lg:px-8 mt-20">

<div
    class="relative isolate overflow-hidden bg-white px-6 py-20 text-center sm:rounded-3xl sm:border sm:border-gray-100 sm:px-16 sm:shadow-sm mb-4">

    <h2 class="mx-auto max-w-2xl text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
        Khám phá lịch sử
    </h2>

    <h3 class="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-500">
        Tại Đồng Bằng Sông Cửu Long
    </h3>

    <div class="mt-8 flex items-center justify-center gap-x-6">
        <router-link to="/history" class="inline-flex items-center justify-center gap-2 rounded-xl bg-[#36cef9] px-4 py-3 text-sm font-semibold text-white shadow-sm transition-all duration-150 hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
            href="#">
            Tại đây
            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clip-rule="evenodd"></path>
            </svg>
        </router-link>
    </div>

    <!-- gradient svg -->
    <svg viewBox="0 0 1024 1024"
        class="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-x-1/2 [mask-image:radial-gradient(closest-side,white,transparent)]"
        aria-hidden="true">
        <circle cx="512" cy="512" r="512" fill="url(#827591b1-ce8c-4110-b064-7cb85a0b1217)" fill-opacity="0.7">
        </circle>
        <defs>
            <radialGradient id="827591b1-ce8c-4110-b064-7cb85a0b1217">
                <stop stop-color="#3b82f6"></stop>
                <stop offset="1" stop-color="#1d4ed8"></stop>
            </radialGradient>
        </defs>
    </svg>

</div>

</div>
  </div>
  
</template>

<script>
import Splitter from "primevue/splitter";
import SplitterPanel from "primevue/splitterpanel";
import Button from "primevue/button";
export default {
  data: () => ({
    images: [
      "https://r2.nucuoimekong.com/wp-content/uploads/dac-san-mien-tay.jpg",
      "https://vemekong.com/wp-content/uploads/2021/12/can-tho-mau-than-1968-4a.jpg",
      "https://zoomtravel.vn/upload/images/Untitled%20design%20(9)(3).png",
    ],
    active: 0,
    activeProvince: "CT",
    provinces: [
      { code: "CT", name: "Cần Thơ", content: "Nội dung của Cần Thơ" },
      { code: "ST", name: "Sóc Trăng", content: "Nội dung của Sóc Trăng" },
      { code: "BL", name: "Bạc Liêu", content: "Nội dung của Bạc Liêu" },
      { code: "VL", name: "Vĩnh Long", content: "Nội dung của Vĩnh Long" },
      { code: "TV", name: "Trà Vinh", content: "Nội dung của Trà Vinh" },
      { code: "TG", name: "Tiền Giang", content: "Nội dung của Tiền Giang" },
      { code: "CM", name: "Cà Mau", content: "Nội dung của Cà Mau" },
      { code: "DT", name: "Đồng Tháp", content: "Nội dung của Đồng Tháp" },
      { code: "BT", name: "Bến Tre", content: "Nội dung của Bến Tre" },
      { code: "HG", name: "Hậu Giang", content: "Nội dung của Hậu Giang" },
      { code: "KG", name: "Kiên Giang", content: "Nội dung của Kiên Giang" },
      { code: "LA", name: "Long An", content: "Nội dung của Long An" },
    ],
  }),
  mounted() {
    let i = 0;
    setInterval(() => {
      if (i > this.images.length - 1) {
        i = 0;
      }
      this.active = i;
      i++;
    }, 2000);
  },
  components: {
    Splitter,
    SplitterPanel,
    Button,
  },
  methods: {
    showProvince(province) {
      this.activeProvince = province;
    },
    getProvinceContent(provinceCode) {
      const province = this.provinces.find((p) => p.code === provinceCode);
      return province ? province.content : "";
    },
  },
};
</script>

<style>
.left-full {
  left: -100%;
}

.carousel-item {
  float: left;
  position: relative;
  display: block;
  width: 100%;
  margin-right: -100%;
  backface-visibility: hidden;
}

.carousel-item.active {
  left: 0;
}

.carousel-inner img {
  height: 600px;
}
</style>
