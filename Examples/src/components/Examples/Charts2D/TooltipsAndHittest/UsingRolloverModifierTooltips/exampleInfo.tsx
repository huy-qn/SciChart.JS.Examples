import { TExampleInfo } from "../../../../AppRouter/examplePages";
import { githubUrl } from "./GENERATED_GITHUB_URL";
import * as React from "react";
import { ExampleStrings } from "../../../ExampleStrings";
import { TDocumentationLink } from "../../../../../helpers/types/ExampleDescriptionTypes";
import { GalleryItem } from "../../../../../helpers/types/types";
import exampleImage from "./javascript-chart-rollovermodifier-tooltips.jpg";

const previewDescription = `Demonstrates using the RolloverModifier, part of the ChartModifier API, to add mouse-over feedback of
data-points on time-series to the user.`;
const description = `This can be used to add Tooltips to a JavaScript chart as well as create Active legends which update values
as the user moves the mouse.`;
const tips = [
    `The hitTest function accepts parameters to control the hit-test logic. See the documentation on Hit-Testing
    for more info!`
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
        href: ExampleStrings.urlRolloverModifierDocumentation,
        title: ExampleStrings.urlTitleRolloverModifierDocumentation,
        linkTitle: "RolloverModifier documentation"
    }
];

const Subtitle = () => (
    <p>
        Demonstrates how to create <strong>tooltips on mouse-over</strong> using SciChart.js, High Performance{" "}
        <a href={ExampleStrings.urlJavascriptChartFeatures} target="_blank">
            JavaScript Charts
        </a>
    </p>
);

export const usingRolloverModifierTooltipsExampleInfo: TExampleInfo = {
    title: ExampleStrings.titleRolloverModifier,
    pageTitle: ExampleStrings.titleRolloverModifier + ExampleStrings.exampleGenericTitleSuffix,
    path: ExampleStrings.urlRolloverModifier,
    subtitle: Subtitle,
    documentationLinks,
    tips,
    description,
    previewDescription,
    githubUrl,
    metaDescription:
        "Demonstrates adding Tooltips on mouse-move to a JavaScript Chart with SciChart.js RolloverModifier",
    metaKeywords: "rollover, modifier, chart, javascript, webgl, canvas",
    thumbnailImage: exampleImage
};
