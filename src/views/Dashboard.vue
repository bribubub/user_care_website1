<template>
  <div class="dashboard">
    <div class="page-header">
      <h1>Client Area</h1>
      <p>Portal Pelanggan Oxygen.id</p>
    </div>

    <div class="breadcrumb">
      <span>🏠 Oxygen.id</span> / <span>Client Area</span>
    </div>

    <div class="welcome-banner">
      <h3>Halo OXYGENERS</h3>
      <p>Selamat datang di Client Area. Di sini Anda dapat melihat profil, melihat detil produk & layanan yang Anda gunakan dan, melihat informasi tagihan Anda.</p>
    </div>

    <div class="content-grid">
      <div class="left-panel">
        
        <div class="card text-center">
          <h4 class="card-title">OXYGENERS</h4>
          <p class="text-sm">ID Pelanggan</p>
          <div class="badge-green">123456789</div>
          <p class="text-sm mt-10">Layanan Anda</p>
          <p class="font-bold">Stream 75</p>
        </div>

        <div class="card text-center mt-20">
          <h4 class="card-title text-orange">genflix</h4>
          <p class="text-xs text-gray">
            Genflix merupakan portal dan aplikasi untuk menonton siaran pertandingan langsung, Film, drama, series, TV show dan ribuan lainnya. Aktifkan dan nikmati tayangan Genflix dengan harga spesial dari Oxygen.id Home.
          </p>
          <p class="text-sm mt-10">Status</p>
          <span class="badge-red">Belum Aktif</span>
          <br>
          <button class="btn-yellow mt-10">Daftar Sekarang</button>
          
          <div class="divider"></div>
          <p class="text-xs">Berlangganan/bulan</p>
          <h3 class="price">Rp 25.000,-</h3>
          <p class="text-xs text-gray">Exclude PPN 10%</p>
        </div>

      </div>

      <div class="right-panel">
        <div class="promo-banner">
           <img src="https://via.placeholder.com/800x300/ff9900/ffffff?text=Promo+Banner+New+Streamer" alt="Promo Banner" class="banner-img" />
        </div>

        <h3 class="section-title">Tagihan</h3>
        <div class="card flex-row justify-between align-center">
          <div>
            <p class="text-sm">Tagihan:</p>
            <p class="text-blue font-bold">#202508123456</p>
            <div class="divider"></div>
            <p class="text-sm text-gray mt-5">Stream 75</p>
          </div>
          <div class="text-right">
            <h2 class="total-price">Rp 242,000</h2>
            <span class="badge-blue">Sudah dibayar</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.page-header h1 { font-size: 24px; font-weight: normal; margin-bottom: 5px; }
.page-header p { color: #777; font-size: 13px; }

.breadcrumb {
  background: white;
  padding: 10px 15px;
  border-radius: 5px;
  margin: 15px 0;
  font-size: 13px;
  border: 1px solid #e1e1e1;
}

.welcome-banner {
  background-color: #f0fdf4;
  border-left: 4px solid #2b8c52;
  padding: 15px 20px;
  margin-bottom: 20px;
}
.welcome-banner h3 { color: #2b8c52; margin-bottom: 5px; font-size: 16px; }
.welcome-banner p { font-size: 13px; color: #555; }

.content-grid {
  display: grid;
  grid-template-columns: 1fr 2.5fr;
  gap: 20px;
}

.card {
  background: white;
  padding: 20px;
  border-radius: 8px;
  border: 1px solid #e1e1e1;
}
.text-center { text-align: center; }
.flex-row { display: flex; }
.justify-between { justify-content: space-between; }
.align-center { align-items: center; }
.text-right { text-align: right; }

.card-title { font-size: 16px; margin-bottom: 15px; }
.text-orange { color: #f39c12; }
.text-sm { font-size: 13px; }
.text-xs { font-size: 11px; }
.text-gray { color: #777; line-height: 1.4; }
.text-blue { color: #3498db; }
.font-bold { font-weight: bold; }
.mt-10 { margin-top: 10px; }
.mt-20 { margin-top: 20px; }
.mt-5 { margin-top: 5px; }

.badge-green { background: #2b8c52; color: white; padding: 5px 15px; display: inline-block; font-weight: bold; font-size: 18px; border-radius: 4px; margin-top: 5px; }
.badge-red { background: #e74c3c; color: white; padding: 3px 10px; font-size: 11px; border-radius: 4px; display: inline-block; margin-top: 5px;}
.badge-blue { background: #5faee3; color: white; padding: 4px 10px; font-size: 12px; border-radius: 4px; display: inline-block; margin-top: 10px; }

.btn-yellow { background: #f1c40f; border: none; padding: 8px 20px; border-radius: 4px; cursor: pointer; color: #fff; font-weight: bold; }
.divider { height: 1px; background: #eee; margin: 15px 0; }
.price { font-size: 20px; margin: 5px 0; }
.total-price { font-size: 24px; color: #555; }

.promo-banner { margin-bottom: 20px; border-radius: 8px; overflow: hidden; border: 1px solid #e1e1e1; }
.banner-img { width: 100%; display: block; }
.section-title { font-size: 18px; margin-bottom: 15px; font-weight: normal; }
</style>