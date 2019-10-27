<template>
  <div class="default-layout">
    <aside class="sidebar">
      <nav class="navigation">
        <nuxt-link to="/" class="link">
          Главная
        </nuxt-link>
        <nuxt-link to="/tasks" class="link">
          Задачи
        </nuxt-link>
      </nav>
    </aside>
    <main class="main">
      <nuxt />
    </main>
  </div>
</template>

<style>
  .default-layout {
    display: grid;
    grid-template-columns: 20% 1fr;
  }

  .sidebar {
    background: #424242;
    height: 100vh;
    position: sticky;
    top: 0;
  }

  .main {
    padding: 16px;
  }

  .link {
    display: flex;
    justify-content: center;
    color: #ffffff;
    padding: 16px 0;
    font-size: 20px;
  }

  .link.exact-active-link {
    background: #616161;
  }

  @media (max-width: 768px) {
    .default-layout {
      grid-template-columns: 30% 1fr;
    }
  }
</style>
