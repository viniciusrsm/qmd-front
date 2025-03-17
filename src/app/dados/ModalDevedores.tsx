import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { DialogContent, DialogTitle } from '@mui/material';
import Dialog from '@mui/material/Dialog';

interface ModalDevedoresProps {
  open: boolean;
  handleClose: () => void;
}

export default function ModalDevedores({ open, handleClose }: ModalDevedoresProps) {
    // Sample data - replace with your actual data
    const devedores = [
        { nome: 'João Silva', quantidade: 2 },
        { nome: 'Maria Souza', quantidade: 1 },
        { nome: 'Carlos Ferreira', quantidade: 3 },
        { nome: 'João Silva', quantidade: 2 },
        { nome: 'Maria Souza', quantidade: 1 },
        { nome: 'Carlos Ferreira', quantidade: 3 },
        { nome: 'João Silva', quantidade: 2 },
        { nome: 'Maria Souza', quantidade: 1 },
        { nome: 'Carlos Ferreira', quantidade: 3 },
        { nome: 'João Silva', quantidade: 2 },
        { nome: 'Maria Souza', quantidade: 1 },
        { nome: 'Carlos Ferreira', quantidade: 3 },
        { nome: 'João Silva', quantidade: 2 },
        { nome: 'Maria Souza', quantidade: 1 },
        { nome: 'Carlos Ferreira', quantidade: 3 },
        { nome: 'João Silva', quantidade: 2 },
        { nome: 'Maria Souza', quantidade: 1 },
        { nome: 'Carlos Ferreira', quantidade: 3 },
        { nome: 'João Silva', quantidade: 2 },
        { nome: 'Maria Souza', quantidade: 1 },
        { nome: 'Carlos Ferreira', quantidade: 3 },
    ];
    
    return(
        <Dialog open={open} onClose={handleClose}>
            <DialogTitle fontFamily={'inherit'}>Gerenciar dívidas de #mes/ano#</DialogTitle>
            <DialogContent>
                <button>Adicionar novo registro</button>
                <div className="mt-4 overflow-x-auto">
                    <table className="min-w-full table-auto border-collapse">
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
                                <tr key={index} className="hover:bg-gray-50">
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                                        {devedor.nome}
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 text-right">
                                        {devedor.quantidade}
                                    </td>
                                    <td className='pr-4'>
                                        <button className='text-primary cursor-pointer'>
                                            <EditIcon />
                                        </button>
                                    </td>
                                    <td>
                                        <button className='text-primary cursor-pointer'>
                                            <DeleteIcon />
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </DialogContent>
        </Dialog>
    )
}