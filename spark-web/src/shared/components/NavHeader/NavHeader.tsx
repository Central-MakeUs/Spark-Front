import { useNavigate } from 'react-router';

import HeaderLeft from './items/HeaderLeft';

import Close from '@/assets/svg/LargeClose.svg?react';

interface NavHeader {
  goBack: boolean;
  goHome: boolean;
  title: string;
  spark: boolean;
}

function NavHeader({ goBack, goHome, title, spark }: NavHeader) {
  const navigate = useNavigate();
  const params = [goBack, title, spark].filter((param) => {
    return param !== undefined;
  });
  if (params.length > 1) {
    throw new Error('goBack, title, spark 중 하나만 입력해야 합니다.');
  }

  return (
    <div className={'flex flex-row px-[20px] py-[16px] items-center'}>
      <HeaderLeft goBack={goBack} title={title} spark={spark} />
      {goHome && <Close className={'ml-auto'} onClick={() => navigate('/')} />}
    </div>
  );
}

export default NavHeader;
