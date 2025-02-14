import { SvgProps } from './UnifiedSettingIcon';

export const BackIcon = ({
  color = 'black',
  className,
  ...props
}: SvgProps) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...props}
    >
      <path
        d="M8.55439 11.5271L15.1552 17.0659C15.5783 17.4209 15.6335 18.0517 15.2785 18.4747C14.9235 18.8978 14.2927 18.953 13.8696 18.598L6.36322 12.2993C6.30343 12.2492 6.25099 12.1935 6.20601 12.1337C5.88238 11.7115 5.9458 11.1052 6.35736 10.7599L13.8646 4.46054C14.2877 4.10554 14.9184 4.16072 15.2734 4.5838C15.6284 5.00687 15.5732 5.63763 15.1502 5.99263L8.55439 11.5271Z"
        fill={color}
      />
    </svg>
  );
};
