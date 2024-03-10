import { IconTypes } from "@/types/icon";

const MenyalaIcon = ({ variants, color = "#FF0057" }: IconTypes) => {
  return (
    <>
      {variants === "outline" ? (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <g clipPath="url(#clip0_3_12825)">
            <path
              d="M20 8.69V4H15.31L12 0.690002L8.69 4H4V8.69L0.690002 12L4 15.31V20H8.69L12 23.31L15.31 20H20V15.31L23.31 12L20 8.69ZM18 14.48V18H14.48L12 20.48L9.52 18H6V14.48L3.52 12L6 9.52V6H9.52L12 3.52L14.48 6H18V9.52L20.48 12L18 14.48ZM12 6.5C8.97 6.5 6.5 8.97 6.5 12C6.5 15.03 8.97 17.5 12 17.5C15.03 17.5 17.5 15.03 17.5 12C17.5 8.97 15.03 6.5 12 6.5ZM12 15.5C10.07 15.5 8.5 13.93 8.5 12C8.5 10.07 10.07 8.5 12 8.5C13.93 8.5 15.5 10.07 15.5 12C15.5 13.93 13.93 15.5 12 15.5Z"
              fill={color}
            />
          </g>
          <defs>
            <clipPath id="clip0_3_12825">
              <rect width="24" height="24" fill="white" />
            </clipPath>
          </defs>
        </svg>
      ) : variants === "full" ? (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <g clipPath="url(#clip0_2_12611)">
            <path
              d="M20 8.69V5C20 4.45 19.55 4 19 4H15.31L12.71 1.4C12.32 1.01 11.69 1.01 11.3 1.4L8.69 4H5C4.45 4 4 4.45 4 5V8.69L1.4 11.29C1.01 11.68 1.01 12.31 1.4 12.7L4 15.3V19C4 19.55 4.45 20 5 20H8.69L11.29 22.6C11.68 22.99 12.31 22.99 12.7 22.6L15.3 20H19C19.55 20 20 19.55 20 19V15.31L22.6 12.71C22.99 12.32 22.99 11.69 22.6 11.3L20 8.69ZM12 18C8.69 18 6 15.31 6 12C6 8.69 8.69 6 12 6C15.31 6 18 8.69 18 12C18 15.31 15.31 18 12 18ZM12 8C9.79 8 8 9.79 8 12C8 14.21 9.79 16 12 16C14.21 16 16 14.21 16 12C16 9.79 14.21 8 12 8Z"
              fill={color}
            />
          </g>
          <defs>
            <clipPath id="clip0_2_12611">
              <rect width="24" height="24" fill="white" />
            </clipPath>
          </defs>
        </svg>
      ) : null}
    </>
  );
};

export default MenyalaIcon;
