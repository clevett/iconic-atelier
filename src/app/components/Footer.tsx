import { Flex, IconButton, SmartLink, Text } from "@/once-ui/components";
import { person, social } from "@/app/resources";

import styles from "./Footer.module.scss";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <Flex
      as="footer"
      className={styles.footer}
      fillWidth
      justifyContent="center"
      padding="8"
    >
      <Flex
        alignItems="center"
        fillWidth
        // justifyContent="space-between"
        // maxWidth="m"
        justifyContent="end"
        paddingX="16"
        paddingY="8"
      >
        {/* <Text variant="body-default-s" onBackground="neutral-strong">
          <Text onBackground="neutral-weak">© {currentYear} /</Text>
          <Text paddingX="4">Emerald Productions, LLC</Text>
          <Text onBackground="neutral-weak">
            / Build your portfolio with{" "}
            <SmartLink
              style={{ marginLeft: "-0.125rem" }}
              href="https://once-ui.com/templates/magic-portfolio"
            >
              Once UI
            </SmartLink>
          </Text>
        </Text> */}
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
      </Flex>
    </Flex>
  );
};
