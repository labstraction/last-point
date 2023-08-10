import { midPoint, betweenPoints, equalPoint } from './point.mjs';

export const rule1 = (poligon, start, previousEnd) => {
    const endPoint = poligon.points[Math.floor(Math.random() * poligon.points.length)];
    const mid = midPoint(start, endPoint);
    return mid;
}

export const rule2 = (poligon, start, previousEnd) => {
    let endPoint = poligon.points[Math.floor(Math.random() * poligon.points.length)];
    while (equalPoint(endPoint, previousEnd)) {
        console.log('equal');
        endPoint = poligon.points[Math.floor(Math.random() * poligon.points.length)];
    }
    const mid = betweenPoints(start, endPoint, 0.5);
    return mid;
}
