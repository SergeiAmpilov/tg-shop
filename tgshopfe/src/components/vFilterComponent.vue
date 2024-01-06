<template>
  <div v-cloak class="mt p1">
    <ul class="filter-list">
      <li class="filter-list__item">
        <button
          class="filter-list__button"
          :class="$store.state.filter.type === 'all' ? 'filter-list__button-active' : ''"
          type="button"
          @click.prevent="filterClick('all')"
        >
          Все
        </button>
      </li>
      <li class="filter-list__item">
        <button
          class="filter-list__button"
          :class="$store.state.filter.type === 'vine' ? 'filter-list__button-active' : ''"
          type="button"
          @click.prevent="filterClick('vine')"
        >
          Вино
        </button>
      </li>
      <li class="filter-list__item">
        <button
          class="filter-list__button"
          :class="$store.state.filter.type === 'shamp' ? 'filter-list__button-active' : ''"
          type="button"
          @click.prevent="filterClick('shamp')"
        >
          Игристое
        </button>
      </li>
      <li class="filter-list__item">
        <button
          class="filter-list__button"
          :class="$store.state.filter.type === 'strong' ? 'filter-list__button-active' : ''"
          type="button"
          @click.prevent="filterClick('strong')"
        >
          Крепкое
        </button>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { EProductType } from '@/services/Products.service';
import { defineComponent } from 'vue';

export default defineComponent({
  methods: {
    filterClick(filtValue: string) {
      this.$store.commit('setFilter', EProductType[filtValue]);
    },
  },
});
</script>

<style scoped>
.filter-list {
  list-style: none;
  padding: 0;
  display: flex;
}
.filter-list__item {
  margin-left: var(--main-padding);
}
.filter-list__item:first-child {
  margin-left: 0;
}
.filter-list__button {
  /* padding: 5px 10px;
  border-radius: 2px; */
}
.filter-list__button-active {
  background: var(--color-ast-orange);
}
</style>
