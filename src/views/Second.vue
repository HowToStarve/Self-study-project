<template>
  <div class="col-md-9 block">
    <div class="big-header-text position-relative">
      History
    </div>
    <div
      class="main-text">
    </div>
    <div class="container-fluid row w-100">
      <div class="w-100 row mb-2">
        <div class="w-50 imagination">
          <img class="news-img"
               :src="require('@/assets/img/Voting.png')"
               @click="getNotifications">
        </div>
        <div class="row mb-2 mt-2 text-white w-50">
          <div class="main-text"
               v-html="text">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {notify} from "@kyvg/vue3-notification";
export default {
  name: "IndexView",
  data() {
    return {
      text: '<p>Привет ну здарова ты вообще как поживаешь?</p><p>Привет</p><p>Привет</p><p>Привет</p><p>Привет</p> здарова как дела?'
    }
  },
  methods: {
    getNotifications() {
      notify({
        title: 'knock',
        text: 'ok',
        type: 'warn'
      })
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
  height: 850px;
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
