import { SvgProps } from './nav/SettingIcon';

export const LargeClose = ({ color, className, ...props }: SvgProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      fill="none"
      className={className}
      {...props}
    >
      <path fill="#fff" d="M0 0h24v24H0z" />
      <path
        fill="#1C1C1E"
        d="M6.121 4.707a1 1 0 0 0-1.414 1.414l5.657 5.657-5.657 5.657a1 1 0 1 0 1.414 1.414l5.657-5.656 5.657 5.656a1 1 0 1 0 1.414-1.414l-5.657-5.657 5.657-5.657a1 1 0 0 0-1.414-1.414l-5.657 5.657-5.657-5.657Z"
      />
    </svg>
  );
};
