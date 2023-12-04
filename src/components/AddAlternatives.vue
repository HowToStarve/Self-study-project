<template>
  <div class="modal-mask">
    <div class="modal-wrapper">
      <div class="modal-container">

        <div class="modal-header">Alternatives</div>

        <div class="modal-body">
          <div class="container-fluid w-100">
            <div class="w-100 row mb-2">
              <div class="w-50 mt-5">
                <input v-model="text">
                <button class="button1"
                        v-on:click="addColumn(text)">
                  Добавить альтернативу
                </button>
              </div>
              <div class="row text-white w-50">
                <div class="main-text">
                  <ul>
                    <li v-for="column in columns"
                        :key="column.id"
                    >
                      <p v-html="column">
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="modal-footer">
          <span class="newsPage-closer ml-3"
                @click="postAlternatives">Post</span>
          <span class="newsPage-closer ml-3"
                @click="$emit('close')">Exit</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AddAlternatives",
  mounted() {
    document.addEventListener('keydown', this.onKeyDown)
  },
  beforeUnmount() {
    document.removeEventListener('keydown', this.onKeyDown)
  },
  data() {
    return {
      text: '',
      columns: []
    }
  },
  methods: {
    onKeyDown(e) {
      if(e.key === 'Enter')
        this.postAlternatives()

      if(e.key === 'Escape')
        this.$emit('close')
    },
    addColumn(text) {
      this.columns.push(text)
      this.text = ''
    },
    postAlternatives() {
      this.$emit('post', this.columns)
    }
  }
}
</script>

<style scoped>
input {
  appearance: none;
  border: none;
  outline: none;
  border-bottom: .2em solid #7ca4c8;
  border-radius: .2em .2em 0 0;
  padding: .4em;
}

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

@keyframes fade-in {
  0% { opacity: 0; }
  100% {opacity: 1; }
}
</style>
