import { ArcElement, Chart as ChartJs, Legend, Tooltip } from "chart.js"
import { Pie } from "react-chartjs-2"
import { numberForBrl } from "../../../utils/functions"
import "../css/overview.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons"

ChartJs.register(ArcElement, Tooltip, Legend)

export default function Overview() {

    const data = {
        labels: ["Iniciadas", "Concluídas"],
        datasets: [{
            data: [600, 200],
            backgroundColor: ["rgba(255, 99, 132)", "rgba(54, 162, 235)"]
        }],

    }
    return (
        <div className="sect overview">
            <header>
                <h1>Overview</h1>
            </header>

            <div className="resume-section list">
                {[1, 2, 3, 4].map(() => {
                    return (
                        <div className="item">
                            <h4>Title</h4>
                            <span>{numberForBrl(1000)}</span>
                            <p>+15% (mês anterior)</p>
                        </div>
                    )
                })}

            </div>

            <div className="graphics">
                <div className="purchase-graph graph">
                    <h3>Vendas <span>Maio de 2025</span></h3>
                    <Pie data={data} />
                </div>
                <div className="debts-graph graph">
                    <h3>Débitos <span>Maio de 2025</span></h3>

                    <div className="line-graph">
                        <h4>
                            Pagamentos recebidos: 18/32
                            <p style={{ "--size": "56.25%" }} text="18"></p>
                        </h4>
                        <h4>
                            Pagamentos pendentes: 14/32
                            <p style={{ "--size": "43.75%" }} text="14"></p>
                        </h4>
                    </div>
                </div>
            </div>

            <div className="orders-list">
                <h3>
                    <span>Pedidos</span>
                    <div className="search">
                        <input type="text" placeholder="Buscar..." onKeyUp={({ target }) => {
                            const list = document.querySelectorAll(".orders-list .list .item")
                            list.forEach(el => el.removeAttribute("hidden"))

                            const value = target.value.toLowerCase()
                            if (value !== 0) {
                                list.forEach(el => {
                                    const text1 = el.querySelector("h4").textContent.toLowerCase()
                                    const text2 = el.querySelector("p").textContent.toLowerCase()
                                    if (!(text1).includes(value) && !(text2).includes(value)) {  
                                        el.setAttribute("hidden", "")
                                    }
                                })
                            }
                        }} />
                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                    </div>
                </h3>

                <div className="head">
                    <p>id</p><p>Cliente</p><p>Data</p><p>Produto</p>
                </div>

                <div className="list">
                    {[1, 2, 3, 4, 5, 6].map((_, index) => {
                        return (
                            <div className="item">
                                {index + 1}
                                <h4>José</h4>
                                <span>18/05/2025</span>
                                <p>Site para Barbearia{index}</p>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}