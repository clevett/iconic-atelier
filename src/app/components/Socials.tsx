import { Flex, IconButton } from "@/once-ui/components";
import { social } from "@/app/resources";

export const Socials = () => {
  return (
    <Flex gap="16">
      {social.map(
        (item) =>
          item.link && (
            <IconButton
              href={item.link}
              icon={item.icon}
              key={item.name}
              size="s"
              tooltip={item.name}
              variant="ghost"
            />
          )
      )}
    </Flex>
  );
};
