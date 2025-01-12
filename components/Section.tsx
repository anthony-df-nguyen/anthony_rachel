import React, { ReactNode } from "react";

type Props = {
  title: string;
  id: string;
  children: ReactNode;
};

const Section = (props: Props) => {
  return (
    <div id={props.id} className="my-12 lg:my-24 container mx-auto px-4 lg:px-0">
      <div className="titles text-center text-4xl lg:text-5xl my-8 lg:max-w-md mx-auto">{props.title}</div>
      <div className="">{props.children}</div>
    </div>
  );
};
export default Section;
