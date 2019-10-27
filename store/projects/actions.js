export default {
  async getProjects ({ commit }) {
    const { data } = await this.$axios.$get(`/projects/list`)

    commit('setProjects', data)
  },
  async getVersions ({ commit }) {
    const { data } = await this.$axios.$get('/projects/versions') // [{ id: 1, value: [] }];

    commit('setVersions', data)
  }
}
