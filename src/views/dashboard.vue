<template>
  <Header></Header>
  <div class="dash-content-1">
    <div class=" max-w-[1920px] px-[50px] mx-auto mt-[0px]">
      <div class="md:text-[100px] text-[24px] flex items-center pt-[10%] mb-8">
        <div>Layer {M} Infra for</div>
        <img src="@/assets/images/coin.png" class="md:h-[100px] h-[48px] ml-8" />
      </div>
      <div class="md:text-[48px] text-[16px]">
        <div class="flex-1 text-center md:text-left">
          <div class="bg-[#F7931A] md:px-[32px] md:pt-[40px] md:pb-[20px] px-[16px] py-[8px] inline-block">
            -Decentralized Pay-Fi
            Protocol</div>
          <div class="bg-[#F7931A] md:px-[32px] md:pb-[40px] md:pt-[20px] px-[16px] py-[8px] inline-block"> -{M} For
            Middle &
            Multiple | Support L1 & 2, EVM &
            non-EVM</div>
        </div>
      </div>
      <div class="md:text-left text-center md:mt-[105px] mt-[32px]">
        <img src="@/assets/images/babyIon.png" class="md:h-[56px] h-[32px]" />
      </div>
    </div>
  </div>
  <div class="max-w-[1920px] md:px-[50px] mx-auto mt-[180px] pb-[100px]">
    <div>
      <div class="text-left md:text-[100px] text-[24px] mb-8 px-[16px]">Vishwa Technical Architecture</div>
      <img src="@/assets/images/content.png" class="w-[100%]" />
    </div>
    <div class="mt-12 text-left px-[16px]">
      <div class="md:text-[100px] text-[24px] mb-4">Why us</div>
      <div
        class="bg-[#F7931A] md:px-[32px] md:py-[40px] px-[16px] py-[8px] inline-block md:text-[48px] text-[16px] mb-12">
        Particle know how in
        Financial &
        web3.0
      </div>
      <div class="md:flex dash-contnet-2">
        <div class="md:w-3/5 w-[100%] p-[24px] dash-contnet-2-left">
          <div class="text-right ">
            <img src="@/assets/images/sub-y.png" class="h-[52px]" />
          </div>
          <div class="items-center mb-8 md:flex">
            <div class="md:mr-12">
              <img src="@/assets/images/avatar1.png" />
            </div>
            <div class="md:mr-[150px]">
              <div class="md:text-[48px] text-[18px]">Prof. Muriel Medard</div>
              <div class="md:text-[28px] text-[12px] font-semibold">Vishwa Chief Scientist
                NEC Professor of Software Science and
                Engineering at MIT</div>

            </div>
          </div>
          <div class="items-center mb-8">
            <img src="@/assets/images/us-list1.png" class="md:h-[80px] h-[40px]" />
            <img src="@/assets/images/us-list2.png" class="md:h-[80px] h-[40px]" />
            <img src="@/assets/images/us-list3.png" class="md:h-[80px] h-[40px]" />
            <img src="@/assets/images/us-list4.png" class="md:h-[80px] h-[40px]" />
            <img src="@/assets/images/us-list5.png" class="md:h-[80px] h-[40px]" />
          </div>
          <div
            class="bg-[#F7931A] md:p-[24px] px-[16px] py-[8px] md:text-[28px] text-[12px] font-semibold inline-block mb-8">
            Prof Muriel
            Medard's bio
          </div>
          <div class="md:text-[28px] text-[12px] font-semibold mb-6">Prof Muriel Medard is the NEC Chair of MIT's
            Engineering School.
            As a tenure Professor at MIT for 20 years, she has been the Head of MIT's Network Coding and Reliable
            Communications Group and has won many world-class achievement including: </div>
          <div class="md:text-[28px] text-[12px] font-semibold">&bull; US National Academy of Engineering (since 2020)
          </div>
          <div class="md:text-[28px] text-[12px] font-semibold">&bull; US National Academy of Inventors (since 2018)
          </div>
          <div class="md:text-[28px] text-[12px] font-semibold indent-[-20px] ml-[20px] mb-8">&bull; President of the
            Institute of
            Electrical
            and Electronics
            Engineers IEEE
            Information Theory Society (since 2012), and served on its board of
            governors for 11 years</div>
          <div>
            <div class="text-[#002E7B] text-[28px] font-semibold cursor-pointer hover:opacity-75">
              <LinkOutlined :style="{ fontSize: '28px' }" />
              https://ncrcg.mit.edu/muriel-medard/
            </div>
          </div>
        </div>
        <div class="md:w-2/5 w-[100%]">
          <div v-for="item in usList1" :key="item.id" class="us-list1-item px-[24px] py-[32px]">
            <div class="mb-4 text-right">
              <img :src="getImageURL(`/src/assets/images/${item.type}.png`)" class="h-[52px]" />
            </div>
            <div>
              <div class="flex items-center">
                <img :src="getImageURL(`/src/assets/images/${item.avatar}.png`)" />
                <div class="ml-8">
                  <div class="text-[48px]">{{ item.name }}</div>
                  <div class="text-[28px] font-semibold">{{ item.title }}</div>
                </div>
              </div>
              <div class="flex mt-8">
                <img v-for="it in item.imgs" :key="it" :src="getImageURL(`/src/assets/images/${it}.png`)"
                  class="h-[60px]" />
              </div>
            </div>
          </div>
          <div class="h-[120px] relative md:block hidden">
            <div class="absolute bottom-0 right-0">
              <ArrowDownOutlined :style="{ fontSize: '32px' }" class="arrow-r" />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="mt-12 text-left">
      <div class="md:text-[100px] text-[24px] mb-4">Why us</div>
      <div class="grid grid-cols-4 gap-0 dash-contnet-3 ">
        <div v-for="item in usList2" :key="item.id" class="px-[24px] py-[48px] dash-list2-item">
          <div class="flex items-center mb-12">
            <img :src="getImageURL(`/src/assets/images/${item.avatar}.png`)" />
            <div class="ml-4">
              <div class="text-[48px]">{{ item.name }}</div>
              <div class="text-[28px] font-semibold">{{ item.title }}</div>
            </div>
          </div>
          <img v-for="it in item.imgs" :key="it" :src="getImageURL(`/src/assets/images/${it}.png`)" class="h-[56px]" />
        </div>
      </div>
      <div class="grid-cols-8 gap-0 md:grid">
        <div class="md:col-span-5 pb-14 us-list2-content">
          <div class="bg-[#F7931A] inline-block px-[32px] py-[40px] text-[48px] my-12">Exceptional tech
            team
          </div>
          <div class="text-[28px] font-semibold">
            <div class="indent-[-20px] ml-[20px] mb-2">&bull; 12+ grants from top blockchains, designing EIP &
              processing BIP
            </div>
            <div class="indent-[-20px] ml-[20px] mb-2">&bull; Core coding contributor of AAVE & Cloud computing &
              Fintech
              systems
              building for banks & insurances</div>
            <div class="indent-[-20px] ml-[20px]">&bull; Ex CTO undertake 1000+ big fintech projects within 20 years(New
              Touch)
            </div>
          </div>
        </div>
        <div class="md:col-span-3 px-[24px]">
          <div class="bg-[#F7931A] inline-block px-[32px] py-[40px] text-[48px] my-12">Well-balanced team
          </div>
          <div class="text-[28px] font-semibold">
            <div class="indent-[-20px] ml-[20px] mb-2">&bull; Mature entrepreneurs in IT&web3.0</div>
            <div class="indent-[-20px] ml-[20px] mb-2">&bull; Fundraising $200Ms and successful
              merged by Oracle & Intel</div>
            <div class="indent-[-20px] ml-[20px]">&bull; Delivered 180x return for investors in
              crypto marketplace</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang='ts' setup>
import { ref } from "vue";
import { LinkOutlined, ArrowDownOutlined } from '@ant-design/icons-vue';
import Header from "@/components/Header.vue"
import useAssets from "@/store/useAsse";
const { getImageURL } = useAssets();


const usList1 = ref([
  { id: 1, name: 'Wayne.w', title: 'Chief Architect', avatar: 'avatar2', type: 'sub-g', imgs: ['us1', 'us2'] },
  { id: 2, name: 'Michael Heinrich', title: 'Advisor from 0G labs', avatar: 'avatar3', type: 'sub-y', imgs: ['us3', 'us4', 'us5', 'us6'] },
  { id: 3, name: 'Wayne.Z', title: 'Advisor from NGC Ventures', avatar: 'avatar4', type: 'sub-y', imgs: ['us7', 'us8', 'us9', 'us10', 'us11'] }
])

const usList2 = ref([
  {
    id: 1, name: 'Kvin Thiel', title: 'Business co founder', avatar: 'avatar5', imgs: ['us12', 'us13', 'us14', 'us15']
  },
  {
    id: 2, name: 'Marco', title: 'Operation co founder', avatar: 'avatar6', imgs: ['us16', 'us17']
  },
  { id: 3, name: 'Shi', title: 'Technology co founder', avatar: 'avatar7', imgs: ['us18', 'us19', 'us20', 'us21'] },
  {
    id: 4, name: 'Echo', title: 'Marketingco founder', avatar: 'avatar8', imgs: ['us22', 'us23', 'us24']
  },
])

</script>
<style lang='less' scoped>
.dash-content-1 {
  height: calc(100vh - 95px);
  background: url('@/assets/images/bg-1.png') 100% 100% no-repeat;
  background-size: cover;
}

.dash-contnet-2,
.dash-contnet-3 {
  border-top: 1px solid #7b7b7a;
  border-bottom: 1px solid #7b7b7a;
}

.dash-list2-item:not(:last-child) {
  border-right: 1px solid #7b7b7a;
}

.dash-contnet-2-left {
  border-right: 1px solid #7b7b7a;
}

.us-list1-item {
  border-bottom: 1px solid #7b7b7a;
}

.arrow-r {
  transform: rotate(-45deg);
}

.us-list2-content {
  border-bottom: 1px solid #7b7b7a;
  border-right: 1px solid #7b7b7a;
}
</style>