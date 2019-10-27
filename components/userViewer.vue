<template>
  <div class="user-viewer">
    <img class="image" :src="user.avatarUrl" alt="" />
    <span class="label">{{ user.name }}</span>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import { IUser } from '@/types/task'

@Component
export default class TaskStatus extends Vue {
        @Prop() user!: IUser;
}
</script>

<style scoped>
  .user-viewer {
    display: grid;
    grid-auto-flow: column;
    align-items: center;
    justify-content: center;
    grid-gap: 8px;
    border-radius: 4px;
    padding: 4px;
    background: var(--gray-color);
    color: var(--white-color);
  }

  .image {
    border-radius: 8px;
  }
</style>
