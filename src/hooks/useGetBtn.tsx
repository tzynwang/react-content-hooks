import React, { useMemo } from 'react';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import { IconButton } from '@mui/material';
import { BTN_TYPE } from '@Models/GeneralModels';

export default function useGetBtn(btnType: BTN_TYPE) {
  /* Functions */
  const handleBtnClick = (action: BTN_TYPE) => () => {
    switch (action) {
      case BTN_TYPE.BOOKMARK:
        console.info('add to bookmark');
        break;
      case BTN_TYPE.CHART:
        console.info('add to chart');
        break;
      case BTN_TYPE.SERVICE:
        console.info('contact customer service');
        break;
      default:
        break;
    }
  };

  /* Views */
  const Btn = useMemo(() => {
    switch (btnType) {
      case BTN_TYPE.BOOKMARK:
        return (
          <IconButton onClick={handleBtnClick(btnType)}>
            <BookmarkIcon />
          </IconButton>
        );
      case BTN_TYPE.CHART:
        return (
          <IconButton onClick={handleBtnClick(btnType)}>
            <ShoppingCartIcon />
          </IconButton>
        );
      case BTN_TYPE.SERVICE:
        return (
          <IconButton onClick={handleBtnClick(btnType)}>
            <SupportAgentIcon />
          </IconButton>
        );
      default:
        return <React.Fragment />;
    }
  }, [btnType]);

  /* Main */
  return Btn;
}
