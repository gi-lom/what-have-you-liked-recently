import React from "react"

const keymap = key => {
    switch (key) {
      case 0: return "C";
      case 1: return "C#";
      case 2: return "D";
      case 3: return "D#";
      case 4: return "E";
      case 5: return "F";
      case 6: return "F#";
      case 7: return "G";
      case 8: return "G#";
      case 9: return "A";
      case 10: return "A#";
      case 11: return "B";
      default: break;
    }
    return "None";
  };

const isThereSomeUndefined = (chart) => {
    if (chart > 0) {
        let plural = chart > 1 ? 's' : '';
        return (
            <div> Could not find out the keys of {chart} songs{plural}</div>
        )
    }
    return (<span />)

}

const getTds = (charts) => {
    let tds = [];
    for (let i = 0; i < charts.length; i++)
        tds.push(
            <td key={"td"+i} style={{"--size": "calc(" + charts[i]*100/50 + " / 100)"}} />
        )
    return <tr>{tds}</tr>;
}

const getLegends = (charts) => {
    let legends = [];
    for (let i = 0; i < charts.length; i++)
        legends.push(
            <span className="legend-center">
                <div className="legend-data">{charts[i]}</div>
                <div className="legend-label">{keymap(i)}</div>
            </span>
        )
    return <div className="legend">{legends}</div>;
}

const getGraph = (charts) => {
    const legends = getLegends(charts.slice(0, 12))
    const tds = getTds(charts.slice(0, 12))
    return (
        <div className="graph">
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
    const graph = getGraph(charts);
    return (
        <div className="chart">
            <div className="big"> Keys </div>
            <div className="description"> What key do the songs have? </div>
            {graph}
        </div>
    )
}


const Keys = (props) => {
    let chart = getChart(props.stats);
    return (
        <div className="stats-card">
            {chart}
            {isThereSomeUndefined(chart[-1])}
        </div>
    )
}

export default Keys