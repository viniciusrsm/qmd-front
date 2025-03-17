export default function CardDevedores() {
    return (
        <div className="bg-white rounded-lg shadow-lg p-4 w-full">
            <div className="flex justify-between items-center">
                <div className="text-lg font-bold">Devedores desse mês</div>
                <div className="text-sm text-gray-500">Ver todos</div>
            </div>
            <div className="mt-4">
                <div className="flex justify-between items-center">
                    <div className="text-sm">Fulano de Tal</div>
                    <div className="text-sm text-red-500">R$ 100,00</div>
                </div>
                <div className="flex justify-between items-center mt-2">
                    <div className="text-sm">Beltrano de Tal</div>
                    <div className="text-sm text-red-500">R$ 50,00</div>
                </div>
                <div className="flex justify-between items-center mt-2">
                    <div className="text-sm">Ciclano de Tal</div>
                    <div className="text-sm text-red-500">R$ 25,00</div>
                </div>
            </div>
        </div>
    )
}