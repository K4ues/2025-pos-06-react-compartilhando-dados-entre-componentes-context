'use client';

import { useContext } from 'react';
import { TarefaContext } from '@/data/ContextTarefa';
import Link from 'next/link';
import Tarefas from '@/componentes/Tarefas';

export default function ListaTarefas() {
    const context = useContext(TarefaContext);

    if (!context) {
        return <div>Carregando...</div>;
    }

    const { tarefas, atualizarTarefa } = context;

    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold mb-6  ml-10">Minhas Tarefas</h1>
            <Link 
                href="/tarefas/nova" 
                className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors mb-4 inline-block ml-10"
            >
                Adicionar Nova Tarefa
            </Link>
            
            <Tarefas 
                dados={tarefas} 
                onToggle={(id, completed) => atualizarTarefa(id, completed)}
            />
        </div>
    );
}