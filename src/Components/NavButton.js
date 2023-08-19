import BootstrapButton from './BootstrapButton';
import * as MuiIcon from "@material-ui/icons";
import React from "react";


export default function NavButton(props) {
  const CustomTag = MuiIcon[props?.iconName];
  const isIcon= CustomTag ? true: false;

  return (
    <BootstrapButton variant="contained" disableRipple>
      <div style={{ align: 'center' }}>
        {
        isIcon &&<CustomTag />
        }
        <div>{props.text}</div>
      </div>
    </BootstrapButton>
  );
}
