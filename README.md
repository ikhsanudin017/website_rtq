# RTQ Ibnu Mas'ud Prambanan - Website Management System

Sistem manajemen terintegrasi untuk Rumah Tahfidz Qur'an Ibnu Mas'ud Prambanan yang meliputi manajemen santri, presensi, pembayaran, dan portal orang tua.

## 🚀 Fitur Utama

### 📋 Dashboard Admin
- **Manajemen Santri**: Input dan kelola data santri lengkap
- **Sistem Presensi**: Tracking kehadiran santri real-time
- **Manajemen Pembayaran**: Monitor dan catat pembayaran SPP
- **Tracking Hafalan**: Catat progress hafalan dan penilaian
- **Laporan**: Generate laporan komprehensif
- **Manajemen Users**: Kelola akun admin dan orang tua
- **Settings**: Konfigurasi sistem RTQ

### 👨‍👩‍👧‍👦 Portal Orang Tua
- **Dashboard Anak**: Monitor perkembangan santri
- **Progress Hafalan**: Lihat capaian hafalan terkini
- **Riwayat Presensi**: Check kehadiran anak
- **Status Pembayaran**: Monitor tagihan dan pembayaran
- **Notifikasi**: Terima update perkembangan anak

### 👨‍🏫 Portal Ustadz
- **Dashboard Ustadz**: Overview data santri binaan
- **Input Presensi**: Catat kehadiran santri
- **Penilaian Hafalan**: Input progress dan nilai hafalan
- **Data Santri**: Akses informasi santri

### ⭐ Fitur Tambahan
- **Responsive Design**: Mobile-friendly interface
- **Multi-role Access**: Admin, Parent, dan Ustadz dashboard
- **Data Management**: CRUD lengkap untuk semua entitas
- **Search & Filter**: Pencarian data yang efisien

## 🛠️ Teknologi

- **Frontend/Backend**: Next.js 15 dengan App Router
- **Framework**: React 19 dengan TypeScript
- **Database**: PostgreSQL dengan Prisma ORM
- **Authentication**: Custom JWT-based auth
- **UI Framework**: Tailwind CSS 4.0
- **Icons**: Heroicons
- **Deployment**: Vercel-ready

## 📦 Instalasi

### Prerequisites
- Node.js 18+ 
- PostgreSQL database (Neon/local)
- Git

### 1. Clone Repository
\`\`\`bash
git clone https://github.com/ikhsanudin017/website_rtq.git
cd website_rtq
\`\`\`

### 2. Install Dependencies
\`\`\`bash
npm install
\`\`\`

### 3. Environment Setup
Copy \`.env.example\` ke \`.env\` dan sesuaikan:

\`\`\`env
# Database (Neon PostgreSQL)
DATABASE_URL="postgresql://username:password@ep-xxx.neon.tech/rtq_database?sslmode=require"

# NextAuth
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=your-secret-key-here

# App Configuration
APP_NAME="RTQ Ibnu Mas'ud"
APP_URL=http://localhost:3000
\`\`\`

### 4. Database Setup
\`\`\`bash
# Generate Prisma client
npx prisma generate

# Push schema to database
npx prisma db push

# Seed database dengan data contoh
npm run db:seed
\`\`\`

### 5. Run Development Server
\`\`\`bash
npm run dev
\`\`\`

Buka [http://localhost:3000](http://localhost:3000) di browser.

## 👥 Demo Accounts

### Admin Login
- **Username**: \`admin\`
- **Password**: \`admin123\`
- **URL**: [http://localhost:3000/admin](http://localhost:3000/admin)

### Parent Login (Contoh)
- **Username**: \`25010001\` (NIS Santri: Fatan)
- **Password**: \`password123\`
- **URL**: [http://localhost:3000/parent](http://localhost:3000/parent)

### Ustadz Login
- **Username**: \`ustadz\`
- **Password**: \`ustadz123\`
- **URL**: [http://localhost:3000/ustadz](http://localhost:3000/ustadz)

## 🚀 Deployment ke Vercel

### 1. Setup Database Neon PostgreSQL
1. Daftar di [Neon](https://neon.tech)
2. Buat database baru dengan nama \`rtq_database\`
3. Copy connection string dari dashboard Neon

### 2. Deploy ke Vercel
1. **Import Project**: 
   - Buka [Vercel Dashboard](https://vercel.com/dashboard)
   - Klik "New Project"
   - Import dari GitHub repository \`website_rtq\`

2. **Configure Environment Variables**:
   - \`DATABASE_URL\`: Connection string dari Neon
   - \`NEXTAUTH_SECRET\`: Generate random string (gunakan: \`openssl rand -base64 32\`)
   - \`NEXTAUTH_URL\`: URL production Anda (misal: \`https://rtq-ibnumasud.vercel.app\`)

3. **Deploy**: Klik Deploy, Vercel akan build otomatis

### 3. Setup Database Production
Setelah deploy berhasil:
\`\`\`bash
# Push schema ke production database
npx prisma db push

# Seed data production
npm run db:seed
\`\`\`

### 4. Verifikasi Deployment
- Akses URL production
- Test login admin: \`admin\` / \`admin123\`
- Pastikan semua fitur berfungsi

## 📊 Data Santri (Seed Data)

Website sudah dilengkapi dengan 10 data santri contoh:

| No | Nama | NIS | Gender | Kelas | Orang Tua |
|----|------|-----|--------|-------|-----------|
| 1 | Muhammad Fatan | 25010001 | L | 1A | Ahmad Fauzi |
| 2 | Abdul Aziz Abel | 25010002 | L | 1A | Budi Santoso |
| 3 | Ahmad Faqih | 25010003 | L | 1A | Cahyo Nugroho |
| 4 | Hayyu Almaira | 25020004 | P | 2A | Dedi Kurnia |
| 5 | Miracle Azzahra | 25020005 | P | 2A | Eko Prasetyo |
| 6 | Bilqis Salsabila | 25040006 | P | 4A | Fajar Hidayat |
| 7 | Dika Pratama | 25050007 | L | 5A | Gunawan |
| 8 | Rayyan Fadhil | 25050008 | L | 5A | Hadi Susilo |
| 9 | Arin Zahira | 25070009 | P | 7A | Indra Wijaya |
| 10 | Atha Maulana | 25070010 | L | 7A | Joko Widodo |

## 👥 Data Pengurus (Seed Data)

| No | Nama | Jabatan | Kontak |
|----|------|---------|--------|
| 1 | Nofhendri | Ketua | 081234567890 |
| 2 | Ikhsanudin | Sekretaris | 081234567891 |
| 3 | Zulfa Amaliah | Bendahara | 081234567892 |
| 4 | Yuliyanto Prayitno | Musyrif | 081234567893 |

## 📁 Struktur Project

\`\`\`
src/
├── app/
│   ├── admin/          # Admin panel pages
│   │   ├── students/   # Manajemen santri
│   │   ├── attendance/ # Sistem presensi
│   │   ├── payments/   # Manajemen pembayaran
│   │   ├── reports/    # Laporan
│   │   ├── users/      # Manajemen users
│   │   └── settings/   # Pengaturan sistem
│   ├── api/            # API routes
│   ├── login/          # Authentication
│   ├── parent/         # Parent portal
│   └── ustadz/         # Teacher portal
├── components/
│   ├── layouts/        # Layout components
│   └── ui/             # UI components
├── hooks/              # Custom hooks
├── lib/                # Utilities
└── types/              # TypeScript types
\`\`\`

## 🔧 Scripts NPM

\`\`\`bash
npm run dev          # Development server
npm run build        # Production build
npm run start        # Production server
npm run lint         # ESLint check
npm run db:generate  # Generate Prisma client
npm run db:push      # Push schema to DB
npm run db:seed      # Seed database
npm run vercel-build # Vercel build command
\`\`\`

## 🐛 Troubleshooting

### Database Connection Error
1. Pastikan DATABASE_URL di environment variables benar
2. Pastikan database Neon dapat diakses
3. Jalankan \`npx prisma generate\` untuk regenerate client

### Build Error di Vercel
1. Pastikan semua environment variables sudah di-set
2. Pastikan tidak ada syntax error dalam kode
3. Check build logs di Vercel dashboard

### Login Issues
1. Pastikan database sudah di-seed
2. Check NEXTAUTH_SECRET dan NEXTAUTH_URL
3. Verify user credentials di database

## 📞 Support & Contact

Untuk pertanyaan dan dukungan teknis:
- **Developer**: Ikhsanudin
- **Email**: ikhsanudin017@gmail.com
- **GitHub**: [@ikhsanudin017](https://github.com/ikhsanudin017)
- **Repository**: [website_rtq](https://github.com/ikhsanudin017/website_rtq)

## 📄 License

Project ini dikembangkan untuk RTQ Ibnu Mas'ud Prambanan.

---

**© 2025 RTQ Ibnu Mas'ud Prambanan**  
*Membentuk Generasi Qur'ani yang Berakhlak Mulia*  
Dikembangkan dengan ❤️ untuk kemajuan pendidikan Al-Qur'an
