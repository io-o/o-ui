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
        <span class="o-radio_inner"></span>
        <input
          type="radio"
          :value="label"
          :disabled="disabled"
          :checked="cvalue == label"
          class="o-radio__original"
          @change="$emit('change', label)"
        />
      </span>
      <span class="o-radio__label"><slot /></span>
    </label>
  </div>
</template>

<script type="text/javascript">
export default {
  model: {
    prop: 'cvalue',
    event: 'change',
  },
  props: {
    label: Number | String | Boolean,
    cvalue: Number | String | Boolean,
    disabled: Boolean,
  },
  computed: {
    isChecked() {
      return this.cvalue === this.label
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
