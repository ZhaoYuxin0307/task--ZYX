<template>
  <template v-if="props.item && !props.item.child">
    <el-menu-item :index="props.item.frontpath">
      <template #title>
        <el-button
          :icon="props.item.icon"
          size="small"
          style="border: none; background: none; padding: 0"
        ></el-button>
        <span>{{ props.item.name }}</span>
      </template>
    </el-menu-item>
  </template>
  <template v-if="props.item && props.item.child">
    <el-sub-menu :index="props.item.frontpath + props.item.name">
      <template #title>
        <el-button
          :icon="props.item.icon"
          size="small"
          style="border: none; background: none; padding: 0"
        ></el-button>
        <span>{{ props.item.name }}</span>
      </template>
      <Item
        v-for="childrenItem in props.item.child"
        :key="childrenItem.name"
        :item="childrenItem"
      ></Item>
    </el-sub-menu>
  </template>
</template>

<script setup>
import { defineProps } from 'vue'

const props = defineProps({
  item: {
    type: Object,
    default: () => {}
  }
})
</script>

<style lang="scss" scoped></style>
