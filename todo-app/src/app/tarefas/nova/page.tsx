'use client';

import { useState, useContext } from 'react';
import { TarefaContext } from '@/data/ContextTarefa';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function NovaTarefa() {
    const [novaTarefa, setNovaTarefa] = useState('');
    const context = useContext(TarefaContext);
    const router = useRouter();

    if (!context) {
        return <div>Carregando...</div>;
    }

    const { adicionarTarefa, tarefas } = context;

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!novaTarefa.trim()) return;

        const novaId = Math.max(...tarefas.map(t => t.id), 0) + 1;
        adicionarTarefa({
            id: novaId,
            title: novaTarefa,  // Usando 'title' em vez de 'todo'
            completed: false,
        });
        setNovaTarefa('');
        router.push('/tarefas');
    };

    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold mb-6">Adicionar Nova Tarefa</h1>
            <form onSubmit={handleSubmit} className="space-y-4 max-w-md">
                <div>
                    <label htmlFor="tarefa" className="block mb-2">Descrição da Tarefa:</label>
                    <input
                        type="text"
                        id="tarefa"
                        value={novaTarefa}
                        onChange={(e) => setNovaTarefa(e.target.value)}
                        className="w-full p-2 border rounded-lg"
                        placeholder="Digite a nova tarefa"
                    />
                </div>
                <div className="flex space-x-3">
                    <button
                        type="submit"
                        className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                    >
                        Adicionar
                    </button>
                    <Link 
                        href="/tarefas" 
                        className="bg-gray-600 text-white px-4 py-2 rounded-lg hover:bg-gray-700 transition-colors"
                    >
                        Cancelar
                    </Link>
                </div>
            </form>
        </div>
    );
}