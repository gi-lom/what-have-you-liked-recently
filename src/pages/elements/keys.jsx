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
            <div className="alert"> Could not find out the keys of {chart} songs{plural}</div>
        )
    }
    return (<span />)

}

const getTds = (charts, num) => {
    let tds = [];
    for (let i = 0; i < charts.length; i++)
        tds.push(
            <tr key={"tr" + i}>
                <td key={"td"+i} style={{"--size": "calc(" + charts[i]*100/num + " / 100)"}} />
            </tr>
        )
    return tds;
}

const getLegends = (charts) => {
    let legends = [];
    for (let i = 0; i < charts.length; i++)
        legends.push(
            <span className="legend-center">
                <div className="legend-data">{keymap(i)}</div>
                <div className="legend-label">{charts[i]}</div>
            </span>
        )
    return <div className="legend">{legends}</div>;
}

const getGraph = (charts, num) => {
    const legends = getLegends(charts.slice(0, 12));
    const tds = getTds(charts.slice(0, 12), num);
    const undef = isThereSomeUndefined(charts[-1]);
    return (
        <div className="graph">
            <table className="charts-css column show-labels show-data-axes show-primary-axis show-10-secondary-axes data-spacing-2">
                <tbody>
                    {tds}
                </tbody>
            </table>
            {legends}
            {undef}
        </div>
    )
}

const Keys = (props) => {
    const charts = props.stats;
    const num = props.num;
    const graph = getGraph(charts, num);
    return (
        <div>
            <div className="stats-cards-title">
                <div className="big"> Keys </div>
                <div className="description"> What key do the songs have? </div>
            </div>
            {graph}
        </div>
    )
}

export default Keys