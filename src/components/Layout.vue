<template>
  <div class="app-container">
    <div class="navbar-container">
      <navbar />
    </div>
    <div class="sidebar-container">
      <sidebar />
    </div>
    <div class="main-container">
      <router-view />
    </div>
  </div>
</template>

<script>
import Sidebar from './SideBar'
import Navbar from './NavBar'
export default {
  name: 'layout',
  components: {Navbar, Sidebar}
}
</script>
