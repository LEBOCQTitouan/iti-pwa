import Head from "next/head";
import {Box, Container} from "@mui/material";
import Grid from '@mui/material/Grid';
import Image from 'next/image'
import MenuPres from "../components/Presentation/MenuPres";
import MenuPresItem from "../components/Presentation/MenuPresItem";


export default function Introduction() {

    return (<Container>
        <Head>
            <title>Outils</title>
            <meta name="description" content="Generated by create next app"/>
            <link rel="icon" href="/favicon.ico"/>
        </Head>
        <main>
            <Grid container spacing={10} columns={{sm: 8, md: 12}}>
                <Grid item xs={8}>
                    <Container>
                        <h1>Les Outils</h1>

                        <Box height="auto" marginBottom={10}>
                            <h2 id="slide1">Frameworks utilisés</h2>
                            <p>Il est techniquement possible d&apos;installer n&apos;importe quelle application web
                                en tant que PWA tant qu&apos;elle
                                respecte les critères évoqués ci-dessus. Cependant dans un souci de simplicité il
                                est préconisé d&apos;utiliser
                                des Framework comme React ou Angular mettant en place des applications One Page ou
                                toute l&apos;application est
                                directement livrée au client par le serveur.
                            </p>
                        </Box>
                        <Box height="auto" marginBottom={10}>
                            <h2 id="slide2">React &#38; Angular</h2>
                            <Box>
                                <Image src="/img/AngularLogo.png" width={100} height={100}
                                       alt="Andular icon"/>
                                <Image src="/img/ReactLogo.png" width={100} height={100} alt="React icon"/>
                            </Box>
                            <p>React (développé par Facebook) et Angular (développé par Google)
                                sont deux frameworks JavaScript, références dans le développement web.
                                Ils permettent tous deux de créer des pages web avec différentes interfaces pour
                                l&apos;utilisateur.
                                Les applications web créées à l&apos;aide de ces frameworks sont aussi responsive,
                                c&apos;est à dire, s&apos;adaptent
                                à tous les écrans sur lesquels on souhaite les afficher.
                            </p>
                        </Box>
                        <Box height="auto" marginBottom={10}>
                            <h2 id="slide3">Outils complémentaires</h2>
                            <p>Cependant, certains outils complémentaires viennent s&apos;ajouter à ces frameworks.
                                Premièrement, NodeJs, un environnement d&apos;exécution pour Javascript fonctionnant
                                en dehors des navigateurs.
                                NodeJs permet aussi de construire des applications plus rapidement que d&apos;autres
                                technologies telles
                                que java, en utilisant moins de lignes de code.
                            </p>
                        </Box>
                    </Container>
                </Grid>
                <Grid item xs={4}>
                    <Box sx={{
                        display: {
                            xs: "none", md: "block"
                        }, position: "sticky", top: "10px",
                    }}>
                        <MenuPres title="Les outils du développement web">
                            <MenuPresItem content="Frameworks Utilisés" linkedElement="#slide1"/>
                            <MenuPresItem content="React VS Angular" linkedElement="#slide2"/>
                            <MenuPresItem content="Outils Complémentaires" linkedElement="#slide3"/>
                        </MenuPres>
                    </Box>
                </Grid>
            </Grid>
        </main>
    </Container>)
}
