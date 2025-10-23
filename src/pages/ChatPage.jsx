export default function ChatPage() {
  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">Chat con la Comunidad</h2>
      <div className="border rounded-lg p-4 bg-white shadow-sm min-h-[200px]">
        <p className="text-gray-500">(Zona de chat)</p>
      </div>
      <input type="text" placeholder="Escribe un mensaje..." className="border p-2 w-full mt-3 rounded" />
    </div>
  );
}