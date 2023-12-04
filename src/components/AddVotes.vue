<template>
  <div class="modal-mask">
    <div class="modal-wrapper">
      <div class="modal-container">

        <div class="modal-header">Votes</div>

        <div class="modal-body">
          <div class="container-fluid w-100">
            <div class="w-100 row mb-2 text-white">
              <div class="w-50 mt-5">
                <div
                    type="checkbox"
                    :key="index"
                    v-for="(column, index) in columns">
                  <input
                        type="checkbox"
                        v-model="expectedRow"
                        :value="column"
                        :id="index"
                  >
                  <label :for="index">
                    {{column}}
                  </label>
                </div>
                <input v-model="votes" placeholder="Количество голосующих">
                <button class="button1"
                        v-on:click="addRows(expectedRow)">
                  Добавить голосующих
                </button>
              </div>
              <div class="row text-white w-50">
                <div class="main-text">
                  {{ getName(expectedRow) }}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="modal-footer">
          <span class="newsPage-closer ml-3"
                @click="postVotes">Post</span>
          <span class="newsPage-closer ml-3"
                @click="$emit('close')">Exit</span>
        </div>
      </div>
      <div class="modal-container">

        <div class="modal-header">Votes</div>

        <div class="modal-body">
          <div class="container-fluid w-100">
            <div class="w-100 row mb-2 text-white">
              <div v-for="row in rows"
                   v-bind:key="row.alternatives"

              >
                {{row}}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {notify} from "@kyvg/vue3-notification";

export default {
  name: "AddVotes",
  props: [ 'columns' ],
  mounted() {
    document.addEventListener('keydown', this.onKeyDown)
  },
  beforeUnmount() {
    document.removeEventListener('keydown', this.onKeyDown)
  },
  data() {
    return {
      votes: 0,
      expectedRow: [],
      rows: []
    }
  },
  methods: {
    onKeyDown(e) {
      if (e.key === 'Enter')
        this.addRows()

      if (e.key === 'Escape')
        this.$emit('close')
    },
    addRows(rows) {
      this.expectedRow = []
      if (rows.length < this.columns.length) {
        notify({
          title: 'Error',
          text: 'Add all ' + this.columns.length + ' alternatives',
          type: 'warn'
        })
        return
      }
      let name = ''
      rows.forEach((item) => {
        name += item + '->';
      })
      name = name.slice(0, name.length - 2)
      console.log(name + " " + rows)
      this.rows.push({Voters: this.votes, Alternatives: name})
    },
    getName(rows) {
      let name = ''
      rows.forEach((item) => {
        name += item + '->';
      })
      return `${name.slice(0, name.length - 2)}`
    },
    postVotes() {
      if (!this.rows.length) {
        notify({
          title: 'Error',
          text: 'Add alternatives',
          type: 'warn'
        })
        return
      }
      this.$emit('post', this.rows)
    }
  }
}
</script>

<style scoped>
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: table;
  transition: opacity 0.3s ease;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}

.modal-container {
  position: relative;

  top: -3rem;

  width: 46rem;
  min-height: 450px;
  margin: 0 auto;
  padding: 20px 30px;
  background-color: rgb(60, 60, 60);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);

  border: 4px solid #7ca4c8;
  animation: fade-in 200ms;
}

.modal-body {
  margin: 20px 0;
}

.modal-header {
  display: flex;
  position: absolute;

  margin-top: 0;
  color: #42b983;

  width: 90%;
  left: 5%;
  top: -0.75rem;

  border-bottom: 2px solid #7ca4c8;
  margin-bottom: 1rem;
  padding-bottom: 1rem;

  justify-content: center;
}

.modal-footer {
  display: block;

  position: absolute;
  bottom: 0.1rem;

  width: 90%;
  left: 5%;

  border-top: 2px solid #7ca4c8;
}

.modal-header, .modal-footer {
  height: 64px;
  font-family: AncientModernTales, serif;
  font-size: 36px;

  background: -webkit-linear-gradient(#7cb4c8, #405a79);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  text-align: center;

}

.modal-footer span:hover {
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  cursor: pointer;
}

.newsPage-closer:hover {
  background-color: #9f0505;
  text-shadow: #dc6d6f 0 0 20px;
}

@keyframes fade-in {
  0% { opacity: 0; }
  100% {opacity: 1; }
}

.news-content {
  max-height: 25rem;
  overflow-y: scroll;
}

.news-content::-webkit-scrollbar {
  background-color: #11171e;
  width: 8px;
}

.news-content::-webkit-scrollbar-thumb {
  background: #7ca4c8;
  width: 8px;
}

.button1 {
  background-color: #405a79;
  border-radius: 8px;
  border-style: none;
  box-sizing: border-box;
  color: #FFFFFF;
  cursor: pointer;
  display: inline-block;
  font-family: "Haas Grot Text R Web", "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-size: 14px;
  font-weight: 500;
  height: 40px;
  line-height: 20px;
  list-style: none;
  outline: none;
  padding: 10px 16px;
  position: relative;
  text-align: center;
  text-decoration: none;
  transition: color 100ms;
  vertical-align: baseline;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
}

.button1:hover,
.button1:focus {
  background-color: #7cb4c8;
}

</style>
