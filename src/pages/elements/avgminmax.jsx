import React from "react"
import getFrequencies from "../../modules/ranges/avgminmax";

const howMany = (minmax, which) => {
    let isare = minmax.length > 1 ? "s are" : " is";
    let vals = [];
    for (let i = 0; i < minmax.length; i++) {
        let artistList = "";
        for (let j = 0; j < minmax[i].artist.length; j++) {
            artistList += minmax[i].artist[j].name;
            if (j < minmax[i].artist.length-1)
                artistList += ", ";
        }
        vals.push(
            <div className="text-info-big"> {minmax[i].name} <span className="by"> by </span> {artistList} </div>
        )
    }
    return (
        <div>
            <div className="text-info-small"> Your {which} song{isare} </div>
            {vals}
        </div>
    )
}

const getTexts = (charts) => {
    const stats = charts.stats;
    const minValues = howMany(stats.min, charts.least);
    const maxValues = howMany(stats.max, charts.most);
    return (
        <div className="text-info">
            <div className="text-info-section">
                {minValues}
                <div className="text-info-small"> with a value of {Math.round(stats.min[0].value)}</div>
            </div>
            <div className="text-info-section">
                {maxValues}
                <div className="text-info-small"> with a value of {Math.round(stats.max[0].value)}</div>
            </div>
            <div className="text-info-section">
                <div className="text-info-small"> Your average {charts.title.toLowerCase()} is </div>
                <div className="text-info-big"> { Math.round(stats.list.reduce((a,b) => a+b, 0)/stats.list.length)} </div>
            </div>
        </div>
    )
}

const getLegends = (charts) => {
    let legends = [];
    for (let i = 0; i < Object.keys(charts).length; i++) {
        legends.push(
            <span className="legend-center">
                <div className="legend-data">{Object.keys(charts)[i]}</div>
                <div className="legend-label">{charts[Object.keys(charts)[i]]}</div>
            </span>
        )
    }
    return <div className="legend">{legends}</div>;
}

const getTds = (charts) => {
    let tds = [];
    for (let i = 0; i < Object.keys(charts).length; i++)
        tds.push(
            <tr key={"tr" + i}>
                <td key={"td" + i} style={{"--size": "calc(" + charts[Object.keys(charts)[i]] + " / 100)"}}>
                </td>
            </tr>
        )
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
    const frequencies = getFrequencies(
        charts.stats.list.map( (data) => { return data-(data%10) } ), 0, 100, 10);
    const graph = getGraph(frequencies);
    return (
        <div className="chart">
            <div className="big"> {charts.title} </div>
            <div className="description"> {charts.description} </div>
            {texts}
            {graph}
        </div>
    )
}


const AvgMinMax = (props) => {
    let chart = getChart(props);
    return (
        <div className="stats-card">
            {chart}
        </div>
    )
}

export default AvgMinMax