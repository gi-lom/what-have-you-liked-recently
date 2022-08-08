import React from "react"

const getGraph = (charts) => {
    return (
        <div>
            <table className="charts-css bar multiple stacked">
                <tbody>
                    <tr>
                        <td style={{"--size": "calc(" + charts[0] + " / 50)"}} />
                        <td style={{"--size": "calc(" + charts[1] + " / 50)"}} />
                    </tr>
                </tbody>
            </table>
            <div className="legend">
                <span className="legend-left">
                    <div className="legend-data">{charts[0]}</div>
                    <div className="legend-label">Minor key</div>
                </span>
                <span className="legend-right">
                    <div className="legend-data">{charts[1]}</div>
                    <div className="legend-label">Major key</div>
                </span>
            </div>
        </div>
    )
}

const getChart = (charts) => {
    const graph = getGraph(charts);
    return (
        <div className="chart">
            <div className="big">Mode</div>
            <div className="description">How many songs are in a minor or major key?</div>
            {graph}
        </div>
    )
}


const Mode = (props) => {
    let chart = getChart(props.stats);
    return (
        <div className="stats-card">
            {chart}
        </div>
    )
}

export default Mode