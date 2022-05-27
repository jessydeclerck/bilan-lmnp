import {round as _round} from "lodash";

interface sliderMark {
    value: number;
    label: string
}

const generateMarks = (steps: any, suffix = ''): sliderMark[] => {
    const result = [];
    for (let i = steps.min; i <= steps.max; i += steps.step) {
        result.push({value: i, label: i + suffix})
    }
    return result;
}

function round(value:number){
    return _round(value, 2);
}

export {generateMarks, round};