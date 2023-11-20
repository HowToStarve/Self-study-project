<template>
  <div class="modal-mask">
    <div class="modal-wrapper">
      <div class="modal-container">

        <div class="modal-header">
          {{ $t('message.inventory.deleteDecision.question') }}
        </div>

        <div class="modal-body">
          <div class="row mb-3 mt-3">
            <div class="col-5 position-relative align-self-center align-content-center mt-4">
              <div :class ="{ clickingSequence: clicked }">
                <img
                     :alt="item.name"
                     :src="item.img"
                     class="image-deletion"
                     @click="imageClick()"
                >
              </div>
              <span v-else class="regular-items">{{ $t('message.items.name.') }}</span>
            </div>
            <div class="modal-content col-7 align-self-center">
              <div class="text-center text-white">
                {{ $t('message.inventory.deleteDecision.mainText') }}
                      {{ $t('message.items.name.') }}
                  </span>
                  <span v-else class="regular-items">
                      {{ $t('message.items.name.') }}
                  </span>
                {{ $t('message.inventory.deleteDecision.inAmount') }}
                  <span class="amount-text">{{ item.amount }}</span>
                {{ $t('message.inventory.deleteDecision.actualAmount') }}?
              </div>
            </div>
          </div>
        </div>

        <div class="modal-footer row">
          <span class="accepted mr-5"
                @click="$emit('delete')"
          >
            {{ $t('message.inventory.deleteDecision.delete') }}
          </span>

          <span class="denied ml-5"
                @click="$emit('close')"
          >
            {{ $t('message.inventory.deleteDecision.save') }}
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DeleteDecisionModal",
  data() {
      return {
          clicked: false,
          lastClickAttempt: 0
      }
  },
  props: [ 'item' ],
  mounted() {
    document.addEventListener('keydown', this.onKeyDown)
  },
  beforeUnmount() {
    document.removeEventListener('keydown', this.onKeyDown)
  },
  methods: {
    async imageClick() {
        if (Math.floor(Date.now() / 1000) - this.lastClickAttempt < 0.5) {
            return
        }

        this.lastClickAttempt = Math.floor(Date.now() / 1000)
        this.clicked = true;
        setTimeout(() => {
            this.clicked = false
            },500
        )
    },
    onKeyDown(e) {
      if(e.key === 'Escape')
        this.$emit('close')

      if(e.key === 'Enter')
        this.$emit('delete')
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

  width: 45rem;
  min-height: 400px;
  margin: 0 auto;
  padding: 20px 30px;
  background-color: rgb(60, 60, 60);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);

  border: 4px solid #7ca4c8;
  animation: fade-in 200ms;
}

.modal-header h3 {
  margin-top: 0;
  color: #42b983;
}

.modal-body {
  min-height: 64px;
  font-size: 30px;

  background: -webkit-linear-gradient(#7cb4c8, #405a79);
  -webkit-background-clip: text;

  text-align: center;

  margin: 20px 0;
  padding-bottom: 50px;
}

.modal-header {
  display: block;
  position: absolute;

  width: 90%;
  left: 5%;
  top: -0.75rem;

  border-bottom: 2px solid #7ca4c8;
  margin-bottom: 1rem;
  padding-bottom: 3.5rem;
}

.modal-content {
  position: relative;

  top: 5px;
  bottom: 5px;

  width: auto;
  min-height: 200px;
  padding: 5px 20px 10px 20px;
  background-color: rgba(47, 46, 46, 0.6);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);

  border: 4px solid #7ca4c8;
}

.modal-footer {
  display: block;

  position: absolute;
  bottom: 1rem;

  width: 90%;
  left: 7%;

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

.special-items, .amount-text {
  background-color: #8D65C5;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.regular-items {
  background-color: #80E2F5;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.accepted:hover {
  background-color: #9f0505;
  text-shadow: #dc6d6f 0 0 20px;
}

.denied:hover {
  background-color: #04BD14;
  text-shadow: #9ece97 0 0 20px;
}

.modal-container:before, .modal-container:after {
  content: '';
  position: absolute;
  left: -2px;
  top: -2px;
  background: linear-gradient(45deg, #fb0094, #0000ff, #00ff00,#ffff00, #ff0000, #fb0094,
  #0000ff, #00ff00,#ffff00, #ff0000);
  background-size: 400%;
  width: calc(100% + 4px);
  height: calc(100% + 4px);
  z-index: -1;
  animation: steam 20s linear infinite;
}

.modal-container:after {
  filter: blur(25px);
}

.image-deletion {
  width: 7.5rem;
  height: 7.5rem;

  border: 4px solid #7ca4c8;

  animation: 400ms fade-in linear;
  box-shadow: 0 0 60px 4px rgba(252, 7, 86, 0.6);

  transition: box-shadow 1s;
}

.clickingSequence {
  animation: clicking 440ms;
}

@keyframes fade-in {
  0% { opacity: 0; }
  100% { opacity: 1; }
}

@keyframes steam {
  0%
  {
    opacity: 0;
    background-position: 0 0;
  }
  25% {
    opacity: 0.5;
    background-position: 200% 0;
  }
  50% {
    opacity: 1;
    background-position: 400% 0;
  }
  75% {
    opacity: 0.5;
    background-position: 200% 0;
  }
  100% {
    opacity: 0;
    background-position: 0 0;
  }
}

@keyframes clicking {
  0% { transform: rotate(0deg) scale(1.0); }
  10% { transform: rotate(-3deg) scale(0.95); }
  20% { transform: rotate(0deg) scale(0.9); }
  30% { transform: rotate(4deg) scale(0.85); }
  40% { transform: rotate(0deg) scale(0.8); }
  50% { transform: rotate(-5deg) scale(0.75); }
  60% { transform: rotate(0deg) scale(0.8); }
  70% { transform: rotate(4deg) scale(0.85); }
  80% { transform: rotate(0deg) scale(0.9); }
  90% { transform: rotate(-3deg) scale(0.95); }
  100% { transform: rotate(0deg) scale(1.0); }
}

</style>
