import { styleIcon } from "./styled";
import { ReactComponent as GithubIcon } from "./icons/github.svg";
import { ReactComponent as LinkedInIcon } from "./icons/linkedin.svg";

export const socialMedia = [
    {
        name: "GitHub",
        url: "https://github.com/wojtekkkwojtek",
        Icon: styleIcon(GithubIcon),
    },
    {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/wojciech-kurdzielewicz-frontend/",
        Icon: styleIcon(LinkedInIcon),
    },
];