<template>
  <section class="App">
    <AppScreen :current-value="currentValue" />
    <AppButtons
      @number-clicked="updateValue"
      @clear-clicked="clearScreen"
      @operator-clicked="operatorClicked"
      @calculate-result="calculateResult"
    />
  </section>
</template>

<script>
import AppScreen from '~/components/AppScreen.vue'
import AppButtons from '~/components/AppButtons.vue'

export default {
  components: { AppScreen, AppButtons },
  data () {
    return {
      currentValue: '',
      firstOperand: null,
      operator: null,
      secondOperand: null
    }
  },
  methods: {
    updateValue (value) {
      if (value === '-') {
        if (this.currentValue === '' && this.firstOperand === null) {
          this.currentValue += value
        } else {
          this.operator = value
          this.firstOperand = this.currentValue
          this.currentValue = ''
        }
      } else if (['+', '*', '/'].includes(value)) {
        this.operator = value
        this.firstOperand = this.currentValue
        this.currentValue = ''
      } else {
        this.currentValue += value
      }
    },
    clearScreen () {
      this.currentValue = ''
      this.firstOperand = null
      this.operator = null
      this.secondOperand = null
    },
    operatorClicked (operator) {
      this.updateValue(operator)
    },
    calculateResult () {
      this.secondOperand = this.currentValue
      if (this.firstOperand === null || this.secondOperand === null) {
        this.currentValue = 'Please enter the number'
      } else if (isNaN(parseFloat(this.firstOperand)) || isNaN(parseFloat(this.secondOperand))) {
        this.currentValue = 'Please enter the number'
      } else if (this.operator === '+') {
        this.currentValue = String(parseFloat(this.firstOperand) + parseFloat(this.secondOperand))
      } else if (this.operator === '-') {
        this.currentValue = String(parseFloat(this.firstOperand) - parseFloat(this.secondOperand))
      } else if (this.operator === '*') {
        this.currentValue = String(parseFloat(this.firstOperand) * parseFloat(this.secondOperand))
      } else if (this.operator === '/' && this.secondOperand.match(/^0+$/) !== null) {
        this.currentValue = 'Cant be divided by zero'
      } else if (this.operator === '/') {
        this.currentValue = String(parseFloat(this.firstOperand) / parseFloat(this.secondOperand))
      }
      this.firstOperand = null
      this.operator = null
      this.secondOperand = null
    }
  }
}
</script>

<style lang="scss">
@import "@/assets/main.scss";

.App {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
}
</style>
