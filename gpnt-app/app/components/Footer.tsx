export default function Footer() {
  return (
    <footer className="w-full py-6 px-10 border-t border-zinc-800 text-zinc-500 text-sm flex justify-between items-center bg-zinc-950">
      <p>&copy; 2026 Twoja Firma TruckBook</p>
      <div className="flex gap-4">
        <span className="hover:text-white cursor-pointer transition-colors">Discord</span>
        <span className="hover:text-white cursor-pointer transition-colors">TruckBook Profile</span>
      </div>
    </footer>
  );
}