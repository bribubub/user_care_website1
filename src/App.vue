<script setup>
import { ref } from 'vue'

// State untuk mengatur buka/tutup dropdown
const isDropdownOpen = ref(false)

const toggleDropdown = () => {
  isDropdownOpen.value = !isDropdownOpen.value
}
</script>

<template>
  <div class="app-container">
    <nav class="navbar">
      <div class="nav-brand">
        <strong>Oxygen.id</strong>
      </div>
      <ul class="nav-links">
        <li><router-link to="/dashboard" active-class="active">Client Area</router-link></li>
        <li><router-link to="/layananku" active-class="active">Layananku</router-link></li>
        <li><router-link to="/tagihan" active-class="active">Tagihan</router-link></li>
        <li><router-link to="/pembayaran" active-class="active">Pembayaran</router-link></li>
        <li><router-link to="/schedule" active-class="active">Schedule</router-link></li>
        <li><router-link to="/mapping-device" active-class="active">Mapping Device</router-link></li>
      </ul>

      <div class="nav-user-container">
        <button class="user-trigger" @click="toggleDropdown">
          <span class="username-text">OXYGENERS</span>
          <svg :class="{ 'rotate-180': isDropdownOpen }" class="chevron-icon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <polyline points="6 9 12 15 18 9"></polyline>
          </svg>
        </button>

        <div v-show="isDropdownOpen" class="dropdown-menu">
          <div class="dropdown-header">
            <p class="dropdown-name">OXYGENERS</p>
            <p class="dropdown-email">oxygeners@client.com</p>
          </div>

          <div class="dropdown-body">
            <a href="#" class="dropdown-item">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <circle cx="12" cy="12" r="3"></circle>
                <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
              </svg>
              Account settings
            </a>
            <a href="#" class="dropdown-item">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <circle cx="12" cy="12" r="10"></circle>
                <line x1="12" y1="16" x2="12" y2="12"></line>
                <line x1="12" y1="8" x2="12.01" y2="8"></line>
              </svg>
              Support
            </a>
          </div>

          <div class="dropdown-footer">
            <a href="#" class="dropdown-item text-danger">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path>
                <polyline points="16 17 21 12 16 7"></polyline>
                <line x1="21" y1="12" x2="9" y2="12"></line>
              </svg>
              Sign out
            </a>
          </div>
        </div>
      </div>
      </nav>

    <main class="main-content">
      <router-view />
    </main>
  </div>
</template>

<style>
/* Global Reset */
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}
body {
  background-color: #f4f6f9;
  color: #333;
}

/* Navbar Styles */
.navbar {
  background-color: #2b8c52; /* Warna hijau Oxygen */
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  height: 50px;
  font-size: 14px;
}
.nav-brand strong {
  font-size: 18px;
  letter-spacing: 0.5px;
}

/* Nav Links */
.nav-links {
  display: flex;
  list-style: none;
  gap: 20px;
}
.nav-links a {
  color: white;
  text-decoration: none;
  padding: 15px 5px;
  transition: opacity 0.2s;
}
.nav-links a:hover {
  opacity: 0.8;
}
.nav-links a.active {
  border-bottom: 3px solid white;
  font-weight: 600;
}

/* --- Dropdown Styling --- */
.nav-user-container {
  position: relative; /* Penting agar dropdown melayang tepat di bawahnya */
}

.user-trigger {
  background: transparent;
  border: none;
  color: white;
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
  padding: 8px 10px;
  border-radius: 4px;
  transition: background-color 0.2s;
}
.user-trigger:hover {
  background-color: rgba(255, 255, 255, 0.1);
}
.username-text {
  font-weight: 500;
  font-size: 14px;
}
.chevron-icon {
  transition: transform 0.2s ease;
}
.rotate-180 {
  transform: rotate(180deg);
}

/* Dropdown Menu Box */
.dropdown-menu {
  position: absolute;
  top: 100%;
  right: 0;
  margin-top: 10px;
  width: 220px;
  background-color: white;
  border-radius: 6px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
  border: 1px solid #eaeaea;
  z-index: 1000;
  color: #333;
}

.dropdown-header {
  padding: 16px 20px;
  border-bottom: 1px solid #eaeaea;
}
.dropdown-name {
  font-weight: 600;
  font-size: 14px;
  color: #2c3e50;
  margin-bottom: 4px;
}
.dropdown-email {
  font-size: 12px;
  color: #7f8c8d;
}

.dropdown-body {
  padding: 8px 0;
}

.dropdown-footer {
  padding: 8px 0;
  border-top: 1px solid #eaeaea;
}

.dropdown-item {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 10px 20px;
  text-decoration: none;
  color: #34495e;
  font-size: 13px;
  font-weight: 500;
  transition: background-color 0.2s;
}
.dropdown-item svg {
  color: #7f8c8d; /* Warna ikon abu-abu */
}
.dropdown-item:hover {
  background-color: #f8f9fa;
  color: #2c3e50;
}
.dropdown-item:hover svg {
  color: #2980b9; /* Ikon menyala biru saat dihover */
}

/* Khusus Logout (Sign Out) */
.text-danger {
  color: #c0392b !important;
}
.text-danger svg {
  color: #c0392b !important;
}
.text-danger:hover {
  background-color: #fdf5f5 !important;
}
/* --- End Dropdown Styling --- */

.main-content {
  padding: 20px 40px;
  max-width: 1200px;
  margin: 0 auto;
}
</style>