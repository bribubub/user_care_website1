<script setup>
import { ref } from 'vue'

// Data dummy untuk informasi layanan pengguna
const serviceInfo = ref({
  idPelanggan: '123456789',
  namaLayanan: 'Stream 75',
  status: 'Aktif',
  kecepatan: 'Up to 75 Mbps',
  masaAktifAwal: '14 Agustus 2025',
  masaAktifAkhir: '13 September 2025',
  jatuhTempo: '21 Agustus 2025',
  biaya: 'Rp 242.000',
  ipAddress: '114.125.xx.xx (Dynamic)'
})
</script>

<template>
  <div class="layananku-page">
    
    <div class="breadcrumb">
      <span>Oxygen.id</span> <span class="separator">/</span>
      <span>Client Area</span> <span class="separator">/</span>
      <span class="text-gray">Layananku</span>
    </div>

    <div class="user-info-box">
      <h3 class="text-blue font-semibold">OXYGENERS</h3>
      <p class="text-sm text-gray">No. Pelanggan: <strong class="text-dark">{{ serviceInfo.idPelanggan }}</strong></p>
    </div>

    <h4 class="section-title">Informasi Layanan</h4>

    <div class="card service-card">
      
      <div class="card-header">
        <div>
          <h2 class="service-name">{{ serviceInfo.namaLayanan }}</h2>
          <p class="text-gray text-sm mt-5">Kecepatan bandwidth: <strong class="text-dark">{{ serviceInfo.kecepatan }}</strong></p>
        </div>
        <div>
          <span class="badge-active">STATUS: {{ serviceInfo.status.toUpperCase() }}</span>
        </div>
      </div>
      
      <div class="divider"></div>

      <div class="info-grid">
        <div class="info-item">
          <span class="info-label">Biaya Langganan Bulanan</span>
          <span class="info-value font-bold">{{ serviceInfo.biaya }} <span class="text-xs text-gray font-normal">(Exclude PPN 10%)</span></span>
        </div>
        <div class="info-item">
          <span class="info-label">Alamat IP (IP Address)</span>
          <span class="info-value">{{ serviceInfo.ipAddress }}</span>
        </div>
      </div>

      <div class="billing-highlight">
        <div class="highlight-item border-right">
          <span class="info-label">Periode Masa Aktif</span>
          <span class="info-value text-green font-bold">
            {{ serviceInfo.masaAktifAwal }} &mdash; {{ serviceInfo.masaAktifAkhir }}
          </span>
        </div>
        
        <div class="highlight-item alert-item">
          <span class="info-label text-red font-semibold">Jatuh Tempo Pembayaran</span>
          <span class="info-value text-red font-bold">{{ serviceInfo.jatuhTempo }}</span>
        </div>
      </div>

      <div class="card-footer">
        <button class="btn-outline">Detail Perangkat</button>
        <button class="btn-primary">Upgrade Layanan</button>
      </div>

    </div>
  </div>
</template>

<style scoped>
/* Reset & Utility Classes */
.text-gray { color: #7f8c8d; }
.text-blue { color: #2980b9; }
.text-green { color: #27ae60; }
.text-red { color: #c0392b; }
.text-dark { color: #2c3e50; }
.text-sm { font-size: 13px; }
.text-xs { font-size: 11px; }
.font-bold { font-weight: 700; }
.font-semibold { font-weight: 600; }
.font-normal { font-weight: 400; }
.mt-5 { margin-top: 5px; }

/* Breadcrumb */
.breadcrumb {
  background: white;
  padding: 12px 20px;
  border-radius: 6px;
  margin-bottom: 25px;
  font-size: 13px;
  border: 1px solid #eaeaea;
  display: flex;
  gap: 8px;
}
.separator {
  color: #bdc3c7;
}

/* User Info Box */
.user-info-box {
  background: white;
  border-left: 4px solid #2980b9;
  padding: 18px 20px;
  margin-bottom: 30px;
  border-radius: 4px;
  border-top: 1px solid #eaeaea;
  border-right: 1px solid #eaeaea;
  border-bottom: 1px solid #eaeaea;
  box-shadow: 0 2px 4px rgba(0,0,0,0.02);
}
.user-info-box h3 {
  font-size: 16px;
  margin-bottom: 6px;
  letter-spacing: 0.5px;
}

.section-title {
  margin-bottom: 15px;
  color: #34495e;
  font-size: 18px;
  font-weight: 600;
}

/* Card Styling */
.card {
  background: white;
  border: 1px solid #eaeaea;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0,0,0,0.03);
  overflow: hidden;
}

.card-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding: 25px 30px 15px 30px;
}

.service-name {
  font-size: 24px;
  color: #2c3e50;
  font-weight: 700;
}

.badge-active {
  background-color: #edf7f3;
  color: #27ae60;
  border: 1px solid #27ae60;
  padding: 6px 12px;
  border-radius: 4px;
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.5px;
}

.divider {
  height: 1px;
  background: #eaeaea;
  margin: 0 30px;
}

/* Info Grid */
.info-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding: 25px 30px;
  gap: 30px;
}

.info-label {
  display: block;
  font-size: 12px;
  color: #7f8c8d;
  margin-bottom: 6px;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.info-value {
  display: block;
  font-size: 16px;
  color: #2c3e50;
}

/* Billing Highlight Box */
.billing-highlight {
  display: grid;
  grid-template-columns: 1fr 1fr;
  background-color: #f8f9fa;
  margin: 0 30px 30px 30px;
  border: 1px solid #eaeaea;
  border-radius: 6px;
}

.highlight-item {
  padding: 20px;
}

.border-right {
  border-right: 1px solid #eaeaea;
}

.alert-item {
  background-color: #fdf5f5; /* Light red background for emphasis */
}

/* Buttons */
.card-footer {
  background-color: #fdfdfd;
  padding: 20px 30px;
  border-top: 1px solid #eaeaea;
  display: flex;
  justify-content: flex-end;
  gap: 15px;
}

.btn-primary {
  background-color: #2b8c52;
  color: white;
  border: none;
  padding: 10px 24px;
  border-radius: 4px;
  cursor: pointer;
  font-weight: 600;
  font-size: 14px;
  transition: background-color 0.2s;
}
.btn-primary:hover {
  background-color: #216d40;
}

.btn-outline {
  background-color: transparent;
  color: #2c3e50;
  border: 1px solid #bdc3c7;
  padding: 10px 24px;
  border-radius: 4px;
  cursor: pointer;
  font-weight: 600;
  font-size: 14px;
  transition: all 0.2s;
}
.btn-outline:hover {
  background-color: #f8f9fa;
  border-color: #95a5a6;
}
</style>