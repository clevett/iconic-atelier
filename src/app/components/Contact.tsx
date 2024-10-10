"use client";
import { Button, Flex, Heading, Input } from "@/once-ui/components";
import { useState } from "react";

export const Contact = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const onNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const onMessageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMessage(e.target.value);
  };

  const onEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const onSubmit = () => {
    console.table({
      name,
      email,
      message,
    });
  };

  return (
    <Flex fillWidth direction="column" gap="m">
      <Heading wrap="balance" variant="body-strong-l">
        Contact
      </Heading>
      <Input id="name" label="Name" value={name} onChange={onNameChange} />
      <Input id="email" label="Email" value={email} onChange={onEmailChange} />
      <Input
        id="message"
        label="Message"
        onChange={onMessageChange}
        value={message}
      />
      <Button onClick={onSubmit} variant="secondary" size="m" label="Submit" />
    </Flex>
  );
};
