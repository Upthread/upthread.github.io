<script setup>
  import Desktop from './DesktopView.vue'
  import Tablet from './TabletView.vue'
  import Mobile from './MobileView.vue'
</script>

<template>
  <div class="container">
    <!-- <div class="about">
      <Desktop />
    </div> -->
    <!-- <div class="about">
      <Tablet />
    </div> -->
    <div class="about">
      <Mobile />
    </div>
  </div>
</template>

<style>


@media (min-width: 1024px) {
  .container {
    display: flex;
    justify-content: space-between;
    flex-direction: column;
  }
  .about {
    /* max-height: 50vh; */
    /* display: flex;
    align-items: center; */
  }
}
</style>
