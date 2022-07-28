import type { DetailedHTMLProps, HTMLAttributes } from 'react';
import type { Theme } from '@mui/material/styles';
import type { ButtonBaseProps } from '@mui/material';
import type { MUIStyledCommonProps } from '@mui/system';
import type { StyledComponent } from '@emotion/styled';

export interface ButtonProps extends ButtonBaseProps {
  light?: boolean;
}

export type {
  DetailedHTMLProps,
  HTMLAttributes,
  Theme,
  MUIStyledCommonProps,
  StyledComponent,
};
