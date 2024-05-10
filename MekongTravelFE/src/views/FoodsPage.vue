<template>
  <NavBar />
  <div>

    <div class="flex mb-4 justify-center text-[26px] font-bold text-sky-700">
      Ẩm Thực
    </div>

    <div
      class="mt-6 relative flex flex-col items-center max-w-screen-xl px-4 mx-auto md:flex-row sm:px-6 rounded-md shadow-xl shadow-cyan-500/50">
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

<!--Am Thuc List-->
<div class="flex flex-row justify-center mt-12 rounded-lg shadow-lg">
    <!-- Cột bên trái - Danh sách tỉnh thành -->
    <div class="w-1/4 px-4 border-r mt-4">
      <h3 class="text-[22px] text-[#36cef9] font-semibold mb-4">Danh sách tỉnh thành</h3>
      <ul>
        <li v-for="tinhThanh in tinhThanhList" :key="tinhThanh._id">
          <button @click="getAmThucByTinhThanh(tinhThanh._id)" class="py-2 px-4 block w-full text-left hover:bg-[#36cef9] hover:text-white">{{ tinhThanh.tenTinhThanh }}</button>
        </li>
      </ul>
    </div>

    <!-- Cột bên phải - Danh sách ẩm thực của tỉnh thành được chọn -->
    <div class="w-3/4 px-4 mt-4 mb-4">
      <div>
    <!-- Thêm ô input và nút tìm kiếm -->
    <div class="flex justify-end my-4">
      <input type="text" v-model="searchKeyword" placeholder="Nhập từ khóa tìm kiếm" class="px-4 py-2 border border-gray-300 rounded-md mr-2">
      <button @click="searchAmThuc" class="px-4 py-2 bg-[#36cef9] text-white rounded-md hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue">
        Tìm kiếm
      </button>
    </div>

    <!-- Danh sách ẩm thực được tìm kiếm -->
    <div v-if="searchResults.length > 0">
      <h3 class="text-lg font-semibold mb-4">Kết quả tìm kiếm:</h3>
      <div v-for="amThuc in searchResults" :key="amThuc._id" class="mb-4">
        <!-- Hiển thị thông tin ẩm thực -->
        <div class="border border-gray-200 p-4 rounded-lg flex">
          <img :src="amThuc.hinhAnh" alt="Ảnh món ăn" class="w-32 h-32 object-cover rounded-lg mr-4">
          <div>
            <h4 class="text-lg font-semibold">{{ amThuc.tenMonAn }}</h4>
            <p class="text-gray-600">{{ amThuc.moTa }}</p>
            <p class="mt-2 text-blue-500 font-semibold">{{ formatPrice(amThuc.soTien) }}</p>
          </div>
        </div>
      </div>
    </div>
    <div v-else>
      <p v-if="searchKeyword !== ''">Không tìm thấy kết quả phù hợp.</p>
    </div>
  </div>


      <h3 v-if="selectedTinhThanh" class="text-lg font-semibold mb-4">{{ selectedTinhThanh.tenTinhThanh }}</h3>
      <div v-if="selectedTinhThanh">
        <div v-for="amThuc in displayedAmThucList" :key="amThuc._id" class="mb-4">
          <div class="border border-gray-200 p-4 rounded-lg flex">
            <img :src="amThuc.hinhAnh" alt="Ảnh món ăn" class="w-32 h-32 object-cover rounded-lg mr-4">
            <div>
              <h4 class="text-lg font-semibold">{{ amThuc.tenMonAn }}</h4>
              <p class="text-gray-600">{{ amThuc.moTa }}</p>
              <p class="mt-2 text-blue-500 font-semibold">{{ formatPrice(amThuc.soTien) }}</p>
            </div>
          </div>
        </div>
        <div v-if="totalPages > 1" class="flex justify-center mt-4">
          <button @click="changePage(page - 1)" :disabled="page === 1" class="px-4 py-2 mr-2 rounded bg-[#36cef9] text-white hover:bg-blue-600">Trang trước</button>
          <button @click="changePage(page + 1)" :disabled="page === totalPages" class="px-4 py-2 rounded bg-[#36cef9] text-white hover:bg-blue-600">Trang sau</button>
        </div>
      </div>
      <div v-else>
        <p>Vui lòng chọn một tỉnh thành để xem danh sách ẩm thực.</p>
      </div>
    </div>
  </div>


    <div class="mx-auto max-w-7xl sm:px-6 lg:px-8 mt-20">

<div
    class="shadow-lg relative isolate overflow-hidden bg-white px-6 py-20 text-center sm:rounded-3xl sm:border sm:border-gray-100 sm:px-16 sm:shadow-sm mb-4">

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
  <Footer />
</template>

<script>
import api from '../services/api.service';
import NavBar from "../components/NavBar.vue";
import Footer from "../components/Footer.vue";
export default {
  data() {
    return {
      tinhThanhList: [], // Danh sách tỉnh thành
      selectedTinhThanh: null, // Tỉnh thành được chọn
      amThucList: [], // Danh sách ẩm thực của tỉnh thành được chọn
      page: 1, // Trang hiện tại
      perPage: 4,
      searchKeyword: '', // Từ khóa tìm kiếm nhập từ người dùng
      searchResults: []  // Số lượng ẩm thực hiển thị trên mỗi trang
    };
  },
  components:{
    NavBar,
    Footer
  },
  computed: {
    totalPages() {
      return Math.ceil(this.amThucList.length / this.perPage);
    },
    displayedAmThucList() {
      const startIndex = (this.page - 1) * this.perPage;
      return this.amThucList.slice(startIndex, startIndex + this.perPage);
    }
  },
  mounted() {
    this.fetchTinhThanhList();
  },
  methods: {
    async fetchTinhThanhList() {
      try {
        const response = await api.get('/api/tinhthanh/getAll');
        this.tinhThanhList = response.data.data;
      } catch (error) {
        console.error('Error fetching tỉnh thành list:', error);
      }
    },
    async getAmThucByTinhThanh(tinhThanhID) {
      try {
        const response = await api.get(`/api/amthuc/getByTinhThanh/${tinhThanhID}`);
        this.selectedTinhThanh = this.tinhThanhList.find(item => item._id === tinhThanhID);
        this.amThucList = response.data.data;
        this.page = 1; // Reset lại trang khi chuyển tỉnh thành
      } catch (error) {
        console.error('Error fetching ẩm thực by tỉnh thành:', error);
      }
    },
    changePage(newPage) {
      this.page = newPage;
    },
    formatPrice(price) {
    if (typeof price === 'number') {
        return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(price);
    } else {
        return '';
    }
},
searchAmThuc() {
    if (!this.searchKeyword) {
      console.error('Từ khóa tìm kiếm không hợp lệ.');
      return;
    }

    // Chuyển đổi từ khóa tìm kiếm sang chữ thường để tìm kiếm không phân biệt hoa thường
    const keyword = this.searchKeyword.toLowerCase();

    // Lọc danh sách địa điểm theo từ khóa tìm kiếm
    this.searchResults = this.diaDiemList.filter(diaDiem => diaDiem.tenDiaDiem.toLowerCase().includes(keyword));
  }

  }
};
</script>

<style>

</style>