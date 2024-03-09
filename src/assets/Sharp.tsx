import { SVGProps } from "react";

const Sharp = ({ ...props }: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width="224"
      height="214"
      viewBox="0 0 224 214"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        id="Union"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M34.0163 177.692L69.7443 131.22L13.315 149.262L52.1388 111.939L0.588379 104.783L49.9841 88.4848L8.8983 56.5442L62.7625 67.7121L38.3764 29.0892L82.6872 56.3618L80.5194 4.30944L105.106 49.6545L116.388 0.934204L126.661 45.2988L153.465 8.51178L144.854 57.4059L193.354 32.6407L156.939 81.2775L214.22 64.6485L178.714 97.4997L223.405 101.179L180.64 119.317L218.106 144.499L169.911 137.937L201.071 180.481L158.532 158.192L167.468 207.755L136.78 168.028L129.349 213.934L108.086 163.937L79.1095 208.529L81.2218 154.343L34.0163 177.692Z"
        fill="#FF3BAB"
      />
    </svg>
  );
};

export default Sharp;
