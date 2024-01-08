<!-- eslint-disable max-len -->
<template>
  <div>
    <div class="centered">
      <svg xmlns="http://www.w3.org/2000/svg" width="100" height="41" viewBox="0 0 100 41" fill="none">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M39.447 35.6429H43.1783L45.2038 30.5258H55.6514L57.6769 35.6429H61.4081L52.6663 14.428H48.0822L39.447 35.6429ZM46.3765 27.4341L50.4276 17.1998L54.4787 27.4341H46.3765ZM71.1094 17.3064C73.7746 17.3064 75.3737 18.6924 76.0134 21.1443L79.2116 19.332C78.0389 16.0272 75.0539 14.2148 71.4292 14.2148C66.9517 14.2148 63.9667 16.88 63.9667 19.9716C63.9667 23.7029 66.6319 25.6218 71.5358 26.4747C75.1605 27.1143 76.5464 28.0738 76.5464 29.7795C76.5464 31.5918 74.6275 32.7645 71.7491 32.7645C68.4442 32.7645 66.2055 30.8456 65.4592 27.4341L62.261 29.4597C63.0072 31.805 64.2865 33.5107 65.9922 34.5768C67.8046 35.5363 69.6169 36.0693 71.6425 36.0693C76.5464 36.0693 79.9578 33.2976 79.9578 29.6729C79.9578 26.2615 77.5059 24.3425 72.6019 23.4897C69.2971 22.85 67.1649 21.8906 67.1649 19.9716C67.2715 18.3725 68.7641 17.3064 71.1094 17.3064ZM99.8934 14.428H81.1305V17.6263H88.9128V35.6429H92.2177V17.6263H100V14.428H99.8934Z" fill="var(--tg-theme-text-color)"/>
        <path d="M11.5985 0.703746L10.2151 1.50586L15.5625 10.7285L16.9459 9.92636L11.5985 0.703746Z" fill="var(--tg-theme-text-color)"/>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M7.46495 25.302C11.6226 25.302 14.9275 21.8905 14.9275 17.8395C14.9275 13.6818 11.516 10.377 7.46495 10.377C3.41387 10.377 0.00243262 13.7884 0.00243262 17.8395C-0.104175 21.9972 3.30726 25.302 7.46495 25.302Z" fill="#3D6791"/>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M24.2023 25.302C28.3599 25.302 31.6648 21.8905 31.6648 17.8395C31.6648 13.6818 28.2533 10.377 24.2023 10.377C20.0446 10.377 16.7397 13.7884 16.7397 17.8395C16.7397 21.9972 20.1512 25.302 24.2023 25.302Z" fill="#CE998D"/>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M15.8868 40.0149C20.0445 40.0149 23.3493 36.6034 23.3493 32.5524C23.3493 28.5013 19.9379 25.0898 15.8868 25.0898C11.8358 25.0898 8.42432 28.5013 8.42432 32.5524C8.42432 36.6034 11.7291 40.0149 15.8868 40.0149Z" fill="#A04476"/>
      </svg>
    </div>
    <filter-component
      @applyfilter="applyfilter"
    ></filter-component>
    <product-list
      :products="products"
    ></product-list>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import vFilterComponentVue from '@/components/vFilterComponent.vue';
import vProductListComponent from '@/components/vProductListComponent.vue';
import { EProductType, IProduct, ProductsService } from '@/services/Products.service';

const productService = new ProductsService();

export default defineComponent({
  components: {
    'filter-component': vFilterComponentVue,
    'product-list': vProductListComponent,
  },
  methods: {
    applyfilter() {
      this.products = this.getProductListByFilter();
    },
    getProductListByFilter() {
      if (this.$store.state.filter.type === EProductType.all) {
        return productService.all;
      }

      // eslint-disable-next-line max-len
      return productService.all.filter((product: IProduct) => product.type === this.$store.state.filter.type);
    },
  },
  mounted() {
    this.products = this.getProductListByFilter();
  },
  data() {
    return {
      products: productService.all,
    };
  },
});

</script>

<style scoped>
</style>
