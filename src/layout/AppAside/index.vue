<template>
  <el-menu
    :class="$store.getters.isCollapse ? 'cl' : 'op'"
    :collapse="$store.getters.isCollapse"
    :collapse-transition="false"
    :default-active="$route.path"
    :style="{ width: !$store.getters.isCollapse ? '250px' : '64px' }"
    active-text-color="#409eff"
    router
    text-color="#303133"
    unique-opened
  >
    <Item v-for="v in menu" :key="v.name" :item="v"></Item>
  </el-menu>
</template>

<script setup>
import { useStore } from 'vuex'
import { computed } from 'vue'
import Item from './Item'

const store = useStore()

const menu = computed(() => {
  return store.getters.menuList
})
</script>

<style lang="scss" scoped>
.el-menu {
  border-right: none;
}

.op {
  animation-name: op;
  animation-duration: 0.4s;
}

.cl {
  animation-name: cl;
  animation-duration: 0.4s;
}

@keyframes op {
  0% {
    width: 64px;
  }
  100% {
    width: 250px;
  }
}

@keyframes cl {
  0% {
    width: 250px;
  }
  100% {
    width: 64px;
  }
}
</style>
