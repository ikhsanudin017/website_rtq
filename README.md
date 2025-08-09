# RTQ Ibnu Mas'ud Prambanan - Website Management System

Sistem manajemen terintegrasi untuk Rumah Tahfidz Qur'an Ibnu Mas'ud Prambanan yang meliputi manajemen santri, presensi, pembayaran, dan portal orang tua.

## 🚀 Fitur Utama

### 📋 Dashboard Admin
- **Manajemen Santri**: Input dan kelola data santri lengkap
- **Sistem Presensi**: Tracking kehadiran santri real-time
- **Manajemen Pembayaran**: Monitor dan catat pembayaran SPP
- **Tracking Hafalan**: Catat progress hafalan dan penilaian
- **Laporan**: Generate laporan komprehensif
- **Notifikasi**: Sistem pemberitahuan otomatis

### 👨‍👩‍👧‍👦 Portal Orang Tua
- **Dashboard Anak**: Monitor perkembangan santri
- **Progress Hafalan**: Lihat capaian hafalan terkini
- **Riwayat Presensi**: Check kehadiran anak
- **Status Pembayaran**: Monitor tagihan dan pembayaran
- **Notifikasi**: Terima update perkembangan anak

### ⭐ Fitur Tambahan
- **Motivasi Harian**: Ayat Al-Qur'an dan Hadits harian
- **Sistem Notifikasi**: WhatsApp dan in-app notifications
- **Payment Gateway**: Integrasi dengan Midtrans
- **Responsive Design**: Mobile-friendly interface
- **Multi-role Access**: Admin dan Parent dashboard

## 🛠️ Teknologi

- **Frontend/Backend**: Next.js 15 dengan App Router
- **Database**: PostgreSQL dengan Prisma ORM
- **Authentication**: Custom JWT-based auth
- **UI Framework**: Tailwind CSS + Radix UI
- **Icons**: Heroicons
- **Deployment**: Vercel-ready
- **Payment**: Midtrans integration
- **Notifications**: WhatsApp API

## 📦 Instalasi

### Prerequisites
- Node.js 18+ 
- PostgreSQL database (Neon/local)
- Git

### 1. Clone Repository
```bash
git clone <repository-url>
cd rtq-website
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Environment Setup
Copy `.env.example` ke `.env` dan sesuaikan:

```env
# Database (Neon PostgreSQL)
DATABASE_URL="postgresql://username:password@ep-xxx.neon.tech/rtq_database?sslmode=require"

# NextAuth
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=your-secret-key-here

# WhatsApp API (opsional)
WHATSAPP_API_URL=
WHATSAPP_API_TOKEN=

# Midtrans Payment (opsional)
MIDTRANS_SERVER_KEY=
MIDTRANS_CLIENT_KEY=
MIDTRANS_IS_PRODUCTION=false

# App Configuration
APP_NAME="RTQ Ibnu Mas'ud"
APP_URL=http://localhost:3000
```

### 4. Database Setup
```bash
# Generate Prisma client
npx prisma generate

# Push schema to database
npx prisma db push

# Seed database dengan data contoh
npm run db:seed
```

### 5. Run Development Server
```bash
npm run dev
```

Buka [http://localhost:3000](http://localhost:3000) di browser.

## 👥 Demo Accounts

### Admin Login
- **Username**: `admin`
- **Password**: `admin123`
- **URL**: [http://localhost:3000/admin](http://localhost:3000/admin)

### Parent Login  
- **Username**: `RTQ20240001` (Nomor Induk Santri)
- **Password**: `password123`
- **URL**: [http://localhost:3000/parent](http://localhost:3000/parent)

## 🚀 Deployment ke Vercel

### 1. Setup Database
1. Buat database PostgreSQL di [Neon](https://neon.tech)
2. Copy connection string ke `DATABASE_URL`

### 2. Deploy ke Vercel
1. Connect repository ke Vercel
2. Set environment variables
3. Deploy otomatis akan berjalan

### 3. Setup Database Production
```bash
# Push schema ke production
npx prisma db push

# Seed data production (opsional)
npm run db:seed
```

## 📱 Penggunaan

### Admin Workflow
1. **Login** sebagai admin
2. **Tambah Santri** via menu Data Santri
3. **Catat Presensi** harian
4. **Input Progress Hafalan** dan penilaian
5. **Monitor Pembayaran** dan kirim reminder
6. **Generate Laporan** bulanan

### Parent Workflow  
1. **Login** dengan Nomor Induk Santri
2. **Cek Progress** hafalan anak
3. **Monitor Kehadiran** anak
4. **Bayar Tagihan** via payment gateway
5. **Terima Notifikasi** update perkembangan

## 📞 Support

Untuk bantuan teknis:
- **Email**: admin@rtq-ibnumasud.com
- **WhatsApp**: +62 812-3456-7890
- **Website**: https://rtq-ibnumasud.vercel.app

---

**RTQ Ibnu Mas'ud Prambanan**  
*Membentuk Generasi Qur'ani yang Berakhlak Mulia*
