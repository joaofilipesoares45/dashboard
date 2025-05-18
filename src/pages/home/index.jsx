import { faGear, faUser } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Overview from "./components/Overview"
import Sidebar from "./components/Sidebar"
import "./css/index.css"

export default function Home() {
    return (
        <div className="page home">
            <Sidebar />
            <main>
                <div className="head-main">
                    <nav>
                        <FontAwesomeIcon icon={faGear} />
                        <FontAwesomeIcon icon={faUser} />
                    </nav>
                </div>
                <Overview />
            </main>
        </div>
    )
}