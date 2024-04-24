<template>
  <div>
    <h2>Danh sách tỉnh thành</h2>
    <div class="mb-4">
      <input
        v-model="searchQuery"
        type="text"
        placeholder="Tìm kiếm tỉnh thành"
        class="px-3 py-2 border rounded-md"
      />
    </div>
    <div v-if="filteredProvinces.length > 0">
      <div
        v-for="province in filteredProvinces"
        :key="province.id"
        class="mb-4"
      >
        <h3 class="cursor-pointer" @click="fetchFoodsByProvince(province.id)">
          {{ province.name }}
        </h3>
      </div>
    </div>
    <div v-else>Không có dữ liệu.</div>
  </div>
</template>

<script>
import api from "../../services/api.service";

export default {
  data() {
    return {
      provinces: [],
      searchQuery: "",
    };
  },
  computed: {
    filteredProvinces() {
      return this.provinces.filter((province) =>
        province.name.toLowerCase().includes(this.searchQuery.toLowerCase())
      );
    },
  },
  methods: {
    async fetchProvinces() {
      try {
        const response = await api.get("/api/tinhthanh/getAll");
        this.provinces = response.data;
      } catch (error) {
        console.error("Lỗi khi lấy dữ liệu tỉnh thành:", error);
      }
    },
    fetchFoodsByProvince(tinhThanhId) {
      this.$emit("fetchFoods", tinhThanhId);
    },
  },
  mounted() {
    this.fetchProvinces();
  },
};
</script>
