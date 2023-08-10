export const point = (x, y, color) => ({x, y, color: color || 'white'});

export const distance = (p1, p2) => math.sqrt((p1.x - p2.x)**2 + (p1.y - p2.y)**2);

export const distanceFromSegment = (x1, x2, s1x, s1y, s2x, s2y) => {
    const A = x2 - x1;
    const B = s2y - s1y;
    const C = s1x - s2x;
    const D = s1y * (s2x - s1x) - s1x * (s2y - s1y);
    return Math.abs(A * s1y + B * s1x + D) / Math.sqrt(A**2 + B**2);
}

export const drawPoint = (ctx, p, radius) => {
    ctx.fillStyle = p.color;
    ctx.beginPath();
    ctx.arc(p.x, p.y, radius || 5, 0, 2 * Math.PI);
    ctx.fill();
}

export const betweenPoints = (p1, p2, t) => point(p1.x + (p2.x - p1.x) * t, p1.y + (p2.y - p1.y) * t);

export const midPoint = (p1, p2) => betweenPoints(p1, p2, 0.5); 

export const randomPoint =  (width, height, color) => point(Math.random() * width, Math.random() * height, color || 'white');

export const equalPoint = (p1, p2) => p1.x === p2.x && p1.y === p2.y;
