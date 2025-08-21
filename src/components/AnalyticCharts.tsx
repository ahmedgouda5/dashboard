"use client";

import { Bar, BarChart, CartesianGrid, XAxis, Pie, PieChart } from "recharts";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  type ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

export const description = "Bar + Pie chart example";

const chartData = [
  { month: "January", desktop: 186 },
  { month: "February", desktop: 305 },
  { month: "March", desktop: 237 },
  { month: "April", desktop: 73 },
  { month: "May", desktop: 209 },
  { month: "June", desktop: 214 },
  { month: "July", desktop: 190 },
  { month: "August", desktop: 220 },
  { month: "September", desktop: 250 },
  { month: "October", desktop: 300 },
  { month: "November", desktop: 280 },
  { month: "December", desktop: 320 },
];

const pieData = [
  { browser: "chrome", visitors: 275 },
  { browser: "safari", visitors: 200  },
  { browser: "firefox", visitors: 187},
  { browser: "edge", visitors: 173 },
  { browser: "other", visitors: 90 },
];

const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "var(--chart-1)",
  },
} satisfies ChartConfig;

export function AnalyticCharts() {
  return (
    <div className="mt-4 grid md:grid-cols-2 gap-6">
      <Card className="flex flex-col bg-inherit">
        <CardHeader className="items-center pb-0">
          <CardTitle>Conversions</CardTitle>
        </CardHeader>
        <CardContent className="flex-1 pb-0">
          <ChartContainer
            config={chartConfig}
            className="mx-auto aspect-square max-h-[250px]"
          >
            <PieChart>
              <ChartTooltip
                cursor={false}
                content={<ChartTooltipContent hideLabel />}
              />
              <Pie
                data={pieData}
                dataKey="visitors"
                nameKey="browser"
                fill="#007bff" 
              />
            </PieChart>
          </ChartContainer>
        </CardContent>
        <CardFooter className="flex-col gap-2 text-sm">
          <div className="flex items-center gap-20 justify-between">
            <div className="text-center"><h3 className="text-gray-500 text-lg">this week</h3> <span className="font-semibold text-md">23.5K</span></div>
            <div className="text-center"><h3 className="text-gray-500 text-lg">last week</h3> <span className="font-semibold text-md">41.04K</span></div>
          </div>
          <button className="mt-2 w-full rounded-md border border-gray-300 bg-gray-300 px-4 py-2 text-sm font-semibold text-gray-700 shadow-sm hover:bg-gray-50">View Details</button>
        </CardFooter>
      </Card>

      <Card className="bg-inherit">
        <CardHeader className="flex justify-between items-start space-y-1">
          <CardTitle>Performance</CardTitle>
          <CardDescription>
            January - December {new Date().getFullYear()}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <ChartContainer config={chartConfig}>
            <BarChart data={chartData} barSize={30} barCategoryGap="25%">
              <CartesianGrid vertical={false} />
              <XAxis
                dataKey="month"
                tickLine={false}
                tickMargin={10}
                axisLine={false}
                tickFormatter={(value) => value.slice(0, 3)}
              />
              <ChartTooltip
                cursor={false}
                content={<ChartTooltipContent indicator="dashed" />}
              />
              <Bar dataKey="desktop" fill="#007bff" radius={4} />
            </BarChart>
          </ChartContainer>
        </CardContent>
      </Card>
    </div>
  );
}
