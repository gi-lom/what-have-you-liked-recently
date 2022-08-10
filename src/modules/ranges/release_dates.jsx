import React from "react"

const getFrequencies = (charts) => {
    let fr = {
        "2020": 0,
        "2010": 0,
        "2000": 0,
        "1990": 0,
        "1980": 0,
        "1970": 0,
        "1960": 0,
        "1950": 0,
        "1940": 0,
        "1930": 0
    };
    for (let i = 0; i < charts.length; i++)
        if (charts[i] < 1940)
            fr["1930"]++;
        else
            fr[charts[i]]++;
    return fr;
}

export default getFrequencies;