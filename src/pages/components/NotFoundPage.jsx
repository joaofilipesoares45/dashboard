import { Link } from "react-router";
import styles from "./NotFoundPage.module.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExclamationCircle } from "@fortawesome/free-solid-svg-icons";
export default function NotFoundPage() {
    return (
        <div className={"page not-found-page " + styles["not-found-page"]}>

            <div>
                <FontAwesomeIcon icon={faExclamationCircle}/>
                <h1>Url inválida</h1>
                <span>Está pagina não exsite!</span>
                <Link to={"/"}>
                    <button>Voltar para Home</button>
                </Link>
            </div>

        </div>
    )
}