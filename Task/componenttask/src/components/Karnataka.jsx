import Cinema from "./Cinema"
import Traditional from "./Traditional";

const Karnataka = () => {
    return (

        <>
            <div>
                <h2 class = "bg-warning text-center p-2">Cinema</h2>
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