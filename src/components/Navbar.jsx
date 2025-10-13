export default function Navbar() {
  return (
    <nav className="flex justify-between items-center p-4 bg-gray-900 text-white">
      <h1 className="text-xl font-bold">Samet</h1>
      <div className="space-x-4">
        <a href="#about" className="hover:text-blue-400">Hakkımda</a>
        <a href="#projects" className="hover:text-blue-400">Projeler</a>
        <a href="#skills" className="hover:text-blue-400">Yetenekler</a>
        <a href="#contact" className="hover:text-blue-400">İletişim</a>
      </div>
    </nav>
  );
}
