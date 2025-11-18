import Sapta from "../assets/images/Sapta.jpg"
import Baan from "../assets/images/baan.jpg"
import Ramyo from "../assets/images/ramyo.jpg"

import Vikrant from "../assets/images/VR.jpg"
import Kantara from "../assets/images/kantara.jpg"
import Adhi from "../assets/images/adhi.jpg"

import Seven from "../assets/images/777.jpg"
import Kaan from "../assets/images/kaan.jpg"





const Cinema = () => {
    return (
        <>
            <div>
                <h2 class="bg-secondary p-3 text-white text-center mt-3">Love Story Movies</h2>

                <h3 class = "bg-info p-2 mt-3">1. Sapta Saagaradaache Ello: Side A</h3>
                <img src={Sapta} alt="sapta-img" />
                <p class="p-2">A beautiful emotional love story between Manu and Priya, filled with pain, sacrifice, and strong performances. The film became popular for its realistic romance, soulful music, and heart-touching storytelling.</p>

                <h3 class = "bg-info p-2 mt-3">2. Baanadariyalli</h3>
                <img src={Baan} alt="baan-img" />
                <p class="p-2">A romantic drama about a couple whose relationship is tested by life’s unexpected challenges. Shot in beautiful locations, the film highlights love, dreams, and emotional bonding with strong acting by Ganesh and Rukmini Vasanth.</p>

                <h3 class = "bg-info p-2 mt-3">3. Raymo</h3>
                <img src={Ramyo} alt="ramyo-img" />
                <p class="p-2">A musical romantic drama about a rich, arrogant rock star whose life changes when he falls in love. The film mixes romance, music, and family emotions, making it a good modern love story.</p>
            </div>

            <div>
                <h2 class="bg-secondary p-3 text-white text-center mt-3">Action Movies</h2>

                <h3 class = "bg-info p-2 mt-3">1. Vikrant Rona</h3>
                <img src={Vikrant} alt="vik-img" />
                <p class="p-2">A stylish action-adventure thriller where a mysterious police officer investigates strange murders in a dark forest village. The movie stands out for its visuals, suspense, and Sudeep’s powerful performance.</p>

                <h3 class = "bg-info p-2 mt-3">2. Kantara</h3>
                <img src={Kantara} alt="kantara-img" />
                <p class="p-2">An intense action-drama rooted in coastal Karnataka’s culture and folklore. The film combines traditions, divine beliefs, and thrilling action scenes, especially the powerful climax.</p>

                <h3 class = "bg-info p-2 mt-3">3. Adhipatra</h3>
                <img src={Adhi} alt="adhi-img" />
                <p class="p-2">A recent thriller set in coastal Karnataka, mixing mystery, action, and local cultural elements. The story revolves around dark secrets connected to rituals, giving it a unique style.</p>
            </div>

            <div>
                <h2 class="bg-secondary p-3 text-white text-center mt-3">Most-Watched</h2>

                <h3 class = "bg-info p-2 mt-3">1. Kantara</h3>
                <img src={Kantara} alt="kantara-img" />
                <p class="p-2">A massive blockbuster loved across India for its story, culture, music, and emotional depth. It became one of the most-watched Kannada films ever.</p>

                <h3 class = "bg-info p-2 mt-3">2. 777 Charlie</h3>
                <img src={Seven} alt="777-img" />
                <p class="p-2">A heartwarming story about a lonely man and a loyal dog who changes his life. The movie won hearts everywhere and became one of the most popular Kannada films.</p>

                <h3 class = "bg-info p-2 mt-3">3. Kantara: Chapter 1</h3>
                <img src={Kaan} alt="kaan-img" />
                <p class="p-2">The prequel to Kantara, showing the origin of the Daiva tradition. It became a huge success with powerful visuals, action, and emotional storytelling.</p>
            </div>
        </>
    )
}
export default Cinema;