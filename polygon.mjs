
import { randomPoint, drawPoint, betweenPoints } from './point.mjs';

export const polygon = (...points) => ({points});

export const randomPolygon = (n, width, height) => {
    const points = [];
    for (let i = 0; i < n; i++) {
        points.push(randomPoint(width, height, 'red'));
    }
    return polygon(...points);
}

export const randomPointInsidePolygon = (polygon) => {
    const points = polygon.points;
    const p1 = points[Math.floor(Math.random() * points.length)];
    const p2 = points[Math.floor(Math.random() * points.length)];
    return betweenPoints(p1, p2, Math.random());
}

export const drawPolygon = (ctx, polygon) => {
    polygon.points.forEach(p => drawPoint(ctx, p, 2));
}

export const polygonCollection = (sidesArray, width, height) => {
    const collection = [];
    for (let i = 0; i < sidesArray; i++) {
        const sides = sidesArray[i];
        collection.push(randomPolygon(sides, width, height));
    }
    return collection;
}       
