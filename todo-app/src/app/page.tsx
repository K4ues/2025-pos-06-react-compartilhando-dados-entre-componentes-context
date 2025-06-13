import Link from 'next/link';

export default function Home() {
    return (
        <div className="flex flex-col items-center justify-center min-h-[80vh]">
            <h1 className="text-3xl font-bold mb-8">Bem-vindo ao seu Gerenciador de Tarefas</h1>
            <p className="m-3">Clique no botão abaixo para acessar suas tarefas!</p>
            <Link 
                href="/tarefas" 
                className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-800 transition-colors"
            >
                Ver Minhas Tarefas
            </Link>
        </div>
    );
}