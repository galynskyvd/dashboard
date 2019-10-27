<template>
  <select v-model="selected" class="select">
    <option
      v-for="(item, index) in items"
      :key="`option-${index}`"
      :value="item"
    >
      {{ item }}
    </option>
  </select>
</template>

<script lang="ts">

import { Component, Vue, Prop, Watch } from 'vue-property-decorator'
import { ISelectItem } from '@/types/select'

@Component
export default class Select extends Vue {
        @Prop() items!: Array<ISelectItem>;

        selected: string = '';

        @Watch('selected') onChangeSelected (): void {
          this.$emit('change', this.selected)
        }
}
</script>

<style scoped>
  .select {
    padding: 4px 8px;
    border: 2px solid #bdbdbd;
    border-radius: 4px;
    font-size: 16px;
    font-family: inherit;
  }

  .select:focus {
    outline: 0;
  }
</style>
