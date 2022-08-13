import { FunctionComponent, useState } from 'react';
import { MiddleBar, Toggle, ToggleButton } from '../../../styles';
import { AddLink } from '../../buttons';
import { SearchBox } from '../../searchBox';

const MiddlePart: FunctionComponent<any> = () => {
    const [typeToggleChecked, setTypeToggleChecked] = useState(true);

    return (
        <MiddleBar>
            <SearchBox width={'400px'} bgcolor={'rgb(116 114 114 / 20%)'} />
            <div style={{ display: 'flex', gap: 40 }}>
                <AddLink />
                <Toggle>
                    <ToggleButton
                        checked={typeToggleChecked}
                        onClick={() => {
                            setTypeToggleChecked(!typeToggleChecked);
                        }}
                    >
                        <img src={'/assets/icons/uis_apps.png'} alt="h" />
                    </ToggleButton>
                    <ToggleButton
                        checked={!typeToggleChecked}
                        onClick={() => {
                            setTypeToggleChecked(!typeToggleChecked);
                        }}
                    >
                        <img src={'/assets/icons/burger.png'} alt="h" />
                    </ToggleButton>
                </Toggle>
            </div>
        </MiddleBar>
    );
};

export default MiddlePart;
