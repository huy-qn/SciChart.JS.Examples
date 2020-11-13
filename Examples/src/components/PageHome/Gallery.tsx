import * as React from "react";
import { makeStyles } from "@material-ui/core/styles";
import ChartGroupTitle from "./ChartGroupTitle";
import Grid from "@material-ui/core/Grid";
import { EXAMPLES_PAGES } from "../AppRouter/examplePages";
import GalleryCard from "./GalleryCard";
// Featured Apps
import load500Img from "../../images/examples/s/performance/javascript-chart-load-500-series-by-500-points.jpg";
import realtimePerformanceImg from "../../images/examples/s/performance/javascript-chart-realtime-performance-demo.jpg";
import ghostedTracesImg from "../../images/examples/s/performance/javascript-realtime-ghosted-traces-chart.jpg";
import millionPointsDemoImg from "../../images/examples/s/performance/javascript-chart-performance-one-million-points.jpg";
import lidarImg from "../../images/examples/s/scientificAndMedical/javascript-3d-lidar-visualization.jpg";
import ecgImg from "../../images/examples/s/scientificAndMedical/javascript-vital-signs-ecg-medical-chart-example.jpg";
import audioAnalyzerImage from "../../images/examples/s/scientificAndMedical/javascript-realtime-audio-analyzer.jpg";
import tenorCurvesImage from "../../images/examples/s/scientificAndMedical/javascript-3d-surface-mesh-tenor-curve-example.jpg";
// 2D Chart Types
import lineChartImg from "../../images/examples/s/chartTypes2D/javascript-line-chart.jpg";
import bandChartImg from "../../images/examples/s/chartTypes2D/javascript-band-chart.jpg";
import bubbleChartImg from "../../images/examples/s/chartTypes2D/javascript-bubble-chart.jpg";
import candlestickImg from "../../images/examples/s/chartTypes2D/javascript-candlestick-chart.jpg";
import columnChartImg from "../../images/examples/s/chartTypes2D/javascript-column-chart.jpg";
import fanChartImg from "../../images/examples/s/chartTypes2D/javascript-fan-chart.jpg";
import heatmapImg from "../../images/examples/s/chartTypes2D/javascript-heatmap-chart.jpg";
import mountainImg from "../../images/examples/s/chartTypes2D/javascript-mountain-chart.jpg";
import ohlcImg from "../../images/examples/s/chartTypes2D/javascript-ohlc-chart.jpg";
import scatterImg from "../../images/examples/s/chartTypes2D/javascript-scatter-chart.jpg";
import stackedColumnImg from "../../images/examples/s/chartTypes2D/javascript-stacked-column-chart.png";
import stackedColumnSideBySideImg from "../../images/examples/s/chartTypes2D/javascript-stacked-grouped-column-chart-side-by-side.png";
import stackedMountainImg from "../../images/examples/s/chartTypes2D/javascript-stacked-mountain-chart.jpg";
import pieImg from "../../images/examples/s/chartTypes2D/javascript-pie-chart.jpg";
import donutImg from "../../images/examples/s/chartTypes2D/javascript-donut-chart.jpg";
// Annotations and Legands
import annotationsImg from "../../images/examples/s/annotationsAndLegend/javascript-chart-annotations.jpg";
import tradeMarkersImg from "../../images/examples/s/annotationsAndLegend/javascript-stock-chart-buy-sell-markers.jpg";
import legendImg from "../../images/examples/s/annotationsAndLegend/javascript-chart-legends.jpg";
// Stock Charts
import multiPaneStockImg from "../../images/examples/s/stockCharts/javascript-multi-pane-stock-charts.jpg";
import realtimeStockImg from "../../images/examples/s/stockCharts/javascript-realtime-ticking-stock-charts.jpg";
// Chart Axis API
import multipleXAxesImg from "../../images/examples/s/chartAxisApi/javascript-chart-with-multiple-x-axis.jpg";
import secondaryYAxesImg from "../../images/examples/s/chartAxisApi/javascript-chart-with-secondary-y-axis.jpg";
import verticalChartImg from "../../images/examples/s/chartAxisApi/javascript-vertical-charts.jpg";
// Styling and Theming
import pointMarkersImg from "../../images/examples/s/styling/javascript-chart-custom-poinmarkers.jpg";
import themeManagerImg from "../../images/examples/s/styling/javascript-chart-themes.png";
import stylingInCodeImg from "../../images/examples/s/styling/javascript-chart-styling-theming-in-code.png";
import paletteProviderImg from "../../images/examples/s/styling/javascript-chart-color-points-individually-with-paletteprovider.jpg";
// Tooltips and Hit-Test
import hitTestApiImg from "../../images/examples/s/tooltipsAndHittest/javascript-chart-hit-test-on-click.png";
import rolloverImg from "../../images/examples/s/tooltipsAndHittest/javascript-chart-rollovermodifier-tooltips.jpg";
// Zoom and Pan Charts
import realtimeZoomPanImg from "../../images/examples/s/zoomAndPanCharts/zoom-and-pan-a-realtime-javascript-chart.jpg";
import dragAxisToScaleImg from "../../images/examples/s/zoomAndPanCharts/drag-axis-on-javascript-charts-to-scale-or-pan.jpg";
// 3D Chart Types
import bubble3dImg from "../../images/examples/s/chartTypes3D/javascript-3d-bubble-chart.jpg";
import mesh3dImg from "../../images/examples/s/chartTypes3D/javascript-3d-surface-mesh-chart.jpg";

type TProps = {};

const useStyles = makeStyles(theme => ({
    root: {}
}));

const Gallery: React.FC<TProps> = props => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <ChartGroupTitle title="Performance Demos" />
            <Grid container spacing={3}>
                <Grid item xs={12} sm={6} md={4}>
                    <GalleryCard
                        imgPath={load500Img}
                        title="Load 500 Series x 500 Points"
                        seoTitle="Load 500 Series x 500 Points JavaScript Chart Performance Demo"
                        examplePath={EXAMPLES_PAGES.featuredApps_performanceDemos_Load500By500.path}
                    />
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <GalleryCard
                        imgPath={realtimePerformanceImg}
                        title="Realtime Performance Demo"
                        seoTitle="Realtime JavaScript Chart Performance Demo with many millions of points"
                        examplePath={EXAMPLES_PAGES.featuredApps_performanceDemos_RealtimePerformanceDemo.path}
                    />
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <GalleryCard
                        imgPath={ghostedTracesImg}
                        title="Realtime Ghosted Traces"
                        seoTitle="Realtime Ghosted Traces JavaScript Chart Performance demo"
                        examplePath={EXAMPLES_PAGES.featuredApps_performanceDemos_RealtimeGhostedTraces.path}
                    />
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <GalleryCard
                        imgPath={millionPointsDemoImg}
                        title="One Million Points Demo"
                        seoTitle="Load One Million Points in a JavaScript Chart Performance Demo"
                        examplePath={EXAMPLES_PAGES.featuredApps_performanceDemos_LoadOneMillionPoints.path}
                    />
                </Grid>
            </Grid>
            <ChartGroupTitle title="Scientific and Medical Charts" />
            <Grid container spacing={3}>
                <Grid item xs={12} sm={6} md={4}>
                    <GalleryCard
                        imgPath={lidarImg}
                        title="LiDAR 3D Point Cloud"
                        seoTitle="LiDAR 3D Point Cloud of Geospatial Data in JavaScript"
                        examplePath={EXAMPLES_PAGES.featuredApps_scientificCharts_Lidar3DPointCloudDemo.path}
                    />
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <GalleryCard
                        imgPath={ecgImg}
                        title="ECG/EKG Medical Demo"
                        seoTitle="JavaScript Vital Signs ECG/EKG Medical Demo"
                        examplePath={EXAMPLES_PAGES.featuredApps_medicalCharts_VitalSignsMonitorDemo.path}
                    />
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <GalleryCard
                        imgPath={audioAnalyzerImage}
                        title="Audio Analyzer Demo"
                        seoTitle="JavaScript Realtime Audio Analyzer Demo"
                        examplePath={EXAMPLES_PAGES.featuredApps_scientificCharts_AudioAnalyzerDemo.path}
                    />
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <GalleryCard
                        imgPath={tenorCurvesImage}
                        title="Tenor Curves 3D Demo"
                        seoTitle="JavaScript 3D Surface Mesh Plot Tenor Curves Demo"
                        examplePath={EXAMPLES_PAGES.featuredApps_scientificCharts_TenorCurvesDemo.path}
                    />
                </Grid>
            </Grid>
            <ChartGroupTitle title="2D Chart Types" />
            <Grid container spacing={3}>
                <Grid item xs={12} sm={6} md={4}>
                    <GalleryCard
                        imgPath={lineChartImg}
                        title="Line Chart"
                        seoTitle="JavaScript Line Chart Example"
                        examplePath={EXAMPLES_PAGES.chart2D_basicCharts_LineChart.path}
                    />
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <GalleryCard
                        imgPath={bandChartImg}
                        title="Band Chart"
                        seoTitle="JavaScript Band Chart Example"
                        examplePath={EXAMPLES_PAGES.chart2D_basicCharts_BandSeriesChart.path}
                    />
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <GalleryCard
                        imgPath={bubbleChartImg}
                        title="Bubble Chart"
                        seoTitle="JavaScript Bubble Chart Example"
                        examplePath={EXAMPLES_PAGES.chart2D_basicCharts_BubbleChart.path}
                    />
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <GalleryCard
                        imgPath={candlestickImg}
                        title="Candlestick Chart"
                        seoTitle="JavaScript Candlestick Chart Example"
                        examplePath={EXAMPLES_PAGES.chart2D_basicCharts_CandlestickChart.path}
                    />
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <GalleryCard
                        imgPath={columnChartImg}
                        title="Column Chart"
                        seoTitle="JavaScript Column Chart Example"
                        examplePath={EXAMPLES_PAGES.chart2D_basicCharts_ColumnChart.path}
                    />
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <GalleryCard
                        imgPath={fanChartImg}
                        title="Fan Chart"
                        seoTitle="JavaScript Fan Chart Example"
                        examplePath={EXAMPLES_PAGES.chart2D_basicCharts_FanChart.path}
                    />
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <GalleryCard
                        imgPath={heatmapImg}
                        title="Heatmap Chart"
                        seoTitle="JavaScript Heatmap Chart Example"
                        examplePath={EXAMPLES_PAGES.chart2D_basicCharts_HeatmapChart.path}
                    />
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <GalleryCard
                        imgPath={mountainImg}
                        title="Mountain Chart"
                        seoTitle="JavaScript Mountain Chart Example"
                        examplePath={EXAMPLES_PAGES.chart2D_basicCharts_MountainChart.path}
                    />
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <GalleryCard
                        imgPath={ohlcImg}
                        title="Ohlc Chart"
                        seoTitle="JavaScript Ohlc Chart Example"
                        examplePath={EXAMPLES_PAGES.chart2D_basicCharts_OhlcChart.path}
                    />
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <GalleryCard
                        imgPath={scatterImg}
                        title="Scatter Chart"
                        seoTitle="JavaScript Scatter Chart Example"
                        examplePath={EXAMPLES_PAGES.chart2D_basicCharts_ScatterChart.path}
                    />
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <GalleryCard
                        imgPath={stackedColumnImg}
                        title="Stacked Column Chart"
                        seoTitle="JavaScript Stacked Column Chart Example"
                        examplePath={EXAMPLES_PAGES.chart2D_basicCharts_StackedColumnChart.path}
                    />
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <GalleryCard
                        imgPath={stackedColumnSideBySideImg}
                        title="Stacked Column Side by Side"
                        seoTitle="JavaScript Stacked Column Side by Side Chart Example"
                        examplePath={EXAMPLES_PAGES.chart2D_basicCharts_StackedColumnSideBySide.path}
                    />
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <GalleryCard
                        imgPath={stackedMountainImg}
                        title="Stacked Mountain Chart"
                        seoTitle="JavaScript Stacked Mountain Chart Example"
                        examplePath={EXAMPLES_PAGES.chart2D_basicCharts_StackedMountainChart.path}
                    />
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <GalleryCard
                        imgPath={pieImg}
                        title="Pie Chart"
                        seoTitle="JavaScript Pie Chart Example"
                        examplePath={EXAMPLES_PAGES.chart2D_basicCharts_PieChart.path}
                    />
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <GalleryCard
                        imgPath={donutImg}
                        title="Donut Chart"
                        seoTitle="JavaScript Donut Chart Example"
                        examplePath={EXAMPLES_PAGES.chart2D_basicCharts_DonutChart.path}
                    />
                </Grid>
            </Grid>
            <ChartGroupTitle title="Annotations and Legends" />
            <Grid container spacing={3}>
                <Grid item xs={12} sm={6} md={4}>
                    <GalleryCard
                        imgPath={annotationsImg}
                        title="Chart Annotations"
                        seoTitle="JavaScript Chart Annotations Example"
                        examplePath={EXAMPLES_PAGES.chart2D_chartAnnotations_AnnotationsAreEasy.path}
                    />
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <GalleryCard
                        imgPath={tradeMarkersImg}
                        title="Trading Buy Sell Markers"
                        seoTitle="Trading Buy Sell Marker Annotations in JavaScript Charts"
                        examplePath={EXAMPLES_PAGES.chart2D_chartAnnotations_TradeMarkers.path}
                    />
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <GalleryCard
                        imgPath={legendImg}
                        title="Chart Legends API"
                        seoTitle="JavaScript Chart Legend Example"
                        examplePath={EXAMPLES_PAGES.chart2D_legends_ChartLegendsAPI.path}
                    />
                </Grid>
            </Grid>
            <ChartGroupTitle title="Candlestick &amp; Stock Charts" />
            <Grid container spacing={3}>
                <Grid item xs={12} sm={6} md={4}>
                    <GalleryCard
                        imgPath={multiPaneStockImg}
                        title="Multi-Pane Stock Charts"
                        seoTitle="JavaScript Multi-Pane Stock Charts Example"
                        examplePath={EXAMPLES_PAGES.chart2D_createStockCharts_MultiPaneStockCharts.path}
                    />
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <GalleryCard
                        imgPath={realtimeStockImg}
                        title="Realtime Ticking Stock Charts"
                        seoTitle="JavaScript Realtime Ticking Stock Charts Example"
                        examplePath={EXAMPLES_PAGES.chart2D_createStockCharts_RealtimeTickingStockCharts.path}
                    />
                </Grid>
            </Grid>
            <ChartGroupTitle title="Chart Axis API" />
            <Grid container spacing={3}>
                <Grid item xs={12} sm={6} md={4}>
                    <GalleryCard
                        imgPath={multipleXAxesImg}
                        title="Multiple X Axes"
                        seoTitle="JavaScript Chart with Multiple X Axis Example"
                        examplePath={EXAMPLES_PAGES.chart2D_modifyAxisBehavior_MultipleXAxes.path}
                    />
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <GalleryCard
                        imgPath={secondaryYAxesImg}
                        title="Secondary Y Axes"
                        seoTitle="JavaScript Chart with Secondary Y Axis Example"
                        examplePath={EXAMPLES_PAGES.chart2D_modifyAxisBehavior_SecondaryYAxes.path}
                    />
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <GalleryCard
                        imgPath={verticalChartImg}
                        title="Vertical Charts"
                        seoTitle="JavaScript Vertical Chart Example"
                        examplePath={EXAMPLES_PAGES.chart2D_modifyAxisBehavior_VerticalCharts.path}
                    />
                </Grid>
            </Grid>
            <ChartGroupTitle title="Styling and Theming" />
            <Grid container spacing={3}>
                <Grid item xs={12} sm={6} md={4}>
                    <GalleryCard
                        imgPath={pointMarkersImg}
                        title="Point Markers"
                        seoTitle="JavaScript Scatter Chart Custom Point Markers Example"
                        examplePath={EXAMPLES_PAGES.chart2D_stylingAndTheming_UsePointMarkers.path}
                    />
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <GalleryCard
                        imgPath={themeManagerImg}
                        title="Theme Manager"
                        seoTitle="JavaScript Chart Theme Manager Example"
                        examplePath={EXAMPLES_PAGES.chart2D_stylingAndTheming_UsingThemeManager.path}
                    />
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <GalleryCard
                        imgPath={stylingInCodeImg}
                        title="Styling Chart in Code"
                        seoTitle="JavaScript Chart Styling or Theming in Code"
                        examplePath={EXAMPLES_PAGES.chart2D_stylingAndTheming_StylingInCode.path}
                    />
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <GalleryCard
                        imgPath={paletteProviderImg}
                        title="Coloring Series per-point"
                        seoTitle="Coloring JavaScript Chart Series per-point using the PaletteProvider"
                        examplePath={EXAMPLES_PAGES.chart2D_stylingAndTheming_PerPointColoring.path}
                    />
                </Grid>
            </Grid>
            <ChartGroupTitle title="Tooltips and Hit-Test" />
            <Grid container spacing={3}>
                <Grid item xs={12} sm={6} md={4}>
                    <GalleryCard
                        imgPath={hitTestApiImg}
                        title="Hit-Test API"
                        seoTitle="JavaScript Hit-Test API Example"
                        examplePath={EXAMPLES_PAGES.chart2D_tooltipsAndHittest_HitTestApi.path}
                    />
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <GalleryCard
                        imgPath={rolloverImg}
                        title="Rollover Modifier Tooltips"
                        seoTitle="JavaScript Rollover Modifier Tooltips Example"
                        examplePath={EXAMPLES_PAGES.chart2D_tooltipsAndHittest_UsingRolloverModifierTooltips.path}
                    />
                </Grid>
            </Grid>
            <ChartGroupTitle title="Zoom and Pan a Chart" />
            <Grid container spacing={3}>
                <Grid item xs={12} sm={6} md={4}>
                    <GalleryCard
                        imgPath={dragAxisToScaleImg}
                        title="Drag Axis to Scale or Pan"
                        seoTitle="Drag Axis on JavaScript Charts to Scale or Pan"
                        examplePath={EXAMPLES_PAGES.chart2D_zoomAndPanAChart_DragAxisToScale.path}
                    />
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <GalleryCard
                        imgPath={realtimeZoomPanImg}
                        title="Zoom and Pan with Realtime Charts"
                        seoTitle="Zoom and Pan a Realtime JavaScript Chart"
                        examplePath={EXAMPLES_PAGES.chart2D_zoomAndPanAChart_RealtimeZoomPan.path}
                    />
                </Grid>
            </Grid>
            <ChartGroupTitle title="3D Chart Types" />
            <Grid container spacing={3}>
                <Grid item xs={12} sm={6} md={4}>
                    <GalleryCard
                        imgPath={bubble3dImg}
                        title="3D Bubble Chart"
                        seoTitle="JavaScript 3D Bubble Chart Example"
                        examplePath={EXAMPLES_PAGES.chart3D_basic3DChartTypes_Bubble3DChart.path}
                    />
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <GalleryCard
                        imgPath={mesh3dImg}
                        title="Surface Mesh 3D"
                        seoTitle="JavaScript Surface Mesh 3D Chart Example"
                        examplePath={EXAMPLES_PAGES.chart3D_basic3DChartTypes_SurfaceMesh3DChart.path}
                    />
                </Grid>
            </Grid>
        </div>
    );
};

export default Gallery;
