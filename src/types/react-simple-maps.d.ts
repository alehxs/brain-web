declare module "react-simple-maps" {
  import * as React from "react";

  export interface ComposableMapProps {
    width?: number;
    height?: number;
    projection?: string | ((width: number, height: number) => object);
    projectionConfig?: object;
    className?: string;
    style?: object;
    children?: React.ReactNode;
  }

  export const ComposableMap: React.FC<ComposableMapProps>;

  export interface GeographiesProps {
    geography?: string | object | string[];
    children?: (args: { geographies: { rsmKey: string }[]; projection: object; path: object }) => React.ReactNode;
    parseGeographies?: (geographies: object[]) => object[];
    className?: string;
  }

  export const Geographies: React.FC<GeographiesProps>;

  export interface GeographyProps {
    geography?: object;
    fill?: string;
    stroke?: string;
    strokeWidth?: number | string;
    className?: string;
    style?: object;
    onMouseEnter?: (event: React.MouseEvent) => void;
    onMouseLeave?: (event: React.MouseEvent) => void;
    onMouseDown?: (event: React.MouseEvent) => void;
    onMouseUp?: (event: React.MouseEvent) => void;
    onFocus?: (event: React.FocusEvent) => void;
    onBlur?: (event: React.FocusEvent) => void;
    key?: string | number;
  }

  export const Geography: React.FC<GeographyProps>;

  export interface MarkerProps {
    coordinates?: [number, number];
    onMouseEnter?: (event: React.MouseEvent) => void;
    onMouseLeave?: (event: React.MouseEvent) => void;
    onMouseDown?: (event: React.MouseEvent) => void;
    onMouseUp?: (event: React.MouseEvent) => void;
    onFocus?: (event: React.FocusEvent) => void;
    onBlur?: (event: React.FocusEvent) => void;
    fill?: string;
    stroke?: string;
    strokeWidth?: number | string;
    className?: string;
    style?: object;
    children?: React.ReactNode;
  }

  export const Marker: React.FC<MarkerProps>;

  export interface LineProps {
    from?: [number, number];
    to?: [number, number];
    coordinates?: [number, number][];
    stroke?: string;
    strokeWidth?: number | string;
    strokeLinecap?: string;
    strokeOpacity?: number | string;
    className?: string;
    style?: object;
  }

  export const Line: React.FC<LineProps>;
}