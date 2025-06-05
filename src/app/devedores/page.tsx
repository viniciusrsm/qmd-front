import PageIndicator from "../../components/PageIndicator";
import CardDebtors from "../dividas/CardDevedores";

export default function Debtors() {
    return (
        <>
            <PageIndicator />
            <div className="px-6 py-4">
                <h1 className="text-2xl font-bold mb-6">Devedores</h1>
                <div className="mb-6">
                    <CardDebtors title="Lista de Devedores" />
                </div>
            </div>
        </>
    )
}