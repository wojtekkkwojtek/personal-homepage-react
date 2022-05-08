import { email } from "../email";
import { SocialIcons } from "./SocialIcons";
import { 
    Address, 
    EmailLink, 
    EmailWrapper, 
    LetsTalk, 
    Paragraph, 
    Wrapper, 
} from "./styled";

export const Footer = () => (
    <Wrapper>
        <LetsTalk>
            Let's talk!
        </LetsTalk>
        <Address>
            <EmailWrapper>
                <EmailLink href={`mailto: ${email}`}>{email}</EmailLink>
            </EmailWrapper>
            <Paragraph>
                Front-end programming is currently my hobby but I would love to do it professionally! 😍 
            </Paragraph>
            <SocialIcons />
        </Address>
    </Wrapper>
);