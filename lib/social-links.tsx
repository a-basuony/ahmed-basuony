import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";

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
  {
    name: "Facebook",
    label: "Facebook",
    icon: <FacebookIcon />,
    href: "https://www.facebook.com/a.basouny/",
    color: "#1877F2",
    textClass: "text-[#1877F2]",
    bgClass: "bg-blue-50 dark:bg-blue-900/20",
  },
  {
    name: "Instagram",
    label: "Instagram",
    icon: <InstagramIcon />,
    href: "https://www.instagram.com/ahmed_basuiony/",
    color: "#E4405F",
    textClass: "text-[#E4405F]",
    bgClass: "bg-pink-50 dark:bg-pink-900/20",
  },
];
