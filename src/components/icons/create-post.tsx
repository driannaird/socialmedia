import { IconTypes } from "@/types/icon";

const CreatePostIcon = ({ variants, color = "#FF0057" }: IconTypes) => {
  return (
    <>
      {variants === "outline" ? (
        <svg
          width="44"
          height="44"
          viewBox="0 0 44 44"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <g clipPath="url(#clip0_2_12537)">
            <path
              d="M23.8333 12.8333H20.1667V20.1667H12.8333V23.8333H20.1667V31.1667H23.8333V23.8333H31.1667V20.1667H23.8333V12.8333ZM22 3.66666C11.88 3.66666 3.66667 11.88 3.66667 22C3.66667 32.12 11.88 40.3333 22 40.3333C32.12 40.3333 40.3333 32.12 40.3333 22C40.3333 11.88 32.12 3.66666 22 3.66666ZM22 36.6667C13.915 36.6667 7.33333 30.085 7.33333 22C7.33333 13.915 13.915 7.33332 22 7.33332C30.085 7.33332 36.6667 13.915 36.6667 22C36.6667 30.085 30.085 36.6667 22 36.6667Z"
              fill={color}
            />
          </g>
          <defs>
            <clipPath id="clip0_2_12537">
              <rect width="44" height="44" fill="white" />
            </clipPath>
          </defs>
        </svg>
      ) : variants === "full" ? (
        <svg
          width="44"
          height="44"
          viewBox="0 0 44 44"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <g clipPath="url(#clip0_3_12940)">
            <path
              d="M22 3.66675C11.88 3.66675 3.66667 11.8801 3.66667 22.0001C3.66667 32.1201 11.88 40.3334 22 40.3334C32.12 40.3334 40.3333 32.1201 40.3333 22.0001C40.3333 11.8801 32.12 3.66675 22 3.66675ZM31.1667 23.8334H23.8333V31.1667H20.1667V23.8334H12.8333V20.1667H20.1667V12.8334H23.8333V20.1667H31.1667V23.8334Z"
              fill={color}
            />
          </g>
          <defs>
            <clipPath id="clip0_3_12940">
              <rect width="44" height="44" fill="white" />
            </clipPath>
          </defs>
        </svg>
      ) : null}
    </>
  );
};

export default CreatePostIcon;
