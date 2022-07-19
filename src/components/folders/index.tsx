import { FunctionComponent } from 'react'
import { FolderDiv } from '../../styles'
import { AddLinkButton } from '../buttons'

type Props = {}

export const Folders: FunctionComponent<Props> = (props) => {
    return (
        <FolderDiv>
            <AddLinkButton />
        </FolderDiv>
    )
}
