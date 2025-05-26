import React, { useState } from "react";

const useFlexbox = () => {
  const [justifyContent, setJustifyContent] = useState("justify-center");
  const [alignItems, setAlignItems] = useState("items-center");

  const flexboxClass = `${justifyContent} ${alignItems}`;

  return {
    justifyContent,
    alignItems,
    setJustifyContent,
    setAlignItems,
    flexboxClass,
  };
};

export default useFlexbox;
