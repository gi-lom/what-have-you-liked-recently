import React from "react"

import getFrequencies from "../../modules/ranges/release_dates"

const getTexts = (charts) => {
    try {
        return (
            <div className="text-info">
                <div className="text-info-section">
                    <div className="text-info-small"> Your least recent year is </div>
                    <div className="text-info-big"> {charts[0]} </div>
                </div>
                <div className="text-info-section">
                    <div className="text-info-small"> Your most recent year is </div>
                    <div className="text-info-big"> {charts[charts.length-1]} </div>
                    </div>
                <div className="text-info-section">
                    <div className="text-info-small"> Your average year is </div>
                    <div className="text-info-big"> { Math.round(charts.reduce((a,b) => a+b, 0)/charts.length)} </div>
                </div>
            </div>
        )
    }
    catch (err) {
        return <div className="text-info" />
    }
}

const getLegends = (charts) => {
    if (charts !== null) {
        let legends = [];
        let len = Object.keys(charts).length
        for (let i = 0; i < len; i++)
            if (i != 0 || (i == 0 && charts["1930"] > 0)) {
                let label = i == 0 ? "≤1930s" : Object.keys(charts)[i]+"s";
                legends.push(
                    <span className="legend-center">
                        <div className="legend-data">{label}</div>
                        <div className="legend-label">{charts[Object.keys(charts)[i]]}</div>
                    </span>
                )
            }
        return <div className="legend">{legends}</div>;
    }
    return <div className="legend" />
}

const getTds = (charts, num) => {
    if (charts !== null) {
        let tds = [];
        for (let i = 0; i < Object.keys(charts).length; i++)
            if (i != 0 || (i == 0 && charts["1930"] > 0))
                tds.push(
                    <tr key={"tr" + i}>
                        <td key={"td" + i} style={{"--size": "calc(" + charts[Object.keys(charts)[i]] + " / " + num + ")",}}>
                        </td>
                    </tr>
                )
        return tds;
    }
    return []
}

const getGraph = (charts, num) => {
    if (charts !== null) {
        const tds = getTds(charts, num);
        const legends = getLegends(charts);
        return (
            <div className="graph">
                <table className="charts-css column show-labels show-data-axes show-primary-axis show-10-secondary-axes data-spacing-2">
                    <tbody>
                        {tds}
                    </tbody>
                </table>
                {legends}
            </div>
        )
    }
    return <div className="graph" />
}

const ReleaseDates = (props) => {
    const charts = props.stats;
    const num = props.num;
    const texts = getTexts(charts);
    const graph = getGraph(getFrequencies(charts.map( (year) => { return year-(year%10) } )), num);
    return (
        <div>
            <div className="stats-cards-title">
                <div className="big"> Years </div>
                <div className="description"> How old are your songs? </div>
            </div>
            {texts}
            {graph}
            <div className="alert"> NOTE: If your faved track comes from a compilation, the compilation's release year will be taken, NOT the song's. Same alert applies for classical music.</div>
        </div>
    )
}

export default ReleaseDates