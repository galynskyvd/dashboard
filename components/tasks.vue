<template>
  <ul class="tasks">
    <li class="item columns">
      <span class="column">№</span>
      <span class="column">Название</span>
      <span class="column">Назначена</span>
      <span class="column">Статус</span>
      <span class="column">Оценка</span>
      <span class="column">Факт</span>
      <span class="column">Проект</span>
      <span class="column">Релиз</span>
    </li>
    <li v-for="task in tasks" :key="`task-${task.id}`" class="item rows">
      <span class="column">
        <a target="_blank" :href="task.url">{{ task.key }}</a>
      </span>
      <span class="column">{{ task.title }}</span>
      <span class="column">
        <UserViewer v-if="task.assignee" :user="task.assignee" />
        <span v-else>-</span>
      </span>
      <span class="column">
        <TaskStatus :status="task.status" />
      </span>
      <span class="column">
        <span v-if="task.timeTracking.originalEstimate">{{ task.timeTracking.originalEstimate }}</span>
        <span v-else>-</span>
      </span>
      <span class="column" :class="stylesTimeSpent(task)">
        <span v-if="task.timeTracking.timeSpent">
          {{ task.timeTracking.timeSpent }}
        </span>
        <span v-else>-</span>
      </span>
      <span class="column">{{ task.project.name }}</span>
      <span class="column">
        <span v-if="task.releaseVersion">
          {{ task.releaseVersion }}
        </span>
        <span v-else>
          -
        </span>
      </span>
    </li>
    <li v-if="!hasTasks" class="item empty">
      <span class="column">Нет записей</span>
    </li>
  </ul>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'
import TaskStatus from '@/components/taskStatus.vue'
import UserViewer from '@/components/userViewer.vue'
import { ITask } from '@/types/task'
import { Colors } from '@/types/colors'

@Component({
  components: {
    TaskStatus,
    UserViewer
  }
})
export default class TasksComponent extends Vue {
        @Prop({ type: Array, required: true }) tasks!: Array<ITask>;

        isExpired (task: ITask): boolean {
          const { timeTracking } = task

          if (!timeTracking || !timeTracking.originalEstimateSeconds || !timeTracking.timeSpentSeconds) {
            return false
          }

          return timeTracking.timeSpentSeconds > timeTracking.originalEstimateSeconds
        }

        stylesTimeSpent (task: ITask): string {
          return this.isExpired(task) ? Colors.red : Colors.green
        }

        get hasTasks (): boolean {
          return this.tasks.length > 0
        }
}
</script>

<style scoped>
    .tasks {
        border: 1px solid #bdbdbd;
        border-radius: 4px;
    }

    .item {
        display: grid;
        grid-template-columns: 10% 1fr 1fr 1fr 10% 10% 10% 10%;
        grid-gap: 8px 16px;
        align-items: center;
        border-bottom: 1px solid #cccccc;
        padding: 8px;
        text-align: center;
    }

    .item.empty {
      grid-template-columns: 1fr;
    }

    .item.columns .column {
        font-weight: bold;
    }

    .item:last-child {
        border-bottom-width: 0;
    }

    .column.red {
      color: var(--red-color);
    }

    .column.green {
      color: var(--green-color)
    }
</style>
