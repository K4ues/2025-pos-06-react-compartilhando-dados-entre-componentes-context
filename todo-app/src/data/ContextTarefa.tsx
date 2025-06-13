'use client';

import { createContext, useState, useEffect, ReactNode } from 'react';
import { Tarefa, TarefaContextType } from '@/types/tarefa';

export const TarefaContext = createContext<TarefaContextType | null>(null);

const TarefaProvider = ({ children }: { children: ReactNode }) => {
    const [tarefas, setTarefas] = useState<Tarefa[]>([]);

    const carregarTarefas = async () => {
        try {
            const response = await fetch('https://dummyjson.com/todos?limit=5');
            const data = await response.json();
            // Adaptando os dados para o formato esperado
            const tarefasFormatadas = data.todos.map((t: any) => ({
                id: t.id,
                title: t.todo,  // Convertendo 'todo' para 'title'
                completed: t.completed,
                userId: t.userId
            }));
            setTarefas(tarefasFormatadas);
        } catch (error) {
            console.error('Erro ao carregar tarefas:', error);
        }
    };

    const adicionarTarefa = (tarefa: Tarefa) => {
        // Garantindo que a nova tarefa tenha o campo 'title'
        const novaTarefa = {
            ...tarefa,
            title: tarefa.title || tarefa.todo || 'Nova Tarefa'
        };
        setTarefas([...tarefas, novaTarefa]);
    };

    const atualizarTarefa = (id: number, completed: boolean) => {
        setTarefas(tarefas.map(tarefa => 
            tarefa.id === id ? { ...tarefa, completed } : tarefa
        ));
    };

    useEffect(() => {
        carregarTarefas();
    }, []);

    return (
        <TarefaContext.Provider value={{ tarefas, adicionarTarefa, atualizarTarefa, carregarTarefas }}>
            {children}
        </TarefaContext.Provider>
    );
};

export default TarefaProvider;