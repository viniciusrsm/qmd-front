'use client';
import { Card, CardContent } from "@/components/ui/card";

interface DashboardSummaryCardProps {
    title: string;
    value: string;
    trend: string;
    trendDirection: 'up' | 'down' | 'neutral';
}

export default function DashboardSummaryCard({ 
    title, 
    value, 
}: DashboardSummaryCardProps) {
    return (
        <Card className="hover:shadow-md transition-shadow">
            <CardContent>
                <div className="flex justify-between items-start">
                    <div>
                        <p className="text-sm text-muted-foreground">{title}</p>
                        <p className="text-2xl font-bold mt-1">{value}</p>
                    </div>
                </div>
            </CardContent>
        </Card>
    );
}
