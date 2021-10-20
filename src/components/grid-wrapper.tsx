import * as React from "react";
import {StyledGrid} from './grid-wrapper.styles'

const GridWrapper = ({children}) => {
    return (
        <StyledGrid>
            {children}
        </StyledGrid>
    )
}

export default GridWrapper


