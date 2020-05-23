<template>
  <div class="page-product-show" v-if="item">
    <carousel auto-height :responsive="responsive">
      <img :src="p.url" v-for="(p,idx) in item.pics" :key="idx" alt="..." />
    </carousel>
    <div class="info">
      <div class="name">{{item.name}}</div>
      <div class="price">₩ {{item.salesPrice}}</div>
    </div>
  </div>
</template>
<script>
import carousel from 'vue-owl-carousel';

import fd from './fakeData';

export default {
  name: 'ProductShow',
  components: { carousel },
  data() {
    return {
      id: '',
      item: null,
      active: 0,
      responsive: {
        0: { items: 1, nav: false, dots: true },
        900: { items: 3, nav: false, dots: true },
      },
    };
  },
  mounted() {
    this.id = this.$route.query && +this.$route.query.id;
    if (!this.id) {
      window.location.href = '/';
      return;
    }
    this.item = fd.data.data.find((i) => +i.id === this.id);
    if (!this.item) {
      window.location.href = '/';
    }
  },
};
</script>

<style lang="scss" scoped>
.info {
  text-align: left;
  padding: 30px;
  .name {
    font-weight: bold;
    color: black;
    font-size: 20px;
  }
}
</style>
