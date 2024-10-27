"use client";
import { Button, Flex, Heading, Input } from "@/once-ui/components";
import { useState } from "react";

export const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [messageSent, setMessageSent] = useState(false);
  const [messageCallout, setMessageCallout] = useState(
    "📧 Message Sent! I'll get back to you soon."
  );
  const [sendInProgress, setSendInProgress] = useState(false);
  const [hsla, setHsla] = useState("hsla(120, 96%, 88%, .85)");

  const onSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    setSendInProgress(true);
    fetch("/api/email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        name: name,
        message: message,
      }),
    })
      .then((res) => {
        if (res.status !== 200) {
          setMessageCallout("📧 Message Failed to Send! 😵");
          setHsla("hsla(10, 50%, 50%, .10)");
        }

        setSendInProgress(false);
        setMessageSent(true);
      })
      .catch((err) => {
        console.log(err);
        setMessageCallout("📧 Message Failed to Send! 😵");
        setHsla("hsla(10, 50%, 50%, .10)");
        setSendInProgress(false);
        setMessageSent(true);
      });
  };

  const onNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const onMessageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMessage(e.target.value);
  };

  const onEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  return (
    <Flex fillWidth direction="column" gap="m">
      {sendInProgress && (
        <Heading wrap="balance" variant="body-strong-l">
          Sending...
        </Heading>
      )}
      {messageSent && (
        <Heading wrap="balance" variant="body-strong-l" color={hsla}>
          {messageCallout}
        </Heading>
      )}
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
