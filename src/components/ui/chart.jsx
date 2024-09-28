import React, { useState, useEffect } from "react";
import { AgCharts } from "ag-charts-react";

const Chart = ({ value }) => {
    const [options, setOptions] = useState({});

    useEffect(() => {
        function getData(value) {
            switch (value) {
                case 'Java':
                    return [
                        { asset: "Stocks", previousYear: 70000, currentYear: 70000 },
                        { asset: "Bonds", previousYear: 30000, currentYear: 30000 },
                        { asset: "Cash", previousYear: 5000, currentYear: 5000 },
                        { asset: "Real Estate", previousYear: 8000, currentYear: 8000 },
                        { asset: "Commodities", previousYear: 4500, currentYear: 4500 },
                    ];
        
                case 'Python':
                    return [
                        { asset: "Stocks", previousYear: 70000, currentYear: 70000 },
                        { asset: "Bonds", previousYear: 30000, currentYear: 30000 },
                        { asset: "Cash", previousYear: 5000, currentYear: 5000 },
                        { asset: "Real Estate", previousYear: 8000, currentYear: 8000 },
                        { asset: "Commodities", previousYear: 5000, currentYear: 5000 },
                    ];
        
                case 'React':
                    return [
                        { asset: "Stocks", previousYear: 70000, currentYear: 70000 },
                        { asset: "Bonds", previousYear: 30000, currentYear: 30000 },
                        { asset: "Cash", previousYear: 5000, currentYear: 5000 },
                        { asset: "Real Estate", previousYear: 8000, currentYear: 8000 },
                        { asset: "Commodities", previousYear: 6000, currentYear: 6000 },
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
                    innerRadiusRatio: 0.8,
                    
                },
                {
                    type: "donut",
                    title: {
                        text: "Current Year",
                    },
                    legendItemKey: "asset",
                    showInLegend: false,
                    angleKey: "currentYear",
                    outerRadiusRatio: 0.7,
                    innerRadiusRatio: 0.2,
                },
            ],
        });
    }, [value]);

    return <AgCharts options={options} className="w-full md:h-[350px]" />;
};

export default Chart;
