import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { 
  BookOpenIcon, 
  UserGroupIcon, 
  CalendarDaysIcon, 
  CurrencyDollarIcon,
  HeartIcon,
  AcademicCapIcon 
} from '@heroicons/react/24/outline'

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center">
                <BookOpenIcon className="w-6 h-6 text-white" />
              </div>
              <h1 className="text-xl font-bold text-gray-900">RTQ Ibnu Mas&apos;ud Prambanan</h1>
            </div>
            <div className="flex items-center space-x-4">
              <Link href="/login" className="text-gray-600 hover:text-gray-900">
                Masuk
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-8">
            <Image
              src="/LOGO RTQ.png"
              alt="Logo RTQ Ibnu Mas'ud"
              width={150}
              height={150}
              className="mx-auto mb-6"
            />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Rumah Tahfidz Qur&apos;an
            <span className="block text-green-600">Ibnu Mas&apos;ud Prambanan</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Membentuk generasi Qur&apos;ani yang berakhlak mulia dan berprestasi. 
            Bergabunglah dengan program tahfidz terbaik untuk masa depan yang berkah.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link href="/login">Portal Orang Tua</Link>
            </Button>
            <Button variant="outline" size="lg">
              Tentang Kami
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Fasilitas & Layanan
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Sistem terintegrasi untuk memudahkan monitoring perkembangan santri
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-100 rounded-lg mx-auto mb-4 flex items-center justify-center">
                  <UserGroupIcon className="w-6 h-6 text-blue-600" />
                </div>
                <CardTitle className="text-lg">Manajemen Santri</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Sistem pencatatan data santri yang lengkap dan terintegrasi
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-green-100 rounded-lg mx-auto mb-4 flex items-center justify-center">
                  <CalendarDaysIcon className="w-6 h-6 text-green-600" />
                </div>
                <CardTitle className="text-lg">Presensi Digital</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Tracking kehadiran santri secara real-time dan akurat
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-purple-100 rounded-lg mx-auto mb-4 flex items-center justify-center">
                  <AcademicCapIcon className="w-6 h-6 text-purple-600" />
                </div>
                <CardTitle className="text-lg">Tracking Hafalan</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Monitoring progress hafalan dan penilaian santri
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-yellow-100 rounded-lg mx-auto mb-4 flex items-center justify-center">
                  <CurrencyDollarIcon className="w-6 h-6 text-yellow-600" />
                </div>
                <CardTitle className="text-lg">Sistem Pembayaran</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Notifikasi pembayaran dan tracking keuangan otomatis
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-red-100 rounded-lg mx-auto mb-4 flex items-center justify-center">
                  <HeartIcon className="w-6 h-6 text-red-600" />
                </div>
                <CardTitle className="text-lg">Portal Orang Tua</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Akses mudah untuk melihat perkembangan putra-putri Anda
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-indigo-100 rounded-lg mx-auto mb-4 flex items-center justify-center">
                  <BookOpenIcon className="w-6 h-6 text-indigo-600" />
                </div>
                <CardTitle className="text-lg">Motivasi Harian</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Ayat Al-Qur&apos;an dan Hadits motivasi setiap harinya
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-green-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">150+</div>
              <div className="text-green-100">Santri Aktif</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">50+</div>
              <div className="text-green-100">Santri Lulus</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">10+</div>
              <div className="text-green-100">Tahun Berpengalaman</div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Hubungi Kami
          </h2>
          <p className="text-gray-600 mb-8">
            Jl. Raya Prambanan, Bokoharjo, Prambanan, Sleman, DIY
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="outline" asChild>
              <a href="tel:+6281234567890">📞 Telepon</a>
            </Button>
            <Button variant="outline" asChild>
              <a href="https://wa.me/6281234567890">💬 WhatsApp</a>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p>&copy; 2025 Rumah Tahfidz Qur&apos;an Ibnu Mas&apos;ud Prambanan. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
