<template>
  <div class="col-md-2 block">
    <div class="big-header-text">
      Info
    </div>
    <div class="left-buttons pb-2 ml-2">
      <router-link to="/">
        <div class="left-button">
          <i class="fa-solid fa-newspaper fa-3x"></i>
          <span>Первая ссылка</span>
        </div>
      </router-link>

      <router-link to="/second">
        <div class="left-button">
          <i class="fas fa-khanda fa-3x"></i>
          <span>Вторая ссылка</span>
        </div>
      </router-link>

      <router-link to="/third">
        <div class="left-button">
          <i class="fas fa-box fa-3x"></i>
          <span>Третья ссылка</span>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>

</script>

<style scoped>
  @media (min-width: 768px) {
    .col-md-2 {
      margin-left: 2rem;
    }
  }

  .left-buttons {
    text-align: center;
  }

  @media (min-width: 768px) {
    .left-buttons {
      bottom: 1%;
      width: 90%;
    }
  }

  .left-buttons:before {
    content: '';
    display: block;

    position: relative;
    bottom: 0;

    width: 90%;
    left: 5%;

    margin-top: 16px;
    margin-bottom: 8px;
  }

  .left-button {
    width: 56px;
    height: 56px;

    display: inline-block;

    text-align: center;

    box-sizing: border-box;

    margin: 0.375rem;

    cursor: pointer;
    user-select: none;
    touch-action: manipulation;
    transition: box-shadow .2s, -ms-transform .1s, -webkit-transform .1s, transform .1s;
  }

  .left-button:hover {
    background: -webkit-linear-gradient(#7ca4c8, #1e2c3d);
    -webkit-background-clip: text;
    transform: scale(.88);
  }

  .left-button:focus-visible {
    box-shadow: #222222 0 0 0 2px, rgba(255, 255, 255, 0.8) 0 0 0 4px;
    transition: box-shadow .2s;
  }

  .left-button:disabled {
    cursor: not-allowed;
    opacity: 1;
  }

  .left-button i {
    background: -webkit-linear-gradient(#7ca4c8, #1e2c3d);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  .left-button span {
    font-weight: bold;
    font-size: 12px;

    color: #7ca4c8;
  }

  .attribute-tooltip span {
    background: #fff;
    -webkit-background-clip: text !important;
    -webkit-text-fill-color: transparent;
  }
</style>
