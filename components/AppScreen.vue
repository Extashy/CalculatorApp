<template>
  <div class="AppScreen">
    <div class="AppScreen__inner">
      <input
        class="AppScreen__input"
        type="text"
        :value="currentValue"
        readonly
      >
    </div>
  </div>
</template>

<script>
export default {
  name: 'AppScreen',
  props: {
    currentValue: {
      type: String,
      required: true
    }
  }
}
</script>

<style lang="scss">
.AppScreen {
    background-color: antiquewhite;
    width: min(300px, 70%);
    margin: 10px auto;
    padding: 10px;
    border: 0.5px solid rgb(255, 198, 124);
    border-radius: 4px;
    box-shadow: 2.8px 2.8px 2.2px rgba(0, 0, 0, 0.008),
        6.7px 6.7px 5.3px rgba(0, 0, 0, 0.012),
        12.5px 12.5px 10px rgba(0, 0, 0, 0.015),
        22.3px 22.3px 17.9px rgba(0, 0, 0, 0.018),
        41.8px 41.8px 33.4px rgba(0, 0, 0, 0.022),
        100px 100px 80px rgba(0, 0, 0, 0.03);
    .AppScreen__input {
        background-color: rgb(255, 209, 148);
        padding: 15px;
        border-radius: 3px;
        width: 100%;
    }
    input {
      border: none;
      text-align: center;
      font-weight: bold;
      font-size: 1em;
      cursor: auto;
    }
}
</style>
