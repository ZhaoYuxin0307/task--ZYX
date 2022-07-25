<template>
  <div class="">
    <div class="el-tabs el-tabs--top">
      <div class="el-tabs__header is-top">
        <div class="el-tabs__nav-wrap is-top">
          <div class="el-tabs__nav-scroll">
            <div
              class="el-tabs__nav is-top"
              role="tablist"
              style="transform: translateX(0px)"
            >
              <div
                class="el-tabs__active-bar is-top"
                style="width: 28px; transform: translateX(0px)"
              ></div>
              <div
                class="el-tabs__item is-top is-active"
                id="tab-all"
                aria-controls="pane-all"
                role="tab"
                aria-selected="true"
                tabindex="0"
              >
                全部
              </div>
              <div
                class="el-tabs__item is-top"
                id="tab-checking"
                aria-controls="pane-checking"
                role="tab"
                aria-selected="false"
                tabindex="-1"
              >
                审核中
              </div>
              <div
                class="el-tabs__item is-top"
                id="tab-saling"
                aria-controls="pane-saling"
                role="tab"
                aria-selected="false"
                tabindex="-1"
              >
                出售中
              </div>
              <div
                class="el-tabs__item is-top"
                id="tab-off"
                aria-controls="pane-off"
                role="tab"
                aria-selected="false"
                tabindex="-1"
              >
                已下架
              </div>
              <div
                class="el-tabs__item is-top"
                id="tab-min_stock"
                aria-controls="pane-min_stock"
                role="tab"
                aria-selected="false"
                tabindex="-1"
              >
                库存预警
              </div>
              <div
                class="el-tabs__item is-top"
                id="tab-delete"
                aria-controls="pane-delete"
                role="tab"
                aria-selected="false"
                tabindex="-1"
              >
                回收站
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="el-tabs__content">
        <div
          id="pane-all"
          class="el-tab-pane"
          role="tabpanel"
          aria-hidden="false"
          aria-labelledby="tab-all"
        ></div>
        <div
          id="pane-checking"
          class="el-tab-pane"
          role="tabpanel"
          aria-hidden="true"
          aria-labelledby="tab-checking"
          style="display: none"
        ></div>
        <div
          id="pane-saling"
          class="el-tab-pane"
          role="tabpanel"
          aria-hidden="true"
          aria-labelledby="tab-saling"
          style="display: none"
        ></div>
        <div
          id="pane-off"
          class="el-tab-pane"
          role="tabpanel"
          aria-hidden="true"
          aria-labelledby="tab-off"
          style="display: none"
        ></div>
        <div
          id="pane-min_stock"
          class="el-tab-pane"
          role="tabpanel"
          aria-hidden="true"
          aria-labelledby="tab-min_stock"
          style="display: none"
        ></div>
        <div
          id="pane-delete"
          class="el-tab-pane"
          role="tabpanel"
          aria-hidden="true"
          aria-labelledby="tab-delete"
          style="display: none"
        ></div>
      </div>
    </div>
    <div class="el-card is-never-shadow border-0">
      <div class="el-card__body" style="">
        <form class="el-form el-form--small el-form--label-right mb-3">
          <div class="el-row" style="margin-left: -10px; margin-right: -10px">
            <div
              class="el-col el-col-8 is-guttered"
              style="padding-right: 10px; padding-left: 10px"
            >
              <div class="el-form-item el-form-item--small">
                <label
                  id="el-id-6882-17"
                  for="el-id-6882-27"
                  class="el-form-item__label"
                  style="width: 80px"
                  >关键词</label
                >
                <div class="el-form-item__content">
                  <div class="el-input el-input--small el-input--suffix">
                    <div class="el-input__wrapper">
                      <input
                        class="el-input__inner"
                        type="text"
                        autocomplete="off"
                        tabindex="0"
                        placeholder="商品名称"
                        id="el-id-6882-27"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              class="el-col el-col-8 el-col-offset-8 is-guttered"
              style="padding-right: 10px; padding-left: 10px"
            >
              <div class="flex items-center justify-end">
                <button
                  class="el-button el-button--primary el-button--small"
                  aria-disabled="false"
                  type="button"
                >
                  <span class="">搜索</span></button
                ><button
                  class="el-button el-button--small"
                  aria-disabled="false"
                  type="button"
                >
                  <span class="">重置</span></button
                ><button
                  class="el-button el-button--primary el-button--small is-text"
                  aria-disabled="false"
                  type="button"
                >
                  <span class=""
                    >展开
                    <i class="el-icon"
                      ><svg
                        viewBox="0 0 1024 1024"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill="currentColor"
                          d="M831.872 340.864 512 652.672 192.128 340.864a30.592 30.592 0 0 0-42.752 0 29.12 29.12 0 0 0 0 41.6L489.664 714.24a32 32 0 0 0 44.672 0l340.288-331.712a29.12 29.12 0 0 0 0-41.728 30.592 30.592 0 0 0-42.752 0z"
                        ></path></svg></i
                  ></span>
                </button>
              </div>
            </div>
          </div>
        </form>
        <div class="flex items-center justify-between mb-4">
          <div>
            <button
              class="el-button el-button--primary el-button--small"
              aria-disabled="false"
              type="button"
            >
              <span class="">新增</span></button
            ><button
              class="el-button el-button--danger el-button--small"
              aria-disabled="false"
              type="button"
            >
              <span class="">批量删除</span></button
            ><button
              class="el-button el-button--small"
              aria-disabled="false"
              type="button"
            >
              <span class="">上架</span></button
            ><button
              class="el-button el-button--small"
              aria-disabled="false"
              type="button"
            >
              <span class="">下架</span>
            </button>
          </div>
          <button
            class="el-button is-text el-tooltip__trigger"
            aria-disabled="false"
            type="button"
          >
            <span class=""
              ><i class="el-icon" style="font-size: 20px"
                ><svg
                  viewBox="0 0 1024 1024"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill="currentColor"
                    d="M771.776 794.88A384 384 0 0 1 128 512h64a320 320 0 0 0 555.712 216.448H654.72a32 32 0 1 1 0-64h149.056a32 32 0 0 1 32 32v148.928a32 32 0 1 1-64 0v-50.56zM276.288 295.616h92.992a32 32 0 0 1 0 64H220.16a32 32 0 0 1-32-32V178.56a32 32 0 0 1 64 0v50.56A384 384 0 0 1 896.128 512h-64a320 320 0 0 0-555.776-216.384z"
                  ></path></svg></i
            ></span>
          </button>
        </div>
        <div
          class="el-table--fit el-table--striped el-table--enable-row-hover el-table--enable-row-transition el-table el-table--layout-fixed is-scrolling-none"
          data-prefix="el"
          style="width: 100%"
        >
          <div class="el-table__inner-wrapper">
            <div class="hidden-columns">
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </div>
            <div class="el-table__header-wrapper">
              <table
                class="el-table__header"
                border="0"
                cellpadding="0"
                cellspacing="0"
                style="width: 1586px"
              >
                <colgroup>
                  <col name="el-table_1_column_1" width="55" />
                  <col name="el-table_1_column_2" width="300" />
                  <col name="el-table_1_column_3" width="70" />
                  <col name="el-table_1_column_4" width="100" />
                  <col name="el-table_1_column_5" width="120" />
                  <col name="el-table_1_column_6" width="90" />
                  <col name="el-table_1_column_7" width="851" />
                </colgroup>
                <thead class="">
                  <tr class="">
                    <th
                      class="el-table_1_column_1 el-table-column--selection is-leaf el-table__cell"
                      colspan="1"
                      rowspan="1"
                    >
                      <div class="cell">
                        <label class="el-checkbox"
                          ><span class="el-checkbox__input"
                            ><input
                              class="el-checkbox__original"
                              type="checkbox"
                              aria-hidden="false"
                              value="false"
                              id="el-id-6882-28" /><span
                              class="el-checkbox__inner"
                            ></span></span
                        ></label>
                      </div>
                    </th>
                    <th
                      class="el-table_1_column_2 is-leaf el-table__cell"
                      colspan="1"
                      rowspan="1"
                    >
                      <div class="cell">商品</div>
                    </th>
                    <th
                      class="el-table_1_column_3 is-center is-leaf el-table__cell"
                      colspan="1"
                      rowspan="1"
                    >
                      <div class="cell">实际销量</div>
                    </th>
                    <th
                      class="el-table_1_column_4 is-leaf el-table__cell"
                      colspan="1"
                      rowspan="1"
                    >
                      <div class="cell">商品状态</div>
                    </th>
                    <th
                      class="el-table_1_column_5 is-center is-leaf el-table__cell"
                      colspan="1"
                      rowspan="1"
                    >
                      <div class="cell">审核状态</div>
                    </th>
                    <th
                      class="el-table_1_column_6 is-center is-leaf el-table__cell"
                      colspan="1"
                      rowspan="1"
                    >
                      <div class="cell">总库存</div>
                    </th>
                    <th
                      class="el-table_1_column_7 is-center is-leaf el-table__cell"
                      colspan="1"
                      rowspan="1"
                    >
                      <div class="cell">操作</div>
                    </th>
                  </tr>
                </thead>
              </table>
            </div>
            <div class="el-table__body-wrapper">
              <div class="el-scrollbar">
                <div
                  class="el-scrollbar__wrap el-scrollbar__wrap--hidden-default"
                >
                  <div
                    class="el-scrollbar__view"
                    style="display: block; vertical-align: middle"
                  >
                    <table
                      class="el-table__body"
                      cellspacing="0"
                      cellpadding="0"
                      border="0"
                      style="table-layout: fixed; width: 1586px"
                    >
                      <colgroup>
                        <col name="el-table_1_column_1" width="55" />
                        <col name="el-table_1_column_2" width="300" />
                        <col name="el-table_1_column_3" width="70" />
                        <col name="el-table_1_column_4" width="100" />
                        <col name="el-table_1_column_5" width="120" />
                        <col name="el-table_1_column_6" width="90" />
                        <col name="el-table_1_column_7" width="851" />
                      </colgroup>
                      <tbody>
                        <tr class="el-table__row">
                          <td
                            class="el-table_1_column_1 el-table-column--selection el-table__cell"
                            rowspan="1"
                            colspan="1"
                          >
                            <div class="cell">
                              <label class="el-checkbox"
                                ><span class="el-checkbox__input"
                                  ><input
                                    class="el-checkbox__original"
                                    type="checkbox"
                                    aria-hidden="false"
                                    value="false"
                                    id="el-id-6882-39" /><span
                                    class="el-checkbox__inner"
                                  ></span></span
                              ></label>
                            </div>
                          </td>
                          <td
                            class="el-table_1_column_2 el-table__cell"
                            rowspan="1"
                            colspan="1"
                          >
                            <div class="cell">
                              <div class="flex">
                                <div
                                  class="el-image mr-3 rounded"
                                  style="width: 50px; height: 50px"
                                >
                                  <img
                                    src="http://tangzhe123-com.oss-cn-shenzhen.aliyuncs.com/public/60bf2abe4605b.jpg"
                                    class="el-image__inner"
                                    style="object-fit: cover"
                                  />
                                </div>
                                <div class="flex-1">
                                  <p>ceshi</p>
                                  <div>
                                    <span class="text-rose-500">￥10.00</span>
                                    <div
                                      class="el-divider el-divider--vertical"
                                      role="separator"
                                      style="--el-border-style: solid"
                                    ></div>
                                    <span class="text-gray-500 text-xs"
                                      >￥100.00</span
                                    >
                                  </div>
                                  <p class="text-gray-400 text-xs mb-1">
                                    分类:运动旅行
                                  </p>
                                  <p class="text-gray-400 text-xs">
                                    创建时间:1970-01-01 08:33:41
                                  </p>
                                </div>
                              </div>
                            </div>
                          </td>
                          <td
                            class="el-table_1_column_3 is-center el-table__cell"
                            rowspan="1"
                            colspan="1"
                          >
                            <div class="cell">0</div>
                          </td>
                          <td
                            class="el-table_1_column_4 el-table__cell"
                            rowspan="1"
                            colspan="1"
                          >
                            <div class="cell">
                              <span
                                class="el-tag el-tag--danger el-tag--small el-tag--light"
                                ><span class="el-tag__content">仓库</span></span
                              >
                            </div>
                          </td>
                          <td
                            class="el-table_1_column_5 is-center el-table__cell"
                            rowspan="1"
                            colspan="1"
                          >
                            <div class="cell"><span>通过</span></div>
                          </td>
                          <td
                            class="el-table_1_column_6 is-center el-table__cell"
                            rowspan="1"
                            colspan="1"
                          >
                            <div class="cell">100</div>
                          </td>
                          <td
                            class="el-table_1_column_7 is-center el-table__cell"
                            rowspan="1"
                            colspan="1"
                          >
                            <div class="cell">
                              <div>
                                <button
                                  class="el-button el-button--primary el-button--small is-text px-1"
                                  aria-disabled="false"
                                  type="button"
                                >
                                  <span class="">修改</span></button
                                ><button
                                  class="el-button el-button--primary el-button--small is-text px-1"
                                  aria-disabled="false"
                                  type="button"
                                >
                                  <span class="">商品规格</span></button
                                ><button
                                  class="el-button el-button--primary el-button--small is-text px-1"
                                  aria-disabled="false"
                                  type="button"
                                >
                                  <span class="">设置轮播图</span></button
                                ><button
                                  class="el-button el-button--primary el-button--small is-text px-1"
                                  aria-disabled="false"
                                  type="button"
                                >
                                  <span class="">商品详情</span></button
                                ><button
                                  class="el-button el-button--primary el-button--small is-text px-1 el-tooltip__trigger el-tooltip__trigger"
                                  aria-disabled="false"
                                  type="button"
                                >
                                  <span class="">删除</span>
                                </button>
                              </div>
                            </div>
                          </td>
                        </tr>
                        <tr class="el-table__row el-table__row--striped">
                          <td
                            class="el-table_1_column_1 el-table-column--selection el-table__cell"
                            rowspan="1"
                            colspan="1"
                          >
                            <div class="cell">
                              <label class="el-checkbox"
                                ><span class="el-checkbox__input"
                                  ><input
                                    class="el-checkbox__original"
                                    type="checkbox"
                                    aria-hidden="false"
                                    value="false"
                                    id="el-id-6882-40" /><span
                                    class="el-checkbox__inner"
                                  ></span></span
                              ></label>
                            </div>
                          </td>
                          <td
                            class="el-table_1_column_2 el-table__cell"
                            rowspan="1"
                            colspan="1"
                          >
                            <div class="cell">
                              <div class="flex">
                                <div
                                  class="el-image mr-3 rounded"
                                  style="width: 50px; height: 50px"
                                >
                                  <img
                                    class="el-image__inner is-loading"
                                    style="object-fit: cover"
                                  />
                                  <div class="el-image__wrapper">
                                    <div class="el-image__placeholder"></div>
                                  </div>
                                </div>
                                <div class="flex-1">
                                  <p>8oo88o</p>
                                  <div>
                                    <span class="text-rose-500">￥0.00</span>
                                    <div
                                      class="el-divider el-divider--vertical"
                                      role="separator"
                                      style="--el-border-style: solid"
                                    ></div>
                                    <span class="text-gray-500 text-xs"
                                      >￥0.00</span
                                    >
                                  </div>
                                  <p class="text-gray-400 text-xs mb-1">
                                    分类:智能家电
                                  </p>
                                  <p class="text-gray-400 text-xs">
                                    创建时间:2022-07-24 19:34:57
                                  </p>
                                </div>
                              </div>
                            </div>
                          </td>
                          <td
                            class="el-table_1_column_3 is-center el-table__cell"
                            rowspan="1"
                            colspan="1"
                          >
                            <div class="cell">0</div>
                          </td>
                          <td
                            class="el-table_1_column_4 el-table__cell"
                            rowspan="1"
                            colspan="1"
                          >
                            <div class="cell">
                              <span
                                class="el-tag el-tag--danger el-tag--small el-tag--light"
                                ><span class="el-tag__content">仓库</span></span
                              >
                            </div>
                          </td>
                          <td
                            class="el-table_1_column_5 is-center el-table__cell"
                            rowspan="1"
                            colspan="1"
                          >
                            <div class="cell">
                              <div class="flex flex-col">
                                <button
                                  class="el-button el-button--success el-button--small is-plain"
                                  aria-disabled="false"
                                  type="button"
                                >
                                  <span class="">审核通过</span></button
                                ><button
                                  class="el-button el-button--danger el-button--small is-plain mt-2 !ml-0"
                                  aria-disabled="false"
                                  type="button"
                                >
                                  <span class="">审核拒绝</span>
                                </button>
                              </div>
                            </div>
                          </td>
                          <td
                            class="el-table_1_column_6 is-center el-table__cell"
                            rowspan="1"
                            colspan="1"
                          >
                            <div class="cell">100</div>
                          </td>
                          <td
                            class="el-table_1_column_7 is-center el-table__cell"
                            rowspan="1"
                            colspan="1"
                          >
                            <div class="cell">
                              <div>
                                <button
                                  class="el-button el-button--primary el-button--small is-text px-1"
                                  aria-disabled="false"
                                  type="button"
                                >
                                  <span class="">修改</span></button
                                ><button
                                  class="el-button el-button--danger el-button--small is-text px-1"
                                  aria-disabled="false"
                                  type="button"
                                >
                                  <span class="">商品规格</span></button
                                ><button
                                  class="el-button el-button--danger el-button--small is-text px-1"
                                  aria-disabled="false"
                                  type="button"
                                >
                                  <span class="">设置轮播图</span></button
                                ><button
                                  class="el-button el-button--danger el-button--small is-text px-1"
                                  aria-disabled="false"
                                  type="button"
                                >
                                  <span class="">商品详情</span></button
                                ><button
                                  class="el-button el-button--primary el-button--small is-text px-1 el-tooltip__trigger el-tooltip__trigger"
                                  aria-disabled="false"
                                  type="button"
                                >
                                  <span class="">删除</span>
                                </button>
                              </div>
                            </div>
                          </td>
                        </tr>
                        <tr class="el-table__row">
                          <td
                            class="el-table_1_column_1 el-table-column--selection el-table__cell"
                            rowspan="1"
                            colspan="1"
                          >
                            <div class="cell">
                              <label class="el-checkbox"
                                ><span class="el-checkbox__input"
                                  ><input
                                    class="el-checkbox__original"
                                    type="checkbox"
                                    aria-hidden="false"
                                    value="false"
                                    id="el-id-6882-41" /><span
                                    class="el-checkbox__inner"
                                  ></span></span
                              ></label>
                            </div>
                          </td>
                          <td
                            class="el-table_1_column_2 el-table__cell"
                            rowspan="1"
                            colspan="1"
                          >
                            <div class="cell">
                              <div class="flex">
                                <div
                                  class="el-image mr-3 rounded"
                                  style="width: 50px; height: 50px"
                                >
                                  <img
                                    src="http://tangzhe123-com.oss-cn-shenzhen.aliyuncs.com/public/62da3f7fd9245.png"
                                    class="el-image__inner"
                                    style="object-fit: cover"
                                  />
                                </div>
                                <div class="flex-1">
                                  <p>j</p>
                                  <div>
                                    <span class="text-rose-500">￥3.00</span>
                                    <div
                                      class="el-divider el-divider--vertical"
                                      role="separator"
                                      style="--el-border-style: solid"
                                    ></div>
                                    <span class="text-gray-500 text-xs"
                                      >￥1.00</span
                                    >
                                  </div>
                                  <p class="text-gray-400 text-xs mb-1">
                                    分类:运动旅行
                                  </p>
                                  <p class="text-gray-400 text-xs">
                                    创建时间：2022-07-24 16:32:17
                                  </p>
                                </div>
                              </div>
                            </div>
                          </td>
                          <td
                            class="el-table_1_column_3 is-center el-table__cell"
                            rowspan="1"
                            colspan="1"
                          >
                            <div class="cell">0</div>
                          </td>
                          <td
                            class="el-table_1_column_4 el-table__cell"
                            rowspan="1"
                            colspan="1"
                          >
                            <div class="cell">
                              <span
                                class="el-tag el-tag--success el-tag--small el-tag--light"
                                ><span class="el-tag__content">上架</span></span
                              >
                            </div>
                          </td>
                          <td
                            class="el-table_1_column_5 is-center el-table__cell"
                            rowspan="1"
                            colspan="1"
                          >
                            <div class="cell"><span>通过</span></div>
                          </td>
                          <td
                            class="el-table_1_column_6 is-center el-table__cell"
                            rowspan="1"
                            colspan="1"
                          >
                            <div class="cell">100</div>
                          </td>
                          <td
                            class="el-table_1_column_7 is-center el-table__cell"
                            rowspan="1"
                            colspan="1"
                          >
                            <div class="cell">
                              <div>
                                <button
                                  class="el-button el-button--primary el-button--small is-text px-1"
                                  aria-disabled="false"
                                  type="button"
                                >
                                  <span class="">修改</span></button
                                ><button
                                  class="el-button el-button--primary el-button--small is-text px-1"
                                  aria-disabled="false"
                                  type="button"
                                >
                                  <span class="">商品规格</span></button
                                ><button
                                  class="el-button el-button--danger el-button--small is-text px-1"
                                  aria-disabled="false"
                                  type="button"
                                >
                                  <span class="">设置轮播图</span></button
                                ><button
                                  class="el-button el-button--primary el-button--small is-text px-1"
                                  aria-disabled="false"
                                  type="button"
                                >
                                  <span class="">商品详情</span></button
                                ><button
                                  class="el-button el-button--primary el-button--small is-text px-1 el-tooltip__trigger el-tooltip__trigger"
                                  aria-disabled="false"
                                  type="button"
                                >
                                  <span class="">删除</span>
                                </button>
                              </div>
                            </div>
                          </td>
                        </tr>
                        <tr class="el-table__row el-table__row--striped">
                          <td
                            class="el-table_1_column_1 el-table-column--selection el-table__cell"
                            rowspan="1"
                            colspan="1"
                          >
                            <div class="cell">
                              <label class="el-checkbox"
                                ><span class="el-checkbox__input"
                                  ><input
                                    class="el-checkbox__original"
                                    type="checkbox"
                                    aria-hidden="false"
                                    value="false"
                                    id="el-id-6882-42" /><span
                                    class="el-checkbox__inner"
                                  ></span></span
                              ></label>
                            </div>
                          </td>
                          <td
                            class="el-table_1_column_2 el-table__cell"
                            rowspan="1"
                            colspan="1"
                          >
                            <div class="cell">
                              <div class="flex">
                                <div
                                  class="el-image mr-3 rounded"
                                  style="width: 50px; height: 50px"
                                >
                                  <img
                                    src="http://tangzhe123-com.oss-cn-shenzhen.aliyuncs.com/public/60029fca47cda.jpg"
                                    class="el-image__inner"
                                    style="object-fit: cover"
                                  />
                                </div>
                                <div class="flex-1">
                                  <p>新建商品</p>
                                  <div>
                                    <span class="text-rose-500">￥0.06</span>
                                    <div
                                      class="el-divider el-divider--vertical"
                                      role="separator"
                                      style="--el-border-style: solid"
                                    ></div>
                                    <span class="text-gray-500 text-xs"
                                      >￥0.00</span
                                    >
                                  </div>
                                  <p class="text-gray-400 text-xs mb-1">
                                    分类:运动旅行
                                  </p>
                                  <p class="text-gray-400 text-xs">
                                    创建时间：1970-01-01 08:32:50
                                  </p>
                                </div>
                              </div>
                            </div>
                          </td>
                          <td
                            class="el-table_1_column_3 is-center el-table__cell"
                            rowspan="1"
                            colspan="1"
                          >
                            <div class="cell">0</div>
                          </td>
                          <td
                            class="el-table_1_column_4 el-table__cell"
                            rowspan="1"
                            colspan="1"
                          >
                            <div class="cell">
                              <span
                                class="el-tag el-tag--success el-tag--small el-tag--light"
                                ><span class="el-tag__content">上架</span></span
                              >
                            </div>
                          </td>
                          <td
                            class="el-table_1_column_5 is-center el-table__cell"
                            rowspan="1"
                            colspan="1"
                          >
                            <div class="cell"><span>拒绝</span></div>
                          </td>
                          <td
                            class="el-table_1_column_6 is-center el-table__cell"
                            rowspan="1"
                            colspan="1"
                          >
                            <div class="cell">100</div>
                          </td>
                          <td
                            class="el-table_1_column_7 is-center el-table__cell"
                            rowspan="1"
                            colspan="1"
                          >
                            <div class="cell">
                              <div>
                                <button
                                  class="el-button el-button--primary el-button--small is-text px-1"
                                  aria-disabled="false"
                                  type="button"
                                >
                                  <span class="">修改</span></button
                                ><button
                                  class="el-button el-button--primary el-button--small is-text px-1"
                                  aria-disabled="false"
                                  type="button"
                                >
                                  <span class="">商品规格</span></button
                                ><button
                                  class="el-button el-button--primary el-button--small is-text px-1"
                                  aria-disabled="false"
                                  type="button"
                                >
                                  <span class="">设置轮播图</span></button
                                ><button
                                  class="el-button el-button--primary el-button--small is-text px-1"
                                  aria-disabled="false"
                                  type="button"
                                >
                                  <span class="">商品详情</span></button
                                ><button
                                  class="el-button el-button--primary el-button--small is-text px-1 el-tooltip__trigger el-tooltip__trigger"
                                  aria-disabled="false"
                                  type="button"
                                >
                                  <span class="">删除</span>
                                </button>
                              </div>
                            </div>
                          </td>
                        </tr>
                        <tr class="el-table__row">
                          <td
                            class="el-table_1_column_1 el-table-column--selection el-table__cell"
                            rowspan="1"
                            colspan="1"
                          >
                            <div class="cell">
                              <label class="el-checkbox"
                                ><span class="el-checkbox__input"
                                  ><input
                                    class="el-checkbox__original"
                                    type="checkbox"
                                    aria-hidden="false"
                                    value="false"
                                    id="el-id-6882-43" /><span
                                    class="el-checkbox__inner"
                                  ></span></span
                              ></label>
                            </div>
                          </td>
                          <td
                            class="el-table_1_column_2 el-table__cell"
                            rowspan="1"
                            colspan="1"
                          >
                            <div class="cell">
                              <div class="flex">
                                <div
                                  class="el-image mr-3 rounded"
                                  style="width: 50px; height: 50px"
                                >
                                  <img
                                    src="http://tangzhe123-com.oss-cn-shenzhen.aliyuncs.com/public/60bf2a5d961f4.jpg"
                                    class="el-image__inner"
                                    style="object-fit: cover"
                                  />
                                </div>
                                <div class="flex-1">
                                  <p>嘎嘎嘎</p>
                                  <div>
                                    <span class="text-rose-500">￥100.00</span>
                                    <div
                                      class="el-divider el-divider--vertical"
                                      role="separator"
                                      style="--el-border-style: solid"
                                    ></div>
                                    <span class="text-gray-500 text-xs"
                                      >￥150.00</span
                                    >
                                  </div>
                                  <p class="text-gray-400 text-xs mb-1">
                                    分类:运动旅行
                                  </p>
                                  <p class="text-gray-400 text-xs">
                                    创建时间:1970-01-01 08:32:50
                                  </p>
                                </div>
                              </div>
                            </div>
                          </td>
                          <td
                            class="el-table_1_column_3 is-center el-table__cell"
                            rowspan="1"
                            colspan="1"
                          >
                            <div class="cell">0</div>
                          </td>
                          <td
                            class="el-table_1_column_4 el-table__cell"
                            rowspan="1"
                            colspan="1"
                          >
                            <div class="cell">
                              <span
                                class="el-tag el-tag--danger el-tag--small el-tag--light"
                                ><span class="el-tag__content">仓库</span></span
                              >
                            </div>
                          </td>
                          <td
                            class="el-table_1_column_5 is-center el-table__cell"
                            rowspan="1"
                            colspan="1"
                          >
                            <div class="cell"><span>通过</span></div>
                          </td>
                          <td
                            class="el-table_1_column_6 is-center el-table__cell"
                            rowspan="1"
                            colspan="1"
                          >
                            <div class="cell">64</div>
                          </td>
                          <td
                            class="el-table_1_column_7 is-center el-table__cell"
                            rowspan="1"
                            colspan="1"
                          >
                            <div class="cell">
                              <div>
                                <button
                                  class="el-button el-button--primary el-button--small is-text px-1"
                                  aria-disabled="false"
                                  type="button"
                                >
                                  <span class="">修改</span></button
                                ><button
                                  class="el-button el-button--primary el-button--small is-text px-1"
                                  aria-disabled="false"
                                  type="button"
                                >
                                  <span class="">商品规格</span></button
                                ><button
                                  class="el-button el-button--primary el-button--small is-text px-1"
                                  aria-disabled="false"
                                  type="button"
                                >
                                  <span class="">设置轮播图</span></button
                                ><button
                                  class="el-button el-button--primary el-button--small is-text px-1"
                                  aria-disabled="false"
                                  type="button"
                                >
                                  <span class="">商品详情</span></button
                                ><button
                                  class="el-button el-button--primary el-button--small is-text px-1 el-tooltip__trigger el-tooltip__trigger"
                                  aria-disabled="false"
                                  type="button"
                                >
                                  <span class="">删除</span>
                                </button>
                              </div>
                            </div>
                          </td>
                        </tr>
                        <tr class="el-table__row el-table__row--striped">
                          <td
                            class="el-table_1_column_1 el-table-column--selection el-table__cell"
                            rowspan="1"
                            colspan="1"
                          >
                            <div class="cell">
                              <label class="el-checkbox"
                                ><span class="el-checkbox__input"
                                  ><input
                                    class="el-checkbox__original"
                                    type="checkbox"
                                    aria-hidden="false"
                                    value="false"
                                    id="el-id-6882-44" /><span
                                    class="el-checkbox__inner"
                                  ></span></span
                              ></label>
                            </div>
                          </td>
                          <td
                            class="el-table_1_column_2 el-table__cell"
                            rowspan="1"
                            colspan="1"
                          >
                            <div class="cell">
                              <div class="flex">
                                <div
                                  class="el-image mr-3 rounded"
                                  style="width: 50px; height: 50px"
                                >
                                  <img
                                    src="http://tangzhe123-com.oss-cn-shenzhen.aliyuncs.com/public/62aeaa73b9041.jpg"
                                    class="el-image__inner"
                                    style="object-fit: cover"
                                  />
                                </div>
                                <div class="flex-1">
                                  <p>新建商品1</p>
                                  <div>
                                    <span class="text-rose-500">￥0.06</span>
                                    <div
                                      class="el-divider el-divider--vertical"
                                      role="separator"
                                      style="--el-border-style: solid"
                                    ></div>
                                    <span class="text-gray-500 text-xs"
                                      >￥0.00</span
                                    >
                                  </div>
                                  <p class="text-gray-400 text-xs mb-1">
                                    分类:未分类
                                  </p>
                                  <p class="text-gray-400 text-xs">
                                    创建时间:1970-01-01 08:32:50
                                  </p>
                                </div>
                              </div>
                            </div>
                          </td>
                          <td
                            class="el-table_1_column_3 is-center el-table__cell"
                            rowspan="1"
                            colspan="1"
                          >
                            <div class="cell">0</div>
                          </td>
                          <td
                            class="el-table_1_column_4 el-table__cell"
                            rowspan="1"
                            colspan="1"
                          >
                            <div class="cell">
                              <span
                                class="el-tag el-tag--success el-tag--small el-tag--light"
                                ><span class="el-tag__content">上架</span></span
                              >
                            </div>
                          </td>
                          <td
                            class="el-table_1_column_5 is-center el-table__cell"
                            rowspan="1"
                            colspan="1"
                          >
                            <div class="cell"><span>拒绝</span></div>
                          </td>
                          <td
                            class="el-table_1_column_6 is-center el-table__cell"
                            rowspan="1"
                            colspan="1"
                          >
                            <div class="cell">100</div>
                          </td>
                          <td
                            class="el-table_1_column_7 is-center el-table__cell"
                            rowspan="1"
                            colspan="1"
                          >
                            <div class="cell">
                              <div>
                                <button
                                  class="el-button el-button--primary el-button--small is-text px-1"
                                  aria-disabled="false"
                                  type="button"
                                >
                                  <span class="">修改</span></button
                                ><button
                                  class="el-button el-button--primary el-button--small is-text px-1"
                                  aria-disabled="false"
                                  type="button"
                                >
                                  <span class="">商品规格</span></button
                                ><button
                                  class="el-button el-button--primary el-button--small is-text px-1"
                                  aria-disabled="false"
                                  type="button"
                                >
                                  <span class="">设置轮播图</span></button
                                ><button
                                  class="el-button el-button--primary el-button--small is-text px-1"
                                  aria-disabled="false"
                                  type="button"
                                >
                                  <span class="">商品详情</span></button
                                ><button
                                  class="el-button el-button--primary el-button--small is-text px-1 el-tooltip__trigger el-tooltip__trigger"
                                  aria-disabled="false"
                                  type="button"
                                >
                                  <span class="">删除</span>
                                </button>
                              </div>
                            </div>
                          </td>
                        </tr>
                        <tr class="el-table__row">
                          <td
                            class="el-table_1_column_1 el-table-column--selection el-table__cell"
                            rowspan="1"
                            colspan="1"
                          >
                            <div class="cell">
                              <label class="el-checkbox"
                                ><span class="el-checkbox__input"
                                  ><input
                                    class="el-checkbox__original"
                                    type="checkbox"
                                    aria-hidden="false"
                                    value="false"
                                    id="el-id-6882-45" /><span
                                    class="el-checkbox__inner"
                                  ></span></span
                              ></label>
                            </div>
                          </td>
                          <td
                            class="el-table_1_column_2 el-table__cell"
                            rowspan="1"
                            colspan="1"
                          >
                            <div class="cell">
                              <div class="flex">
                                <div
                                  class="el-image mr-3 rounded"
                                  style="width: 50px; height: 50px"
                                >
                                  <img
                                    src="http://tangzhe123-com.oss-cn-shenzhen.aliyuncs.com/public/60bf2abe4605b.jpg"
                                    class="el-image__inner"
                                    style="object-fit: cover"
                                  />
                                </div>
                                <div class="flex-1">
                                  <p>新建商品111</p>
                                  <div>
                                    <span class="text-rose-500">￥0.06</span>
                                    <div
                                      class="el-divider el-divider--vertical"
                                      role="separator"
                                      style="--el-border-style: solid"
                                    ></div>
                                    <span class="text-gray-500 text-xs"
                                      >￥0.10</span
                                    >
                                  </div>
                                  <p class="text-gray-400 text-xs mb-1">
                                    分类:手机数码
                                  </p>
                                  <p class="text-gray-400 text-xs">
                                    创建时间:1970-01-01 08:32:50
                                  </p>
                                </div>
                              </div>
                            </div>
                          </td>
                          <td
                            class="el-table_1_column_3 is-center el-table__cell"
                            rowspan="1"
                            colspan="1"
                          >
                            <div class="cell">0</div>
                          </td>
                          <td
                            class="el-table_1_column_4 el-table__cell"
                            rowspan="1"
                            colspan="1"
                          >
                            <div class="cell">
                              <span
                                class="el-tag el-tag--success el-tag--small el-tag--light"
                                ><span class="el-tag__content">上架</span></span
                              >
                            </div>
                          </td>
                          <td
                            class="el-table_1_column_5 is-center el-table__cell"
                            rowspan="1"
                            colspan="1"
                          >
                            <div class="cell"><span>拒绝</span></div>
                          </td>
                          <td
                            class="el-table_1_column_6 is-center el-table__cell"
                            rowspan="1"
                            colspan="1"
                          >
                            <div class="cell">100</div>
                          </td>
                          <td
                            class="el-table_1_column_7 is-center el-table__cell"
                            rowspan="1"
                            colspan="1"
                          >
                            <div class="cell">
                              <div>
                                <button
                                  class="el-button el-button--primary el-button--small is-text px-1"
                                  aria-disabled="false"
                                  type="button"
                                >
                                  <span class="">修改</span></button
                                ><button
                                  class="el-button el-button--primary el-button--small is-text px-1"
                                  aria-disabled="false"
                                  type="button"
                                >
                                  <span class="">商品规格</span></button
                                ><button
                                  class="el-button el-button--primary el-button--small is-text px-1"
                                  aria-disabled="false"
                                  type="button"
                                >
                                  <span class="">设置轮播图</span></button
                                ><button
                                  class="el-button el-button--primary el-button--small is-text px-1"
                                  aria-disabled="false"
                                  type="button"
                                >
                                  <span class="">商品详情</span></button
                                ><button
                                  class="el-button el-button--primary el-button--small is-text px-1 el-tooltip__trigger el-tooltip__trigger"
                                  aria-disabled="false"
                                  type="button"
                                >
                                  <span class="">删除</span>
                                </button>
                              </div>
                            </div>
                          </td>
                        </tr>
                        <tr class="el-table__row el-table__row--striped">
                          <td
                            class="el-table_1_column_1 el-table-column--selection el-table__cell"
                            rowspan="1"
                            colspan="1"
                          >
                            <div class="cell">
                              <label class="el-checkbox"
                                ><span class="el-checkbox__input"
                                  ><input
                                    class="el-checkbox__original"
                                    type="checkbox"
                                    aria-hidden="false"
                                    value="false"
                                    id="el-id-6882-46" /><span
                                    class="el-checkbox__inner"
                                  ></span></span
                              ></label>
                            </div>
                          </td>
                          <td
                            class="el-table_1_column_2 el-table__cell"
                            rowspan="1"
                            colspan="1"
                          >
                            <div class="cell">
                              <div class="flex">
                                <div
                                  class="el-image mr-3 rounded"
                                  style="width: 50px; height: 50px"
                                >
                                  <img
                                    src="http://tangzhe123-com.oss-cn-shenzhen.aliyuncs.com/public/60bf2fe6e9e53.jpg"
                                    class="el-image__inner"
                                    style="object-fit: cover"
                                  />
                                </div>
                                <div class="flex-1">
                                  <p>新建商品</p>
                                  <div>
                                    <span class="text-rose-500">￥0.06</span>
                                    <div
                                      class="el-divider el-divider--vertical"
                                      role="separator"
                                      style="--el-border-style: solid"
                                    ></div>
                                    <span class="text-gray-500 text-xs"
                                      >￥0.00</span
                                    >
                                  </div>
                                  <p class="text-gray-400 text-xs mb-1">
                                    分类:居家生活
                                  </p>
                                  <p class="text-gray-400 text-xs">
                                    创建时间:1970-01-01 08:32:50
                                  </p>
                                </div>
                              </div>
                            </div>
                          </td>
                          <td
                            class="el-table_1_column_3 is-center el-table__cell"
                            rowspan="1"
                            colspan="1"
                          >
                            <div class="cell">0</div>
                          </td>
                          <td
                            class="el-table_1_column_4 el-table__cell"
                            rowspan="1"
                            colspan="1"
                          >
                            <div class="cell">
                              <span
                                class="el-tag el-tag--success el-tag--small el-tag--light"
                                ><span class="el-tag__content">上架</span></span
                              >
                            </div>
                          </td>
                          <td
                            class="el-table_1_column_5 is-center el-table__cell"
                            rowspan="1"
                            colspan="1"
                          >
                            <div class="cell"><span>拒绝</span></div>
                          </td>
                          <td
                            class="el-table_1_column_6 is-center el-table__cell"
                            rowspan="1"
                            colspan="1"
                          >
                            <div class="cell">100</div>
                          </td>
                          <td
                            class="el-table_1_column_7 is-center el-table__cell"
                            rowspan="1"
                            colspan="1"
                          >
                            <div class="cell">
                              <div>
                                <button
                                  class="el-button el-button--primary el-button--small is-text px-1"
                                  aria-disabled="false"
                                  type="button"
                                >
                                  <span class="">修改</span></button
                                ><button
                                  class="el-button el-button--primary el-button--small is-text px-1"
                                  aria-disabled="false"
                                  type="button"
                                >
                                  <span class="">商品规格</span></button
                                ><button
                                  class="el-button el-button--primary el-button--small is-text px-1"
                                  aria-disabled="false"
                                  type="button"
                                >
                                  <span class="">设置轮播图</span></button
                                ><button
                                  class="el-button el-button--primary el-button--small is-text px-1"
                                  aria-disabled="false"
                                  type="button"
                                >
                                  <span class="">商品详情</span></button
                                ><button
                                  class="el-button el-button--primary el-button--small is-text px-1 el-tooltip__trigger el-tooltip__trigger"
                                  aria-disabled="false"
                                  type="button"
                                >
                                  <span class="">删除</span>
                                </button>
                              </div>
                            </div>
                          </td>
                        </tr>
                        <tr class="el-table__row">
                          <td
                            class="el-table_1_column_1 el-table-column--selection el-table__cell"
                            rowspan="1"
                            colspan="1"
                          >
                            <div class="cell">
                              <label class="el-checkbox"
                                ><span class="el-checkbox__input"
                                  ><input
                                    class="el-checkbox__original"
                                    type="checkbox"
                                    aria-hidden="false"
                                    value="false"
                                    id="el-id-6882-47" /><span
                                    class="el-checkbox__inner"
                                  ></span></span
                              ></label>
                            </div>
                          </td>
                          <td
                            class="el-table_1_column_2 el-table__cell"
                            rowspan="1"
                            colspan="1"
                          >
                            <div class="cell">
                              <div class="flex">
                                <div
                                  class="el-image mr-3 rounded"
                                  style="width: 50px; height: 50px"
                                >
                                  <img
                                    src="http://tangzhe123-com.oss-cn-shenzhen.aliyuncs.com/public/60bf2fe6e9e53.jpg"
                                    class="el-image__inner"
                                    style="object-fit: cover"
                                  />
                                </div>
                                <div class="flex-1">
                                  <p>新建商品</p>
                                  <div>
                                    <span class="text-rose-500">￥0.06</span>
                                    <div
                                      class="el-divider el-divider--vertical"
                                      role="separator"
                                      style="--el-border-style: solid"
                                    ></div>
                                    <span class="text-gray-500 text-xs"
                                      >￥0.00</span
                                    >
                                  </div>
                                  <p class="text-gray-400 text-xs mb-1">
                                    分类:运动旅行
                                  </p>
                                  <p class="text-gray-400 text-xs">
                                    创建时间：1970-01-01 08:33:40
                                  </p>
                                </div>
                              </div>
                            </div>
                          </td>
                          <td
                            class="el-table_1_column_3 is-center el-table__cell"
                            rowspan="1"
                            colspan="1"
                          >
                            <div class="cell">0</div>
                          </td>
                          <td
                            class="el-table_1_column_4 el-table__cell"
                            rowspan="1"
                            colspan="1"
                          >
                            <div class="cell">
                              <span
                                class="el-tag el-tag--danger el-tag--small el-tag--light"
                                ><span class="el-tag__content">仓库</span></span
                              >
                            </div>
                          </td>
                          <td
                            class="el-table_1_column_5 is-center el-table__cell"
                            rowspan="1"
                            colspan="1"
                          >
                            <div class="cell"><span>通过</span></div>
                          </td>
                          <td
                            class="el-table_1_column_6 is-center el-table__cell"
                            rowspan="1"
                            colspan="1"
                          >
                            <div class="cell">100</div>
                          </td>
                          <td
                            class="el-table_1_column_7 is-center el-table__cell"
                            rowspan="1"
                            colspan="1"
                          >
                            <div class="cell">
                              <div>
                                <button
                                  class="el-button el-button--primary el-button--small is-text px-1"
                                  aria-disabled="false"
                                  type="button"
                                >
                                  <span class="">修改</span></button
                                ><button
                                  class="el-button el-button--primary el-button--small is-text px-1"
                                  aria-disabled="false"
                                  type="button"
                                >
                                  <span class="">商品规格</span></button
                                ><button
                                  class="el-button el-button--primary el-button--small is-text px-1"
                                  aria-disabled="false"
                                  type="button"
                                >
                                  <span class="">设置轮播图</span></button
                                ><button
                                  class="el-button el-button--primary el-button--small is-text px-1"
                                  aria-disabled="false"
                                  type="button"
                                >
                                  <span class="">商品详情</span></button
                                ><button
                                  class="el-button el-button--primary el-button--small is-text px-1 el-tooltip__trigger el-tooltip__trigger"
                                  aria-disabled="false"
                                  type="button"
                                >
                                  <span class="">删除</span>
                                </button>
                              </div>
                            </div>
                          </td>
                        </tr>
                        <tr class="el-table__row el-table__row--striped">
                          <td
                            class="el-table_1_column_1 el-table-column--selection el-table__cell"
                            rowspan="1"
                            colspan="1"
                          >
                            <div class="cell">
                              <label class="el-checkbox"
                                ><span class="el-checkbox__input"
                                  ><input
                                    class="el-checkbox__original"
                                    type="checkbox"
                                    aria-hidden="false"
                                    value="false"
                                    id="el-id-6882-48" /><span
                                    class="el-checkbox__inner"
                                  ></span></span
                              ></label>
                            </div>
                          </td>
                          <td
                            class="el-table_1_column_2 el-table__cell"
                            rowspan="1"
                            colspan="1"
                          >
                            <div class="cell">
                              <div class="flex">
                                <div
                                  class="el-image mr-3 rounded"
                                  style="width: 50px; height: 50px"
                                >
                                  <img
                                    src="https://tangzhe123-com.oss-cn-shenzhen.aliyuncs.com/public/765a18a017acf0b5c012ce765696be6f.png"
                                    class="el-image__inner"
                                    style="object-fit: cover"
                                  />
                                </div>
                                <div class="flex-1">
                                  <p>小米-商品4单规格</p>
                                  <div>
                                    <span class="text-rose-500">￥0.06</span>
                                    <div
                                      class="el-divider el-divider--vertical"
                                      role="separator"
                                      style="--el-border-style: solid"
                                    ></div>
                                    <span class="text-gray-500 text-xs"
                                      >￥30.00</span
                                    >
                                  </div>
                                  <p class="text-gray-400 text-xs mb-1">
                                    分类:手机数码
                                  </p>
                                  <p class="text-gray-400 text-xs">
                                    创建时间:1970-01-01 08:33:39
                                  </p>
                                </div>
                              </div>
                            </div>
                          </td>
                          <td
                            class="el-table_1_column_3 is-center el-table__cell"
                            rowspan="1"
                            colspan="1"
                          >
                            <div class="cell">0</div>
                          </td>
                          <td
                            class="el-table_1_column_4 el-table__cell"
                            rowspan="1"
                            colspan="1"
                          >
                            <div class="cell">
                              <span
                                class="el-tag el-tag--success el-tag--small el-tag--light"
                                ><span class="el-tag__content">上架</span></span
                              >
                            </div>
                          </td>
                          <td
                            class="el-table_1_column_5 is-center el-table__cell"
                            rowspan="1"
                            colspan="1"
                          >
                            <div class="cell"><span>通过</span></div>
                          </td>
                          <td
                            class="el-table_1_column_6 is-center el-table__cell"
                            rowspan="1"
                            colspan="1"
                          >
                            <div class="cell">162</div>
                          </td>
                          <td
                            class="el-table_1_column_7 is-center el-table__cell"
                            rowspan="1"
                            colspan="1"
                          >
                            <div class="cell">
                              <div>
                                <button
                                  class="el-button el-button--primary el-button--small is-text px-1"
                                  aria-disabled="false"
                                  type="button"
                                >
                                  <span class="">修改</span></button
                                ><button
                                  class="el-button el-button--primary el-button--small is-text px-1"
                                  aria-disabled="false"
                                  type="button"
                                >
                                  <span class="">商品规格</span></button
                                ><button
                                  class="el-button el-button--primary el-button--small is-text px-1"
                                  aria-disabled="false"
                                  type="button"
                                >
                                  <span class="">设置轮播图</span></button
                                ><button
                                  class="el-button el-button--primary el-button--small is-text px-1"
                                  aria-disabled="false"
                                  type="button"
                                >
                                  <span class="">商品详情</span></button
                                ><button
                                  class="el-button el-button--primary el-button--small is-text px-1 el-tooltip__trigger el-tooltip__trigger"
                                  aria-disabled="false"
                                  type="button"
                                >
                                  <span class="">删除</span>
                                </button>
                              </div>
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                <div
                  class="el-scrollbar__bar is-horizontal"
                  style="display: none"
                >
                  <div
                    class="el-scrollbar__thumb"
                    style="transform: translateX(0%)"
                  ></div>
                </div>
                <div
                  class="el-scrollbar__bar is-vertical"
                  style="display: none"
                >
                  <div
                    class="el-scrollbar__thumb"
                    style="transform: translateY(0%)"
                  ></div>
                </div>
              </div>
            </div>
          </div>

          <div
            class="el-table__column-resize-proxy"
            style="display: none"
          ></div>
        </div>
        <div class="flex items-center justify-center mt-5">
          <div
            role="pagination"
            aria-label="pagination"
            class="el-pagination is-background"
          >
            <button
              type="button"
              class="btn-prev is-first"
              disabled=""
              aria-disabled="true"
            >
              <i class="el-icon"
                ><svg
                  viewBox="0 0 1024 1024"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill="currentColor"
                    d="M609.408 149.376 277.76 489.6a32 32 0 0 0 0 44.672l331.648 340.352a29.12 29.12 0 0 0 41.728 0 30.592 30.592 0 0 0 0-42.752L339.264 511.936l311.872-319.872a30.592 30.592 0 0 0 0-42.688 29.12 29.12 0 0 0-41.728 0z"
                  ></path></svg
              ></i>
            </button>
            <ul class="el-pager">
              <li class="is-active number" aria-current="true" tabindex="0">
                1
              </li>

              <li class="number" aria-current="false" tabindex="0">2</li>
            </ul>
            <button
              type="button"
              class="btn-next is-last"
              aria-disabled="false"
            >
              <i class="el-icon"
                ><svg
                  viewBox="0 0 1024 1024"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill="currentColor"
                    d="M340.864 149.312a30.592 30.592 0 0 0 0 42.752L652.736 512 340.864 831.872a30.592 30.592 0 0 0 0 42.752 29.12 29.12 0 0 0 41.728 0L714.24 534.336a32 32 0 0 0 0-44.672L382.592 149.376a29.12 29.12 0 0 0-41.728 0z"
                  ></path></svg
              ></i>
            </button>
          </div>
        </div>
        <div class="el-overlay" style="z-index: 2014; display: none">
          <div
            aria-modal="true"
            aria-label="新增"
            aria-describedby="el-id-6882-19"
            class="el-drawer rtl"
            role="dialog"
            style="width: 45%"
          >
            <span class="el-drawer__sr-focus" tabindex="-1"></span>
            <header class="el-drawer__header">
              <span id="el-id-6882-20" role="heading" class="el-drawer__title"
                >新增</span
              ><button
                aria-label="Close this dialog"
                class="el-drawer__close-btn"
                type="button"
              >
                <i class="el-icon el-drawer__close"
                  ><svg
                    viewBox="0 0 1024 1024"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill="currentColor"
                      d="M764.288 214.592 512 466.88 259.712 214.592a31.936 31.936 0 0 0-45.12 45.12L466.752 512 214.528 764.224a31.936 31.936 0 1 0 45.12 45.184L512 557.184l252.288 252.288a31.936 31.936 0 0 0 45.12-45.12L557.12 512.064l252.288-252.352a31.936 31.936 0 1 0-45.12-45.184z"
                    ></path></svg
                ></i>
              </button>
            </header>
          </div>
        </div>
      </div>
    </div>
    <div class="el-overlay" style="z-index: 2015; display: none">
      <div
        aria-modal="true"
        aria-label="设置轮播图"
        aria-describedby="el-id-6882-21"
        class="el-drawer rtl"
        role="dialog"
        style="width: 50%"
      >
        <span class="el-drawer__sr-focus" tabindex="-1"></span>
        <header class="el-drawer__header">
          <span id="el-id-6882-22" role="heading" class="el-drawer__title"
            >设置轮播图</span
          ><button
            aria-label="Close this dialog"
            class="el-drawer__close-btn"
            type="button"
          >
            <i class="el-icon el-drawer__close"
              ><svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg">
                <path
                  fill="currentColor"
                  d="M764.288 214.592 512 466.88 259.712 214.592a31.936 31.936 0 0 0-45.12 45.12L466.752 512 214.528 764.224a31.936 31.936 0 1 0 45.12 45.184L512 557.184l252.288 252.288a31.936 31.936 0 0 0 45.12-45.12L557.12 512.064l252.288-252.352a31.936 31.936 0 1 0-45.12-45.184z"
                ></path></svg
            ></i>
          </button>
        </header>
      </div>
    </div>
    <div class="el-overlay" style="z-index: 2016; display: none">
      <div
        aria-modal="true"
        aria-label="设置商品详情"
        aria-describedby="el-id-6882-23"
        class="el-drawer rtl"
        role="dialog"
        style="width: 45%"
      >
        <span class="el-drawer__sr-focus" tabindex="-1"></span>
        <header class="el-drawer__header">
          <span id="el-id-6882-24" role="heading" class="el-drawer__title"
            >设置商品详情</span
          ><button
            aria-label="Close this dialog"
            class="el-drawer__close-btn"
            type="button"
          >
            <i class="el-icon el-drawer__close"
              ><svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg">
                <path
                  fill="currentColor"
                  d="M764.288 214.592 512 466.88 259.712 214.592a31.936 31.936 0 0 0-45.12 45.12L466.752 512 214.528 764.224a31.936 31.936 0 1 0 45.12 45.184L512 557.184l252.288 252.288a31.936 31.936 0 0 0 45.12-45.12L557.12 512.064l252.288-252.352a31.936 31.936 0 1 0-45.12-45.184z"
                ></path></svg
            ></i>
          </button>
        </header>
      </div>
    </div>
    <div class="el-overlay" style="z-index: 2017; display: none">
      <div
        aria-modal="true"
        aria-label="设置商品规格"
        aria-describedby="el-id-6882-25"
        class="el-drawer rtl"
        role="dialog"
        style="width: 70%"
      >
        <span class="el-drawer__sr-focus" tabindex="-1"></span>
        <header class="el-drawer__header">
          <span id="el-id-6882-26" role="heading" class="el-drawer__title"
            >设置商品规格</span
          ><button
            aria-label="Close this dialog"
            class="el-drawer__close-btn"
            type="button"
          >
            <i class="el-icon el-drawer__close"
              ><svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg">
                <path
                  fill="currentColor"
                  d="M764.288 214.592 512 466.88 259.712 214.592a31.936 31.936 0 0 0-45.12 45.12L466.752 512 214.528 764.224a31.936 31.936 0 1 0 45.12 45.184L512 557.184l252.288 252.288a31.936 31.936 0 0 0 45.12-45.12L557.12 512.064l252.288-252.352a31.936 31.936 0 1 0-45.12-45.184z"
                ></path></svg
            ></i>
          </button>
        </header>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped></style>
