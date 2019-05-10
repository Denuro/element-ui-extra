<template>
  <el-input type="tel"
         :value="display"
         @input="onInput"
         v-money="{precision, decimal, thousands, prefix, suffix}"
         class="v-money"><slot></slot></el-input>
</template>

<script>
import money from './directive'
import defaults from './options'
import {format, unformat} from './utils'

export default {
  name: 'Money',
  props: {
    value: {
      required: true,
      type: [Number, String],
      default: 0
    },
    masked: {
      type: Boolean,
      default: false
    },
    precision: {
      type: Number,
      default: () => defaults.precision
    },
    decimal: {
      type: String,
      default: () => defaults.decimal
    },
    thousands: {
      type: String,
      default: () => defaults.thousands
    },
    prefix: {
      type: String,
      default: () => defaults.prefix
    },
    suffix: {
      type: String,
      default: () => defaults.suffix
    }
  },
  directives: {money},
  data () {
    return {
      display: this.value
    }
  },
  watch: {
    value(value) {
      var formatted = format(value, this.$props)
      if (formatted !== this.display) {
        this.display = formatted
        this.$emit('input', this.masked ? formatted : unformat(formatted, this.precision))
      }
    }
  },
  methods: {
    onInput (evt) {
      this.$emit('input', this.masked ? evt : unformat(evt, this.precision))
    }
  }
}
</script>
