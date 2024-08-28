import * as Scrivito from "scrivito";
import boxWidgetIcon from "../../assets/images/box_widget.svg";

Scrivito.provideEditingConfig("CardWidget", {
  title: "Card",
  thumbnail: boxWidgetIcon,
  attributes: {
    text: {
      title: "Text",
      description: "The actual source code of this text",
    },
    alternativeText: {
      title: "Alternative text (optional)",
      description:
        "Brief description of what the image is about." +
        " If empty, the alternative text of the image is used.",
    },
    link: {
      title: "Link (optional)",
      description: "The page to open after clicking the image.",
    },
    animation: {
      title: "Animation",
      description:
        "The animation to perform as this image becomes visible. Default: None",
      values: [
        { value: "none", title: "None" },
        { value: "fadeInLeft", title: "Left to center" },
        { value: "fadeInRight", title: "Right to center" },
        { value: "fadeInDown", title: "Top to center" },
        { value: "fadeInUp", title: "Bottom to center" },
        { value: "zoomIn", title: "Zoom in" },
      ],
    },
   
  },
  properties: ["text", "animation", "alternativeText", "link"],
  initialContent: {
    animation: "none",
  },
  validations: [
    [
      "image",

      (image) => {
        if (!image) {
          return {
            message: "The image should be set.",
            severity: "warning",
          };
        }
      },
    ],
  ],
});
