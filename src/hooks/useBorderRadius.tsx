import React, { useState } from "react";

export const useBorderRadius = () => {
  const [radiusValues, setRadiusValues] = useState<RadiusValues>({
    all: 117,
    topLeft: 256,
    topRight: 59,
    bottomRight: 163,
    bottomLeft: 117,
  });

  const updateRadius = (key: RadiusKey, value: number[]) => {
    const val = value[0];
    if (key === "all") {
      setRadiusValues({
        all: val,
        topLeft: val,
        topRight: val,
        bottomRight: val,
        bottomLeft: val,
      });
    } else {
      setRadiusValues((prev) => ({
        ...prev,
        [key]: val,
      }));
    }
  };

  const borderRadiusStyle: BorderRadiusStyle = {
    borderTopLeftRadius: `${radiusValues.topLeft}px`,
    borderTopRightRadius: `${radiusValues.topRight}px`,
    borderBottomRightRadius: `${radiusValues.bottomRight}px`,
    borderBottomLeftRadius: `${radiusValues.bottomLeft}px`,
  };

  const tailwindClass = `rounded-[${radiusValues.topLeft}px_${radiusValues.topRight}px_${radiusValues.bottomRight}px_${radiusValues.bottomLeft}px]`;

  return {
    radiusValues,
    updateRadius,
    borderRadiusStyle,
    tailwindClass,
  };
};
