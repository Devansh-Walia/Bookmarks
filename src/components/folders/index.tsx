import { FunctionComponent } from 'react'
import { FolderDiv } from '../../styles'
import { AddLinkGiant } from '../buttons'

type Props = {}

export const Folders: FunctionComponent<Props> = (props) => {
    return (
        <FolderDiv>
            <AddLinkGiant />
        </FolderDiv>
    )
}
