# 🚀 Deployment Guide - RTQ Ibnu Mas'ud

Panduan lengkap deployment website RTQ Ibnu Mas'ud ke Vercel dengan database Neon PostgreSQL.

## 📋 Prerequisites

- [ ] Akun GitHub
- [ ] Akun Vercel (bisa login dengan GitHub)
- [ ] Akun Neon (untuk PostgreSQL database)
- [ ] Repository GitHub sudah ter-push

## 🗄️ Setup Database (Neon PostgreSQL)

### 1. Create Neon Project
1. Kunjungi [neon.tech](https://neon.tech)
2. Login/Register dengan GitHub
3. Klik **"Create a project"**
4. Pilih region **Singapore** (terdekat dengan Indonesia)
5. Beri nama project: `rtq-ibnumasud`

### 2. Get Connection String
1. Di dashboard Neon, klik **"Connection Details"**
2. Copy **Connection String** dengan format:
   ```
   postgresql://username:password@ep-xxx.ap-southeast-1.neon.tech/database?sslmode=require
   ```
3. Simpan untuk step deployment

## 🌐 Deploy ke Vercel

### 1. Connect Repository
1. Login ke [vercel.com](https://vercel.com)
2. Klik **"New Project"**
3. Import repository GitHub: `rtq-website`
4. Framework akan auto-detect: **Next.js**

### 2. Configure Environment Variables
Di Vercel dashboard, tambah environment variables:

```env
# Database
DATABASE_URL=postgresql://username:password@ep-xxx.ap-southeast-1.neon.tech/database?sslmode=require

# Auth
NEXTAUTH_URL=https://rtq-ibnumasud.vercel.app
NEXTAUTH_SECRET=your-super-secret-key-32-chars-min

# App Config
APP_NAME=RTQ Ibnu Mas'ud
APP_URL=https://rtq-ibnumasud.vercel.app

# Optional: Payment Gateway
MIDTRANS_SERVER_KEY=your-midtrans-server-key
MIDTRANS_CLIENT_KEY=your-midtrans-client-key
MIDTRANS_IS_PRODUCTION=false

# Optional: WhatsApp Notifications
WHATSAPP_API_URL=your-whatsapp-api-url
WHATSAPP_API_TOKEN=your-whatsapp-token
```

### 3. Deploy
1. Klik **"Deploy"**
2. Tunggu build process selesai (2-5 menit)
3. Website akan accessible di: `https://rtq-ibnumasud.vercel.app`

## 🗃️ Setup Database Production

Setelah deployment berhasil, setup database production:

### 1. Run Prisma Commands
Di terminal lokal (pastikan DATABASE_URL production):

```bash
# Generate Prisma client
npx prisma generate

# Push database schema
npx prisma db push

# Seed database dengan data demo
npm run db:seed
```

### 2. Atau Via Vercel CLI
```bash
# Install Vercel CLI
npm i -g vercel

# Login
vercel login

# Link project
vercel link

# Run commands di production
vercel env pull .env.production
DATABASE_URL="production-url" npx prisma db push
DATABASE_URL="production-url" npm run db:seed
```

## 🔧 Post-Deployment Setup

### 1. Test Login
- **Admin**: `admin` / `admin123`
- **Parent**: `RTQ20240001` / `password123`

### 2. Update Domain (Optional)
1. Di Vercel dashboard → **Settings** → **Domains**
2. Add custom domain: `rtq-ibnumasud.com`
3. Configure DNS sesuai instruksi Vercel

### 3. Enable Analytics
1. Di Vercel dashboard → **Analytics**
2. Enable Web Analytics dan Speed Insights

## 🛡️ Security Checklist

- [ ] Environment variables configured
- [ ] NEXTAUTH_SECRET is strong (32+ characters)
- [ ] Database connection uses SSL
- [ ] Admin password diubah dari default
- [ ] Production URLs benar di environment variables

## 📊 Monitoring

### Vercel Dashboard
- **Functions**: Monitor API response times
- **Analytics**: Track user behavior
- **Logs**: Debug deployment issues

### Database Monitoring (Neon)
- **Query Performance**: Monitor slow queries
- **Connection Pooling**: Check connection usage
- **Storage**: Monitor database size

## 🔄 Continuous Deployment

Setiap push ke `main` branch akan trigger auto-deployment:

1. **Push code** ke GitHub
2. **Vercel detects** changes
3. **Auto build** & deploy
4. **Live** in 2-3 minutes

## 🚨 Troubleshooting

### Build Errors
```bash
# Check build locally
npm run build

# Check logs
vercel logs your-app-url
```

### Database Connection Issues
```bash
# Test connection
npx prisma db pull

# Check environment variables
vercel env ls
```

### 500 Server Errors
1. Check Vercel Functions logs
2. Verify DATABASE_URL format
3. Ensure all environment variables set

## 📱 Mobile Testing

Test di berbagai device:
- **Desktop**: Chrome, Firefox, Safari
- **Mobile**: iOS Safari, Android Chrome
- **Tablet**: iPad, Android tablet

## 🎯 Performance Optimization

### Vercel Analytics
Enable di dashboard untuk:
- Core Web Vitals monitoring
- Page load speed tracking
- User experience metrics

### Database Optimization
- Enable Neon autoscaling
- Monitor query performance
- Set up read replicas jika perlu

## 🔐 Backup Strategy

### Database Backup
```bash
# Manual backup
pg_dump $DATABASE_URL > backup.sql

# Automated via Neon (Pro plan)
```

### Code Backup
- Repository di GitHub (automatic)
- Vercel keeps deployment history
- Download source via Vercel CLI

---

## 📞 Support Deployment

Jika ada masalah deployment:

1. **Check Documentation**:
   - Vercel: https://vercel.com/docs
   - Neon: https://neon.tech/docs
   - Next.js: https://nextjs.org/docs

2. **Community Support**:
   - Vercel Discord
   - GitHub Discussions
   - Stack Overflow

3. **Professional Support**:
   - Email: admin@rtq-ibnumasud.com
   - WhatsApp: +62 812-3456-7890

---

**Happy Deploying! 🚀**
