'use client';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ChartConfig, ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { Debt } from "@/types/types";
import { useMemo } from "react";
import { Bar, BarChart, Cell, ResponsiveContainer, XAxis, YAxis } from "recharts";

const debtors: Debt[] = [
    { debtorName: 'João Silva', value: 3500.00, status: 'pending' },
    { debtorName: 'Maria Souza', value: 2100.50, status: 'pending' },
    { debtorName: 'Carlos Ferreira', value: 1600.75, status: 'pending' },
    { debtorName: 'Ana Oliveira', value: 950.25, status: 'pending' },
    { debtorName: 'Pedro Santos', value: 750.00, status: 'pending' },
    { debtorName: 'Lucia Gomes', value: 950.00, status: 'pending' },
    { debtorName: 'Roberto Alves', value: 1100.00, status: 'paid' },
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884D8'];

export default function TopDebtorsChart() {
    const chartData = useMemo(() => {
        return [...debtors]
            .sort((a, b) => b.value - a.value)
            .slice(0, 5)
            .map((debtor, index) => ({
                name: debtor.debtorName,
                value: debtor.value,
                fill: COLORS[index % COLORS.length]
            }));
    }, []);

    const chartConfig: ChartConfig = useMemo(() => {
        const config: ChartConfig = {
            value: { label: "Valor" }
        };
        
        chartData.forEach((item, index) => {
            config[item.name] = {
                label: item.name,
                color: COLORS[index % COLORS.length]
            };
        });
        
        return config;
    }, [chartData]);    return (
        <Card className="h-auto min-h-[400px]">
            <CardHeader>
                <CardTitle>Maiores Devedores</CardTitle>
            </CardHeader>
            <CardContent className="h-[300px] overflow-hidden">
                <ChartContainer config={chartConfig} className="h-full w-full">
                    <ResponsiveContainer width="99%" height="100%">
                        <BarChart 
                            data={chartData} 
                            layout="vertical"
                            margin={{ top: 5, right: 5, left: 0, bottom: 5 }}
                        >
                            <XAxis 
                                type="number"
                                tickFormatter={(value) => 
                                    `R$ ${value.toLocaleString('pt-BR', { 
                                        notation: 'compact',
                                        maximumFractionDigits: 1
                                    })}`
                                }
                                tick={{ fontSize: 12 }}
                            />
                            <YAxis 
                                type="category" 
                                dataKey="name" 
                                width={80}
                                tick={{ fontSize: 12 }}
                                tickFormatter={(value) => value.length > 10 ? `${value.substring(0, 10)}...` : value}
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
                                dataKey="value" 
                                radius={[0, 4, 4, 0]}
                            >
                                {chartData.map((entry, index) => (
                                    <Cell key={`cell-${index}`} fill={entry.fill} />
                                ))}
                            </Bar>
                        </BarChart>
                    </ResponsiveContainer>
                </ChartContainer>
            </CardContent>
        </Card>
    );
}
