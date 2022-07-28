import React, { useMemo } from 'react';
import { useLocation } from 'react-router-dom';
import { Stack, Button } from '@Components/Common/StyledComponent';

enum BTN_ACTION {
  COPY = 'COPY',
  SHARE = 'SHARE',
  DL_MANUAL = 'DL_MANUAL',
  DL_SPEC = 'DL_SPEC',
}

export default function useBtnGroup() {
  /* States */
  const { pathname } = useLocation();
  const category = useMemo(() => pathname.split('/')[1] || '', [pathname]);

  /* Functions */
  const handleBtnClick = (action: BTN_ACTION) => () => {
    switch (action) {
      case BTN_ACTION.COPY:
        console.info('copy product id');
        break;
      case BTN_ACTION.SHARE:
        console.info('share this page');
        break;
      case BTN_ACTION.DL_MANUAL:
        console.info('download manual');
        break;
      case BTN_ACTION.DL_SPEC:
        console.info('download specification');
        break;
      default:
        break;
    }
  };

  /* Views */
  const BtnGroup = useMemo(() => {
    switch (category) {
      case 'category1':
        return (
          <Stack>
            <Button onClick={handleBtnClick(BTN_ACTION.COPY)}>
              copy product id
            </Button>
            <Button onClick={handleBtnClick(BTN_ACTION.SHARE)} light>
              share this page
            </Button>
          </Stack>
        );
      case 'category2':
      case 'category3':
        return (
          <Stack>
            <Button onClick={handleBtnClick(BTN_ACTION.COPY)}>
              copy product id
            </Button>
            <Button onClick={handleBtnClick(BTN_ACTION.DL_MANUAL)}>
              download manual
            </Button>
            <Button onClick={handleBtnClick(BTN_ACTION.DL_SPEC)}>
              download specification
            </Button>
            <Button onClick={handleBtnClick(BTN_ACTION.SHARE)} light>
              share this page
            </Button>
          </Stack>
        );
      case 'category4':
        return (
          <Stack>
            <Button onClick={handleBtnClick(BTN_ACTION.SHARE)} light>
              share this page
            </Button>
          </Stack>
        );
      default:
        return <React.Fragment />;
    }
  }, [category]);

  /* Main */
  return BtnGroup;
}
