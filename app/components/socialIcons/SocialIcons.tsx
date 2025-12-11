import Discord from "@/components/svgs/Discord";
import Facebook from "@/components/svgs/Facebook";
import GitHub from "@/components/svgs/Github";
import LinkedIn from "@/components/svgs/Linkedin";
import XformerlyTwitter from "@/components/svgs/Twitter";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const SocialIcons = () => {
  const socialLinks = [
    {
      id: 1,
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/ubaidur-rahman01/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      icon: <LinkedIn className="size-5"/>,
    },
    {
      id: 2,
      name: "Twitter",
      url: "https://x.com/UbaidurRah24983?t=dXrrCouR6TD9CaqpfD2DGQ&s=08",
      icon: <XformerlyTwitter className="size-5 "/>,
    },
    {
      id: 3,
      name: "GitHub",
      url: "https://github.com/noob-ubaid",
      icon: <GitHub className="size-5 "/>,
    },
    {
      id: 4,
      name: "Facebook",
      url: "https://www.facebook.com/ubaidur.rahman.881781?rdid=KvGRqC7VQ5zQm27c&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1FXDbMmv5i%2F#",
      icon: <Facebook className="size-5"/>,
    },
    {
      id: 5,
      name: "Discord",
      url: "https://discord.com/users/9jm6f99C",
      icon: <Discord className="size-5"/>,
    },
  ];
  return (
    <div className="flex items-center gap-3 mt-6">
      {socialLinks.map((link) => {
        return (
          <div key={link.id}>
            <Tooltip>
              <TooltipTrigger asChild>
                <a href={link.url} target="_blank">
                  {" "}
                  {link.icon}
                </a>
              </TooltipTrigger>
              <TooltipContent>
                <p className="font-medium text-xs">{link.name}</p>
              </TooltipContent>
            </Tooltip>
          </div>
        );
      })}
    </div>
  );
};

export default SocialIcons;
