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
        <div class="w-50 column imagination">
          <img class="news-img"
               :src="require('@/assets/img/Borda.png')"
               alt="borodina"
               @click="getNotifications">
          <img class="news-img"
               :src="require('@/assets/img/Voting.png')"
               alt="borodina"
               @click="getNotifications">
        </div>
        <div class="row mb-2 mt-5 text-white w-50">
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
      text: '<p>' +
            'Метод Борда́ (правило Борда) — система преференциального голосования, ' +
            'предложенная в 1770 году Жан-Шарлем де Борда с целью более тщательного учёта предпочтений выборщиков в условиях множества кандидатов.' +
            '</p>' +
            '<p>' +
            'Согласно этому методу результаты голосования выражаются в виде числа баллов, ' +
            'набранных каждым из кандидатов. Так, при выборах из n кандидатов каждый голосующий ранжирует ' +
            'всех кандидатов строго по убыванию предпочтения, за первое место по предпочтению кандидату ' +
            'присуждается [n] баллов, за второе — [n−1] балл и т. д. (за последнее место — 1 балл), ' +
            'все набранные баллы кандидатами суммируются. Соответственно, победителем выборов считается кандидат, набравший наивысший суммарный балл.' +
            '</p>' +
            '<p>' +
            'Как и метод Кондорсе, зачастую не даёт интуитивно ожидаемых результатов при подсчёте, кроме того, ' +
            'при практическом применении метода зачастую возникает парадокс Кондорсе, когда предпочтения противоположных ' +
            'групп избирателей вступают в противоречие друг с другом. Происхождение недостатков метода обусловлено, ' +
            'прежде всего, тем, что к объектам нечисловой природы (местам в порядке предпочтения) применяются арифметические операции.' +
            '</p>' +
            '<p>' +
            'Также методом Борда называют способ измерения веса на пружинных весах, у которых имеется постоянная систематическая погрешность. ' +
            'Вначале на чашу весов помещают взвешиваемое тело и отмечают положение указателя. ' +
            'Затем взвешиваемое тело замещают гирями такой массы, чтобы вновь добиться прежнего отклонения указателя. ' +
            'Очевидно, что при одинаковых отклонениях указателя будут одинаковыми и массы, и систематическая погрешность весов не скажется на результате взвешивания.' +
            '</p>'
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
  font-size: 22px;
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
  height: 650px;
  width: 400px;
  border: 3px solid #7ca4c8;
}

@keyframes pulse {
  0% { color: #7ca4c8 }
  50% { color: lightcoral }
  100% { color: #7ca4c8 }
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
  text-align: justify;
}
</style>
