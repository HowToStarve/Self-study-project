<template>
  <div class="col-md-9 block">
    <div class="big-header-text position-relative">
      Bosses
    </div>

    <div class="container-fluid">
      <div class="row justify-content-center current-time">
        <h3>Xnj: {{ currentTime }}</h3>
      </div>

      <div
          v-for="boss in bosses"
          :key="boss.time"
          class="row w-100 boss-row mb-2"
          :class="{ inactive: isPassed(boss.time) }"
      >
        <div class="col-4 text-left pl-0">
          <img
              :src="boss.img"
              :alt="boss.name"
              class="boss-image"
          >
        </div>

        <div class="col-4 text-center font-weight-bold my-auto boss-name">
          {{ boss.name }}
        </div>

        <div class="col-4 text-right my-auto pr-5 boss-time">
          {{ boss.time }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Bosses from "@/configuration/bosses";

export default {
  name: "BossesView",
  mounted() {
    setInterval(() => {
      this.updateTime()
    }, 1000)
  },
  data() {
    return {
      currentTime: 'xnj',
      bosses: Bosses
    }
  },
  methods: {
    updateTime() {
      this.currentTime = ( new Date() ).toLocaleString([], { timeZone: 'Europe/Moscow' })
    },

    isPassed(time) {
        let date = new Date(this.currentTime)
        let nowHour = date.getHours()
        let bossHour = parseInt( time.split(':')[0] )
        //
        // if(bossHour < 6)
        //   bossHour += 24
        //
        // if(nowHour < 6)
        //   nowHour += 24

        return nowHour >= bossHour
    }
  }
}
</script>

<style scoped>

  .current-time, .boss-name, .boss-time {
    color: #7ca4c8;
  }

  .boss-row {
    height: 128px;
    border: 2px solid #7ca4c8;
    background: #2c273f;
  }


  .boss-row.inactive {
    filter: grayscale(1.0);
  }

  .boss-image {
    height: 124px;
    clip-path: polygon(0% 0%, 75% 0%, 100% 50%, 75% 100%, 0% 100%);
    /*clip-path: polygon(25% 0%, 100% 0%, 75% 100%, 0% 100%);*/
  }

  .boss-name {
    font-size: 24px;
  }

  .boss-time {
    font-family: AncientModernTales, serif;
    font-size: 36px;
  }

</style>
