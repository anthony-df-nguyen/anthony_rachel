import React, { ReactNode } from "react";

type Props = {
  title: string;
  id: string;
  children: ReactNode;
};

const Section = (props: Props) => {
  return (
    <div id={props.id} className="my-10 lg:my-16">
      <div className="fancyTitle text-center my-8 lg:max-w-md mx-auto">{props.title}</div>
      <div>{props.children}</div>
    </div>
  );
};
export default Section;
