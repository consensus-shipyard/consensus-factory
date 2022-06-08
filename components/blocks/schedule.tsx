import * as React from "react";
import { Section } from "../section";

const Card = ({ data, index, parentField = "", last = false  }) => {
  return (
    <div className="relative flex w-full sm:w-full pr-8 sm:text-left">
      <span className="w-2/12 h-10 text-accent4 text-right">{data.time}</span>
      <div className="schedule-icon relative top-1.5 bottom-0 w-4 ml-4">
        <div className="border-3 border-accent2 rounded-full w-4 h-4"></div>
        {last !== true &&
          <div className="absolute top-4 bottom-0 left-1.5 border-l-3 border-accent2"></div>
        }
      </div>
      <span className="w-9/12 flex-1 sm:w-full ml-4 mb-4 text-gray-light">{`"${data.headline}" - ${data.name}`}</span>
    </div>
  )
}

export const Schedule = ({ data, parentField = "" }) => {
  return (
    <Section className="" background={data.background} navigationLabel={data.navigationLabel}>
      <div className="max-w-desktop-full mx-auto px-12 pt-20 pb-64">
        <h2 className="text-3xl text-accent2">{data.headline}</h2>
        <h3 className="text-xl text-gray-light">{data.subhead}</h3>
        <div className="mt-16">
          {data.items && (
            data.items.map(function (block, index) {
              return <Card
                key={index}
                index={index}
                data={block}
                parentField={`${parentField}.items`}
                last={index === data.items.length - 1}
              />
            })
          )}
        </div>
      </div>
    </Section>
  );
};
