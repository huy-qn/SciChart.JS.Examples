import * as React from "react";
import { SciChartSurface } from "scichart";
import { NumericAxis } from "scichart/Charting/Visuals/Axis/NumericAxis";
import { NumberRange } from "scichart/Core/NumberRange";
import { XyDataSeries } from "scichart/Charting/Model/XyDataSeries";
import { StackedColumnRenderableSeries } from "scichart/Charting/Visuals/RenderableSeries/StackedColumnRenderableSeries";
import { StackedColumnCollection } from "scichart/Charting/Visuals/RenderableSeries/StackedColumnCollection";
import { ZoomExtentsModifier } from "scichart/Charting/ChartModifiers/ZoomExtentsModifier";
import { ZoomPanModifier } from "scichart/Charting/ChartModifiers/ZoomPanModifier";
import { MouseWheelZoomModifier } from "scichart/Charting/ChartModifiers/MouseWheelZoomModifier";
import { ELegendOrientation, ELegendPlacement } from "scichart/Charting/Visuals/Legend/SciChartLegendBase";
import { LegendModifier } from "scichart/Charting/ChartModifiers/LegendModifier";
import { ENumericFormat } from "scichart/types/NumericFormat";
import classes from "../../../../Examples/Examples.module.scss";
import { WaveAnimation } from "scichart/Charting/Visuals/RenderableSeries/Animations/WaveAnimation";
import {appTheme} from "../../../theme";

const xValues = [1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999, 2000, 2001, 2002, 2003];
const tomatoesData = [7, 30, 27, 24, 21, 15, 17, 26, 22, 28, 21, 22];
const cucumberData = [16, 10, 9, 8, 22, 14, 12, 27, 25, 23, 17, 17];
const pepperData = [7, 24, 21, 11, 19, 17, 14, 27, 26, 22, 28, 16];

const divElementId = "chart";

const drawExample = async () => {
    // Create a SciChartSurface
    const { wasmContext, sciChartSurface } = await SciChartSurface.create(divElementId, {
        theme: appTheme.SciChartJsTheme
    });

    // Create XAxis, YAxis
    sciChartSurface.xAxes.add(
        new NumericAxis(wasmContext, {
            labelFormat: ENumericFormat.Decimal,
            labelPrecision: 0,
            autoTicks: false,
            majorDelta: 1,
            minorDelta: 1,
            drawMajorGridLines: false,
            drawMinorGridLines: false,
            drawMajorBands: false,
            axisTitle: "Year"
        })
    );
    sciChartSurface.yAxes.add(
        new NumericAxis(wasmContext, {
            labelPrecision: 0,
            axisTitle: "Produce sold (Tonnes)"
        })
    );

    // Create some RenderableSeries - for each part of the stacked column
    // Notice the stackedGroupId. This defines if series are stacked (same), or grouped side by side (different)
    const rendSeries1 = new StackedColumnRenderableSeries(wasmContext, {
        dataSeries: new XyDataSeries(wasmContext, { xValues, yValues: tomatoesData, dataSeriesName: "Tomato" }),
        fill: appTheme.VividPink,
        stroke: appTheme.DarkIndigo,
        strokeThickness: 2,
        stackedGroupId: "Group0"
    });

    const rendSeries2 = new StackedColumnRenderableSeries(wasmContext, {
        dataSeries: new XyDataSeries(wasmContext, { xValues, yValues: cucumberData, dataSeriesName: "Cucumber" }),
        fill: appTheme.VividSkyBlue,
        stroke: appTheme.DarkIndigo,
        strokeThickness: 2,
        stackedGroupId: "Group1"
    });

    const rendSeries3 = new StackedColumnRenderableSeries(wasmContext, {
        dataSeries: new XyDataSeries(wasmContext, { xValues, yValues: pepperData, dataSeriesName: "Pepper" }),
        fill: appTheme.VividOrange,
        stroke: appTheme.DarkIndigo,
        strokeThickness: 2,
        stackedGroupId: "Group2"
    });

    // To add the series to the chart, put them in a StackedColumnCollection
    const stackedColumnCollection = new StackedColumnCollection(wasmContext);
    stackedColumnCollection.dataPointWidth = 0.5;
    stackedColumnCollection.add(rendSeries1, rendSeries2, rendSeries3);
    stackedColumnCollection.animation = new WaveAnimation({ duration: 1000, fadeEffect: true });

    // Add the Stacked Column collection to the chart
    sciChartSurface.renderableSeries.add(stackedColumnCollection);

    // Add some interactivity modifiers
    sciChartSurface.chartModifiers.add(new ZoomExtentsModifier(), new ZoomPanModifier(), new MouseWheelZoomModifier());

    // Add a legend to the chart to show the series
    sciChartSurface.chartModifiers.add(
        new LegendModifier({
            placement: ELegendPlacement.TopLeft,
            orientation: ELegendOrientation.Vertical,
            showLegend: true,
            showCheckboxes: false,
            showSeriesMarkers: true
        })
    );

    sciChartSurface.zoomExtents();

    return { wasmContext, sciChartSurface };
};

export default function StackedColumnSideBySide() {
    const [sciChartSurface, setSciChartSurface] = React.useState<SciChartSurface>();

    React.useEffect(() => {
        (async () => {
            const res = await drawExample();
            setSciChartSurface(res.sciChartSurface);
        })();
        // Delete sciChartSurface on unmount component to prevent memory leak
        return () => sciChartSurface?.delete();
    }, []);

    return <div id={divElementId} className={classes.ChartWrapper} />;
}
