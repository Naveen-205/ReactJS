import Munnar from "../assets/images/munnar.jpg"
import Allappey from "../assets/images/Aleppey.jpg"
import Kochi from "../assets/images/Kochi.jpg"
 
const Tourism = () => {
    return (
        <>
            <div>
                <h3 class = "bg-info p-2 mt-3">1. Munnar</h3>
                <img src={Munnar} alt="munnar-img" />
                <p class="p-2">Munnar is a beautiful hill station in Kerala known for its cool climate, tea plantations, and scenic mountain views. Visitors enjoy exploring tea museums, waterfalls, and viewpoints like Top Station. Its peaceful atmosphere makes it perfect for nature lovers and honeymooners.</p>
            </div>
            <div>
                <h3 class = "bg-info p-2 mt-3">2. Alleppey (Alappuzha)</h3>
                <img src={Allappey} alt="allappey-img" />
                <p class="p-2">Alleppey is famous for its backwaters, houseboats, and network of canals. Tourists can stay in luxurious houseboats and enjoy a peaceful ride through paddy fields, coconut trees, and villages. It's one of the best places to experience Kerala’s traditional life and natural beauty.</p>
            </div>
            <div>
                <h3 class = "bg-info p-2 mt-3">3. Kochi (Cochin)</h3>
                <img src={Kochi} alt="kochi-img" />
                <p class="p-2">Kochi is a vibrant city that blends modern culture with historical charm. It features attractions like Fort Kochi, Chinese Fishing Nets, Mattancherry Palace, and beautiful beaches. The city is also known for its art cafés, shopping streets, and delicious seafood.</p>
            </div>
        </>
    )
}

export default Tourism;