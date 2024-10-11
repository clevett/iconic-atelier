"use client";

import { usePathname } from "next/navigation";

import { Flex, Heading, SmartLink, ToggleButton } from "@/once-ui/components";
import styles from "@/app/components/Header.module.scss";
import {
  location,
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
    return (
      <ToggleButton
        prefixIcon={icon}
        href={href}
        selected={pathname.startsWith(`${href}`)}
      >
        <Flex paddingX="2" hide="s">
          {label}
        </Flex>
      </ToggleButton>
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
        <Heading variant="display-strong-m">Iconic Atelier</Heading>
      </Flex>
      <Flex
        background="surface"
        border="neutral-medium"
        borderStyle="solid-1"
        justifyContent="center"
        padding="4"
        radius="m-4"
        shadow="l"
      >
        <Flex gap="4" textVariant="body-default-s">
          <div className={styles.about}>
            {routes["/"] && (
              <ToggleButton
                href="/"
                prefixIcon="home"
                selected={pathname === "/"}
              >
                <Flex paddingX="2" hide="s">
                  {home.label}
                </Flex>
              </ToggleButton>
            )}
          </div>
          {/* {routes["/news"] &&
            getButton({
              icon: "book",
              href: "/news",
              label: news.label,
            })} */}
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
          {routes["/contact"] &&
            getButton({
              icon: "email",
              href: "/contact",
              label: contact.label,
            })}
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
