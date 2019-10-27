<template>
  <div class="container">
    <div class="projects">
      <ProjectComponent v-for="project in projects" :key="`project-${project.id}`" :item="project" />
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import ProjectComponent from '@/components/project.vue'

export default {
  components: {
    ProjectComponent
  },
  computed: {
    ...mapState({
      projects: state => state.projects.listProjects
    })
  },
  async fetch ({ store }) {
    await store.dispatch('projects/getProjects')
  }
}
</script>

<style scoped>
  .projects {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 16px;
    align-items: start;
  }

  @media (max-width: 768px) {
    .projects {
      grid-template-columns: 1fr;
    }
  }
</style>
