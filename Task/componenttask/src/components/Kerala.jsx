import Festivals from "./Festivals"
import Tourism from "./Tourism"

export const Kerala = () => {
    return (
        <>
            <div>
                <h2 class = "bg-warning text-center p-2">Festivals</h2>
                <Festivals />
            </div>
            <div>
                <h2 class = "bg-warning text-center p-2">Tourism</h2>
                <Tourism />
            </div>
        </>
    )
}