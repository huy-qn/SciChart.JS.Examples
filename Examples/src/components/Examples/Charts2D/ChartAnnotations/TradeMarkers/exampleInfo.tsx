import * as React from "react";
import { TExampleInfo } from "../../../../AppRouter/examplePages";
import { githubUrl } from "./GENERATED_GITHUB_URL";
import { ExampleStrings } from "../../../ExampleStrings";
import { GalleryItem } from "../../../../../helpers/types/types";
import { TDocumentationLink } from "../../../../../helpers/types/ExampleDescriptionTypes";
import exampleImage from "./javascript-stock-chart-buy-sell-markers.jpg";

const previewDescription = `The Trade Markers demo uses the Annotations API to place CustomAnnotations rendering buy and sell or news
bullet markers over a simulated price chart.`;
const description = `The CustomAnnotations are created and added using SVG to the sciChartSurface.annotations collection. They
may be placed above or below candles with our helpful API.`;
const tips = [
    ` News/Event bullet annotations use AnnotationBase.${" "}yCoordinateMode = ECoordinateMode.${" "}RelativeY to always place
the event bullet at the bottom of the chart.`
];

const documentationLinks: TDocumentationLink[] = [
    {
        href: ExampleStrings.urlDocumentationHome,
        title: ExampleStrings.titleDocumentationHome,
        linkTitle: "SciChart.js Documentation Home"
    },
    {
        href: ExampleStrings.urlTutorialsHome,
        title: ExampleStrings.titleTutorialsHome,
        linkTitle: "SciChart.js Tutorials"
    },
    {
        href: ExampleStrings.urlAnnotationsDocumentation,
        title: ExampleStrings.urlTitleAnnotationsDocumentation,
        linkTitle: "Annotations API Documentation"
    }
];

const Subtitle = () => (
    <p>
        Demonstrates how to add Buy/Sell Markers (annotations) and News/Dividend bullets to a{" "}
        <strong>JavaScript Stock Chart</strong> using SciChart.js, High Performance{" "}
        <a href={ExampleStrings.urlJavascriptChartFeatures} target="_blank">
            JavaScript Charts
        </a>
    </p>
);

export const tradeMarkerAnnotationsExampleInfo: TExampleInfo = {
    title: ExampleStrings.titleTradeMarkers,
    pageTitle: ExampleStrings.titleTradeMarkers + ExampleStrings.exampleGenericTitleSuffix,
    path: ExampleStrings.urlTradeMarkers,
    subtitle: Subtitle,
    documentationLinks,
    tips,
    description,
    previewDescription,
    githubUrl,
    metaDescription:
        "Demonstrates how to place Buy/Sell arrow markers on a JavaScript Stock Chart using SciChart.js - Annotations API",
    metaKeywords: "trade, markers, demo, chart, javascript, webgl, canvas",
    thumbnailImage: exampleImage
};
