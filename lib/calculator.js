export function add(n1, n2){
    return n1 + n2
};

export function subtract(n1, n2){
    return n1 - n2
};

export function multiply(n1, n2){
    return n1 * n2
};

export function divide(n1, n2){
    return n1 / n2
};

export function getSin(radians) {
    return Math.sin(radians);
}

export function getCos(radians) {
    return Math.cos(radians);
}

export function getTanFromRadians(radians){
    return Math.tan(radians);
}

export function getTanFromDegrees(degrees) {
    return Math.tan(degrees * Math.PI / 180);
}

export function exponentiation(n1, n2){
    return n1 ** n2;
}

export function getLog(n1){
    return Math.log(n1);
}

export function getLogFromDifferentBase(n1, n2){
    return Math.log(n2) / Math.log(n1);
}

export function getSqaureRoot(n1){
    return Math.sqrt(n1);
}

export function getCubeRoot(n1){
    return Math.cbrt(n1);
}

// calculate derivative
export function deriv(x1, power){
    // defulat the variable as x and get the power of x, then plug in the x1 into the function
    function func(x1, power){
        if (power <= 2){
            return x1 * x1;
        } else if (power > 2){
            return x1 * x1 ** power;
        }
    }
    var at = func(x1, power);
    // check if the value is NaN
    if (Math.abs(at) == Infinity || at !== at) {
        return NaN;
    }
    var y1 = func(x1);
    var x0 = x1 - 0.000000000000001;
    var y0 = func(x0);
    var x2 = x1 + 0.000000000000001;
    var y2 = func(x2);
    // use the slope function below to get the two slopes
    var slope1 = slope(x0, y0, x1, y1);
    var slope2 = slope(x1, y1, x2, y2);
    // check if the slope is vaild
    if (Math.abs(slope1 - slope2) > 0.1) {
        return NaN;
    }
    return (slope1 + slope2) / 2;
}

// calculate nth derivative
export function nthDeriv(n, x1, func) {
    var vals = [];
    // create a starting point to loop over to deal with floating point number precision
    var start = -1 * Math.round(n / 2);
    for (var i = start; i <= n + start + 1; i++) {
        var newX = x1 + i * 0.000000000000001;
        var newY = func(newX);
        vals.push(newY);
    }
    for (var i = 0; i < n; i++) {
        var diffs = [];
        for (var j = 1; j < vals.length; j++) {
            diffs.push(vals[j] - vals[j - 1]);
        }
        vals = diffs;
    }
    var out = (vals[0] + vals[1]) / 0.000000000000002;
    return out;
}


function slope (x1, y1, x2, y2){
    return Math.sqrt((x1-x2)*(x1-x2)-(y1-y2)*(y1-y2));
}

