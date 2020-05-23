<template>
  <div product-list-page>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <a class="navbar-brand" href="#">My Shop</a>
      <div
        type="button"
        style="border:none"
        class="navbar-toggler"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <svg
          class="bi bi-search"
          width="1em"
          height="1em"
          viewBox="0 0 16 16"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            d="M10.442 10.442a1 1 0 0 1 1.415 0l3.85 3.85a1 1 0 0 1-1.414 1.415l-3.85-3.85a1 1 0 0 1 0-1.415z"
          />
          <path
            fill-rule="evenodd"
            d="M6.5 12a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11zM13 6.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0z"
          />
        </svg>
      </div>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <form class="form-inline my-2 my-lg-0">
          <input
            class="form-control mr-sm-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
            v-model="keyword"
          />
          <button @click="onSearch" class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
        </form>
      </div>
    </nav>
    <div class="container" style="margin-top:20px;">
      <div class="row">
        <div v-for="(product,idx) in list" :key="idx" class="col-lg-4 col-sm-6">
          <div class="single-discover-products">
            <div class="product-img">
              <div class="product-img-1">
                <img :src="product.pics[0].url" alt="Image" />
                <div class="product-img-2">
                  <img :src="product.pics[0].url" alt="Image" />
                </div>
              </div>
            </div>
            <div class="product-content">
              <span class="title">{{product.name}}</span>
              <!-- <h3></h3> -->
              <br>
              <span class="price">₩ {{product.salesPrice}}</span>
            </div>
            <div class="purchase-bar">
              <ul>
                <!-- <li>
                <a href="#product-view-one" data-toggle="modal">
                  <i class="flaticon-search"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i class="flaticon-heart"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i class="flaticon-loading"></i>
                </a>
                </li>-->
              </ul>
              <router-link
                :to="{name: 'ProductShow', query: {id:product.id}}"
                class="default-btn"
              >Show Detail</router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import fd from './fakeData';

export default {
  name: 'ProductList',
  data() {
    return {
      keyword: '',
      list: [],
    };
  },
  methods: {
    onSearch() {
      let filterFunc = () => true;
      if (this.keyword) {
        const reg = new RegExp(this.keyword);
        filterFunc = (i) => reg.test(i.name);
      }
      this.list = fd.data.data.filter(filterFunc);
    },
  },
  mounted() {
    this.onSearch();
  },
};
</script>
<style lang="scss" scoped>
img {
  max-width: 100%;
  height: auto;
}
.default-btn {
  font-size: 16px;
  color: #ffffff;
  padding: 10px 20px 10px 20px;
  line-height: 1;
  -webkit-transition: all 0.5s;
  transition: all 0.5s;
  z-index: 1;
  text-transform: capitalize;
  background-color: #d98a0e;
  border-radius: 4px;
  position: relative;
  cursor: pointer;
  border-radius: 4px;
  text-transform: uppercase;
  text-align: center;
  text-decoration: none;
}
.single-discover-products {
  text-align: center;
  background-color: #f4faff;
  overflow: hidden;
  position: relative;
  margin-bottom: 30px;
}

.single-discover-products .product-img {
  padding: 20px;
}

.single-discover-products .product-img .product-img-1 {
  opacity: 1;
  -webkit-transition: all 0.5s;
  transition: all 0.5s;
  position: relative;
}

.single-discover-products .product-img .product-img-1 .product-img-2 {
  width: 100%;
  height: 100%;
  opacity: 0;
  -webkit-transform: scale(3);
  transform: scale(3);
  position: absolute;
  top: 0;
  left: 0;
  -webkit-transition: all 0.5s;
  transition: all 0.5s;
}

.single-discover-products .product-content {
  padding: 0 30px 30px 30px;
}

.single-discover-products .product-content .title {
  text-transform: uppercase;
  display: inline-block;
  margin-bottom: 9px;
}

.single-discover-products .product-content .price {
  color: #0160e7;
  font-size: 20px;
}

.single-discover-products .purchase-bar {
  background-color: #f7f7f7;
  padding: 30px;
  position: absolute;
  left: 0;
  right: 0;
  bottom: -175px;
  -webkit-transition: all 0.5s;
  transition: all 0.5s;
  -webkit-box-shadow: 0 0 20px 3px rgba(0, 0, 0, 0.05);
  box-shadow: 0 0 20px 3px rgba(0, 0, 0, 0.05);
}

.single-discover-products .purchase-bar ul {
  line-height: 1;
  margin-bottom: 20px;
}

.single-discover-products .purchase-bar ul li {
  display: inline-block;
  padding: 0 5px;
}

.single-discover-products .purchase-bar ul li a i {
  font-size: 20px;
  color: #d98a0e;
  background-color: #f9eedb;
  display: inline-block;
  width: 40px;
  height: 40px;
  line-height: 40px;
  border-radius: 50%;
  -webkit-transition: all 0.5s;
  transition: all 0.5s;
}

.single-discover-products .purchase-bar ul li a:hover i {
  background-color: #d98a0e;
  color: #ffffff;
}

.single-discover-products:hover .purchase-bar {
  bottom: 0;
}

.single-discover-products:hover .product-img .product-img-2 {
  opacity: 0;
}

.single-discover-products:hover .product-img .product-img-2 {
  opacity: 1;
  -webkit-transform: scale(1);
  transform: scale(1);
}
</style>
