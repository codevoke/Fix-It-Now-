import { useNavigate } from "react-router-dom"

export default function MobileMainPage () {
    const navigate = useNavigate();
    return (
        <>
            <button onClick={() => navigate("/dashboard")}>to dashboard</button>
        </>
    )
}