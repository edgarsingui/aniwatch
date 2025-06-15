import { HiAnime, HiAnimeError } from "./index.js"; // importa como seria no pacote

const hianime = new HiAnime.Scraper();

try {

    // const data: HiAnime.ScrapedAnimeAboutInfo = await hianime.getInfo(
    //     "steinsgate-3"
    // );


   const data =  hianime.getEpisodeSources("my-hero-academia-vigilantes-19544?ep=136197");
    

    
    console.log(data);
} catch (err) {
    console.error(err instanceof HiAnimeError, err);
}
