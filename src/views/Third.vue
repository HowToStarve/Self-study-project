<template>
  <div class="col-md-9 block">
    <div class="big-header-text position-relative">
      History
    </div>
    <div
        class="main-text">
    </div>

    <div class="container-fluid">
        <ag-grid-vue
            :class="themeClass + ' w-100'"
            :rowData="row"
            :columnDefs="column"
        >
        </ag-grid-vue>
    </div>
  </div>
</template>

<script>
import {notify} from "@kyvg/vue3-notification";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-quartz.css";
import { AgGridVue } from "ag-grid-vue3";
export default {
  name: "IndexView",
  components: {
    AgGridVue
  },
  data() {
    return {
      row: [
        {hello: '9', hi: '1'},
        {hello: '8', hi: '2'},
        {hello: '7', hi: '3'},
        {hello: '6', hi: '4'},
        {hello: '5', hi: '5'},
        {hello: '4', hi: '6'},
        {hello: '3', hi: '7'},
        {hello: '2', hi: '8'},
        {hello: '1', hi: '9'}
      ],
      column: [
          {
            field: 'hello',
            width: 850
          },
          {
            field: 'hi',
            width: 850
          }
      ],
      themeClass: "ag-theme-quartz-dark"
    }
  },
  methods: {
    getNotifications() {
      notify({
        title: 'knock',
        text: 'ok',
        type: 'warn'
      })
    },
    addColumns(column) {
      this.column.push(column)
    },
    addRow(row){
      this.row.push(row)
    }
  }
}
</script>

<style scoped>
ul {
  list-style-type: none;
}

p {
  width: 100%;
}

.container-fluid {
  overflow-y: scroll;
  -ms-overflow-style: none;
  height: 60rem;
  display: block;
}

.container-fluid::-webkit-scrollbar {
  display: none;
}

.container-fluid {
  display: flex;
  position: relative;
  min-height: 15rem;
  margin-top: 1rem;
  background: #151020;
  border: 2px solid #7ca4c8;
  color: white;
  padding-left: 0.25rem;
}

.news-img {
  height: 750px;
  width: 650px;
  border: 3px solid #7ca4c8;
}

@keyframes pulse {
  0% { color: #7ca4c8 }
  50% { color: lightcoral }
  100% { color: #7ca4c8 }
}

.loading {
  width: 14px;
  height: 14px;
  animation: rotate 1s infinite linear;
  border-radius: 14px;
  box-shadow: 36px 0 0 0 #7ca4c8, 22px 28px 0 0 #7ca4c8, -7.9px 35px 0 0 #7ca4c8, -32.4px 16px 0 0 #7ca4c8, -32.4px -15.5px 0 0 #7ca4c8, -7.9px -34.9px 0 0 #7ca4c8, 22px -28.1px 0 0 #7ca4c8;

  margin: 10rem auto 0;
}

.card-list {
  display: grid;
  grid-gap: 1em;
}

.imagination {
  position: relative;
  display: flex;
  vertical-align: middle;
  align-items: center;
  justify-content: center;
  align-content: center;

}

@keyframes rotate {
  to { transform: rotate(360deg); }
}
</style>

<style>
.main-text p {
  width: 100%;
}
</style>
