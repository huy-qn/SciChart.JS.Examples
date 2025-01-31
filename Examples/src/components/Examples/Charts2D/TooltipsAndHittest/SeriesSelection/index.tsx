import * as React from "react";
import {SciChartSurface} from "scichart";
import {SeriesSelectionModifier} from "scichart/Charting/ChartModifiers/SeriesSelectionModifier";
import {XyDataSeries} from "scichart/Charting/Model/XyDataSeries";
import {NumericAxis} from "scichart/Charting/Visuals/Axis/NumericAxis";
import {NumberRange} from "scichart/Core/NumberRange";
import classes from "../../../../Examples/Examples.module.scss";
import {appTheme} from "../../../theme";
import {SplineLineRenderableSeries} from "scichart/Charting/Visuals/RenderableSeries/SplineLineRenderableSeries";
import {IRenderableSeries} from "scichart/Charting/Visuals/RenderableSeries/IRenderableSeries";
import {GenericAnimation} from "scichart/Core/Animations/GenericAnimation";
import {EPointMarkerType} from "scichart/types/PointMarkerType";
import {AUTO_COLOR} from "scichart/Charting/Themes/IThemeProvider";
import {LegendModifier} from "scichart/Charting/ChartModifiers/LegendModifier";
import {TextAnnotation} from "scichart/Charting/Visuals/Annotations/TextAnnotation";
import {EHorizontalAnchorPoint} from "scichart/types/AnchorPoint";
import {ECoordinateMode} from "scichart/Charting/Visuals/Annotations/AnnotationBase";

const divElementId = "chart";

// Generate some data for the example
const dataSize = 30;
const xValues: number[] = [];
const yValues: number[] = [];
const y1Values: number[] = [];
const y2Values: number[] = [];
const y3Values: number[] = [];
const y4Values: number[] = [];
for (let i = 0; i < dataSize; i++) {
    xValues.push(i);
    y4Values.push(Math.random());
    y3Values.push(Math.random() + 1);
    y2Values.push(Math.random() + 1.8);
    y1Values.push(Math.random() + 2.5);
    yValues.push(Math.random() + 3.6);
}

// Custom function called when series is hovered
const onHoveredChanged = (sourceSeries: IRenderableSeries, isHovered: boolean) => {
    console.log(`Series ${sourceSeries.dataSeries.dataSeriesName} isHovered=${isHovered}`);
    const targetSeriesOpacity = 1;
    const otherSeriesOpacity = isHovered ? 0.3 : 1;

    const sciChartSurface = sourceSeries.parentSurface;
    const otherSeries = sciChartSurface.renderableSeries.asArray().filter((rs) => rs !== sourceSeries);

    // Use the genericanimations feature to animate opacity on the hovered series
    // TODO: SciChart devs will think of a way to make this code more succinct!
    sciChartSurface.addAnimation(new GenericAnimation(
        {
            from: sourceSeries.opacity,
            to: targetSeriesOpacity,
            duration: 100,
            onAnimate: (from, to, progress) => {
                const opacity = (to - from) * progress + from;
                sourceSeries.opacity = opacity;
                sourceSeries.pointMarker.opacity = opacity;
            }
        }));
    // Dim opacity on the other non-hovered series
    sciChartSurface.addAnimation(new GenericAnimation(
        {
            from: otherSeries[0].opacity,
            to: otherSeriesOpacity,
            duration: 100,
            onAnimate: (from, to, progress) => {
                const opacity = (to - from) * progress + from;
                otherSeries.forEach(rs => {
                    rs.opacity = opacity;
                    rs.pointMarker.opacity = opacity;
                });
            }
        }));
};

// Custom function called when a series is selected or deselected
const onSelectedChanged = (sourceSeries: IRenderableSeries, isSelected: boolean) => {

    console.log(`Series ${sourceSeries.dataSeries.dataSeriesName} isSelected=${isSelected}`);

    // When selected, set the stroke = white, or reset to auto (previous value)
    const targetSeriesStroke = isSelected ? appTheme.ForegroundColor : "auto";
    sourceSeries.stroke = targetSeriesStroke;
    sourceSeries.pointMarker.stroke = targetSeriesStroke;
};

export const drawExample = async () => {
    const { sciChartSurface, wasmContext } = await SciChartSurface.create(divElementId, {
        theme: appTheme.SciChartJsTheme,
    });

    sciChartSurface.xAxes.add(new NumericAxis(wasmContext));
    sciChartSurface.yAxes.add(
        new NumericAxis(wasmContext, {
            growBy: new NumberRange(0.1, 0.1),
        })
    );

    sciChartSurface.chartModifiers.add(new SeriesSelectionModifier({
        enableHover: true,
        enableSelection: true
    }));

    sciChartSurface.renderableSeries.add(new SplineLineRenderableSeries(wasmContext, {
        dataSeries: new XyDataSeries(wasmContext, { xValues, yValues, dataSeriesName: "First Series"}),
        pointMarker: { type: EPointMarkerType.Ellipse, options: { fill: AUTO_COLOR, stroke: AUTO_COLOR, strokeThickness: 3, width: 20, height: 20 } },
        strokeThickness: 3,
        onHoveredChanged,
        onSelectedChanged
    }));

    sciChartSurface.renderableSeries.add(new SplineLineRenderableSeries(wasmContext, {
        dataSeries: new XyDataSeries(wasmContext, { xValues, yValues: y1Values, dataSeriesName: "Second Series"}),
        pointMarker: { type: EPointMarkerType.Ellipse, options: { fill: AUTO_COLOR, stroke: AUTO_COLOR, strokeThickness: 3, width: 20, height: 20 } },
        strokeThickness: 3,
        onHoveredChanged,
        onSelectedChanged
    }));

    sciChartSurface.renderableSeries.add(new SplineLineRenderableSeries(wasmContext, {
        dataSeries: new XyDataSeries(wasmContext, { xValues, yValues: y2Values, dataSeriesName: "Third Series"}),
        pointMarker: { type: EPointMarkerType.Ellipse, options: { fill: AUTO_COLOR, stroke: AUTO_COLOR, strokeThickness: 3, width: 20, height: 20 } },
        strokeThickness: 3,
        onHoveredChanged,
        onSelectedChanged
    }));

    sciChartSurface.renderableSeries.add(new SplineLineRenderableSeries(wasmContext, {
        dataSeries: new XyDataSeries(wasmContext, { xValues, yValues: y3Values, dataSeriesName: "Fourth Series"}),
        pointMarker: { type: EPointMarkerType.Ellipse, options: { fill: AUTO_COLOR, stroke: AUTO_COLOR, strokeThickness: 3, width: 20, height: 20 } },
        strokeThickness: 3,
        onHoveredChanged,
        onSelectedChanged
    }));

    // Add title annotation
    sciChartSurface.annotations.add(
        new TextAnnotation({
            text: "Hover, Click & Select to animate style!",
            fontSize: 20,
            textColor: appTheme.ForegroundColor,
            x1: 0.5,
            y1: 0,
            opacity: 0.77,
            horizontalAnchorPoint: EHorizontalAnchorPoint.Center,
            xCoordinateMode: ECoordinateMode.Relative,
            yCoordinateMode: ECoordinateMode.Relative
        })
    );

    // Add a legend to the chart
    sciChartSurface.chartModifiers.add(new LegendModifier());

    return { sciChartSurface, wasmContext };
};

let scs: SciChartSurface;

export default function SeriesSelection() {
    React.useEffect(() => {
        (async () => {
            const res = await drawExample();
            scs = res.sciChartSurface;
        })();
        // Delete sciChartSurface on unmount component to prevent memory leak
        return () => scs?.delete();
    }, []);

    return (
        <div>
            <div id={divElementId} className={classes.ChartWrapper} />
        </div>
    );
}
