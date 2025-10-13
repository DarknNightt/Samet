export default function Navbar() {
  return (
    <nav className="flex justify-between items-center p-4 bg-gray-900 text-white">
      <h1 className="text-xl font-bold">Samet</h1>
      <div className="space-x-4">
        <a href="#about" className="hover:text-blue-400">About Me</a>
        <a href="#projects" className="hover:text-blue-400">Projects</a>
        <a href="#skills" className="hover:text-blue-400">Skills</a>
        <a href="#contact" className="hover:text-blue-400">Contact</a>
      </div>
    </nav>
  );
}
