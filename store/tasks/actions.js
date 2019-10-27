export default {
  async getTasks ({ commit }) {
    const { data } = await this.$axios.$get(`/tasks/list`)

    commit('setTasks', data)
  }
}
