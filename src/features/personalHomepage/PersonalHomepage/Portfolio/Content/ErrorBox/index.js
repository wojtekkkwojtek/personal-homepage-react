import { ButtonLink } from "../../../ButtonLink";
import { githubUsername } from "../../githubUsername";
import { Header, Paragraph, Wrapper } from "./styled";
import { ReactComponent as WarningIcon } from "./warning.svg";

export const ErrorBox = () => (
    <Wrapper>
        <WarningIcon />
        <Header>
            Ooops! Something went&nbsp;wrong! 😒
        </Header>
        <Paragraph>
            Sorry, failed to load Github projects.<br />
            Please, check them directly on&nbsp;Github.com
        </Paragraph>
        <ButtonLink
            href={`https://github.com/${githubUsername}`}
            target="_blank"
        >
            Go to Github
        </ButtonLink>
    </Wrapper>
);