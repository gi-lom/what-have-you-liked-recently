import React from "react"

const getFrequencies = (charts) => {
    let fr = {
        "1":  0, // 60000
        "2":  0, // 120000
        "3":  0, // 180000
        "4":  0, // 240000
        "5":  0, // 300000
        "6":  0, // 360000
        "7":  0, // 420000
        "8":  0, // 480000
        "9":  0, // 540000
        "10": 0  // 600000
    };
    for (let i = 0; i < charts.length; i++)
        if (charts[i] >= 600000)
            fr["10"]++;
        else {
            if (charts[i] < 120000)
                fr["1"]++;
            else
                fr[parseInt(charts[i]/60000)]++;
        }
    return fr;
}

export default getFrequencies;