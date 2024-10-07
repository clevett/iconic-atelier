"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import { Flex, ToggleButton } from "@/once-ui/components";
import styles from "@/app/components/Header.module.scss";

import { routes, display } from "@/app/resources";
import {
  person,
  home,
  about,
  news,
  paintings,
  tattoos,
  nails,
} from "@/app/resources";

type TimeDisplayProps = {
  timeZone: string;
  locale?: string; // Optionally allow locale, defaulting to 'en-GB'
};

const TimeDisplay: React.FC<TimeDisplayProps> = ({
  timeZone,
  locale = "en-GB",
}) => {
  const [currentTime, setCurrentTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const options: Intl.DateTimeFormatOptions = {
        timeZone,
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false,
      };
      const timeString = new Intl.DateTimeFormat(locale, options).format(now);
      setCurrentTime(timeString);
    };

    updateTime();
    const intervalId = setInterval(updateTime, 1000);

    return () => clearInterval(intervalId);
  }, [timeZone, locale]);

  return <>{currentTime}</>;
};

export default TimeDisplay;

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
        Iconic Atelier
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
          {routes["/"] && (
            <ToggleButton
              prefixIcon="home"
              href="/"
              selected={pathname === "/"}
            >
              <Flex paddingX="2" hide="s">
                {home.label}
              </Flex>
            </ToggleButton>
          )}
          {routes["/about"] && (
            <ToggleButton
              prefixIcon="person"
              href="/about"
              selected={pathname === "/about"}
            >
              <Flex paddingX="2" hide="s">
                {about.label}
              </Flex>
            </ToggleButton>
          )}

          {routes["/news"] && (
            <ToggleButton
              prefixIcon="book"
              href="/news"
              selected={pathname.startsWith("/news")}
            >
              <Flex paddingX="2" hide="s">
                {news.label}
              </Flex>
            </ToggleButton>
          )}
          {routes["/paintings"] &&
            getButton({
              icon: "gallery",
              href: "/paintings",
              label: paintings.label,
            })}
          {routes["/tattoos"] &&
            getButton({
              icon: "gallery",
              href: "/tattoos",
              label: tattoos.label,
            })}
          {routes["/nails"] &&
            getButton({
              icon: "gallery",
              href: "/nails",
              label: nails.label,
            })}
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
