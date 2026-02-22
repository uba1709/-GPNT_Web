import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "./globals.css";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pl">
      <body className="bg-zinc-950 text-zinc-100 flex flex-col md:flex-row min-h-screen">
        {/* Navbar jest fixed, więc nie zajmuje miejsca w układzie flex */}
        <Navbar />

        {/* Kontener na treść - na desktopie dodajemy margines lewy (ml-20), 
            żeby Navbar nie zasłaniał tekstu */}
        <div className="flex flex-col flex-grow md:ml-20">
          <main className="flex-grow p-6 pb-24 md:pb-6">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}