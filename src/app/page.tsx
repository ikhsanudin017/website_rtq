import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  BookOpenIcon,
  UserGroupIcon,
  CurrencyDollarIcon,
  HeartIcon,
  AcademicCapIcon,
  MapPinIcon,
  PhoneIcon,
  EnvelopeIcon,
  StarIcon,
  SparklesIcon,
  ClipboardDocumentCheckIcon
} from '@heroicons/react/24/outline';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-400/20 to-indigo-600/20 rounded-full animate-bounce"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-indigo-400/20 to-blue-600/20 rounded-full animate-pulse"></div>
        <div className="absolute top-1/4 left-1/4 w-4 h-4 bg-blue-400 rounded-full animate-ping"></div>
        <div className="absolute top-3/4 right-1/4 w-6 h-6 bg-indigo-400 rounded-full animate-pulse"></div>
        
        {/* Islamic Pattern Decorations */}
        <div className="absolute top-20 left-20 w-32 h-32 opacity-10 animate-spin-slow">
          <svg viewBox="0 0 100 100" className="w-full h-full fill-blue-600">
            <path d="M50 0 L60 20 L80 15 L70 35 L90 40 L70 45 L80 65 L60 60 L50 80 L40 60 L20 65 L30 45 L10 40 L30 35 L20 15 L40 20 Z"/>
          </svg>
        </div>
        <div className="absolute bottom-20 right-20 w-24 h-24 opacity-10 animate-pulse">
          <svg viewBox="0 0 100 100" className="w-full h-full fill-indigo-600">
            <path d="M50 10 L55 25 L70 20 L65 35 L80 40 L65 45 L70 60 L55 55 L50 70 L45 55 L30 60 L35 45 L20 40 L35 35 L30 20 L45 25 Z"/>
          </svg>
        </div>
      </div>

      {/* Header */}
      <header className="relative bg-gradient-to-r from-blue-800 via-indigo-800 to-blue-900 shadow-2xl backdrop-blur-sm border-b border-white/20">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-800/90 via-indigo-800/90 to-blue-900/90 backdrop-blur-sm"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center space-x-4 group">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-blue-200/20 rounded-full blur animate-pulse"></div>
                <Image
                  src="/LOGO RTQ.png"
                  alt="Logo RTQ Ibnu Mas'ud"
                  width={56}
                  height={56}
                  className="relative w-14 h-14 rounded-full shadow-lg border-2 border-white/30 group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-white group-hover:text-blue-100 transition-colors duration-300">
                  RTQ Ibnu Mas&apos;ud
                </h1>
                <p className="text-blue-200 text-sm">Prambanan - Sleman</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-6">
              <nav className="hidden md:flex space-x-6">
                <a href="#tentang" className="text-blue-200 hover:text-white transition-colors duration-300 flex items-center space-x-1">
                  <StarIcon className="w-4 h-4" />
                  <span>Tentang</span>
                </a>
                <a href="#fitur" className="text-blue-200 hover:text-white transition-colors duration-300 flex items-center space-x-1">
                  <SparklesIcon className="w-4 h-4" />
                  <span>Fitur</span>
                </a>
                <a href="#kontak" className="text-blue-200 hover:text-white transition-colors duration-300 flex items-center space-x-1">
                  <PhoneIcon className="w-4 h-4" />
                  <span>Kontak</span>
                </a>
              </nav>
              
              <Link 
                href="/login"
                className="bg-gradient-to-r from-white to-blue-50 text-blue-900 px-6 py-2 rounded-full font-medium hover:from-blue-50 hover:to-white transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center space-x-2"
              >
                <BookOpenIcon className="w-4 h-4" />
                <span>Masuk Portal</span>
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="tentang" className="relative py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-12 animate-fade-in-up">
            <div className="relative inline-block mb-8">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-indigo-600/20 rounded-full blur-2xl scale-150 animate-pulse"></div>
              <Image
                src="/LOGO RTQ.png"
                alt="Logo RTQ"
                width={120}
                height={120}
                className="relative w-32 h-32 mx-auto rounded-full shadow-2xl border-4 border-white/50 hover:scale-110 transition-transform duration-500"
              />
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-900 via-indigo-800 to-blue-700 bg-clip-text text-transparent animate-gradient">
              Rumah Tahfizh Al-Qur&apos;an
            </h1>
            <h2 className="text-3xl md:text-4xl font-semibold text-indigo-700 mb-8 animate-fade-in-up-delay-1">
              Ibnu Mas&apos;ud Prambanan
            </h2>
            <p className="text-xl text-blue-700 max-w-3xl mx-auto leading-relaxed animate-fade-in-up-delay-2">
              Platform digital terpadu untuk mengelola santri, monitoring hafalan, sistem presensi, pembayaran otomatis, dan portal orang tua yang memudahkan komunikasi dalam pendidikan Al-Qur&apos;an
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-fade-in-up-delay-3">
            <Link href="/login">
              <Button className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-8 py-4 text-lg rounded-full shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 flex items-center space-x-3">
                <BookOpenIcon className="w-6 h-6" />
                <span>Mulai Sekarang</span>
              </Button>
            </Link>
            <Button 
              variant="outline"
              className="border-2 border-blue-600 text-blue-700 hover:bg-blue-600 hover:text-white px-8 py-4 text-lg rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center space-x-3"
            >
              <PhoneIcon className="w-6 h-6" />
              <span>Hubungi Kami</span>
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="fitur" className="py-20 bg-white/70 backdrop-blur-sm relative">
        <div className="absolute inset-0 bg-gradient-to-b from-white/50 to-blue-50/50"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-blue-900 mb-4 bg-gradient-to-r from-blue-900 to-indigo-700 bg-clip-text text-transparent">
              Fitur Unggulan Sistem RTQ
            </h2>
            <p className="text-xl text-blue-700 max-w-2xl mx-auto">
              Teknologi modern untuk pendidikan Al-Qur&apos;an yang lebih efektif dan terorganisir
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="group hover:shadow-2xl transition-all duration-500 border-0 shadow-lg bg-gradient-to-br from-white to-blue-50/50 hover:scale-105 transform">
              <CardHeader className="text-center pb-4">
                <div className="relative mx-auto mb-6">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-indigo-500 rounded-2xl blur group-hover:blur-lg transition-all duration-300"></div>
                  <div className="relative w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center shadow-xl">
                    <UserGroupIcon className="w-8 h-8 text-white" />
                  </div>
                </div>
                <CardTitle className="text-xl text-blue-900 group-hover:text-indigo-700 transition-colors">
                  Manajemen Santri
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-blue-700 leading-relaxed">
                  Kelola data santri, profil, dan perkembangan hafalan secara terpusat dan terorganisir
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-2xl transition-all duration-500 border-0 shadow-lg bg-gradient-to-br from-white to-blue-50/50 hover:scale-105 transform">
              <CardHeader className="text-center pb-4">
                <div className="relative mx-auto mb-6">
                  <div className="absolute inset-0 bg-gradient-to-r from-emerald-400 to-teal-500 rounded-2xl blur group-hover:blur-lg transition-all duration-300"></div>
                  <div className="relative w-16 h-16 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-2xl flex items-center justify-center shadow-xl">
                    <ClipboardDocumentCheckIcon className="w-8 h-8 text-white" />
                  </div>
                </div>
                <CardTitle className="text-xl text-blue-900 group-hover:text-indigo-700 transition-colors">
                  Sistem Presensi
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-blue-700 leading-relaxed">
                  Absensi digital dengan notifikasi real-time untuk orang tua dan admin
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-2xl transition-all duration-500 border-0 shadow-lg bg-gradient-to-br from-white to-blue-50/50 hover:scale-105 transform">
              <CardHeader className="text-center pb-4">
                <div className="relative mx-auto mb-6">
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-violet-500 rounded-2xl blur group-hover:blur-lg transition-all duration-300"></div>
                  <div className="relative w-16 h-16 bg-gradient-to-r from-purple-500 to-violet-600 rounded-2xl flex items-center justify-center shadow-xl">
                    <AcademicCapIcon className="w-8 h-8 text-white" />
                  </div>
                </div>
                <CardTitle className="text-xl text-blue-900 group-hover:text-indigo-700 transition-colors">
                  Tracking Hafalan
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-blue-700 leading-relaxed">
                  Monitor progress hafalan dan evaluasi perkembangan santri secara detail
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-2xl transition-all duration-500 border-0 shadow-lg bg-gradient-to-br from-white to-blue-50/50 hover:scale-105 transform">
              <CardHeader className="text-center pb-4">
                <div className="relative mx-auto mb-6">
                  <div className="absolute inset-0 bg-gradient-to-r from-amber-400 to-orange-500 rounded-2xl blur group-hover:blur-lg transition-all duration-300"></div>
                  <div className="relative w-16 h-16 bg-gradient-to-r from-amber-500 to-orange-600 rounded-2xl flex items-center justify-center shadow-xl">
                    <CurrencyDollarIcon className="w-8 h-8 text-white" />
                  </div>
                </div>
                <CardTitle className="text-xl text-blue-900 group-hover:text-indigo-700 transition-colors">
                  Sistem Pembayaran
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-blue-700 leading-relaxed">
                  Pembayaran digital dengan notifikasi otomatis dan laporan keuangan transparan
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-2xl transition-all duration-500 border-0 shadow-lg bg-gradient-to-br from-white to-blue-50/50 hover:scale-105 transform">
              <CardHeader className="text-center pb-4">
                <div className="relative mx-auto mb-6">
                  <div className="absolute inset-0 bg-gradient-to-r from-rose-400 to-pink-500 rounded-2xl blur group-hover:blur-lg transition-all duration-300"></div>
                  <div className="relative w-16 h-16 bg-gradient-to-r from-rose-500 to-pink-600 rounded-2xl flex items-center justify-center shadow-xl">
                    <HeartIcon className="w-8 h-8 text-white" />
                  </div>
                </div>
                <CardTitle className="text-xl text-blue-900 group-hover:text-indigo-700 transition-colors">
                  Portal Orang Tua
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-blue-700 leading-relaxed">
                  Akses mudah untuk melihat perkembangan dan aktivitas putra-putri Anda
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-2xl transition-all duration-500 border-0 shadow-lg bg-gradient-to-br from-white to-blue-50/50 hover:scale-105 transform">
              <CardHeader className="text-center pb-4">
                <div className="relative mx-auto mb-6">
                  <div className="absolute inset-0 bg-gradient-to-r from-indigo-400 to-blue-500 rounded-2xl blur group-hover:blur-lg transition-all duration-300"></div>
                  <div className="relative w-16 h-16 bg-gradient-to-r from-indigo-500 to-blue-600 rounded-2xl flex items-center justify-center shadow-xl">
                    <BookOpenIcon className="w-8 h-8 text-white" />
                  </div>
                </div>
                <CardTitle className="text-xl text-blue-900 group-hover:text-indigo-700 transition-colors">
                  Materi Digital
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-blue-700 leading-relaxed">
                  Akses Al-Qur&apos;an digital, hadits, dan materi pembelajaran interaktif
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-r from-blue-800 via-indigo-800 to-blue-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-800/95 via-indigo-800/95 to-blue-900/95"></div>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-40 h-40 border border-white/20 rounded-full animate-spin-slow"></div>
          <div className="absolute bottom-10 right-10 w-32 h-32 border border-white/20 rounded-full animate-pulse"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">Prestasi RTQ Ibnu Mas&apos;ud</h2>
            <p className="text-blue-200 text-xl">Dedikasi dalam pendidikan Al-Qur&apos;an</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center group">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 group-hover:bg-white/20 transition-all duration-300 border border-white/20">
                <div className="text-5xl font-bold text-white mb-2 animate-pulse">150+</div>
                <div className="text-blue-200 text-lg">Santri Aktif</div>
              </div>
            </div>
            
            <div className="text-center group">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 group-hover:bg-white/20 transition-all duration-300 border border-white/20">
                <div className="text-5xl font-bold text-white mb-2 animate-pulse">50+</div>
                <div className="text-blue-200 text-lg">Hafizh Lulusan</div>
              </div>
            </div>
            
            <div className="text-center group">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 group-hover:bg-white/20 transition-all duration-300 border border-white/20">
                <div className="text-5xl font-bold text-white mb-2 animate-pulse">10+</div>
                <div className="text-blue-200 text-lg">Tahun Pengalaman</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="kontak" className="py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-blue-900 mb-4 bg-gradient-to-r from-blue-900 to-indigo-700 bg-clip-text text-transparent">
              Hubungi Kami
            </h2>
            <p className="text-xl text-blue-700">Siap membantu Anda dalam perjalanan menghafal Al-Qur&apos;an</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <Card className="group hover:shadow-2xl transition-all duration-500 border-0 shadow-lg bg-gradient-to-br from-white to-blue-50/50 hover:scale-105 transform">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-xl group-hover:scale-110 transition-transform">
                  <MapPinIcon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-blue-900 mb-4">Alamat</h3>
                <p className="text-blue-700">
                  Jl. Raya Prambanan<br />
                  Sleman, Yogyakarta<br />
                  Indonesia
                </p>
              </CardContent>
            </Card>
            
            <Card className="group hover:shadow-2xl transition-all duration-500 border-0 shadow-lg bg-gradient-to-br from-white to-blue-50/50 hover:scale-105 transform">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-xl group-hover:scale-110 transition-transform">
                  <PhoneIcon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-blue-900 mb-4">Telepon</h3>
                <p className="text-blue-700">
                  +62 812-3456-7890<br />
                  +62 274-123456
                </p>
              </CardContent>
            </Card>
            
            <Card className="group hover:shadow-2xl transition-all duration-500 border-0 shadow-lg bg-gradient-to-br from-white to-blue-50/50 hover:scale-105 transform">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-violet-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-xl group-hover:scale-110 transition-transform">
                  <EnvelopeIcon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-blue-900 mb-4">Email</h3>
                <p className="text-blue-700">
                  info@rtqibnumasud.com<br />
                  admin@rtqibnumasud.com
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-blue-900 via-indigo-900 to-blue-800 text-white py-12 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 via-indigo-900/90 to-blue-800/90"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-4 mb-6">
                <Image
                  src="/LOGO RTQ.png"
                  alt="Logo RTQ"
                  width={48}
                  height={48}
                  className="w-12 h-12 rounded-full"
                />
                <div>
                  <h3 className="text-xl font-bold">RTQ Ibnu Mas&apos;ud</h3>
                  <p className="text-blue-200">Prambanan - Sleman</p>
                </div>
              </div>
              <p className="text-blue-200 leading-relaxed">
                Mendidik santri dengan kualitas terbaik dalam menghafal dan memahami Al-Qur&apos;an
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-6">Menu Cepat</h3>
              <ul className="space-y-3">
                <li><a href="#tentang" className="text-blue-200 hover:text-white transition-colors">Tentang Kami</a></li>
                <li><a href="#fitur" className="text-blue-200 hover:text-white transition-colors">Fitur</a></li>
                <li><a href="#kontak" className="text-blue-200 hover:text-white transition-colors">Kontak</a></li>
                <li><Link href="/login" className="text-blue-200 hover:text-white transition-colors">Portal Admin</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-6">Kontak Info</h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <MapPinIcon className="w-5 h-5 text-blue-300" />
                  <span className="text-blue-200">Prambanan, Sleman</span>
                </div>
                <div className="flex items-center space-x-3">
                  <PhoneIcon className="w-5 h-5 text-blue-300" />
                  <span className="text-blue-200">+62 812-3456-7890</span>
                </div>
                <div className="flex items-center space-x-3">
                  <EnvelopeIcon className="w-5 h-5 text-blue-300" />
                  <span className="text-blue-200">info@rtqibnumasud.com</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="border-t border-blue-700/30 mt-12 pt-8 text-center">
            <p className="text-blue-200">
              © 2024 RTQ Ibnu Mas&apos;ud Prambanan. Semua hak dilindungi.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
