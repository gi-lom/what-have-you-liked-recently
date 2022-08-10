
const getRange = (min, max, nums) => {
    let fr = {};
    let div = (max-min)/nums;
    for (let step = min; step <max; step += div)
        fr[String(step)] = 0;
    return fr;
}

const getFrequencies = (charts, min, max, nums) => {
    let fr = getRange(min, max, nums);
    for (let i = 0; i < charts.length; i++) {
        let val = charts[i]-(charts[i]%nums);
        if (val == 100)
            fr[90]++;
        else
            fr[charts[i]-(charts[i]%nums)]++;
    }
    return fr;
}

export default getFrequencies