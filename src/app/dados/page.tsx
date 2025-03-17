import PageIndicator from "../components/PageIndicator";
import CardDevedores from "./CardDevedores";

export default function Dados() {
    const currentMonthYear = new Date().toLocaleString('default', { month: 'short', year: 'numeric' });

    return (
        <>
            <PageIndicator />
            <div className="flex md:flex-row flex-col justify-center gap-4 mt-4 px-10">
                <CardDevedores />
                <CardDevedores />
            </div>
        </>
    )
}