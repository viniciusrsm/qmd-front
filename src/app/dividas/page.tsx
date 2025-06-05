import PageIndicator from "../../components/PageIndicator";
import DebtStatusBarChart from "./charts/DebtStatusBarChart";
import TopDebtorsChart from "./charts/TopDebtorsChart";
import DashboardSummaryCard from "./DebtsCard";
import { FilterableDebtTable } from "./FilterableDebtTable";

export default function Debts() {
    return (
        <>
            <PageIndicator />
            <div className="px-6 py-4">
                <h1 className="text-2xl font-bold mb-6">Dashboard de Dívidas</h1>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                    <DashboardSummaryCard 
                        title="Total de Dívidas" 
                        value="R$ 10,425.51" 
                        trend="+5.3%" 
                        trendDirection="up" 
                    />
                    <DashboardSummaryCard 
                        title="Dívidas Pendentes" 
                        value="R$ 8,230.45" 
                        trend="+2.1%" 
                        trendDirection="up" 
                    />
                    <DashboardSummaryCard 
                        title="Dívidas Pagas" 
                        value="R$ 2,195.06" 
                        trend="+12.7%" 
                        trendDirection="up" 
                    />
                </div>
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
                    <DebtStatusBarChart />
                    <TopDebtorsChart />
                </div>
                
                <div className="mb-6">
                    <FilterableDebtTable />
                </div>
            </div>
        </>
    )
}