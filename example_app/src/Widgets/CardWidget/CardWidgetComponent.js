import * as React from "react";
import * as Scrivito from "scrivito";
import "./CardWidget.scss";

Scrivito.provideComponent("CardWidget", ({ widget }) => {
  const title = widget.get("title");
  const image = widget.get("image");
  const buttonLink = widget.get("buttonLink");

  return (
    <div className="card">
      {image && <Scrivito.ImageTag content={image} />}
      {title && <h3 className="card-title">{title}</h3>}
      {buttonLink && (
        <Scrivito.LinkTag to={buttonLink}>
          <button>Click me</button>
        </Scrivito.LinkTag>
      )}
    </div>
  );
});
