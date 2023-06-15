<script>
export default {
  name: 'AppHeader',

  data() {
    return {
      MenuItems: [
        {
          label: 'Home',
          routeName: 'home'
        },
        {
          label: 'ProjectsList',
          routeName: 'projects'
        },
        {
          label: 'Abouts',
          routeName: 'abouts'
        },
      ]
    }
  }
}
</script>

<template>
  <header>
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">boolfolio</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item" v-for="item, index in MenuItems" :key="index">
              <router-link :to="{ name: item.routeName }" class="nav-link active" aria-current="page">{{ item.label
              }}</router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
</template>

<style lang="scss" scoped></style>