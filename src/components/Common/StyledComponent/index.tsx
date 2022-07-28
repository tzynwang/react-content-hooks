import { styled } from '@mui/material/styles';
import { ButtonBase } from '@mui/material';
import type {
  DetailedHTMLProps,
  HTMLAttributes,
  Theme,
  MUIStyledCommonProps,
  StyledComponent,
  ButtonProps,
} from './types';

export const Stack: StyledComponent<
  MUIStyledCommonProps<Theme>,
  DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
  {}
> = styled('div')(() => ({
  display: 'flex',
  gap: '1rem',
  margin: '.5rem',
  alignItems: 'center',
}));

export const Button: StyledComponent<
  MUIStyledCommonProps<Theme>,
  DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
  ButtonProps
> = styled(ButtonBase, {
  shouldForwardProp: (props) => props !== 'light',
})<ButtonProps>(({ theme, light }) => ({
  padding: '8px 12px',
  borderRadius: '4px',
  fontSize: '1rem',
  backgroundColor: light
    ? theme.palette.info.light
    : theme.palette.primary.main,
  color: light
    ? theme.palette.info.contrastText
    : theme.palette.primary.contrastText,
  fontWeight: 300,
}));
