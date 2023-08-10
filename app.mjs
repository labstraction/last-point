import {point, distance, distanceFromSegment, drawPoint, randomPoint, midPoint} from './point.mjs';
import {polygon, randomPolygon, drawPolygon, polygonCollection, randomPointInsidePolygon} from './polygon.mjs';
import {rule1, rule2} from './rules.mjs';


const loop = (startPolygon, canvas, context, index, lastPoint, previousEnd) => {

    const can = canvas || document.getElementById('canvas');
    const ctx = context || can.getContext('2d');

    const pol = startPolygon || polygon(point(0, 0), point(0, can.height), point(can.width, can.height), point(can.width, 0));
    if(!index) {
        drawPolygon(ctx, pol);
    }
    const startPoint = lastPoint || randomPointInsidePolygon(pol);
    const i = index || 0;

    const endPoint = pol.points[Math.floor(Math.random() * pol.points.length)];
    const newPoint = rule2(pol, startPoint, endPoint);
    drawPoint(ctx, newPoint, 1);
    requestAnimationFrame(() => loop(pol, can, ctx, i + 1, newPoint, endPoint));

}

loop();
