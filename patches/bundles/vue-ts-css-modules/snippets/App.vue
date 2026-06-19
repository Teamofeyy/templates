<template>
  <main :class="$style.page">
    <h1>{{project_name}}</h1>
    <p>Vue is using a CSS Module through the style module block.</p>
  </main>
</template>

<style module>
.page {
  max-width: 48rem;
  margin: 0 auto;
  padding: 4rem 1.5rem;
  text-align: left;
}
</style>
