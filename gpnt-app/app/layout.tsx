import Footer from "./components/Footer";
import "./globals.css";
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pl">
    <title>GPNT - Greater Poland Navigation Technologies</title>
      <body className="bg-zinc-950 text-zinc-100 flex flex-col md:flex-row min-h-screen">
        {/* <Navbar /> */}
        <div className="flex flex-col flex-grow md:ml-20">
          <main className="flex-grow p-6 pb-24 md:pb-6">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}