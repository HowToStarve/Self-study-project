<template>
  <AddAlternatives
      v-if="isInAddingAlternatives"
      @close="isInAddingAlternatives = false"
      @post="(columns) => { createAlternatives(columns) }"
  />
  <AddVotes
      v-if="isInAddingVotes && column.length"
      v-bind:columns = "alternatives"
      @close="isInAddingVotes = false"
      @post="(rows) => { createFullTable(rows) }"
  />
  <div class="col-md-9 block">
    <div class="big-header-text position-relative">
      Example
    </div>
    <div
        class="main-text">
    </div>
    <div class="d-flex flex-wrap justify-content-center pl-5">
      <div
          class="action-button"
          @click="isInAddingAlternatives = true"
      >
        <i class="fa-solid fa-upload"></i>
      </div>
      <div
          class="action-button"
          @click="isInAddingVotes = true"
      >
        <i class="fa-solid fa-upload ml-5"></i>
      </div>
    </div>
    <div class="container-fluid">
        <ag-grid-vue
            :class="themeClass + ' w-100 ml-2'"
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
import AddAlternatives from "@/components/AddAlternatives.vue";
import AddVotes from "@/components/AddVotes.vue";
export default {
  name: "IndexView",
  components: {
    AgGridVue,
    AddAlternatives,
    AddVotes
  },
  beforeUnmount() {
    this.row = []
    this.column = []
  },
  data() {
    return {
      alternatives: [],
      row: [
        {Voters: '9', Alternatives: '1'},
        {Voters: '8', Alternatives: '2'},
        {Voters: '7', Alternatives: '3'},
        {Voters: '6', Alternatives: '4'},
        {Voters: '5', Alternatives: '5'},
        {Voters: '4', Alternatives: '6'},
        {Voters: '3', Alternatives: '7'},
        {Voters: '2', Alternatives: '8'},
        {Voters: '1', Alternatives: '9'}
      ],
      column: [
          {
            field: 'Voters',
            width: 850
          },
          {
            field: 'Alternatives',
            width: 850
          }
      ],
      themeClass: "ag-theme-quartz-dark",
      isInAddingAlternatives: false,
      isInAddingVotes: false
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
    createAlternatives(columns) {
      this.alternatives = []
      for(let i = 0; i < columns.length; ++i) {
        this.addAlternatives(columns[i])
      }
      this.isInAddingAlternatives = false
    },
    createFullTable(rows) {
      this.column = []
      this.row = []
      for(let i = 0; i < rows.length - 1; ++i) {
        this.addRow(rows[i])
      }
    },
    addAlternatives(column) {
      this.alternatives.push(column)
    },
    addRow(row){
      let finale = row
      this.row.push(finale)
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

.action-button {
  font-size: 55px;
  cursor: pointer;
  color: #7ca4c8;
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

@keyframes rotate {
  to { transform: rotate(360deg); }
}
</style>

<style>
.main-text p {
  width: 100%;
}
</style>
