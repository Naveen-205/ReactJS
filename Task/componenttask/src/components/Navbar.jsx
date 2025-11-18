import IT from '../assets/images/IT.jpg'
import Robo from "../assets/images/Robo.jpg"

const Navbar = () => {
    return (
        <>
            <div>
                <h2 class = "bg-warning text-center p-2 mt-4">IT Companies</h2>
                <img src={IT} alt="IT-Img" />
                <p class="p-2">Chennai is a major Indian IT hub with numerous multinational and domestic companies, including large firms like TCS, Infosys, Cognizant, Accenture, and HCL Technologies, which offer a wide range of IT services and have a strong presence in the city. The city also has a thriving startup scene, particularly in SaaS, with companies like Zoho, Freshworks, and Agnikul Cosmos. This ecosystem is supported by a large talent pool from the region's many engineering colleges and IT parks. </p>
                
            </div>
            <div>
                <h2 class = "bg-warning text-center p-2">Robotics</h2>
                <img src={Robo} alt="robo-img"/>
                <p class="p-2">Robotics is a multidisciplinary field of science and engineering that combines computer science, mechanical engineering, and electrical engineering to design, build, operate, and use robots. It involves creating automated or semi-automated machines that can perform tasks with or without human input, often in place of humans in dangerous or repetitive jobs, or to perform more complex functions like surgery. Robotics is revolutionizing industries and is used in everything from manufacturing and logistics to healthcare, space exploration, and home appliances. </p>
            </div>
        </>
    )
}
export default Navbar;