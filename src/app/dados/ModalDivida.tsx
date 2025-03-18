import { Divida } from '@/interfaces/interfaces';
import Dialog from '@mui/material/Dialog';
import { useState } from 'react';

interface ModalDevedoresProps {
  open: boolean;
  handleClose: () => void;
  divida: Divida | null;
}

export default function ModalDivida({ open, handleClose, divida }: ModalDevedoresProps) {
    const [isEditing, setIsEditing] = useState(false);
    const [editedQuantidade, setEditedQuantidade] = useState(divida?.quantidade || '');

    const editDivida = () => {
        setIsEditing(!isEditing);
    };

    const deleteDivida = () => {
        // Delete divida
    };

    return(
        <Dialog open={open} onClose={handleClose}>
            <div className='p-4 w-60 md:min-w-80'>
                <p className='font-bold text-lg'>Dívida de:</p>
                {isEditing ? (
                    <input
                        type="text"
                        value={editedQuantidade}
                        onChange={(e) => setEditedQuantidade(e.target.value)}
                        className="text-center font-bold text-2xl text-primary border rounded p-1 w-full"
                    />
                ) : (
                    <p className='text-center font-bold text-2xl text-primary'>{divida?.quantidade} R$</p>
                )}
                <p className='font-bold mt-6'>Devedor:</p>
                <p className='truncate'>{divida?.devedor}</p>
                <div className='gap-2 flex justify-center'>
                    <button
                        className='border-2 border-primary bg-primary text-white rounded-lg p-2 mt-4'
                        onClick={editDivida}
                    >
                        {isEditing ? 'Confirmar' : 'Editar'}
                    </button>
                    <button className='border-2 border-primary text-primary rounded-lg p-2 mt-4'>
                        {isEditing ? 'Cancelar' : 'Excluir'}
                    </button>
                </div>
            </div>
            {/* <DialogTitle className='mb-0' fontFamily={'inherit'}>Dívida de:</DialogTitle>
            <DialogContent className='flex flex-col'>
                <p className='text-center font-bold text-2xl text-primary'>{divida?.quantidade}</p>
                <p></p>
                <p>{divida?.devedor}</p>
            </DialogContent> */}
        </Dialog>
    )
}