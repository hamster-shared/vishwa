<template>
  <div class="header">
    <div class="flex max-w-[1920px] justify-between items-stretch mx-auto">

      <img src="@/assets/images/logo.png" />
      <div class="flex w-[50%] justify-between text-lg font-semibold ">
        <div v-for="item in menuList" :key="item.name" class="menu-item text-center w-[100%]">{{ item.name }}</div>
      </div>
    </div>
  </div>


</template>
<script lang='ts' setup>
import { ref } from "vue";
const menuList = ref([
  { name: 'Community', },
  { name: 'Gitbook' },
  { name: 'About us' },
  { name: 'Cooperation' }
])

</script>
<style lang='less' scoped>
.header {
  border-bottom: 1px solid #7b7b7a;
}

.menu-item {
  text-align: center;
  border-left: 1px solid #7b7b7a;
  line-height: 95px;
}
</style>