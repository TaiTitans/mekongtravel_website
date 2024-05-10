<template>
    <div>
      <div class="static ml-8 mr-8 mt-20">
        <div class="text-[#80a5b3] text-left font-['Inter-SemiBold', sans-serif] text-2xl leading-5 font-bold relative">
          NHỮNG ĐỊA ĐIỂM NỔI BẬT
        </div>
      </div>
  
      <div class="itemlist flex flex-row gap-6 items-start justify-center mt-6 mb-20">
        <div
          v-for="location in locations"
          :key="location._id"
          class="bg-zinc-50 shadow-lg shadow-cyan-500/50 rounded p-4 flex flex-col gap-4 items-center justify-center w-[342px] h-[432px]"
        >
          <img
            class="rounded-2xl shrink-0 w-[330px] h-60 relative"
            style="object-fit: cover"
            :src="location.hinhAnh"
          />
          <div class="flex flex-col gap-3.5 items-start justify-start self-stretch shrink-0 relative">
            <div class="text-[#2d3134] text-left font-['Inter-SemiBold', sans-serif] text-[20px] leading-6 font-semibold relative self-stretch">
              {{ location.tenDiaDiem }}
            </div>
            <!-- <div v-if="location.tinhThanhID.tenTinhThanh" class="text-[#2d3134] text-left font-['Inter-Regular', sans-serif] text-lg leading-[18px] font-normal relative self-stretch">
              {{ location.tinhThanhID.tenTinhThanh }}
            </div> -->
            <div class="text-[#5b5f62] text-left font-['Inter-Regular', sans-serif] text-base leading-4 font-normal relative self-stretch">
              Dịch vụ vé : Không
            </div>
          </div>
          <div class="flex flex-row items-center justify-between self-stretch shrink-0 relative">
            <div class="shrink-0 w-[45px] h-[25px] static">
              <div class="text-[#2d3134] text-left font-['Inter-SemiBold', sans-serif] text-xl leading-5 font-semibold absolute left-0 top-[14.25px]">
                {{ location.soSao }}
              </div>
              <img class="w-[20px] h-[20px] absolute left-5 top-[11.5px]" style="object-fit: cover" src="../assets/img/homepage/ngoisao.png" />
            </div>
            <router-link to="/location-product" title="" class="left-[188px] top-0 z-10 shrink-0 w-[100px] h-10 static text-center py-2 text-[14px] text-[#80a5b3] transition-all duration-200 bg-white border-solid border-[#80a5b3] border rounded-full font-pj hover:bg-cyan-500 hover:text-white focus:ring-2 focus:ring-offset-2 focus:ring-gray-900" role="button">
              Xem thêm
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import api from '../services/api.service';
  
  export default {
    data() {
      return {
        locations: [],
      };
    },
    created() {
      this.fetchLatestLocations();
    },
    methods: {
        fetchLatestLocations() {
  api.get('/api/diadiem/new')
    .then(response => {
      this.locations = response.data.data.map(location => ({
        _id: location._id,
        hinhAnh: location.hinhAnh,
        tenDiaDiem: location.tenDiaDiem,
        soSao: location.soSao || 0,
        tinhThanhID: {
          tenTinhThanh: location.tinhThanhID?.tenTinhThanh || 'N/A'
        }
      }));
    })
    .catch(error => {
      console.error('Error fetching latest locations:', error);
    });
}
    },
  };
  </script>