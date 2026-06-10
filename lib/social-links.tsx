import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import { SvgIcon, type SvgIconProps } from "@mui/material";

const LinktreeIcon = (props: SvgIconProps) => (
  <SvgIcon {...props}>
    {/* Boxicons v3.0.8 Path */}
    <path d="M18.77 5.42 16.83 3.45 13.47 6.87 13.47 2 10.57 2 10.57 6.87 7.21 3.45 5.27 5.42 8.81 8.77 3.86 8.77 3.82 8.77 3.82 11.51 8.79 11.51 5.25 14.92 7.19 16.87 12 12.04 16.81 16.85 18.75 14.92 15.21 11.51 20.18 11.51 20.18 8.75 15.23 8.75 18.77 5.42z" />
    <path d="M10.59 15.46H13.49V22H10.59z" />
  </SvgIcon>
);
export const socialLinks = [
  {
    name: "GitHub",
    label: "GitHub",
    icon: <GitHubIcon />,
    href: "https://github.com/a-basuony",
    color: "#181717",
    textClass: "text-[#181717] dark:text-white",
    bgClass: "bg-slate-100 dark:bg-slate-800",
  },
  {
    name: "LinkedIn",
    label: "LinkedIn",
    icon: <LinkedInIcon />,
    href: "https://www.linkedin.com/in/ahmed-basuony-0654202a4/",
    color: "#0077B5",
    textClass: "text-[#0A66C2]",
    bgClass: "bg-blue-50 dark:bg-blue-900/20",
  },
  {
    name: "Email",
    label: "Email",
    icon: <EmailIcon />,
    href: "mailto:ahmedbasuony.dev@gmail.com",
    color: "#EA4335",
    textClass: "text-[#EA4335]",
    bgClass: "bg-red-50 dark:bg-red-900/20",
  },
  {
    name: "WhatsApp",
    label: "WhatsApp",
    icon: <WhatsAppIcon />,
    href: "https://api.whatsapp.com/send?phone=966511861442&text=Hello%20Ahmed,%20I%20visited%20your%20portfolio",
    color: "#25D366",
    textClass: "text-[#25D366]",
    bgClass: "bg-green-50 dark:bg-green-900/20",
  },
  // {
  //   name: "Facebook",
  //   label: "Facebook",
  //   icon: <FacebookIcon />,
  //   href: "https://www.facebook.com/a.basouny/",
  //   color: "#1877F2",
  //   textClass: "text-[#1877F2]",
  //   bgClass: "bg-blue-50 dark:bg-blue-900/20",
  // },
  // {
  //   name: "Instagram",
  //   label: "Instagram",
  //   icon: <InstagramIcon />,
  //   href: "https://www.instagram.com/ahmed_basuiony/",
  //   color: "#E4405F",
  //   textClass: "text-[#E4405F]",
  //   bgClass: "bg-pink-50 dark:bg-pink-900/20",
  // },
  {
    name: "Linktree",
    label: "Linktree",
    icon: <LinktreeIcon />,
    href: "https://linktr.ee/Ahmed_Basionuy",
    color: "#22c55e",
    textClass: "text-green-500",
    bgClass: "bg-green-50 dark:bg-green-900/20",
  },
];
