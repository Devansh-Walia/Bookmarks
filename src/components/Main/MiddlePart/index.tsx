import { FunctionComponent, useState } from 'react';

import {
  MiddleBar,
  MiddleBarLeftDiv,
  Toggle,
  ToggleButton
} from '../../../styles';
import { AddLink } from '../../buttons';
import { SearchBox } from '../../searchBox';

const MiddlePart: FunctionComponent = () => {
  const [typeToggleChecked, setTypeToggleChecked] = useState(true);

  return (
    <MiddleBar>
      <SearchBox width={'400px'} bgcolor={'rgb(116 114 114 / 20%)'} />
      <MiddleBarLeftDiv>
        <AddLink />
        <Toggle>
          <ToggleButton
            checked={typeToggleChecked}
            onClick={() => {
              setTypeToggleChecked(!typeToggleChecked);
            }}>
            <img src={'/assets/icons/uis_apps.png'} alt="" />
          </ToggleButton>
          <ToggleButton
            checked={!typeToggleChecked}
            onClick={() => {
              setTypeToggleChecked(!typeToggleChecked);
            }}>
            <img src={'/assets/icons/burger.png'} alt="" />
          </ToggleButton>
        </Toggle>
      </MiddleBarLeftDiv>
    </MiddleBar>
  );
};

export default MiddlePart;
