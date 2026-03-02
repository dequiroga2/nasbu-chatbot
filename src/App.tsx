import ChatbotPopup from './components/ChatbotPopup';
import { Scale } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-6">
              <Scale size={48} className="text-blue-600" />
              <h1 className="text-5xl font-bold text-gray-800">NASBU</h1>
            </div>
            <p className="text-xl text-gray-600 mb-4">
              Tus asuntos legales fácil y rápido
            </p>
            <p className="text-lg text-gray-500">
              Demostración del Asistente Virtual
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Bienvenido a NASBU
            </h2>
            <p className="text-gray-600 mb-6">
              Controla tus Expedientes, Casos, Diligencias y Clientes con nuestra plataforma.
            </p>
            <div className="bg-blue-50 border-l-4 border-blue-600 p-4 rounded">
              <p className="text-sm text-gray-700">
                <strong>Haz clic en el botón del chat</strong> en la esquina inferior derecha
                para interactuar con nuestro asistente virtual.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="bg-white rounded-xl shadow-md p-6 text-center hover:shadow-lg transition-shadow">
              <div className="text-blue-600 mb-3">
                <Scale size={32} className="mx-auto" />
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">Gestión Legal</h3>
              <p className="text-sm text-gray-600">
                Controla todos tus casos y expedientes
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-md p-6 text-center hover:shadow-lg transition-shadow">
              <div className="text-blue-600 mb-3">
                <Scale size={32} className="mx-auto" />
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">Asistente IA</h3>
              <p className="text-sm text-gray-600">
                Respuestas inmediatas a tus consultas
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-md p-6 text-center hover:shadow-lg transition-shadow">
              <div className="text-blue-600 mb-3">
                <Scale size={32} className="mx-auto" />
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">Productividad</h3>
              <p className="text-sm text-gray-600">
                Ahorra tiempo y trabaja inteligentemente
              </p>
            </div>
          </div>
        </div>
      </div>

      <ChatbotPopup />
    </div>
  );
}

export default App;
