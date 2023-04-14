<template>
  <div class="AppButtons">
    <button class="AppButtons__operator AppButtons__operator-add" @click="operatorClicked('+')">+</button>
    <button class="AppButtons__operator AppButtons__operator-substract" @click="operatorClicked('-')">-</button>
    <button class="AppButtons__operator AppButtons__operator-multiply" @click="operatorClicked('*')">*</button>
    <button class="AppButtons__operator AppButtons__operator-divide" @click="operatorClicked('/')">/</button>

    <button class="AppButtons__number AppButtons__number-7" @click="$emit('number-clicked', '7')">7</button>
    <button class="AppButtons__number AppButtons__number-8" @click="$emit('number-clicked', '8')">8</button>
    <button class="AppButtons__number AppButtons__number-9" @click="$emit('number-clicked', '9')">9</button>
    <button class="AppButtons__operator AppButtons__operator-equals" @click="calculateResult">=</button>

    <button class="AppButtons__number AppButtons__number-4" @click="$emit('number-clicked', '4')">4</button>
    <button class="AppButtons__number AppButtons__number-5" @click="$emit('number-clicked', '5')">5</button>
    <button class="AppButtons__number AppButtons__number-6" @click="$emit('number-clicked', '6')">6</button>

    <button class="AppButtons__number AppButtons__number-1" @click="$emit('number-clicked', '1')">1</button>
    <button class="AppButtons__number AppButtons__number-2" @click="$emit('number-clicked', '2')">2</button>
    <button class="AppButtons__number AppButtons__number-3" @click="$emit('number-clicked', '3')">3</button>

    <button class="AppButtons__number AppButtons__number-0" @click="$emit('number-clicked', '0')">0</button>
    <button class="AppButtons__operator AppButtons__operator-clear" @click="$emit('clear-clicked')">C</button>
  </div>
</template>

<script>
export default {
  name: 'AppButtons',
  emits: ['number-clicked', 'clear-clicked', 'operator-clicked', 'calculate-result'],
  methods: {
    operatorClicked (operator) {
      this.$emit('operator-clicked', operator)
    },
    numberClicked (number) {
      this.$emit('number-clicked', number)
    },
    calculateResult () {
      this.$emit('calculate-result')
    }
  }
}
</script>

<style lang="scss">
.AppButtons {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(4, 1fr);
    grid-gap: 5px;
    width: min(300px, 70%);
    border: 0.2px solid rgb(255, 198, 124);
    border-radius: 4px;
    background-color: antiquewhite;
    margin: 10px auto;
    box-shadow: 2.8px 2.8px 2.2px rgba(0, 0, 0, 0.008),
        6.7px 6.7px 5.3px rgba(0, 0, 0, 0.012),
        12.5px 12.5px 10px rgba(0, 0, 0, 0.015),
        22.3px 22.3px 17.9px rgba(0, 0, 0, 0.018),
        41.8px 41.8px 33.4px rgba(0, 0, 0, 0.022),
        100px 100px 80px rgba(0, 0, 0, 0.03);
    button {
      border: none;
    }

    .AppButtons__operator-add {
        grid-area: 1 / 1 / 2 / 2;
    }

    .AppButtons__operator-subtract {
        grid-area: 1 / 2 / 2 / 3;
    }

    .AppButtons__operator-multiply {
        grid-area: 1 / 3 / 2 / 4;
    }

    .AppButtons__operator-divide {
        grid-area: 1 / 4 / 2 / 5;
    }

    .AppButtons__number-7 {
        grid-area: 2 / 1 / 3 / 2;
    }

    .AppButtons__number-8 {
        grid-area: 2 / 2 / 3 / 3;
    }

    .AppButtons__number-9 {
        grid-area: 2 / 3 / 3 / 4;
    }

    .AppButtons__operator-equals {
        grid-area: 2 / 4 / 6 / 5;
    }

    .AppButtons__number-4 {
        grid-area: 3 / 1 / 4 / 2;
    }

    .AppButtons__number-5 {
        grid-area: 3 / 2 / 4 / 3;
    }

    .AppButtons__number-6 {
        grid-area: 3 / 3 / 4 / 4;
    }

    .AppButtons__number-1 {
        grid-area: 4 / 1 / 5 / 2;
    }

    .AppButtons__number-2 {
        grid-area: 4 / 2 / 5 / 3;
    }

    .AppButtons__number-3 {
        grid-area: 4 / 3 / 5 / 4;
    }

    .AppButtons__number-0 {
        grid-area: 5 / 1 / 6 / 3;
    }

    .AppButtons__operator-clear {
        grid-area: 5 / 3 / 6 / 4;
    }

    .AppButtons__number {
        background-color: rgb(255, 209, 148);
        padding: 6px;
        border-radius: 3px;
        margin: 4px;
        font-size: 1.5em;
        font-weight: bold;
        color: #000;
        text-align: center;
        cursor: pointer;
        transition: all 0.2s;

        &:hover {
            background-color: rgb(238, 167, 75);
        }
    }

    .AppButtons__operator {
        background-color: rgb(238, 167, 75);
        padding: 6px;
        border-radius: 3px;
        margin: 4px;
        font-size: 1.5em;
        font-weight: bold;
        color: #000;
        text-align: center;
        cursor: pointer;
        transition: all 0.2s;

        &:hover {
            background-color: rgb(255, 209, 148);
        }
    }
}
</style>
