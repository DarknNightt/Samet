export default function ProjectCard({ title, description, link }) {
  return (
    <div className="bg-gray-700 p-5 rounded-2xl shadow-md text-white hover:scale-105 transition">
      <h3 className="text-xl font-bold">{title}</h3>
      <p className="mt-2 text-gray-300">{description}</p>
      <a href={link} target="_blank" className="inline-block mt-4 text-blue-400 hover:text-blue-300">
        GitHub →
      </a>
    </div>
  );
}
