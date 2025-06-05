import { Button } from '@/components/ui/button';
import { Debt } from '@/types/types';
import Dialog from '@mui/material/Dialog';
import { useState } from 'react';

interface ModalDebtorsProps {
  open: boolean;
  handleClose: () => void;
  divida: Debt | null;
}

export default function ModalDebt({ open, handleClose, divida }: ModalDebtorsProps) {
    const [isEditing, setIsEditing] = useState(false);
    const [editedValue, setEditedValue] = useState(divida?.value || '');

    const editDebt = () => {
        setIsEditing(!isEditing);
    };

    const deleteDebt = () => {
        // Delete divida
    };

    return(
        <Dialog open={open} onClose={handleClose}>
            <div className='p-4 w-60 md:min-w-80'>
                <p className='font-bold text-lg'>Dívida de:</p>
                {isEditing ? (
                    <input
                        type="text"
                        value={editedValue}
                        onChange={(e) => setEditedValue(e.target.value)}
                        className="text-center font-bold text-2xl text-primary border rounded p-1 w-full"
                    />
                ) : (
                    <p className='text-center font-bold text-2xl text-primary'>{divida?.value} R$</p>
                )}
                <p className='font-bold mt-6'>Devedor:</p>
                <p className='truncate'>{divida?.debtorName}</p>
                <div className='gap-2 flex justify-center'>
                    <Button onClick={editDebt}>{isEditing ? 'Confirmar' : 'Editar'}</Button>
                    <Button onClick={deleteDebt}>{isEditing ? 'Cancelar' : 'Excluir'}</Button>
                </div>
            </div>
        </Dialog>
    )
}