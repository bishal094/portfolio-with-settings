import { DiAngularSimple, DiBootstrap, DiReact } from "react-icons/di";
import { FaFacebookF, FaGoogle, FaShopify, FaSpotify } from "react-icons/fa"
import { FaGithub, FaInstagram, FaLinkedin, FaGitlab } from "react-icons/fa"

export const variables = {
    pageHeader: "Portfolio",
    headerUrls: [
        {
            title: "instagram",
            icon: FaInstagram,
            url: "https://www.instagram.com/bishal09/"
        },
        {
            title: "linkedin",
            icon: FaLinkedin,
            url: "https://www.linkedin.com/in/bishal-shrestha-894741224/"
        },
        {
            title: "github",
            icon: FaGithub,
            url: "https://github.com/bishal094"
        },
        {
            title: "gitlab",
            icon: FaGitlab,
            url: "https://gitlab.com/bishalshrestha037"
        },
    ],
    firstSection: {
        firstText: "Hi, i am",
        coloredText: "Bishal shrestha",
        smallText: "Angular, React, Bootstrap, ASP.net core, Next.jsAngular, React, Bootstrap, ASP.net core, Next.js",
        imgUrl: "https://avatars.githubusercontent.com/u/48466664?s=400&u=a7ab7b84322362e99d2a76c6d144c8ae0db642ef&v=4",
        btnText: "Hello",
        btnUrl: "javascript:void()"
    },
    socialNetworks: [
        {
            icon: FaFacebookF,
            url: ""
        }, {
            icon: FaGoogle,
            url: ""
        }, {
            icon: FaShopify,
            url: "https://open.spotify.com/user/9vz8hsllb0mlvkq0i31kps2ct?si=VcrHs2BWRumhqmhTIFwh1g"
        }, {
            icon: FaSpotify,
            url: ""
        },
    ],
    workExperience: {
        middleTitle: "Frontend developer at Alpas technology",
        bigColoredText: "5+",
        smallText: "Years of experience",
        areaOfExpertise: [
            {
                logo: DiAngularSimple,
                title: "Angular Apps",
                bgColor: "red.400"
            },
            {
                logo: DiReact,
                title: "React Apps",
                bgColor: "cyan.400"
            },
            {
                logo: DiBootstrap,
                title: "Bootstrap",
                bgColor: "purple.400"
            }
        ]
    }

}