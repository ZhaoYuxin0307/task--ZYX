<template>
  <el-container>
    <el-header>
      <app-header></app-header>
    </el-header>
    <el-container>
      <el-aside>
        <app-aside></app-aside>
      </el-aside>
      <el-main>
        <div class="tagbox">
          <TagsView></TagsView>
        </div>
        <app-main></app-main>
      </el-main>
    </el-container>
  </el-container>
</template>

<script setup>
import AppAside from './AppAside'
import AppMain from './AppMain'
import AppHeader from './AppHeader'
import TagsView from '../components/TagsView.vue'
</script>

<style lang="scss" scoped>
.el-header {
  width: 100%;
  background: #4338ca;
  height: 64px;
  position: fixed;
  top: 0;
  z-index: 1000;
}
.el-container {
  padding-top: 32px;
  height: 100%;
  .el-aside {
    width: auto;
    background: #fff;
    height: 100%;
    overflow: auto;
  }
  .el-main {
    width: 100%;
    background: #f3f4f6;
    padding: 0 10px;
  }
}
</style>
