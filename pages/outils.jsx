import styles from "../styles/Home.module.css";
import Head from "next/head";
import { useRouter } from "next/router";
import { Button, Container, Box } from "@mui/material";

export default function Introduction() {
    const router = useRouter();

    return (
        <div className={styles.container}>
            <Head>
                <title>Outils</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className={styles.main}>
                <Box height="100vh" onClick={() => { router.push("/outils#slide2") }}>
                    <h1 id="slide1">React & Angular</h1>
                    <p>
                        Pour créer une PWA, les outils les plus utilisés aujourd'hui sont Angular et React.
                        
                    </p>
                </Box>
                <Box height="100vh" onClick={() => { router.push("/outils#slide2") }}>
                    <h1 id="slide2">React & Angular</h1>
                    <p>
                        Pour créer une PWA, les outils les plus utilisés aujourd'hui sont Angular et React.
                        
                    </p>
                </Box>
            </main>
        </div>
    )
}
