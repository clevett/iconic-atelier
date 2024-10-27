"use client";

import { usePathname } from "next/navigation";

import { Flex, Heading, SmartLink, ToggleButton } from "@/once-ui/components";
import styles from "@/app/components/Header.module.scss";
import {
  home,
  paintings,
  tattoos,
  nails,
  contact,
  routes,
} from "@/app/resources";

export const Header = () => {
  const pathname = usePathname() ?? "";

  const getButton = ({
    icon,
    href,
    label,
  }: {
    icon: string;
    href: string;
    label: string;
  }) => {
    const selected = href === pathname;
    return (
      <>
        <Flex show="s" hide="m">
          <ToggleButton
            prefixIcon={icon}
            href={href}
            selected={selected}
            size="l"
          />
        </Flex>
        <Flex hide="s">
          <ToggleButton href={href} selected={selected} size="l">
            <Flex className={styles.label} paddingX="2">
              {label}
            </Flex>
          </ToggleButton>
        </Flex>
      </>
    );
  };

  return (
    <Flex
      as="header"
      className={styles.position}
      fillWidth
      justifyContent="center"
      padding="8"
      style={{ height: "fit-content" }}
      zIndex={9}
    >
      <Flex
        alignItems="center"
        fillWidth
        hide="s"
        paddingLeft="12"
        textVariant="body-default-s"
      >
        <SmartLink href="/" selected={pathname === "/"} className={styles.link}>
          {home.headline}
        </SmartLink>
      </Flex>
      <Flex
        background="surface"
        justifyContent="center"
        padding="4"
        radius="m-4"
        shadow="l"
      >
        <Flex gap="4" textVariant="body-default-s">
          <Flex className={styles.about} show="s" hide="m">
            {routes["/"] &&
              getButton({
                icon: "home",
                href: "/",
                label: home.label,
              })}
          </Flex>
          {routes["/paintings"] &&
            getButton({
              icon: "gallery",
              href: "/paintings",
              label: paintings.label,
            })}
          {routes["/tattoos"] &&
            getButton({
              icon: "needle",
              href: "/tattoos",
              label: tattoos.label,
            })}
          {routes["/nails"] &&
            getButton({
              icon: "paintbrush",
              href: "/nails",
              label: nails.label,
            })}
          {/* {routes["/contact"] &&
            getButton({
              icon: "email",
              href: "/contact",
              label: contact.label,
            })} */}
        </Flex>
      </Flex>
      <Flex
        alignItems="center"
        fillWidth
        hide="s"
        justifyContent="flex-end"
        paddingRight="12"
        textVariant="body-default-s"
      >
        <SmartLink href="/" selected={pathname === "/"} className={styles.link}>
          About
        </SmartLink>
      </Flex>
    </Flex>
  );
};
