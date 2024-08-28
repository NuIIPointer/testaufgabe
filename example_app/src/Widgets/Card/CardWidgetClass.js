import * as Scrivito from "scrivito";

export const CardWidget = Scrivito.provideWidgetClass("CardWidget", {
  attributes: {
    image: ["reference", { only: "Image" }],
    headline: "html",
    text: "html",
    body: "widgetlist",
    alternativeText: "string",
    link: "link",
    animation: [
      "enum",
      {
        values: [
          "none",
          "fadeInLeft",
          "fadeInRight",
          "fadeInDown",
          "fadeInUp",
          "zoomIn",
        ],
      },
    ],
  },
  extractTextAttributes: ["body"],
});
