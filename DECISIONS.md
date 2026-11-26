# Keputusan
- Tailwind 3.4 (bukan 4) demi kompatibilitas shadcn/ui yang stabil.
- ESLint 8 + `.eslintrc.json` agar cocok dengan `next lint` di Next 15.
- `noUncheckedIndexedAccess` aktif: akses array harus menangani `undefined`.
- Tahap 1 di-host di GitHub Pages: ekspor statis, tanpa middleware, `localePrefix: "always"` (/id, /en). Bahasa tersimpan lewat URL. Setiap halaman memanggil `setRequestLocale`.
- Rute dinamis (mis. `/survey/[slug]`) perlu `generateStaticParams` selama masih statis; pindah ke Vercel saat backend dibangun.
