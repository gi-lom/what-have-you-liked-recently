import React from "react"

const getGraph = (charts, num) => {
    try {
        return (
            <div className="graph">
                <table className="charts-css bar multiple stacked">
                    <tbody>
                        <tr>
                            <td className="bar-left" style={{"--size": "calc(" + charts + " / " + num}} />
                            <td className="bar-right" style={{"--size": "calc(" + (num-charts) + " / " + num + ")"}} />
                        </tr>
                    </tbody>
                </table>
                <div className="legend">
                    <span className="legend-left">
                        <div className="legend-data">Explicit</div>
                        <div className="legend-label">{charts}</div>
                    </span>
                    <span className="legend-right">
                        <div className="legend-data">Not explicit</div>
                        <div className="legend-label">{num-charts}</div>
                    </span>
                </div>
            </div>
        )
    }
    catch (err) {
        return <div className="graph" />
    }
}

const Explicit = (props) => {
    const charts = props.stats;
    const num = props.num;
    const graph = getGraph(charts, num);
    return (
        <div>
            <div className="stats-cards-title">
                <div className="big"> Explicitness </div>
                <div className="description"> How many songs contain explicit content? </div>
            </div>
            {graph}
        </div>
    )
}

export default Explicit