import shape5 from '../../assets/shape5.png';

interface IShapeProps {
  style: React.CSSProperties;
}

export const Shape1 = ({ style }: IShapeProps) => (
  <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ ...style }}>
    <circle cx="7.5" cy="7.5" r="7.5" fill="#FF6978" />
  </svg>
);

export const Shape2 = ({ style }: IShapeProps) => (
  <svg width="63" height="63" viewBox="0 0 63 63" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ ...style }}>
    <circle cx="31.5" cy="31.5" r="31.5" fill="#00173D" />
  </svg>
);

export const Shape3 = ({ style }: IShapeProps) => (
  <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ ...style }}>
    <circle cx="13" cy="13" r="12" stroke="#4550A7" strokeWidth="2" />
  </svg>
);

export const Shape4 = ({ style }: IShapeProps) => (
  <svg
    width="64"
    height="64"
    viewBox="0 0 64 64"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    style={{ ...style }}
  >
    <circle cx="32" cy="31.9999" r="24" transform="rotate(25 32 31.9999)" fill="url(#pattern0)" />
    <defs>
      <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="0.845983" height="0.149291">
        <use xlinkHref="#image0" transform="scale(0.0248819)" />
      </pattern>
      <image
        id="image0"
        width="34"
        height="6"
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACIAAAAGCAYAAACmekziAAAABGdBTUEAALGOfPtRkwAAAY5JREFUKBW9Uj1IQlEUPuf6pCQofI9+CLMhaynInwyKfrYgGgxRCyEICpyaImh0aomaJKjFagjhUVRDRJNNDv61tLokgRROiZV6T/cFwitsKjpwOYfvnPN9H/deA/xjdM4stTS19W81dw+VN0OBfDwep7o81gt9DofDTByux35bK3afh4BHAPGMgKYByIKElwjswmTCmy9G2p1+G6fqOgHaEPGItbLzp7j68pMJ2+xaU7Hw6AGiVTFTIYQ7JMhKzJgtpGI5wUFml98KvBZBogGGUug5q95qfBrOeHVeaGn77k8jst03LtxuANIkAu4hwwyv8RVEmALAK4Z40ovKdTp9UNFIlBH/KK/VloFgQcxkBLSPxCqCw05IDrHjEMJmIZISvWHGcLerj23fq+q7tv89rBNBM8oOb4IIOhjAjslkiOYTark+aBnzy6VXHgDgQSAcFKJR0ZsTDysJc4dkMB4Xk7GH+rw+a+Sl0ptLkiBXSJ7m9L2GteL0ebU/0bCpA2X3Yo/s9Ia129PBf1Z+AO3ViTcdfWOLAAAAAElFTkSuQmCC"
      />
    </defs>
  </svg>
);

export const Shape5 = ({ style }: IShapeProps) => <img src={shape5} alt="Shape" aria-hidden style={{ ...style }} />;
