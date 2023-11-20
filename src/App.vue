<template>
  <div class="container-fluid">
    <div class="row">
      <LeftBar />
      <router-view/>
    </div>
  </div>
  <notifications />
</template>

<script>
import LeftBar from "@/components/LeftBar";

export default {
  components: { LeftBar }
}
</script>

<style>
  @font-face {
    font-family: 'AncientModernTales';
    src: url('./assets/font/AncientModernTales-a7Po.ttf') format('truetype');
  }

  @media (min-width: 768px) {
    .col-md-2 {
      margin-right: 1rem;
    }
  }

  body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

    background: url('./assets/img/background.jpg');
    /*animation: background-move 20s linear infinite;*/
    /*animation-timing-function: linear;*/

    margin-top: 1rem !important;
  }

  @keyframes background-move {
    to {background-position-x: 1920px}
  }

  .big-header-text {
    font-family: AncientModernTales, serif;
    font-size: 96px;

    background: -webkit-linear-gradient(#7ca4c8, #1e2c3d);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;

    text-align: center;

  }

  .big-header-text:after {
    content: '';
    display: block;

    position: relative;
    bottom: 0;

    width: 90%;
    left: 5%;

    border-bottom: 5px solid rgb(127, 127, 127);
    margin-bottom: 16px;
  }

  .block {
    background: rgba(60, 60, 60, 0.8);
    border: 2px solid rgb(127, 127, 127);
    border-spacing: 5px;
  }

</style>
