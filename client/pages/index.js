import Head from "next/head";
import styles from "../styles/Home.module.css";
import { useEffect } from "react";
import { useRouter } from "next/router";
import { useSession } from "next-auth/react";

export default function Home() {
  const { data: session } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (session) {
      router.push("/dashboard");
    } else {
      router.push("/api/auth/signin");
    }
  }, [router, session]);

  return (
    <div className={styles.container}>
      <Head>
        <title>Trading app</title>
        <meta name="description" content="Simple trading app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h4>Loading...</h4>
      </main>

      <footer className={styles.footer}>
        <h1>Simple footer</h1>
      </footer>
    </div>
  );
}
