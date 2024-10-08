"use client";

import { usePathname } from "next/navigation";

import { Flex, Heading, ToggleButton } from "@/once-ui/components";
import styles from "@/app/components/Header.module.scss";

import { routes } from "@/app/resources";
import { person, home, news, paintings, tattoos, nails } from "@/app/resources";

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
        <Heading variant="display-strong-s">Iconic Atelier</Heading>
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
          {routes["/news"] &&
            getButton({
              icon: "book",
              href: "/news",
              label: news.label,
            })}
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
          {routes["/"] && (
            <ToggleButton
              prefixIcon="email"
              href="/"
              selected={pathname === "/"}
            >
              <Flex paddingX="2" hide="s">
                {home.label}
              </Flex>
            </ToggleButton>
          )}{" "}
        </Flex>
      </Flex>
      <Flex
        hide="s"
        paddingRight="12"
        fillWidth
        justifyContent="flex-end"
        alignItems="center"
        textVariant="body-default-s"
      >
        {person.location}
      </Flex>
    </Flex>
  );
};
