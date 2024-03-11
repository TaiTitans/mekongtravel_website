<!-- eslint-disable vue/valid-template-root -->
<!-- eslint-disable prettier/prettier -->
<template>
    <div>

        <div class="relative slide" id="foodsCarousel">
            <div class="carousel-indicators absolute bottom-0 flex bg-yellow-100 h-24 w-full justify-center items-center">
                <ol class="z-50 flex w-4/12 justify-center">
                    <li v-for="(img, i) in images" :key="i"
                        class="md:w-2 md:h-2 bg-gray-300 rounded-full cursor-pointer mx-2"></li>
                </ol>
            </div>
            <div class="carousel-inner relative overflow-hidden w-full">
                <div v-for="(img, i) in images" :id="`slide-${i}`" :key="i"
                    :class="`${active === i ? 'active' : 'left-full'}`"
                    class="carousel-item inset-0 relative w-full transform transition-all duration-500 ease-in-out">
                    <img class="block w-full" :src="img" alt="First slide" />
                </div>
            </div>
        </div>
    <body>
        <div class="card">
        <Splitter style="height: 300px">
            <SplitterPanel class="flex items-center justify-center" :size="25" :minSize="10">
                <div>
                    <div class="flex justify-start text-[30px] font-bold text-[#36CEF9] mt-6">
                Mục lục
            </div>
            <div class="mt-4 text-[20px] font-mono font-semibold">Tỉnh Thành</div>
                </div>
        
            </SplitterPanel>
            <SplitterPanel class="flex items-center justify-center" :size="75"> Panel 2 </SplitterPanel>
        </Splitter>
    </div>

    </body>
    </div>
</template>

<script>
import Splitter from "primevue/splitter";
import SplitterPanel from "primevue/splitterpanel";

export default {
  data: () => ({
    images: [
      "https://r2.nucuoimekong.com/wp-content/uploads/dac-san-mien-tay.jpg",
      "https://vemekong.com/wp-content/uploads/2021/12/can-tho-mau-than-1968-4a.jpg",
      "https://zoomtravel.vn/upload/images/Untitled%20design%20(9)(3).png",
    ],
    active: 0,
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
