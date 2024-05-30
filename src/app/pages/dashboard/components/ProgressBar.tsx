import React from 'react'

type Props = {
  percentage: number,
  title: string,
  size: number,
  strokeWidth: number
}

const ProgressBar = (props: Props) => {
  const size = props.size;
  const strokeWidth = props.strokeWidth;
  const percentage = props.percentage;
  const radius = (size - strokeWidth) / 2;
  const circumference = radius * 2 * Math.PI;
  const offset = circumference - (percentage / 100) * circumference;

  let strokeColor: string;

  if (percentage >= 1 && percentage <= 25) {
    strokeColor = "red";
  } else if (percentage > 25 && percentage <= 50) {
    strokeColor = "yellow";
  } else if (percentage > 50 && percentage <= 75) {
    strokeColor = "lightblue";
  } else if (percentage > 75 && percentage <= 100) {
    strokeColor = "green";
  } else {
    strokeColor = "#5cb85c"; // Default color if percentage is out of range
  }

  return (
    <>
      <svg width={size} height={size}>
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          strokeWidth={strokeWidth}
          fill="none"
          stroke="#eee"
        />
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          strokeWidth={strokeWidth}
          fill="none"
          stroke={strokeColor}
          strokeLinecap="round"
          strokeDasharray={`${circumference} ${circumference}`}
          strokeDashoffset={offset}
        />
        <text
          x="50%"
          y="50%"
          dominantBaseline="middle"
          textAnchor="middle"
          fontSize={size * 0.3}
          fontWeight="bold"
        >
          {props.title}
        </text>
      </svg>
    </>
  )
}

export default ProgressBar