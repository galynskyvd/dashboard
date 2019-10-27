<template>
  <button
    type="button"
    :class="styles"
    @click="onClick"
  >
    <slot />
  </button>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import { Colors } from '@/types/colors'

@Component
export default class Button extends Vue {
        @Prop() color!: Colors;

        onClick (): void {
          this.$emit('click')
        }

        get styles (): Array<string> {
          const list = ['button']

          if (this.color) {
            list.push(Colors[this.color])
          }

          return list
        }
}
</script>

<style scoped>
  .button {
    padding: 8px;
    border: 1px solid transparent;
    outline: 1px solid transparent;
    border-radius: 4px;
    color: var(--white-color);
    font-size: 16px;
    cursor: pointer;
    background: var(--black-color);
    font-family: inherit;
  }

  .button.blue {
    background: var(--blue-color);
  }

  .button.green {
    background: var(--green-color);
  }

  .button.red {
    background: var(--red-color);
  }

  .button.gray {
    background: var(--gray-color);
  }

  .button:hover,
  .button.exact-active-link {
    opacity: .8;
  }
</style>
