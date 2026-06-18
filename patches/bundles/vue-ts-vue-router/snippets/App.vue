<template>
  <main>
    <nav class="card">
      <RouterLink to="/">Home</RouterLink>
      <span> | </span>
      <RouterLink to="/about">About</RouterLink>
    </nav>

    <RouterView />
  </main>
</template>
