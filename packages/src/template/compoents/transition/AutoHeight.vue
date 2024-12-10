<template>
      <div class="transition-height" :class="{open: input}" @transitionend="transitionEnd">
        <div class="transition-height-container" v-if="show">
          <slot name="content"></slot>
        </div>
      </div>
</template>

<script >
import { ref, watch, shallowRef } from "vue";

export default {
  name: "AutoHeight",
  components: {},
  props: {
    modelValue: {
      type: Boolean,
      require: true
    }
  },
  setup(props, { emit }) {
      const input = shallowRef(props.modelValue);
      const show = ref(props.modelValue);

      watch(() => props.modelValue, (val, old) => {
          if (val !== old) {
            if (val) show.value = val;
            setTimeout(() => {
              input.value = val;
            }, 20)
          }
      });

      const change = () => {
          emit("update:modelValue", input.value);
      }

      const transitionEnd = () => {
        if (!input.value) show.value = input.value; 
      }

      return {
          input,
          show,
          change,
          transitionEnd
      }
  },
};
</script>

<style lang="scss" scoped>
@use '../../style.scss';
</style>
