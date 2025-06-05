'use client'
import { Button } from "@/components/ui/button";
import { Debt } from "@/types/types";
import { useState } from "react";
import ModalDebt from "./ModalDivida";

interface CardDebtorsProps {
    title?: string;
}

export default function CardDebtors({ title = "Dívidas desse mês" }: CardDebtorsProps) {
    const [modalOpen, setModalOpen] = useState(false);
    const [selectedDivida, setSelectedDivida] = useState<Debt | null>(null);

    const debtors: Debt[] = [
        { debtorName: 'João Silva dahwhd awd  awgv dagvdwg ahwdbhawb aw dvagwvd adg avwgdv adav dgvwg', value: 10000.51 },
        { debtorName: 'Maria Souza', value: 1 },
        { debtorName: 'Carlos Ferreira', value: 3 },
        { debtorName: 'João Silva', value: 100000000000.51 },
        { debtorName: 'Maria Souza', value: 1 },
        { debtorName: 'Carlos Ferreira', value: 3 },
        { debtorName: 'João Silva', value: 200.51 },
        { debtorName: 'Maria Souza', value: 1 },
        { debtorName: 'Carlos Ferreira', value: 3 },
        { debtorName: 'João Silva', value: 200.51 },
        { debtorName: 'Maria Souza', value: 1 },
        { debtorName: 'Carlos Ferreira', value: 3 },
        { debtorName: 'João Silva', value: 200.51 },
        { debtorName: 'Maria Souza', value: 1 },
        { debtorName: 'Carlos Ferreira', value: 3 },
        { debtorName: 'João Silva', value: 200.51 },
        { debtorName: 'Maria Souza', value: 1 },
        { debtorName: 'Carlos Ferreira', value: 3 },
        { debtorName: 'João Silva', value: 200.51 },
        { debtorName: 'Maria Souza', value: 1 },
        { debtorName: 'Carlos Ferreira', value: 3 },
    ];

    const openModalDivida = (divida: Debt) => {
        setModalOpen(true);
        setSelectedDivida(divida);
    };    return (
        <div className="bg-white rounded-lg shadow-lg p-4 w-full">
            <div className="text-lg font-bold">
                {title}
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
                        {debtors.map((divida, index) => (
                            <tr key={index} onClick={() => openModalDivida(divida)} className="hover:bg-gray-50 cursor-pointer">
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 max-w-xs overflow-hidden overflow-ellipsis">
                                    {divida.debtorName}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 text-right">
                                    {divida.value}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <div className="flex justify-center">
                <Button variant={"default"}>Nova dívida</Button>
            </div>
            <ModalDebt open={modalOpen} handleClose={() => setModalOpen(false)} divida={selectedDivida!} />
        </div>
    )
}