'use client';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ChartConfig, ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { Debt } from "@/types/types";
import { useMemo } from "react";
import { Bar, BarChart, CartesianGrid, ResponsiveContainer, XAxis, YAxis } from "recharts";

const debts: Debt[] = [
    { debtorName: 'João Silva', value: 1200.00, status: 'pending', date: '2023-12-15' },
    { debtorName: 'Maria Souza', value: 850.50, status: 'paid', date: '2023-12-20' },
    { debtorName: 'Carlos Ferreira', value: 1600.75, status: 'pending', date: '2024-01-05' },
    { debtorName: 'Ana Oliveira', value: 450.25, status: 'paid', date: '2024-01-10' },
    { debtorName: 'Pedro Santos', value: 750.00, status: 'pending', date: '2024-02-01' },
    { debtorName: 'Lucia Gomes', value: 950.00, status: 'pending', date: '2024-02-15' },
    { debtorName: 'Roberto Alves', value: 1100.00, status: 'paid', date: '2024-03-05' },
    { debtorName: 'Julia Lima', value: 600.00, status: 'pending', date: '2024-03-20' },
    { debtorName: 'Fernando Costa', value: 800.00, status: 'pending', date: '2024-04-10' },
    { debtorName: 'Isabela Martins', value: 700.00, status: 'paid', date: '2024-04-25' },
    { debtorName: 'Ricardo Pereira', value: 950.00, status: 'pending', date: '2024-05-08' },
    { debtorName: 'Camila Santos', value: 1050.00, status: 'pending', date: '2024-05-20' },
];

const chartConfig: ChartConfig = {
    pending: {
        label: "Pendente",
        color: "#ff8042"
    },
    paid: {
        label: "Pago",
        color: "#00c49f"
    }
};

export default function DebtStatusBarChart() {
    const chartData = useMemo(() => {
        const data: any[] = [];
        const months: { [key: string]: { name: string, pending: number, paid: number } } = {};
        
        debts.forEach(debt => {
            if (!debt.date) return;
            
            const date = new Date(debt.date);
            const monthYear = `${date.getMonth() + 1}-${date.getFullYear()}`;
            const monthName = date.toLocaleString('pt-BR', { month: 'short' });
            
            if (!months[monthYear]) {
                months[monthYear] = { 
                    name: monthName.charAt(0).toUpperCase() + monthName.slice(1), 
                    pending: 0, 
                    paid: 0 
                };
            }
            
            if (debt.status === 'pending') {
                months[monthYear].pending += debt.value;
            } else if (debt.status === 'paid') {
                months[monthYear].paid += debt.value;
            }
        });
        
        Object.keys(months).forEach(key => {
            const [month, year] = key.split('-');
            data.push({
                ...months[key],
                sortKey: parseInt(year) * 100 + parseInt(month)
            });
        });
        
        return data.sort((a, b) => a.sortKey - b.sortKey).slice(-6);
    }, []);    return (
        <Card className="h-auto min-h-[400px]">
            <CardHeader>
                <CardTitle>Status de Dívidas por Mês</CardTitle>
            </CardHeader>
            <CardContent className="h-[300px] overflow-hidden">
                <ChartContainer config={chartConfig} className="h-full w-full">
                    <ResponsiveContainer width="99%" height="100%">
                        <BarChart data={chartData} margin={{ top: 20, right: 5, left: 0, bottom: 5 }}>
                            <CartesianGrid strokeDasharray="3 3" vertical={false} />
                            <XAxis dataKey="name" tick={{ fontSize: 12 }} />
                            <YAxis 
                                tickFormatter={(value) => 
                                    `R$ ${value.toLocaleString('pt-BR', { 
                                        notation: 'compact',
                                        maximumFractionDigits: 1
                                    })}`
                                }
                                tick={{ fontSize: 12 }}
                                width={45}
                            />
                            <ChartTooltip
                                content={
                                    <ChartTooltipContent 
                                        formatter={(value: number) => 
                                            `R$ ${value.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}`
                                        }
                                    />
                                }
                            />
                            <Bar 
                                dataKey="pending" 
                                stackId="a" 
                                name="Pendente" 
                                fill={chartConfig.pending.color as string} 
                            />
                            <Bar 
                                dataKey="paid" 
                                stackId="a" 
                                name="Pago" 
                                fill={chartConfig.paid.color as string} 
                            />
                        </BarChart>
                    </ResponsiveContainer>
                </ChartContainer>
            </CardContent>
        </Card>
    );
}
