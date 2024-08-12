import React, { useState } from "react";
import { AgCharts } from "ag-charts-react";

const Chart = () => {
    function getData() {
        return [
            { asset: "Stocks", previousYear: 70000, currentYear: 40000 },
            { asset: "Bonds", previousYear: 30000, currentYear: 60000 },
            { asset: "Cash", previousYear: 5000, currentYear: 7000 },
            { asset: "Real Estate", previousYear: 8000, currentYear: 5000 },
            { asset: "Commodities", previousYear: 4500, currentYear: 3000 },
        ];
    }

    const [options, setOptions] = useState({
        data: getData(),
        // title: {
        //     text: "Portfolio Composition",
        // },
        // subtitle: {
        //     text: "Versus Previous Year",
        // },
        series: [
            {
                type: "donut",
                // title: {
                //     text: "Previous Year",
                // },
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

    return <AgCharts options={options} className="md:h-[350px]" />;
};

export default Chart;
