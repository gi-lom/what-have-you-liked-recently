import React from "react"

import getFrequencies from "../../modules/ranges/release_dates"

const getTexts = (charts) => {
    return (
        <div className="text-info">
            <div classname="text-info-small"> Your least recent year is </div>
            <div classname="text-info-big"> {charts[0]} </div>
            <div classname="text-info-small"> Your most recent year is </div>
            <div classname="text-info-big"> {charts[charts.length-1]} </div>
            <div classname="text-info-small"> Your average year is </div>
            <div classname="text-info-big"> { Math.round(charts.reduce((a,b) => a+b, 0)/charts.length)} </div>
        </div>
    )
}

const getLegends = (charts) => {
    let legends = [];
    let len = Object.keys(charts).length
    for (let i = len-1; i >= 0; i--)
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

const getTds = (charts) => {
    let tds = [];
    for (let i = 0; i < Object.keys(charts).length; i++)
        if (i != 0 || (i == 0 && charts["1930"] > 0)) {
            let label = i == 0 ? "≤1930s" : Object.keys(charts)[i]+"s";
            tds.push(
                <tr key={"tr" + i}>
                    <td key={"td" + i} style={{"--size": "calc(" + charts[Object.keys(charts)[i]] + " / 50)",}}>
                    </td>
                </tr>
            )
        }
    return tds;
}

const getGraph = (charts) => {
    const tds = getTds(charts);
    const legends = getLegends(charts);
    return (
        <div>
            <table className="charts-css column show-labels">
                <tbody>
                    {tds}
                </tbody>
            </table>
            {legends}
        </div>
    )
}

const getChart = (charts) => {
    const texts = getTexts(charts);
    const graph = getGraph(getFrequencies(charts.map( (year) => { return year-(year%10) } )));
    return (
        <div className="chart">
            <div className="big"> Years </div>
            <div className="description"> How old are your songs? </div>
            {texts}
            {graph}
            <div className="alert"> NOTE: If your faved track comes from a compilation, the compilation's release year will be taken, NOT the song's. Same alert applies for classical music.</div>
        </div>
    )
}


const ReleaseDates = (props) => {
    let chart = getChart(props.stats);
    return (
        <div className="stats-card">
            {chart}
        </div>
    )
}

export default ReleaseDates