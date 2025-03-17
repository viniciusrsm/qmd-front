'use client'
import { useState } from "react";
import ModalDevedores from "./ModalDevedores";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

export default function CardDevedores() {
    const [modalOpen, setModalOpen] = useState(false);
    const devedores = [
        { nome: 'João Silva dahwhd awd  awgv dagvdwg ahwdbhawb aw dvagwvd adg avwgdv adav dgvwg', quantidade: 10000.51 },
        { nome: 'Maria Souza', quantidade: 1 },
        { nome: 'Carlos Ferreira', quantidade: 3 },
        { nome: 'João Silva', quantidade: 10000.51 },
        { nome: 'Maria Souza', quantidade: 1 },
        { nome: 'Carlos Ferreira', quantidade: 3 },
        { nome: 'João Silva', quantidade: 200.51 },
        { nome: 'Maria Souza', quantidade: 1 },
        { nome: 'Carlos Ferreira', quantidade: 3 },
        { nome: 'João Silva', quantidade: 200.51 },
        { nome: 'Maria Souza', quantidade: 1 },
        { nome: 'Carlos Ferreira', quantidade: 3 },
        { nome: 'João Silva', quantidade: 200.51 },
        { nome: 'Maria Souza', quantidade: 1 },
        { nome: 'Carlos Ferreira', quantidade: 3 },
        { nome: 'João Silva', quantidade: 200.51 },
        { nome: 'Maria Souza', quantidade: 1 },
        { nome: 'Carlos Ferreira', quantidade: 3 },
        { nome: 'João Silva', quantidade: 200.51 },
        { nome: 'Maria Souza', quantidade: 1 },
        { nome: 'Carlos Ferreira', quantidade: 3 },
    ];

    return (
        <div className="bg-white rounded-lg shadow-lg p-4 w-full">
            <div className="text-lg font-bold">
                Dívidas desse mês
            </div>
            <div className="mt-4 overflow-x-scroll max-h-48">
                <table className="min-w-full overflow-scroll table-auto border-collapse">
                    <thead>
                        <tr className="border-b">
                            <th className="px-6 py-3 text-left text-xs font-medium  uppercase tracking-wider">
                                Nome
                            </th>
                            <th className="px-6 py-3 text-right text-xs font-medium  uppercase tracking-wider">
                                Valor
                            </th>
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                        {devedores.map((devedor, index) => (
                            <tr key={index} className="hover:bg-gray-50 cursor-pointer">
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 max-w-xs overflow-hidden overflow-ellipsis">
                                    {devedor.nome}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 text-right">
                                    {devedor.quantidade}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            
            <div className="flex justify-center">
                <button onClick={() => setModalOpen(!modalOpen)} className="bg-primary cursor-pointer py-1 px-2 rounded-lg shadow-lg text-white font-bold">
                    Gerenciar
                </button>
                <ModalDevedores open={modalOpen} handleClose={() => setModalOpen(false)} />
            </div>
        </div>
    )
}