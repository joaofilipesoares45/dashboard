import { faArrowRightToBracket, faBoxArchive, faBoxesPacking, faChartSimple, faUsers, faBell, faChevronRight } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { closeModal, openModal } from "../../../utils/functions"
import { useState } from "react"
export default function Sidebar() {
    const [open, setOpen] = useState(true)

    return (
        <div className="modal home-sidebar">
            <div className="content">
                <h1><span>Dashboard</span> <FontAwesomeIcon icon={faChevronRight} onClick={() => {
                    if (open) {
                        openModal("home-sidebar")
                        setOpen(false)
                    } else {
                        closeModal("home-sidebar")
                        setOpen(true)
                    }

                }} /></h1>

                <nav>
                    <button>
                        <FontAwesomeIcon icon={faChartSimple} />
                        <span>Overview</span>
                    </button>
                    <button>
                        <FontAwesomeIcon icon={faUsers} />
                        <span>Clientes</span>
                    </button>
                    <button>
                        <FontAwesomeIcon icon={faBoxArchive} />
                        <span>Produtos/Estoque</span>
                    </button>
                    <button>
                        <FontAwesomeIcon icon={faBoxesPacking} />
                        <span>Fornecedores</span>
                    </button>
                    <button>
                        <FontAwesomeIcon icon={faBell} />
                        <span>Notificações</span>
                    </button>
                </nav>

                <div className="options">
                    <button>
                        <FontAwesomeIcon icon={faArrowRightToBracket} />
                        <span>LogOut</span>
                    </button>
                </div>
            </div>

        </div>
    )
}