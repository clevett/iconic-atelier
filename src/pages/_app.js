import localFont from "next/font/local";

// Font files can be colocated inside of `pages`
const path = "../app/fonts";
const myFont = localFont({
  src: [
    {
      path: path + "/eina-01-regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: path + "/eina-01-light.woff2",
      weight: "400",
      style: "light",
    },
    {
      path: path + "/eina-01-bold.woff2",
      weight: "700",
      style: "bold",
    },
    {
      path: path + "/eina-01-semibold.woff2",
      weight: "500",
      style: "semi-bold",
    },
  ],
});

export default function MyApp({ Component, pageProps }) {
  console.log(myFont.className);

  return (
    <main className={myFont.className}>
      <Component {...pageProps} />
    </main>
  );
}
