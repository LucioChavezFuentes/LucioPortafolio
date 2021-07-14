
import { ButtonProps } from '@material-ui/core/Button';

declare module '@material-ui/core' {
  // why making another interface also affects ButtonProps?
  interface ExtendedButtonProps extends ButtonProps {
    children?: React.ReactNode;
    target?: string;
    rel?: string;
  }

  /*export class Button extends StyledComponentProps<ButtonProps & MyProps> {
  }*/
}