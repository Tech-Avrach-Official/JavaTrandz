import React, { useState, useEffect } from "react";
import { AgCharts } from "ag-charts-react";

const Chart = ({ value }) => {
    const [options, setOptions] = useState({});

    useEffect(() => {
        function getData(value) {
            switch (value) {
                case 'Java':
                    return [
                        { asset: "Stocks", previousYear: 70000, currentYear: 40000 },
                        { asset: "Bonds", previousYear: 30000, currentYear: 60000 },
                        { asset: "Cash", previousYear: 5000, currentYear: 7000 },
                        { asset: "Real Estate", previousYear: 8000, currentYear: 5000 },
                        { asset: "Commodities", previousYear: 4500, currentYear: 3000 },
                    ];
        
                case 'Python':
                    return [
                        { asset: "Stocks", previousYear: 50000, currentYear: 30000 },
                        { asset: "Bonds", previousYear: 70000, currentYear: 40000 },
                        { asset: "Cash", previousYear: 6000, currentYear: 7000 },
                        { asset: "Real Estate", previousYear: 2000, currentYear: 4000 },
                        { asset: "Commodities", previousYear: 4500, currentYear: 3000 },
                    ];
        
                case 'React':
                    return [
                        { asset: "Stocks", previousYear: 80000, currentYear: 60000 },
                        { asset: "Bonds", previousYear: 10000, currentYear: 50000 },
                        { asset: "Cash", previousYear: 7000, currentYear: 2000 },
                        { asset: "Real Estate", previousYear: 85000, currentYear: 5500 },
                        { asset: "Commodities", previousYear: 5500, currentYear: 3000 },
                    ];
        
                default:
                    return [
                        { asset: "Stocks", previousYear: 70000, currentYear: 40000 },
                        { asset: "Bonds", previousYear: 30000, currentYear: 60000 },
                        { asset: "Cash", previousYear: 5000, currentYear: 7000 },
                        { asset: "Real Estate", previousYear: 8000, currentYear: 5000 },
                        { asset: "Commodities", previousYear: 4500, currentYear: 3000 },
                    ];
            }
        }

        setOptions({
            data: getData(value),
            series: [
                {
                    type: "donut",
                    calloutLabelKey: "asset",
                    legendItemKey: "asset",
                    angleKey: "previousYear",
                    outerRadiusRatio: 1,
                    innerRadiusRatio: 0.9,
                },
                {
                    type: "donut",
                    title: {
                        text: "Current Year",
                    },
                    legendItemKey: "asset",
                    showInLegend: false,
                    angleKey: "currentYear",
                    outerRadiusRatio: 0.6,
                    innerRadiusRatio: 0.2,
                },
            ],
        });
    }, [value]);

    return <AgCharts options={options} className="md:h-[350px]" />;
};

export default Chart;
