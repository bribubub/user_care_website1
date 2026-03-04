<script setup>
import { ref } from 'vue'

// Data dummy untuk mensimulasikan riwayat tagihan
const listTagihan = ref([
  { id: '202508123456', periode: '202508', desc: 'Stream 75', total: 'Rp 242,000', status: 'UNPAID', tglTagihan: '14-AUG-2025', jatuhTempo: '21 Aug 2025', pembayaran: '-' },
  { id: '202507123456', periode: '202507', desc: 'Stream 75', total: 'Rp 242,000', status: 'PAID', tglTagihan: '14-JUL-2025', jatuhTempo: '21 Jul 2025', pembayaran: '14 Jul 2025' },
  { id: '202506123456', periode: '202506', desc: 'Stream 75', total: 'Rp 242,000', status: 'PAID', tglTagihan: '14-JUN-2025', jatuhTempo: '21 Jun 2025', pembayaran: '14 Jun 2025' },
  { id: '202505123456', periode: '202505', desc: 'Stream 75', total: 'Rp 242,000', status: 'PAID', tglTagihan: '14-MAY-2025', jatuhTempo: '21 May 2025', pembayaran: '14 May 2025' },
  { id: '202504123456', periode: '202504', desc: 'Stream 75', total: 'Rp 242,000', status: 'PAID', tglTagihan: '14-APR-2025', jatuhTempo: '21 Apr 2025', pembayaran: '14 Apr 2025' },
])
</script>

<template>
  <div class="tagihan-page">
    
    <div class="breadcrumb">
      <span>🏠 Oxygen.id</span> <span class="separator">/</span>
      <span>Client Area</span> <span class="separator">/</span>
      <span class="text-gray">Tagihan</span>
    </div>

    <div class="user-info-box">
      <h3 class="text-blue">OXYGENERS</h3>
      <p class="text-sm">No. Pelanggan: 123456789</p>
    </div>

    <div class="card table-card">
      <div class="card-header">
        <h4 class="card-title">Datatable Tagihan</h4>
      </div>

      <div class="table-controls">
        <div class="show-entries">
          <span>Show</span>
          <select class="select-control">
            <option>10</option>
            <option>25</option>
            <option>50</option>
          </select>
          <span>entries</span>
        </div>
        
        <div class="right-controls">
          <div class="search-box">
            <svg class="search-icon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
            <input type="text" placeholder="Search..." class="search-input" />
          </div>
          <button class="btn-download">
            Download
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
              <polyline points="7 10 12 15 17 10"></polyline>
              <line x1="12" y1="15" x2="12" y2="3"></line>
            </svg>
          </button>
        </div>
      </div>

      <div class="table-responsive">
        <table class="data-table">
          <thead>
            <tr>
              <th>Tagihan # <span class="sort-icon">↕</span></th>
              <th>Periode <span class="sort-icon">↕</span></th>
              <th>Deskripsi <span class="sort-icon">↕</span></th>
              <th>Jumlah Tagihan <span class="sort-icon">↕</span></th>
              <th>Status <span class="sort-icon">↕</span></th>
              <th>Tgl Tagihan <span class="sort-icon">↕</span></th>
              <th>Jatuh Tempo <span class="sort-icon">↕</span></th>
              <th>Action <span class="sort-icon">↕</span></th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="tagihan in listTagihan" :key="tagihan.id">
              <td>
                <span class="text-blue font-medium">{{ tagihan.id }}</span><br>
                <span class="text-xs text-gray">{{ tagihan.pembayaran !== '-' ? 'Paid on ' + tagihan.pembayaran : 'Waiting payment' }}</span>
              </td>
              <td class="text-dark">{{ tagihan.periode }}</td>
              <td class="text-dark">{{ tagihan.desc }}</td>
              <td class="text-dark font-medium">{{ tagihan.total }}</td>
              <td>
                <span :class="tagihan.status === 'PAID' ? 'badge badge-success' : 'badge badge-danger'">
                  {{ tagihan.status === 'PAID' ? 'Paid' : 'Unpaid' }}
                </span>
              </td>
              <td class="text-dark">{{ tagihan.tglTagihan }}</td>
              <td class="text-dark">{{ tagihan.jatuhTempo }}</td>
              <td>
                <div class="action-buttons">
                  <button class="action-btn" title="Cetak/Lihat">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      <polyline points="6 9 6 2 18 2 18 9"></polyline>
                      <path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"></path>
                      <rect x="6" y="14" width="12" height="8"></rect>
                    </svg>
                  </button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div class="table-footer">
        <p class="text-sm text-gray">Showing 1 to 5 of 30 entries</p>
        <div class="pagination">
          <button class="page-btn text-gray">Previous</button>
          <button class="page-btn active">1</button>
          <button class="page-btn">2</button>
          <button class="page-btn text-gray">Next</button>
        </div>
      </div>
    </div>

  </div>
</template>

<style scoped>
/* Utility Colors & Fonts */
.text-gray { color: #64748b; }
.text-dark { color: #1e293b; }
.text-blue { color: #3b82f6; }
.text-sm { font-size: 14px; }
.text-xs { font-size: 12px; }
.font-medium { font-weight: 500; }
.font-semibold { font-weight: 600; }

/* Breadcrumb & User Info */
.breadcrumb {
  background: white;
  padding: 12px 20px;
  border-radius: 6px;
  margin-bottom: 20px;
  font-size: 13px;
  border: 1px solid #e2e8f0;
}
.separator { margin: 0 5px; color: #cbd5e1; }

.user-info-box {
  background: white;
  border-left: 4px solid #3b82f6;
  padding: 18px 20px;
  margin-bottom: 24px;
  border-radius: 6px;
  border-top: 1px solid #e2e8f0;
  border-right: 1px solid #e2e8f0;
  border-bottom: 1px solid #e2e8f0;
}
.user-info-box h3 { font-size: 16px; margin-bottom: 4px; font-weight: 600; }

/* Table Card Main */
.card {
  background: white;
  border: 1px solid #e2e8f0;
  border-radius: 8px;
  box-shadow: 0 1px 3px rgba(0,0,0,0.05);
}
.card-header {
  padding: 20px 24px;
  border-bottom: 1px solid #e2e8f0;
}
.card-title {
  font-size: 16px;
  color: #1e293b;
  font-weight: 600;
}

/* Controls (Top of table) */
.table-controls {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 24px;
}
.show-entries {
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 14px;
  color: #64748b;
}
.select-control {
  padding: 6px 12px;
  border: 1px solid #cbd5e1;
  border-radius: 6px;
  outline: none;
  background-color: white;
}
.right-controls {
  display: flex;
  gap: 12px;
}
.search-box {
  position: relative;
  display: flex;
  align-items: center;
}
.search-icon {
  position: absolute;
  left: 12px;
  color: #94a3b8;
}
.search-input {
  padding: 8px 12px 8px 36px;
  border: 1px solid #cbd5e1;
  border-radius: 6px;
  outline: none;
  font-size: 14px;
  width: 220px;
}
.btn-download {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 16px;
  border: 1px solid #cbd5e1;
  background: white;
  border-radius: 6px;
  color: #475569;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
}
.btn-download:hover { background-color: #f8fafc; }

/* Data Table */
.table-responsive {
  width: 100%;
  overflow-x: auto;
}
.data-table {
  width: 100%;
  border-collapse: collapse;
  font-size: 14px;
}
.data-table th, .data-table td {
  padding: 16px 24px;
  text-align: left;
  border-bottom: 1px solid #e2e8f0;
}
.data-table th {
  background-color: #f8fafc;
  color: #64748b;
  font-weight: 600;
  font-size: 13px;
}
.sort-icon {
  font-size: 10px;
  margin-left: 6px;
  color: #cbd5e1;
  cursor: pointer;
}
.data-table tbody tr:hover {
  background-color: #f8fafc;
}

/* Badges (TailAdmin Style) */
.badge {
  padding: 4px 12px;
  border-radius: 20px;
  font-size: 12px;
  font-weight: 500;
  display: inline-block;
}
.badge-success {
  background-color: #ecfdf5; /* Light green */
  color: #10b981; /* Dark green */
}
.badge-danger {
  background-color: #fef2f2; /* Light red */
  color: #ef4444; /* Dark red */
}

/* Action Buttons */
.action-buttons {
  display: flex;
  gap: 8px;
}
.action-btn {
  background: transparent;
  border: none;
  color: #94a3b8;
  cursor: pointer;
  transition: color 0.2s;
  padding: 4px;
}
.action-btn:hover {
  color: #3b82f6;
}

/* Pagination Footer */
.table-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 24px;
}
.pagination {
  display: flex;
  gap: 8px;
}
.page-btn {
  background: white;
  border: 1px solid #e2e8f0;
  padding: 6px 14px;
  border-radius: 6px;
  font-size: 14px;
  color: #475569;
  cursor: pointer;
  transition: all 0.2s;
}
.page-btn:hover:not(.active) {
  background: #f8fafc;
}
.page-btn.active {
  background: #eff6ff;
  color: #3b82f6;
  border-color: #3b82f6;
  font-weight: 500;
}
</style>