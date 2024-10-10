import { Flex } from "@/once-ui/components";

import styles from "./Footer.module.scss";
import { Socials } from "./Socials";

export const Footer = () => {
  return (
    <div className={styles.footer}>
      <Flex as="footer" fillWidth justifyContent="center" padding="8">
        <Flex
          alignItems="center"
          fillWidth
          justifyContent="end"
          paddingX="16"
          paddingY="8"
        >
          <Socials />
        </Flex>
      </Flex>
    </div>
  );
};
