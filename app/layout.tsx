// Layout akar sengaja pass-through; <html> berada di src/app/[locale]/layout.tsx.
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return children;
}
