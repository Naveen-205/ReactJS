import Cinema from "./Cinema"
import Traditional from "./Traditional";

const Karnataka = () => {
    return (

        <>
         <div class="d-flex justify-content-center align-items-center p-3"><iframe width="560" height="315" src="https://www.youtube.com/embed/1y4zWX9bmKM?si=6X36LJbJ-vechpuE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </div>
            <div>
                <h2 class = "bg-warning text-center p-2 mt-4">Cinema</h2>
                <Cinema />
            </div>
            <div>
                <h2 class = "bg-warning text-center p-2">Traditional</h2>
                <Traditional />
            </div>

        </>

    )
}
export default Karnataka;