<!-- eslint-disable prettier/prettier -->
<!-- eslint-disable prettier/prettier -->
<template>
  <div class="homepage">
    <div class="img_container_1">
      <img
      src="../assets/img/background_homepage2.jpg"
      alt=""
      class="img_first"
    />
    <div class="text_overlay">
      <p class="text1 text-cyan-700">NHỮNG ĐỊA ĐIỂM TỐT NHẤT DÀNH CHO BẠN</p>
      <p class="text2">TRAVEL</p>
      <p class="text3"> enjoy & live a new full life</p>                            
      <p class="text4">"MekongTravel - Nơi gặp gỡ văn hóa, khám phá đặc sản và chìm đắm trong vẻ đẹp thiên nhiên. Hãy để chúng tôi biến mỗi chuyến đi thành cuộc phiêu lưu tuyệt vời của bạn."</p>

      <div class="relative mt-6">
    <div class="absolute -inset-5">
        <div
            class="w-full h-full max-w-sm mx-auto lg:mx-0 opacity-30 blur-lg bg-gradient-to-r from-yellow-400 via-pink-500 to-green-600">
        </div>
    </div>
    <a href="#" title=""
        class="relative z-10 inline-flex items-center justify-center w-full px-8 py-3 text-lg font-bold text-white transition-all duration-200 bg-cyan-500 border-2 border-transparent sm:w-auto rounded-xl font-pj hover:bg-white hover:text-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
        role="button">
        Khám phá thôi !
    </a>
</div>

    </div>                                          
    </div>
    <body>
      <div class="text_container mt-4 text-center">
        <p class="text_dichvu">
          Dịch vụ
        </p>
        <p class="text_tinhnangnoibat mt-2">
          Tính Năng Nổi Bật
        </p>
      </div>
    </body>
  </div>
</template>              
<script></script>
<style scoped>
.text1 {
  font-size: 16px;
  font-weight: 600;
  text-decoration: underline;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
}
.text2 {
  color: #96d724;
  font-size: 60px;
  margin-bottom: 0;
  font-weight: 600;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
}
.text3 {
  font-size: 60px;
  color: white;
  font-weight: 500;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
}

.text4 {
  font-size: 16px;
  color: white;
  word-wrap: break-word;
  width: 500px;
}
.img_container_1 {
  width: 100%;
  position: relative;
  display: inline-block;
}

.text_overlay {
  position: absolute;
  top: 30%;
  left: 10%;
}
.img_first {
  width: 100%;
  height: 700px;
}
.text_dichvu {
  color: #80a5b3;
  font-size: 18px;
}
.text_tinhnangnoibat {
  font-size: 30px;
  font-weight: 600;
  color: #2d3134;
}
</style>
