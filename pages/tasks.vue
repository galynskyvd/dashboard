<template>
  <div class="container">
    <TasksComponent :tasks="tasks" />
  </div>
</template>

<script>
import { mapState } from 'vuex'
import TasksComponent from '@/components/tasks.vue'

export default {
  components: {
    TasksComponent
  },
  computed: {
    ...mapState({
      tasks: state => state.tasks.listTasks
    })
  },
  async fetch ({ store }) {
    await store.dispatch('tasks/getTasks')
  }
}
</script>

<style scoped>

</style>
