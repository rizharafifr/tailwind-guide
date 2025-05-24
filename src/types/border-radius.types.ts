type RadiusKey = "all" | "topLeft" | "topRight" | "bottomRight" | "bottomLeft";

type RadiusValues = {
  all: number;
  topLeft: number;
  topRight: number;
  bottomRight: number;
  bottomLeft: number;
};

type BorderRadiusStyle = {
  borderTopLeftRadius: string;
  borderTopRightRadius: string;
  borderBottomRightRadius: string;
  borderBottomLeftRadius: string;
};