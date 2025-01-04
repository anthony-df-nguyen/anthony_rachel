import React, { ReactNode } from "react";

type Props = {
  title: string;
  id: string;
  children: ReactNode;
};

const Section = (props: Props) => {
  return (
    <div id={props.id} className="my-20 lg:my-24 container mx-auto px-4 lg:px-0">
      <div className="fancyTitle text-center my-8 lg:max-w-md mx-auto">{props.title}</div>
      <div>{props.children}</div>
    </div>
  );
};
export default Section;
