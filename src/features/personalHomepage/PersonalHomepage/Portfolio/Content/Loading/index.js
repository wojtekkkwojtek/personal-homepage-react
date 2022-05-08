import { StyledSpinner, Wrapper } from "./styled";

export const Loading = () => (
    <Wrapper>
        Please, hold on&nbsp;a&nbsp;second.<br />
        My projects are&nbsp;being&nbsp;loaded...
        <StyledSpinner />
    </Wrapper>
);