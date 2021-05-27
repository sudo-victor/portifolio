type Props = {
  left?: boolean;
  right?: boolean;
}

declare module 'react-reveal' {
  export const Zoom: React.FC<Props>;
  export const Fade: React.FC<Props>;
}