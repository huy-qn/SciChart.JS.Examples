import * as React from "react";
import { TExampleInfo } from "../../../../AppRouter/examplePages";
import { githubUrl } from "./GENERATED_GITHUB_URL";
import { ExampleStrings } from "../../../ExampleStrings";
import { GalleryItem } from "../../../../../helpers/types/types";
import { TDocumentationLink } from "../../../../../helpers/types/ExampleDescriptionTypes";
import exampleImage from "./javascript-chart-with-secondary-y-axis.jpg";

const description = `Demonstrates how to assign line series to different Y Axis in a JavaScript Chart. SciChart supports multiple
top or bottom X-Axes and multiple left and right Y-Axes. This example shows in a simple way how to register
a line series on each axis.`;
const tips = [`Try dragging an axis or the chart to zoom and pan around. Double clicking the chart resets the zoom!`];

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
    }
];

const Subtitle = () => (
    <p>
        Demonstrates how to create a <strong>JavaScript Chart with Secondary Y axis</strong> using SciChart.js, High
        Performance{" "}
        <a href={ExampleStrings.urlJavascriptChartFeatures} target="_blank">
            JavaScript Charts
        </a>
    </p>
);

export const secondaryYAxesExampleInfo: TExampleInfo = {
    title: ExampleStrings.titleSecondaryYAxis,
    pageTitle: ExampleStrings.titleSecondaryYAxis + ExampleStrings.exampleGenericTitleSuffix,
    path: ExampleStrings.urlSecondaryYAxis,
    subtitle: Subtitle,
    documentationLinks,
    tips,
    description,
    githubUrl,
    metaDescription:
        "Demonstrates Secondary Y Axis on a JavaScript Chart using SciChart.js. SciChart supports unlimited, multiple left, right, top, bottom X, Y axis with configurable alignment and individual zooming, panning",
    metaKeywords: "secondary, axis, chart, javascript, webgl, canvas",
    thumbnailImage: exampleImage
};
