'use client'
import { Divida } from "@/interfaces/interfaces";
import { useState } from "react";
import ButtonPrimary from "../components/ButtonPrimary";
import ModalDivida from "./ModalDivida";

export default function CardDevedores() {
    const [modalOpen, setModalOpen] = useState(false);
    const [selectedDivida, setSelectedDivida] = useState<Divida | null>(null);

    const devedores: Divida[] = [
        { devedor: 'João Silva dahwhd awd  awgv dagvdwg ahwdbhawb aw dvagwvd adg avwgdv adav dgvwg', quantidade: 10000.51 },
        { devedor: 'Maria Souza', quantidade: 1 },
        { devedor: 'Carlos Ferreira', quantidade: 3 },
        { devedor: 'João Silva', quantidade: 100000000000.51 },
        { devedor: 'Maria Souza', quantidade: 1 },
        { devedor: 'Carlos Ferreira', quantidade: 3 },
        { devedor: 'João Silva', quantidade: 200.51 },
        { devedor: 'Maria Souza', quantidade: 1 },
        { devedor: 'Carlos Ferreira', quantidade: 3 },
        { devedor: 'João Silva', quantidade: 200.51 },
        { devedor: 'Maria Souza', quantidade: 1 },
        { devedor: 'Carlos Ferreira', quantidade: 3 },
        { devedor: 'João Silva', quantidade: 200.51 },
        { devedor: 'Maria Souza', quantidade: 1 },
        { devedor: 'Carlos Ferreira', quantidade: 3 },
        { devedor: 'João Silva', quantidade: 200.51 },
        { devedor: 'Maria Souza', quantidade: 1 },
        { devedor: 'Carlos Ferreira', quantidade: 3 },
        { devedor: 'João Silva', quantidade: 200.51 },
        { devedor: 'Maria Souza', quantidade: 1 },
        { devedor: 'Carlos Ferreira', quantidade: 3 },
    ];

    const openModalDivida = (divida: Divida) => {
        setModalOpen(true);
        setSelectedDivida(divida);
    };

    return (
        <div className="bg-white rounded-lg shadow-lg p-4 w-full">
            <div className="text-lg font-bold">
                Dívidas desse mês
            </div>
            <div className="mt-4 overflow-y-auto max-h-48">
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
                        {devedores.map((divida, index) => (
                            <tr key={index} onClick={() => openModalDivida(divida)} className="hover:bg-gray-50 cursor-pointer">
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 max-w-xs overflow-hidden overflow-ellipsis">
                                    {divida.devedor}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 text-right">
                                    {divida.quantidade}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <div className="flex justify-center">
                <ButtonPrimary text="Nova dívida" style="" />
            </div>
            <ModalDivida open={modalOpen} handleClose={() => setModalOpen(false)} divida={selectedDivida!} />
        </div>
    )
}