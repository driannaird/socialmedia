import { IconTypes } from "@/types/icon";

const HomeIcon = ({ variants, color = "#FF0057" }: IconTypes) => {
  return (
    <>
      {variants === "outline" ? (
        <svg
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <g clipPath="url(#clip0_4_13103)">
            <path
              d="M16 7.58667L22.6667 13.5867V24H20V16H12V24H9.33334V13.5867L16 7.58667ZM16 4L2.66667 16H6.66667V26.6667H14.6667V18.6667H17.3333V26.6667H25.3333V16H29.3333L16 4Z"
              fill={color}
            />
          </g>
          <defs>
            <clipPath id="clip0_4_13103">
              <rect width="32" height="32" fill="white" />
            </clipPath>
          </defs>
        </svg>
      ) : variants === "full" ? (
        <svg
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <g clipPath="url(#clip0_2_12529)">
            <path
              d="M13.3333 25.3333V18.6667H18.6667V25.3333C18.6667 26.0667 19.2667 26.6667 20 26.6667H24C24.7333 26.6667 25.3333 26.0667 25.3333 25.3333V16H27.6C28.2133 16 28.5067 15.24 28.04 14.84L16.8933 4.79999C16.3867 4.34666 15.6133 4.34666 15.1067 4.79999L3.95999 14.84C3.50666 15.24 3.78666 16 4.39999 16H6.66666V25.3333C6.66666 26.0667 7.26666 26.6667 7.99999 26.6667H12C12.7333 26.6667 13.3333 26.0667 13.3333 25.3333Z"
              fill={color}
            />
          </g>
          <defs>
            <clipPath id="clip0_2_12529">
              <rect width="32" height="32" fill="white" />
            </clipPath>
          </defs>
        </svg>
      ) : null}
    </>
  );
};

export default HomeIcon;
