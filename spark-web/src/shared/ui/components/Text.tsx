import clsx from 'clsx';

interface TextProps {
  as: keyof typeof style;
  title: string;
  className?: string;
}

const style = {
  title: 'text-black font-extrabold text-[15px] not-italic',
  description: 'text-gray font-medium text-[13px] not-italic',
} as const;

export default function Text({ as, title, className }: TextProps) {
  return <p className={clsx(style[as], className)}>{title}</p>;
}
