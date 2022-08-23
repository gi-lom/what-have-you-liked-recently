import React from "react"

const getGraph = (charts, num) => {
    try {
        return (
            <div className="graph horizontal">
                <table className="charts-css bar multiple stacked">
                    <tbody>
                        <tr>
                            <td className="bar-left" style={{"--size": "calc(" + charts[0] + " / " + num}} />
                            <td className="bar-right" style={{"--size": "calc(" + charts[1] + " / " + num + ")"}} />
                        </tr>
                    </tbody>
                </table>
                <div className="legend">
                    <span className="legend-left">
                        <div className="legend-data">Minor key</div>
                        <div className="legend-label">{charts[0]}</div>
                    </span>
                    <span className="legend-right">
                        <div className="legend-data">Major key</div>
                        <div className="legend-label">{charts[1]}</div>
                    </span>
                </div>
            </div>
        )
    }
    catch (err) {
        return <div className="graph horizontal" />
    }
}

const Mode = (props) => {
    const charts = props.stats;
    const num = props.num;
    const graph = getGraph(charts, num);
    return (
        <div>
            <div className="stats-cards-title">
                <div className="big"> Mode </div>
                <div className="description"> How many songs are in a minor or major key? </div>
            </div>
            {graph}
        </div>
    )
}

export default Mode