import { useNavigate } from 'react-router';

import ArrowLeftThick from '@/assets/svg/arrowLeftThick.svg?react';
import SparkSymbol from '@/assets/svg/sparkSymbol.svg?react';
import SparkText from '@/assets/svg/sparkText.svg?react';

interface HeaderLeft {
  goBack: boolean;
  title: string;
  spark: boolean;
}

function HeaderLeft({ goBack, title, spark }: HeaderLeft) {
  const navigate = useNavigate();

  if (goBack) {
    return (
      <ArrowLeftThick
        className={'flex-1 mr-[20px]'}
        onClick={() => navigate(-1)}
      />
    );
  } else if (spark) {
    return (
      <div className={'flex flex-row flex-1 items-center'}>
        <SparkSymbol />
        <SparkText />
      </div>
    );
  } else if (title && title.length > 0) {
    return (
      <>
        <span className={'flex-1 text-title4-eb'}>{title}</span>
      </>
    );
  }
}

export default HeaderLeft;
