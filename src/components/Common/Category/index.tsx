import React, { memo, useState, useMemo, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Stack } from '@Components/Common/StyledComponent';
import useBtnGroup from '@Hooks/useBtnGroup';
import useGetBtn from '@Hooks/useGetBtn';
import { BTN_TYPE } from '@Models/GeneralModels';

const mockUserHasLoginResult = Math.random() > 0.2;
const mockIsPremiumUser = Math.random() > 0.5;

function Category(): React.ReactElement {
  /* States */
  const { pathname } = useLocation();
  const category = useMemo(() => pathname.split('/')[1] || '', [pathname]);
  const [userHasLogin, setUserHasLogin] = useState<boolean>(false);
  const [isPremiumUser, setIsPremiumUsr] = useState<boolean>(false);
  const BookmarkBtn = useGetBtn(BTN_TYPE.BOOKMARK);
  const AddToChartBtn = useGetBtn(BTN_TYPE.CHART);
  const CustomerServiceBtn = useGetBtn(BTN_TYPE.SERVICE);

  /* Functions */
  const initialize = (): void => {
    // authorizing user with backend...
    // set result:
    setUserHasLogin(mockUserHasLoginResult);
    setIsPremiumUsr(mockIsPremiumUser);
  };

  /* Hooks */
  useEffect(() => {
    initialize();
  }, []);

  /* Views */
  const BtnGroup = useBtnGroup();

  /* Main */
  return (
    <div>
      Current category: {category}
      {BtnGroup}
      <Stack>
        {BookmarkBtn}
        {userHasLogin && AddToChartBtn}
        {userHasLogin && isPremiumUser && CustomerServiceBtn}
      </Stack>
    </div>
  );
}

export default memo(Category);
