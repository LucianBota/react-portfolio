import React from "react";

import { avatar } from "../../assets";

const Circuit = () => {
  return (
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 104 152"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <image x="21" y="45" xlinkHref={avatar} width="62" height="62" />
      <defs>
        <linearGradient id="linear" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#BF61FF" />
          <stop offset="100%" stopColor="#d89eff" />
        </linearGradient>
      </defs>
      <g
        id="module-01"
        transform="translate(0, 0)"
        className="circuitPath"
        stroke="url(#linear)"
        strokeWidth="4"
        fill="none"
        fillRule="evenodd"
        strokeLinecap="butt"
        strokeLinejoin="round"
        strokeOpacity="1"
        strokeDasharray="8,960,24,960,16,400"
        strokeDashoffset="6400"
      >
        <g id="C7" transform="translate(5, 5)">
          <polyline points="80 55 88 55 94 63 94 79"></polyline>
          <polyline points="23 39 23 34 20 28 5 28"></polyline>
          <polyline points="11 137 11 131 23 119 23 103"></polyline>
          <polyline points="32 128 32 120 39 113 39 103"></polyline>
          <polyline points="39 39 39 30 35 22 35 13"></polyline>
          <polyline points="68 137 68 129 51 115 51 103"></polyline>
          <polyline points="71 39 71 30 80 21 80 17"></polyline>
          <polyline points="84 137 84 130 63 110 63 103"></polyline>
          <polyline points="55 39 55 15 71 0 89 0"></polyline>
        </g>
      </g>

      <g
        id="static"
        transform="translate(0, 0)"
        stroke="#3F2B76"
        strokeWidth="2"
        fill="none"
        fillRule="evenodd"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="20" y="44" width="64" height="64" rx="4"></rect>
        <circle cx="99" cy="89" r="4"></circle>
        <circle cx="85" cy="17" r="4"></circle>
        <circle cx="99" cy="5" r="4"></circle>
        <circle cx="5" cy="33" r="4"></circle>
        <circle cx="40" cy="13" r="4"></circle>
        <circle cx="16" cy="147" r="4"></circle>
        <circle cx="73" cy="147" r="4"></circle>
        <circle cx="37" cy="138" r="4"></circle>
        <circle cx="89" cy="147" r="4"></circle>
      </g>

      <g
        id="paths-bg"
        transform="translate(0, 0)"
        stroke="#3F2B76"
        strokeWidth="2"
        fill="none"
        fillRule="evenodd"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <g id="C7" transform="translate(5, 5)">
          <polyline points="80 55 88 55 94 63 94 79"></polyline>
          <polyline points="23 39 23 34 20 28 5 28"></polyline>
          <polyline points="11 137 11 131 23 119 23 103"></polyline>
          <polyline points="32 128 32 120 39 113 39 103"></polyline>
          <polyline points="39 39 39 30 35 22 35 13"></polyline>
          <polyline points="68 137 68 129 51 115 51 103"></polyline>
          <polyline points="71 39 71 30 80 21 80 17"></polyline>
          <polyline points="84 137 84 130 63 110 63 103"></polyline>
          <polyline points="55 39 55 15 71 0 89 0"></polyline>
        </g>
      </g>
    </svg>
  );
};

export default Circuit;
