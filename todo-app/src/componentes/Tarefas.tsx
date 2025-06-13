'use client';

import Tarefa from './Tarefa'; // Importação como default
import { Tarefa as TarefaType } from '../types/tarefa';

interface TarefasProps {
    dados: TarefaType[];
    onToggle: (id: number, completed: boolean) => void;
}


export default function Tarefas({ dados, onToggle }: TarefasProps) {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mr-10 ml-10">
            {dados.map((tarefa) => (
                <Tarefa
                    key={tarefa.id}
                    id={tarefa.id}
                    titulo={tarefa.title}
                    concluido={tarefa.completed}
                    onToggle={onToggle}
                />
            ))}
        </div>
    );
}