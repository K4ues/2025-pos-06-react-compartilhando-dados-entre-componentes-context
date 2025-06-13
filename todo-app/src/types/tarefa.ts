export interface Tarefa {
    id: number;
    title: string;
    completed: boolean;
    userId?: number;
}

export interface TarefaProps {
    id: number;
    titulo: string;
    concluido: boolean;
    onToggle: (id: number, completed: boolean) => void;
}

export type TarefaContextType = {
    tarefas: Tarefa[];
    adicionarTarefa: (tarefa: Tarefa) => void;
    atualizarTarefa: (id: number, completed: boolean) => void;
    carregarTarefas: () => Promise<void>;
};

