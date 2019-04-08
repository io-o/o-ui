<template>
  <div>
    <label
      :class="{
        'o-radio': true,
        'is-checked': isChecked,
        'is-disabled': disabled
      }"
    >
      <span
        :class="{
          'o-radio_input': true,
          'is-checked': isChecked,
          'is-disabled': disabled
        }"
      >
        <span class="o-radio_inner" />
        <input
          v-model="model"
          type="radio"
          :value="label"
          :disabled="disabled"
          :checked="isChecked"
          class="o-radio__original"
        >
      </span>
      <span class="o-radio__label"><slot /></span>
    </label>
  </div>
</template>

<script type="text/javascript">
import Emitter from '@/mixins/emitter'
export default {
  name: 'ORadio',
  componentName: 'oRadio',

  mixins: [Emitter],

  props: {
    label: Number | String | Boolean,
    disabled: Boolean,
    value: {},
  },

  computed: {
    isChecked () {
      return this.model == this.label
    },
    model: {
      get (val) {
        return this.isGroup ? this._radioGroup.value : this.value
      },
      set (val) {
        if (this.isGroup) {
          this.dispatch('oRadioGroup', 'input', [val])
        } else {
          this.$emit('input', val)
        }
      },
    },
    isGroup () {
      let parent = this.$parent
      while (parent) {
        if (parent.$options.componentName !== 'oRadioGroup') {
          parent = parent.$parent
        } else {
          this._radioGroup = parent
          return true
        }
      }
      return false
    },
  },
}
</script>

<style lang="stylus">
.o-radio
  .o-radio_input
    cursor pointer
    .o-radio_inner
      border 1px solid #dcdfe6
      width 14px
      height  14px
      display inline-block
      border-radius 50%
      background-color white
      position relative
      &::after
        content ''
        width 4px
        height 4px
        display inline-block
        border-radius 50%
        background-color white
        position absolute
        top 50%
        left 50%
        transform translate(-50%, -50%)scale(1)
        transition transform .15s ease-in
    .o-radio__original
      opacity 0
.is-checked
  background-color white
.o-radio_input
  &.is-checked + .o-radio__label
    color #409EFF
  &.is-checked .o-radio_inner
    background-color #409EFF
  &.is-disabled + .o-radio__label
    color #C0C4CC
  &.is-disabled .o-radio_inner
    background-color #C0C4CC
    cursor not-allowed
</style>
