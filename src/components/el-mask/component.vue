<template>
<el-input type="text" v-mask="mask" :value="display" @input="onInput" />
</template>

<script>
import mask from './directive'
import tokens from './tokens'
import masker from './masker'

export default {
  name: 'ElMask',
  props: {
    value: [String, Number],
    mask: {
      type: [String, Array],
      required: true
    },
    masked: { // by default emits the value unformatted, change to true to format with the mask
      type: Boolean,
      default: false // raw
    },
    tokens: {
      type: Object,
      default: () => tokens
    }
  },
  directives: {mask},
  data () {
    return {
      lastValue: null, // avoid unecessary emit when has no change
      display: this.value
    }
  },
  watch: {
    value (newValue) {
      if (newValue !== this.lastValue) {
        this.refresh(newValue)
      }
    },
    masked () {
      this.refresh(this.display)
    }
  },
  created() {
    this.refresh(this.value)
  },
  methods: {
    onInput (e) {
      if (e.isTrusted) return // ignore native event
      this.refresh(e)
    },

    refresh (value) {
      this.display = value
      var newValue = masker(value, this.mask, this.masked, this.tokens)
      if (newValue !== this.lastValue) {
        this.lastValue = newValue
        this.$emit('input', newValue)
      }
    }
  }
}
</script>