interface ArrowProps {
  width?: string;
  height?: string;
  rotate?: string;
  fill?: string;
}

const Arrow = ({
  width = "20px",
  height = "20px",
  rotate = "0%",
  fill = "#000000",
}: ArrowProps) => {
  return (
    <svg
      width={width}
      height={height}
      transform={`rotate(${rotate})`}
      viewBox="0 0 16 17"
      fill={fill}
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="arrow-up">
        <path
          id="Vector"
          d="M13.2798 11.0337C13.1531 11.0337 13.0264 10.987 12.9264 10.887L8.57977 6.54038C8.25977 6.22038 7.73977 6.22038 7.41977 6.54038L3.0731 10.887C2.87977 11.0804 2.55977 11.0804 2.36644 10.887C2.1731 10.6937 2.1731 10.3737 2.36644 10.1804L6.7131 5.83371C7.41977 5.12704 8.5731 5.12704 9.28644 5.83371L13.6331 10.1804C13.8264 10.3737 13.8264 10.6937 13.6331 10.887C13.5331 10.9804 13.4064 11.0337 13.2798 11.0337Z"
          fill={fill}
        />
      </g>
    </svg>
  );
};

export default Arrow;
