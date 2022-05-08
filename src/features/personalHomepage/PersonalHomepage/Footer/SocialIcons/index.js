import { socialMedia } from "./socialMedia";
import { Item, Link, List } from "./styled";

export const SocialIcons = () => (
    <List>
        {socialMedia.map(({ name, url, Icon }) => (
            <Item key={name}>
                <Link href={url} title={name} target="_blank" rel="noreferrer">
                    <Icon />
                </Link>
            </Item>
        ))}
    </List>
);