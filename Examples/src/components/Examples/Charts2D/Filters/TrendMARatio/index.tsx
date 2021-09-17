import { ButtonGroup } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import { ToggleButton, ToggleButtonGroup } from "@material-ui/lab";
import * as React from "react";
import { SciChartSurface } from "scichart";
import { RolloverModifier } from "scichart/Charting/ChartModifiers/RolloverModifier";
import { ZoomExtentsModifier } from "scichart/Charting/ChartModifiers/ZoomExtentsModifier";
import { ZoomPanModifier } from "scichart/Charting/ChartModifiers/ZoomPanModifier";
import { SeriesInfo } from "scichart/Charting/Model/ChartData/SeriesInfo";
import { XySeriesInfo } from "scichart/Charting/Model/ChartData/XySeriesInfo";
import { XyMovingAverageFilter } from "scichart/Charting/Model/Filters/XyMovingAverageFilter";
import { XyLinearTrendFilter } from "scichart/Charting/Model/Filters/XyLinearTrendFilter";
import { XyDataSeries } from "scichart/Charting/Model/XyDataSeries";
import { NumericAxis } from "scichart/Charting/Visuals/Axis/NumericAxis";
import { FastLineRenderableSeries } from "scichart/Charting/Visuals/RenderableSeries/FastLineRenderableSeries";
import { HitTestInfo } from "scichart/Charting/Visuals/RenderableSeries/HitTest/HitTestInfo";
import { EAutoRange } from "scichart/types/AutoRange";
import { ENumericFormat } from "scichart/types/NumericFormat";
import { formatNumber } from "scichart/utils/number";
import classes from "../../../Examples.module.scss";
import { XyRatioFilter } from "scichart/Charting/Model/Filters/XyRatioFilter";

export const divElementId = "chart";

const getRandomData = (start: number, scale: number, count: number) => {
    const data: number[] = [];
    let y = start;
    for (let i = 0; i < count; i++) {
        y = y + Math.random() * scale - scale / 2;
        data.push(y);
    }
    return data;
};

const y1Data = getRandomData(50, 4, 200);
const y2Data = getRandomData(40, 2, 200);

export const drawExample = async (useRatio: boolean) => {
    const { sciChartSurface, wasmContext } = await SciChartSurface.create(divElementId);
    const xAxis = new NumericAxis(wasmContext);
    sciChartSurface.xAxes.add(xAxis);

    const yAxis = new NumericAxis(wasmContext, {
        autoRange: EAutoRange.Always,
    });

    sciChartSurface.yAxes.add(yAxis);

    const lineSeries = new FastLineRenderableSeries(wasmContext, {
        strokeThickness: 3,
        stroke: "white"
    });
    const ma1Series = new FastLineRenderableSeries(wasmContext, {
        stroke: "red"
    });
    const trend1Series = new FastLineRenderableSeries(wasmContext, {
        stroke: "blue"
    });
    sciChartSurface.renderableSeries.add(lineSeries, ma1Series, trend1Series);

    const xValues = Array.apply(null, Array(y1Data.length)).map((x, i) => i);
    const dataSeries1 = new XyDataSeries(wasmContext, { xValues, yValues: y1Data });
    const dataSeries2 = new XyDataSeries(wasmContext, { xValues, yValues: y2Data });

    if (useRatio) {
        const ratio = new XyRatioFilter(dataSeries1, { divisorSeries: dataSeries2 });
        lineSeries.dataSeries = ratio;
        ma1Series.dataSeries = new XyMovingAverageFilter(ratio, { length: 10 });
        trend1Series.dataSeries =  new XyLinearTrendFilter(ratio);
    } else {
        lineSeries.dataSeries = dataSeries1;
        ma1Series.dataSeries = new XyMovingAverageFilter(dataSeries1, { length: 10 });
        trend1Series.dataSeries =  new XyLinearTrendFilter(dataSeries1);
        const lineSeries2 = new FastLineRenderableSeries(wasmContext, {
            strokeThickness: 3,
            stroke: "green",
            dataSeries: dataSeries2
        });
        sciChartSurface.renderableSeries.add(lineSeries2);
    }

    sciChartSurface.chartModifiers.add(new ZoomPanModifier());
    sciChartSurface.chartModifiers.add(new ZoomExtentsModifier());
    sciChartSurface.chartModifiers.add(new RolloverModifier());

    sciChartSurface.zoomExtents();
    return { sciChartSurface, wasmContext, dataSeries1, dataSeries2 };
};

let scs: SciChartSurface;
let dataSeries1: XyDataSeries;
let dataSeries2: XyDataSeries;

export default function TrendMARatio() {
    const [useRatio, setUseRatio] = React.useState(true);

    React.useEffect(() => {
        (async () => {
            const res = await drawExample(useRatio);
            scs = res.sciChartSurface;
            dataSeries1 = res.dataSeries1;
            dataSeries2 = res.dataSeries2;
        })();
        // Delete sciChartSurface on unmount component to prevent memory leak
        return () => {
            scs?.delete();
        };
    }, [useRatio]);

    const handleUseRatio = () => {
        const newValue = !useRatio;
        setUseRatio(newValue);
    };

    const handleAddData = () => {
        const xValues = Array.apply(null, Array(100)).map((x, i) => i + dataSeries1.count());
        // Must append to the divisor series first, 
        // otherwise the series will not be the same length when the filter calculates on append to the main series
        const lasty2 = dataSeries2.getNativeYValues().get(dataSeries2.count() - 1);
        const newy2 = getRandomData(lasty2, 4, 100);
        y2Data.push(...newy2);
        dataSeries2.appendRange(xValues, newy2);

        const lasty1 = dataSeries1.getNativeYValues().get(dataSeries1.count() - 1);
        const newy1 = getRandomData(lasty1, 2, 100);
        y1Data.push(...newy1);
        dataSeries1.appendRange(xValues, newy1);
    };

    return (
        <div>
            <div id={divElementId} style={{ width: "75%", marginBottom: 20, touchAction: "none" }} />
            
            <div className={classes.ButtonsWrapper}>
                <ToggleButtonGroup 
                    exclusive 
                    value={useRatio}
                    onChange={handleUseRatio}
                    size="medium" color="primary" aria-label="small outlined button group">
                    <ToggleButton value={true} >
                        Show Ratio
                    </ToggleButton>
                    <ToggleButton value={false} >
                        Original Data
                    </ToggleButton>
                </ToggleButtonGroup>

                    <Button className={classes.ButtonsText} size="medium" onClick={handleAddData}>
                            Add Data
                    </Button>
                </div>
        </div>
    );
}
