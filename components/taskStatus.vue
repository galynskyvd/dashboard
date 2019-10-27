<template>
  <div :class="styles">
    {{ status.name }}
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import { IStatus, Statuses } from '@/types/task'
import { Colors } from '@/types/colors'

  @Component
export default class TaskStatus extends Vue {
        @Prop() status!: IStatus;

        get styles (): Array<string> {
          const list = ['task-status']

          if (this.colorStatus) {
            list.push(this.colorStatus)
          }

          return list
        }

        get colorStatus (): Colors {
          switch (Number(this.status.id)) {
            case Statuses.Work:
              return Colors.blue
            case Statuses.Complete:
              return Colors.green
            case Statuses.Hold:
            case Statuses.Revision:
            case Statuses.Test:
              return Colors.orange
            default:
              return Colors.gray
          }
        }
}
</script>

<style scoped>
  .task-status {
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 4px;
    padding: 4px;
    color: var(--white-color);
  }

  .task-status.blue {
    background: var(--blue-color);
  }

  .task-status.green {
    background: var(--green-color);
  }

  .task-status.red {
    background: var(--red-color);
  }

  .task-status.gray {
    background: var(--gray-color);
  }

  .task-status.orange {
    background: var(--orange-color);
  }
</style>
