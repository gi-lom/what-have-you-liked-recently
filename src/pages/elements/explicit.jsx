import React from "react"

const getGraph = (charts) => {
    return (
        <div className="graph">
            <table className="charts-css bar multiple stacked">
                <tbody>
                    <tr>
                        <td style={{"--size": "calc(" + charts + " / 50)"}} />
                        <td style={{"--size": "calc(" + 50-charts + " / 50)"}} />
                    </tr>
                </tbody>
            </table>
            <div className="legend">
                <span className="legend-left">
                    <div className="legend-data">{charts}</div>
                    <div className="legend-label">Explicit</div>
                </span>
                <span className="legend-right">
                    <div className="legend-data">{50-charts}</div>
                    <div className="legend-label">Not explicit</div>
                </span>
            </div>
        </div>
    )
}

const getChart = (charts) => {
    const graph = getGraph(charts);
    return (
        <div className="chart">
            <div className="big"> Explicitness </div>
            <div className="description"> How many songs contain explicit content? </div>
            {graph}
        </div>
    )
}


const Explicit = (props) => {
    let chart = getChart(props.stats);
    return (
        <div className="stats-card">
            {chart}
        </div>
    )
}

export default Explicit