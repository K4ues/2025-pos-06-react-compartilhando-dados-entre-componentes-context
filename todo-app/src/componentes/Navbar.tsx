'use client';

import Link from 'next/link';

const Navbar = () => {
    return (
        <nav className="bg-blue-600 p-4 text-white">
            <div className="container mx-auto flex justify-between items-center">
                
                <div className="space-x-4">
                    <Link href="/" className="hover:underline">Home</Link>
                    <Link href="/tarefas" className="hover:underline">Lista de Tarefas</Link>
                    <Link href="/tarefas/nova" className="hover:underline">Nova Tarefa</Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;