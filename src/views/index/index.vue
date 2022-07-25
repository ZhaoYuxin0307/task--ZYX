<template>
  <div class="dv">
    <div>
      <div class="el-row" style="margin-left: -10px; margin-right: -10px">
        <!---->
        <div
          class="el-col el-col-6 is-guttered"
          style="padding-right: 10px; padding-left: 10px"
        >
          <div class="el-card is-hover-shadow border-0">
            <div class="el-card__header">
              <div class="flex justify-between">
                <span class="text-sm">支付订单</span
                ><span class="el-tag el-tag--success el-tag--plain"
                  ><span class="el-tag__content">年</span
                  ><!--v-if--></span
                >
              </div>
            </div>
            <div class="el-card__body" style="">
              <span class="text-3xl font-bold text-gray-500">51</span>
              <div
                class="el-divider el-divider--horizontal"
                role="separator"
                style="--el-border-style: solid"
              >
                <!--v-if-->
              </div>
              <div class="flex justify-between text-sm text-gray-500">
                <span>总支付订单</span><span>51</span>
              </div>
            </div>
          </div>
        </div>
        <div
          class="el-col el-col-6 is-guttered"
          style="padding-right: 10px; padding-left: 10px"
        >
          <div class="el-card is-hover-shadow border-0">
            <div class="el-card__header">
              <div class="flex justify-between">
                <span class="text-sm">订单量</span
                ><span class="el-tag el-tag--danger el-tag--plain"
                  ><span class="el-tag__content">周</span
                  ><!--v-if--></span
                >
              </div>
            </div>
            <div class="el-card__body" style="">
              <span class="text-3xl font-bold text-gray-500">555</span>
              <div
                class="el-divider el-divider--horizontal"
                role="separator"
                style="--el-border-style: solid"
              >
                <!--v-if-->
              </div>
              <div class="flex justify-between text-sm text-gray-500">
                <span>转化率</span><span>60%</span>
              </div>
            </div>
          </div>
        </div>
        <div
          class="el-col el-col-6 is-guttered"
          style="padding-right: 10px; padding-left: 10px"
        >
          <div class="el-card is-hover-shadow border-0">
            <div class="el-card__header">
              <div class="flex justify-between">
                <span class="text-sm">销售额</span
                ><span class="el-tag el-tag--plain"
                  ><span class="el-tag__content">年</span
                  ><!--v-if--></span
                >
              </div>
            </div>
            <div class="el-card__body" style="">
              <span class="text-3xl font-bold text-gray-500">4</span>
              <div
                class="el-divider el-divider--horizontal"
                role="separator"
                style="--el-border-style: solid"
              >
                <!--v-if-->
              </div>
              <div class="flex justify-between text-sm text-gray-500">
                <span>总销售额</span><span>3.74</span>
              </div>
            </div>
          </div>
        </div>
        <div
          class="el-col el-col-6 is-guttered"
          style="padding-right: 10px; padding-left: 10px"
        >
          <div class="el-card is-hover-shadow border-0">
            <div class="el-card__header">
              <div class="flex justify-between">
                <span class="text-sm">新增用户</span
                ><span class="el-tag el-tag--warning el-tag--plain"
                  ><span class="el-tag__content">年</span
                  ><!--v-if--></span
                >
              </div>
            </div>
            <div class="el-card__body" style="">
              <span class="text-3xl font-bold text-gray-500">20</span>
              <div
                class="el-divider el-divider--horizontal"
                role="separator"
                style="--el-border-style: solid"
              >
                <!--v-if-->
              </div>
              <div class="flex justify-between text-sm text-gray-500">
                <span>总用户</span><span>20</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="el-row mt-5" style="margin-left: -10px; margin-right: -10px">
        <div
          class="el-col el-col-3 is-guttered"
          style="padding-right: 10px; padding-left: 10px"
        >
          <div class="el-card is-hover-shadow">
            <!--v-if-->
            <div class="el-card__body" style="">
              <div
                class="flex flex-col items-center justify-center cursor-pointer"
              >
                <i class="el-icon text-light-blue-500" style="font-size: 16px"
                  ><svg
                    viewBox="0 0 1024 1024"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill="currentColor"
                      d="M512 512a192 192 0 1 0 0-384 192 192 0 0 0 0 384zm0 64a256 256 0 1 1 0-512 256 256 0 0 1 0 512zm320 320v-96a96 96 0 0 0-96-96H288a96 96 0 0 0-96 96v96a32 32 0 1 1-64 0v-96a160 160 0 0 1 160-160h448a160 160 0 0 1 160 160v96a32 32 0 1 1-64 0z"
                    ></path></svg></i
                ><span class="text-sm mt-2">用户</span>
              </div>
            </div>
          </div>
        </div>
        <div
          class="el-col el-col-3 is-guttered"
          style="padding-right: 10px; padding-left: 10px"
        >
          <div class="el-card is-hover-shadow">
            <!--v-if-->
            <div class="el-card__body" style="">
              <div
                class="flex flex-col items-center justify-center cursor-pointer"
              >
                <i class="el-icon text-violet-500" style="font-size: 16px"
                  ><svg
                    viewBox="0 0 1024 1024"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill="currentColor"
                      d="M432 928a48 48 0 1 1 0-96 48 48 0 0 1 0 96zm320 0a48 48 0 1 1 0-96 48 48 0 0 1 0 96zM96 128a32 32 0 0 1 0-64h160a32 32 0 0 1 31.36 25.728L320.64 256H928a32 32 0 0 1 31.296 38.72l-96 448A32 32 0 0 1 832 768H384a32 32 0 0 1-31.36-25.728L229.76 128H96zm314.24 576h395.904l82.304-384H333.44l76.8 384z"
                    ></path></svg></i
                ><span class="text-sm mt-2">商品</span>
              </div>
            </div>
          </div>
        </div>
        <div
          class="el-col el-col-3 is-guttered"
          style="padding-right: 10px; padding-left: 10px"
        >
          <div class="el-card is-hover-shadow">
            <!--v-if-->
            <div class="el-card__body" style="">
              <div
                class="flex flex-col items-center justify-center cursor-pointer"
              >
                <i class="el-icon text-fuchsia-500" style="font-size: 16px"
                  ><svg
                    viewBox="0 0 1024 1024"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill="currentColor"
                      d="M192 128v768h640V128H192zm-32-64h704a32 32 0 0 1 32 32v832a32 32 0 0 1-32 32H160a32 32 0 0 1-32-32V96a32 32 0 0 1 32-32zm160 448h384v64H320v-64zm0-192h192v64H320v-64zm0 384h384v64H320v-64z"
                    ></path></svg></i
                ><span class="text-sm mt-2">订单</span>
              </div>
            </div>
          </div>
        </div>
        <div
          class="el-col el-col-3 is-guttered"
          style="padding-right: 10px; padding-left: 10px"
        >
          <div class="el-card is-hover-shadow">
            <!--v-if-->
            <div class="el-card__body" style="">
              <div
                class="flex flex-col items-center justify-center cursor-pointer"
              >
                <i class="el-icon text-teal-500" style="font-size: 16px"
                  ><svg
                    viewBox="0 0 1024 1024"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill="currentColor"
                      d="M273.536 736H800a64 64 0 0 0 64-64V256a64 64 0 0 0-64-64H224a64 64 0 0 0-64 64v570.88L273.536 736zM296 800 147.968 918.4A32 32 0 0 1 96 893.44V256a128 128 0 0 1 128-128h576a128 128 0 0 1 128 128v416a128 128 0 0 1-128 128H296z"
                    ></path>
                    <path
                      fill="currentColor"
                      d="M512 499.2a51.2 51.2 0 1 1 0-102.4 51.2 51.2 0 0 1 0 102.4zm192 0a51.2 51.2 0 1 1 0-102.4 51.2 51.2 0 0 1 0 102.4zm-384 0a51.2 51.2 0 1 1 0-102.4 51.2 51.2 0 0 1 0 102.4z"
                    ></path></svg></i
                ><span class="text-sm mt-2">评价</span>
              </div>
            </div>
          </div>
        </div>
        <div
          class="el-col el-col-3 is-guttered"
          style="padding-right: 10px; padding-left: 10px"
        >
          <div class="el-card is-hover-shadow">
            <!--v-if-->
            <div class="el-card__body" style="">
              <div
                class="flex flex-col items-center justify-center cursor-pointer"
              >
                <i class="el-icon text-rose-500" style="font-size: 16px"
                  ><svg
                    viewBox="0 0 1024 1024"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill="currentColor"
                      d="M160 160v704h704V160H160zm-32-64h768a32 32 0 0 1 32 32v768a32 32 0 0 1-32 32H128a32 32 0 0 1-32-32V128a32 32 0 0 1 32-32z"
                    ></path>
                    <path
                      fill="currentColor"
                      d="M384 288q64 0 64 64t-64 64q-64 0-64-64t64-64zM185.408 876.992l-50.816-38.912L350.72 556.032a96 96 0 0 1 134.592-17.856l1.856 1.472 122.88 99.136a32 32 0 0 0 44.992-4.864l216-269.888 49.92 39.936-215.808 269.824-.256.32a96 96 0 0 1-135.04 14.464l-122.88-99.072-.64-.512a32 32 0 0 0-44.8 5.952L185.408 876.992z"
                    ></path></svg></i
                ><span class="text-sm mt-2">图库</span>
              </div>
            </div>
          </div>
        </div>
        <div
          class="el-col el-col-3 is-guttered"
          style="padding-right: 10px; padding-left: 10px"
        >
          <div class="el-card is-hover-shadow">
            <!--v-if-->
            <div class="el-card__body" style="">
              <div
                class="flex flex-col items-center justify-center cursor-pointer"
              >
                <i class="el-icon text-green-500" style="font-size: 16px"
                  ><svg
                    viewBox="0 0 1024 1024"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill="currentColor"
                      d="M512 64a64 64 0 0 1 64 64v64H448v-64a64 64 0 0 1 64-64z"
                    ></path>
                    <path
                      fill="currentColor"
                      d="M256 768h512V448a256 256 0 1 0-512 0v320zm256-640a320 320 0 0 1 320 320v384H192V448a320 320 0 0 1 320-320z"
                    ></path>
                    <path
                      fill="currentColor"
                      d="M96 768h832q32 0 32 32t-32 32H96q-32 0-32-32t32-32zm352 128h128a64 64 0 0 1-128 0z"
                    ></path></svg></i
                ><span class="text-sm mt-2">公告</span>
              </div>
            </div>
          </div>
        </div>
        <div
          class="el-col el-col-3 is-guttered"
          style="padding-right: 10px; padding-left: 10px"
        >
          <div class="el-card is-hover-shadow">
            <!--v-if-->
            <div class="el-card__body" style="">
              <div
                class="flex flex-col items-center justify-center cursor-pointer"
              >
                <i class="el-icon text-grey-500" style="font-size: 16px"
                  ><svg
                    viewBox="0 0 1024 1024"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill="currentColor"
                      d="M224 160a64 64 0 0 0-64 64v576a64 64 0 0 0 64 64h576a64 64 0 0 0 64-64V224a64 64 0 0 0-64-64H224zm0-64h576a128 128 0 0 1 128 128v576a128 128 0 0 1-128 128H224A128 128 0 0 1 96 800V224A128 128 0 0 1 224 96z"
                    ></path>
                    <path
                      fill="currentColor"
                      d="M384 416a64 64 0 1 0 0-128 64 64 0 0 0 0 128zm0 64a128 128 0 1 1 0-256 128 128 0 0 1 0 256z"
                    ></path>
                    <path
                      fill="currentColor"
                      d="M480 320h256q32 0 32 32t-32 32H480q-32 0-32-32t32-32zm160 416a64 64 0 1 0 0-128 64 64 0 0 0 0 128zm0 64a128 128 0 1 1 0-256 128 128 0 0 1 0 256z"
                    ></path>
                    <path
                      fill="currentColor"
                      d="M288 640h256q32 0 32 32t-32 32H288q-32 0-32-32t32-32z"
                    ></path></svg></i
                ><span class="text-sm mt-2">配置</span>
              </div>
            </div>
          </div>
        </div>
        <div
          class="el-col el-col-3 is-guttered"
          style="padding-right: 10px; padding-left: 10px"
        >
          <div class="el-card is-hover-shadow">
            <!--v-if-->
            <div class="el-card__body" style="">
              <div
                class="flex flex-col items-center justify-center cursor-pointer"
              >
                <i class="el-icon text-yellow-500" style="font-size: 16px"
                  ><svg
                    viewBox="0 0 1024 1024"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill="currentColor"
                      d="M128 384v448h768V384H128zm-32-64h832a32 32 0 0 1 32 32v512a32 32 0 0 1-32 32H96a32 32 0 0 1-32-32V352a32 32 0 0 1 32-32zm64-128h704v64H160zm96-128h512v64H256z"
                    ></path></svg></i
                ><span class="text-sm mt-2">优惠券</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="el-row mt-5" style="margin-left: -10px; margin-right: -10px">
        <div
          class="el-col el-col-12 is-guttered"
          style="padding-right: 10px; padding-left: 10px"
        >
          <div class="el-card is-never-shadow">
            <div class="el-card__header">
              <div class="flex justify-between">
                <span class="text-sm">订单统计</span>
                <div>
                  <span class="el-check-tag" style="margin-right: 8px"
                    >近1个月</span
                  ><span
                    class="el-check-tag is-checked"
                    style="margin-right: 8px"
                    >近1周</span
                  ><span class="el-check-tag" style="margin-right: 8px"
                    >近24小时</span
                  >
                </div>
              </div>
            </div>
            <div class="el-card__body" style="">
              <div
                id="chart"
                _echarts_instance_="ec_1658662208424"
                style="
                  width: 100%;
                  height: 300px;
                  user-select: none;
                  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
                "
              >
                <div
                  style="
                    position: relative;
                    width: 761px;
                    height: 300px;
                    padding: 0px;
                    margin: 0px;
                    border-width: 0px;
                    cursor: default;
                  "
                >
                  <canvas
                    data-zr-dom-id="zr_0"
                    width="761"
                    height="300"
                    style="
                      position: absolute;
                      left: 0px;
                      top: 0px;
                      width: 761px;
                      height: 300px;
                      user-select: none;
                      -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
                      padding: 0px;
                      margin: 0px;
                      border-width: 0px;
                    "
                  ></canvas>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          class="el-col el-col-12 is-guttered"
          style="padding-right: 10px; padding-left: 10px"
        >
          <div class="el-card is-never-shadow mb-3">
            <div class="el-card__header">
              <div class="flex justify-between">
                <span class="text-sm">店铺及商品提示</span
                ><span class="el-tag el-tag--danger el-tag--plain"
                  ><span class="el-tag__content">店铺及商品提示</span
                  ><!--v-if--></span
                >
              </div>
            </div>
            <div class="el-card__body" style="">
              <div
                class="el-row"
                style="margin-left: -10px; margin-right: -10px"
              >
                <div
                  class="el-col el-col-6 is-guttered"
                  style="padding-right: 10px; padding-left: 10px"
                >
                  <div class="el-card is-hover-shadow border-0 bg-light-400">
                    <!--v-if-->
                    <div class="el-card__body" style="">
                      <div class="flex flex-col items-center justify-center">
                        <span class="text-xl mb-2">0</span
                        ><span class="text-xs text-gray-500">审核中</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  class="el-col el-col-6 is-guttered"
                  style="padding-right: 10px; padding-left: 10px"
                >
                  <div class="el-card is-hover-shadow border-0 bg-light-400">
                    <!--v-if-->
                    <div class="el-card__body" style="">
                      <div class="flex flex-col items-center justify-center">
                        <span class="text-xl mb-2">21</span
                        ><span class="text-xs text-gray-500">销售中</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  class="el-col el-col-6 is-guttered"
                  style="padding-right: 10px; padding-left: 10px"
                >
                  <div class="el-card is-hover-shadow border-0 bg-light-400">
                    <!--v-if-->
                    <div class="el-card__body" style="">
                      <div class="flex flex-col items-center justify-center">
                        <span class="text-xl mb-2">21</span
                        ><span class="text-xs text-gray-500">已下架</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  class="el-col el-col-6 is-guttered"
                  style="padding-right: 10px; padding-left: 10px"
                >
                  <div class="el-card is-hover-shadow border-0 bg-light-400">
                    <!--v-if-->
                    <div class="el-card__body" style="">
                      <div class="flex flex-col items-center justify-center">
                        <span class="text-xl mb-2">2</span
                        ><span class="text-xs text-gray-500">库存预警</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="el-card is-never-shadow">
            <div class="el-card__header">
              <div class="flex justify-between">
                <span class="text-sm">交易提示</span
                ><span class="el-tag el-tag--danger el-tag--plain"
                  ><span class="el-tag__content">需要立即处理的交易订单</span
                  ><!--v-if--></span
                >
              </div>
            </div>
            <div class="el-card__body" style="">
              <div
                class="el-row"
                style="margin-left: -10px; margin-right: -10px"
              >
                <div
                  class="el-col el-col-6 is-guttered"
                  style="padding-right: 10px; padding-left: 10px"
                >
                  <div class="el-card is-hover-shadow border-0 bg-light-400">
                    <!--v-if-->
                    <div class="el-card__body" style="">
                      <div class="flex flex-col items-center justify-center">
                        <span class="text-xl mb-2">171</span
                        ><span class="text-xs text-gray-500">待付款</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  class="el-col el-col-6 is-guttered"
                  style="padding-right: 10px; padding-left: 10px"
                >
                  <div class="el-card is-hover-shadow border-0 bg-light-400">
                    <!--v-if-->
                    <div class="el-card__body" style="">
                      <div class="flex flex-col items-center justify-center">
                        <span class="text-xl mb-2">16</span
                        ><span class="text-xs text-gray-500">待发货</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  class="el-col el-col-6 is-guttered"
                  style="padding-right: 10px; padding-left: 10px"
                >
                  <div class="el-card is-hover-shadow border-0 bg-light-400">
                    <!--v-if-->
                    <div class="el-card__body" style="">
                      <div class="flex flex-col items-center justify-center">
                        <span class="text-xl mb-2">1</span
                        ><span class="text-xs text-gray-500">已发货</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  class="el-col el-col-6 is-guttered"
                  style="padding-right: 10px; padding-left: 10px"
                >
                  <div class="el-card is-hover-shadow border-0 bg-light-400">
                    <!--v-if-->
                    <div class="el-card__body" style="">
                      <div class="flex flex-col items-center justify-center">
                        <span class="text-xl mb-2">17</span
                        ><span class="text-xs text-gray-500">退款中</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped></style>
