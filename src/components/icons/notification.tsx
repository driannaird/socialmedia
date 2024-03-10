import { IconTypes } from "@/types/icon";

const NotificationIcon = ({ variants, color = "#FF0057" }: IconTypes) => {
  return (
    <>
      {variants === "outline" ? (
        <svg
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <g clipPath="url(#clip0_2_12542)">
            <path
              d="M16 29.3333C17.4667 29.3333 18.6667 28.1333 18.6667 26.6667H13.3333C13.3333 28.1333 14.5333 29.3333 16 29.3333ZM24 21.3333V14.6667C24 10.5733 21.8267 7.14668 18 6.24001V5.33334C18 4.22668 17.1067 3.33334 16 3.33334C14.8933 3.33334 14 4.22668 14 5.33334V6.24001C10.1867 7.14668 8 10.56 8 14.6667V21.3333L5.33334 24V25.3333H26.6667V24L24 21.3333ZM21.3333 22.6667H10.6667V14.6667C10.6667 11.36 12.68 8.66668 16 8.66668C19.32 8.66668 21.3333 11.36 21.3333 14.6667V22.6667Z"
              fill={color}
            />
          </g>
          <defs>
            <clipPath id="clip0_2_12542">
              <rect width="32" height="32" fill="white" />
            </clipPath>
          </defs>
        </svg>
      ) : variants === "full" ? (
        <svg
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill={color}
          xmlns="http://www.w3.org/2000/svg">
          <g clipPath="url(#clip0_4_13007)">
            <path
              d="M16 29.3333C17.4667 29.3333 18.6667 28.1333 18.6667 26.6666H13.3333C13.3333 28.1333 14.52 29.3333 16 29.3333ZM24 21.3333V14.6666C24 10.5733 21.8133 7.14659 18 6.23992V5.33325C18 4.22659 17.1067 3.33325 16 3.33325C14.8933 3.33325 14 4.22659 14 5.33325V6.23992C10.1733 7.14659 8 10.5599 8 14.6666V21.3333L6.28 23.0533C5.44 23.8933 6.02667 25.3333 7.21333 25.3333H24.7733C25.96 25.3333 26.56 23.8933 25.72 23.0533L24 21.3333Z"
              fill="#FF0057"
            />
          </g>
          <defs>
            <clipPath id="clip0_4_13007">
              <rect width="32" height="32" fill="white" />
            </clipPath>
          </defs>
        </svg>
      ) : null}
    </>
  );
};

export default NotificationIcon;
