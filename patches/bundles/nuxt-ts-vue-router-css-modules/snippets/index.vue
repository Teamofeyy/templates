<template>
  <main :class="$style.page">
    <h1>{{project_name}}</h1>
    <p>Nuxt file-system routing and CSS Modules are configured together.</p>
    <NuxtLink to="/about">Open the about page</NuxtLink>
  </main>
</template>

<style module>
.page {
  max-width: 48rem;
  margin: 0 auto;
  padding: 4rem 1.5rem;
}
</style>
