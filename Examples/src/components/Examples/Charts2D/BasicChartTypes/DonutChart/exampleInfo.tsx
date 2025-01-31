import * as React from "react";
import { TExampleInfo } from "../../../../AppRouter/examplePages";
import { githubUrl } from "./GENERATED_GITHUB_URL";
import { ExampleStrings } from "../../../ExampleStrings";
import { GalleryItem } from "../../../../../helpers/types/types";
import { TDocumentationLink } from "../../../../../helpers/types/ExampleDescriptionTypes";
import exampleImage from "./javascript-donut-chart.jpg";

const description = `Donut Charts in SciChart.js support selection, legends, different text labels, animated updates,
    gradient or solid fills and more.`;
const tips = [
    `You can change the fill color of every segment and the style of its label.`,
    `Every segment can be highlighted by clicking on it or when selected in the legend.`
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
        href: "#",
        title: ExampleStrings.titleDonutChart,
        linkTitle: "JavaScript Donut Chart Documentation"
    },
    {
        href: ExampleStrings.urlRenderSeriesPropertiesDocumentation,
        title: ExampleStrings.urlTitleRenderSeriesProperties,
        linkTitle: "Common RenderableSeries Properties"
    }
];

const Subtitle = () => (
    <p>
        This demo demonstrates how create a <strong>JavaScript Donut Chart</strong> with our powerful JavaScript library,{" "}
        <a href={ExampleStrings.urlJavascriptChartFeatures} target="_blank" title="SciChart.js">
            SciChart.js
        </a>.
    </p>
);

export const donutChartExampleInfo: TExampleInfo = {
    title: ExampleStrings.titleDonutChart,
    pageTitle: ExampleStrings.pageTitleDonutChart,
    path: ExampleStrings.urlDonutChart,
    subtitle: Subtitle,
    documentationLinks,
    tips,
    description,
    githubUrl,
    metaDescription:
        "Create JavaScript Donut Chart with 5-star rated SciChart.js chart library. Supports legends, text labels, animated updates and more. Get free trial now.",
    metaKeywords: "donut, chart, javascript, canvas",
    thumbnailImage: exampleImage
};
