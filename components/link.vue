<template>
  <a
    target="_blank"
    :href="href"
    :class="styles"
    @click="onClick"
  >
    <slot />
  </a>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'
import { Colors } from '@/types/colors'

@Component
export default class Button extends Vue {
        @Prop() color!: Colors;
        @Prop() href!: string;

        onClick (): void {
          this.$emit('click')
        }

        get styles (): Array<string> {
          const list = ['link']

          if (this.color) {
            list.push(Colors[this.color])
          }

          return list
        }
}
</script>

<style scoped>
  .link {
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

  .link.blue {
    background: var(--blue-color);
  }

  .link.green {
    background: var(--green-color);
  }

  .link.red {
    background: var(--red-color);
  }

  .link.gray {
    background: var(--gray-color);
  }

  .link:hover,
  .link.exact-active-link {
    opacity: .8;
  }
</style>
