<template>
  <div class="col-md-9 block">
    <div class="big-header-text position-relative">
      Explanation
    </div>
    <div
        class="main-text">
    </div>
    <div class="container-fluid row w-100 ml-1">
      <div class="w-100 row ml-2 mb-2">
        <div class="main-text"
             v-html="text">
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
      text: '<p>Отметим еще одну процедуру голосования из множества предложенных: метод Борда. ' +
          'Согласно этому методу результаты голосования выражаются в виде числа баллов, набранных каждым из кандидатов. ' +
          'Пусть число кандидатов равно [n]. Тогда за первое место присуждается [n] баллов, за второе — [n-1], за последнее — один балл.</p>' +
          '<p>Применим метод Борда к приведенному выше примеру. Подсчитаем число баллов для каждого из кандидатов:</p>' +
          '<p style="color: lightcoral">A:23x3 + 19xl + 16xl + 2x2 = 108;</p>' +
          '<p style="color: lightcoral">B:23xl + 19x3 + 16x2 + 2xl = 114;</p>' +
          '<p style="color: lightcoral">С:23х2 + 19х2 + 16х2 + 2хЗ = 138.</p>' +
          '<p>В соответствии с методом Борда мы должны объявить победителем кандидата С.</p>' +
          '<p>Однако с методом Борда, как и с принципом Кондорсе, возникают проблемы. Предположим, ' +
          'что результаты голосования в выборном органе представлены табл. 1.3. Подсчитав баллы в соответствии с ' +
          'методом Борда, получим: А — 126, В — 103, С — 143. ' +
          'В соответствии с методом Борда победителем следует объявить кандидата С. ' +
          'Однако в данном случае явным победителем является кандидат А, набравший абсолютное большинство голосов: 31 из 60.' +
          '<p>Таблица 1.3 Распределение голосов (метод Борда)</p>' +
          '<center><table style="border: 2px lightcoral" width="340" cellpadding="1" cellspacing="1">' +
          '<colgroup><col width="190"><col width="142"></colgroup><tbody><tr>' +
          '<td width="190">' +
          '<p align="justify">' +
          'Число голосующих </p></td><td width="142">' +
          '<p align="justify">' +
          'Предпочтения</p></td></tr><tr>' +
          '<td width="190">' +
          '<p align="justify">' +
          '31</p></td><td width="142">' +
          '<p align="justify">' +
          'A-&gt;C-&gt;B</p></td></tr><tr>' +
          '<td width="190">' +
          '<p align="justify">' +
          '12</p></td><td width="142">' +
          '<p align="justify">' +
          'B-&gt;C-&gt;A</p></td></tr><tr>' +
          '<td width="190">' +
          '<p align="justify">' +
          '17</p></td><td width="142">' +
          '<p align="justify">' +
          'C-&gt;B-&gt;A</p></td></tr><tr>' +
          '<td width="190">' +
          '<p align="justify">' +
          '2</p></td><td width="142">' +
          '<p align="justify">' +
          'C-&gt;A-&gt;B</p></td></tr></tbody></table></center>' +
          '<p>Приведенные примеры позволяют понять, что парадоксы при голосовании не возникают лишь ' +
          'в случае, когда есть два кандидата и победитель определяется по принципу абсолютного большинства голосов. ' +
          'Однако такой случай нетипичен для большинства выборов в демократических странах. ' +
          'Обычно число кандидатов больше, чем два, и редки случаи, когда кто-то из них сразу же ' +
          'получает поддержку абсолютного большинства избирателей.</p>' +
          '<p>Интересно, что парадоксы голосования сохраняются и при введении двух туров и ' +
          'условии, что во второй тур выходят два кандидата, набравшие большинство голосов. ' +
          'Обратимся к табл. 11.1, составленной Кондорсе. В соответствии с предпочтениями во второй ' +
          'тур выходят А (23 голоса) и В (19 голосов), после чего побеждает А. Однако при небольшом ' +
          'усилении первоначальной позиции А предпочтения двух избирателей (3-я строка) выглядят как А -> В -> С, ' +
          'во второй тур выходят А (25 голосов) и С (20 голосов), после чего побеждает С. Ясно, что такой результат голосования противоречит здравому смыслу.</p>'
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

table {
  border: 4px #7ca4c8;
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
  font-size: 20px;
  display: flex;
  position: relative;
  min-height: 15rem;
  margin-top: 1rem;
  background: #151020;
  border: 2px solid #7ca4c8;
  color: white;
  padding-left: 0.25rem;
}

@keyframes pulse {
  0% { color: #7ca4c8 }
  50% { color: lightcoral }
  100% { color: #7ca4c8 }
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
