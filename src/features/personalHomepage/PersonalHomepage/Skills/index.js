import { 
    StyledHeader, 
    Item, 
    List, 
    Section, 
    DotImage, 
} from "./styled";

export const Skills = ({ title, skills }) => (
    <Section>
        <StyledHeader>{title}</StyledHeader>
        <List>
            {skills.map(skill => (
                <Item key={skill}>
                    <DotImage />
                    {skill}
                </Item>
            ))}
        </List>
    </Section>
);