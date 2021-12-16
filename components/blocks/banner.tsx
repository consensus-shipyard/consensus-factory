import * as React from "react";
import { Section } from "../section";
import { Content } from "../content";

export const Banner = ({ data }) => {
  return (
    <Section
      fillStyles={data.style?.fillStyles}
      image={data.backgroundImage?.src}
      imagePosition={data.backgroundImage?.position}
      navigationLabel={data.navigationLabel}
      minHeight={data.style?.minHeight}
    >
      <div className="max-w-screen-lg md:p-12 p-6 mx-auto">
        <div className={`mx-auto ${data.style?.width === "narrow" ? "md:w-2/3" : "w-full"}`}>
          {data.image && (
            <img
              className=" md:mt-12 mt-6"
              alt={data.image.alt}
              src={data.image.src}
            />
          )}
          <Content
            label = {data.label}
            headline = {data.headline}
            subhead = {data.subhead}
            body = {data.body}
            buttons = {data.buttons}
            labelStyles = {data.style?.labelStyles}
            headlineStyles = {data.style?.headlineStyles}
            subheadStyles = {data.style?.subheadStyles}
            textStyles = {data.style?.textStyles}
            alignment = {data.style?.textAlignment}
            order = {data.style?.contentOrder}
          />
        </div>
      </div>
    </Section>
  );
};
