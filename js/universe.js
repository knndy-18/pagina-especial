// Agregar meta viewport dinámicamente (debería estar en el HTML)
const meta = document.createElement('meta');
meta.name = 'viewport';
meta.content = 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no';
document.head.appendChild(meta);

// Configuración inicial
let w = window.innerWidth;
let h = window.innerHeight;

// Crear canvases
const dustCanvas = document.createElement('canvas');
const starCanvas = document.createElement('canvas');
const dustCtx = dustCanvas.getContext('2d');
const starCtx = starCanvas.getContext('2d');

// Estilos para los canvases
[dustCanvas, starCanvas].forEach(canvas => {
    canvas.style.position = 'fixed';
    canvas.style.top = '0';
    canvas.style.left = '0';
    canvas.style.touchAction = 'none'; // Prevenir scroll táctil
    document.body.appendChild(canvas);
});

// Configurar dimensiones
function resizeCanvases() {
    w = window.innerWidth;
    h = window.innerHeight;
    dustCanvas.width = starCanvas.width = w;
    dustCanvas.height = starCanvas.height = h;
}
resizeCanvases();
window.addEventListener('resize', resizeCanvases);

// Configuración de composición
dustCtx.globalCompositeOperation = 'lighter';
starCtx.globalCompositeOperation = 'lighter';

// Variables de estado
const galaxies = [];
const mouse = {
    pos: { x: w * 0.5, y: h * 0.5 },
    speed: 0
};
let currentGalaxy = null;
let drawingMode = false;

// Funciones utilitarias
const PI = Math.PI;
const TAU = PI * 2;
const r = Math.random;
const angle2 = (p1, p2) => Math.atan2(p2[1] - p1[1], p2[0] - p1[0]);
const distance2 = (p1, p2) => Math.hypot(p1[0] - p2[0], p1[1] - p2[1]);

// Función para crear partículas de polvo
const createDustParticle = (color = {
    r: 150 + (r() * 100),
    g: 50 + (r() * 100),
    b: 50 + (r() * 100)
}) => {
    const size = 100;
    const canvas = document.createElement('canvas');
    canvas.width = canvas.height = size;
    const ctx = canvas.getContext('2d');
    
    ctx.fillStyle = `rgba(${color.r},${color.g},${color.b},.02)`;
    
    Array.from({ length: 200 }, () => [r(), r(), r()]).forEach((p, i, arr) => {
        const x = Math.cos(TAU / (i % 10 + 1) / arr.length * i) * p[2] * 50 + size/2;
        const y = Math.sin(TAU / (i % 10 + 1) / arr.length * i) * p[2] * 50 + size/2;
        ctx.beginPath();
        ctx.arc(x, y, p[2] * 4, 0, TAU);
        ctx.fill();
    });
    
    return canvas;
};

// Clases para elementos
class Galaxy {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.stars = [];
        this.dust = [];
        this.angleOffsetX = TAU * r();
        this.angleOffsetY = TAU * r();
        this.realAngleOffsetX = 0;
        this.realAngleOffsetY = 0;
        this.color = {
            r: 50 + (r() * 100),
            g: 50 + (r() * 100),
            b: 150 + (r() * 100)
        };
    }

    calculateCenter() {
        if (!this.stars.length) return;
        this.x = this.stars.reduce((sum, s) => sum + s.x, 0) / this.stars.length;
        this.y = this.stars.reduce((sum, s) => sum + s.y, 0) / this.stars.length;
        this.stars.forEach(s => this.updateParams(s));
        this.dust.forEach(d => this.updateParams(d));
    }

    updateParams(o) {
        o.angle = angle2([this.x, this.y], [o.x, o.y]);
        o.distance = distance2([this.x, this.y], [o.x, o.y]);
    }
}

class Star {
    constructor(x, y, spread) {
        this.x = x + Math.cos(TAU * r()) * spread;
        this.y = y + Math.sin(TAU * r()) * spread;
        this.radius = r() + 0.25;
        this.speed = r();
    }
}

class Dust {
    constructor(x, y, size) {
        this.x = x;
        this.y = y;
        this.size = size;
        this.texture = createDustParticle();
        this.speed = r();
    }
}

// Funciones de actualización y renderizado
const updateStarDust = (s, g) => {
    if (g === currentGalaxy && drawingMode) return;
    s.angle += (0.5 + (s.speed * 0.5)) / s.distance;
    s.x = g.x + Math.cos(s.angle + g.realAngleOffsetX) * s.distance;
    s.y = g.y + Math.sin(s.angle + g.realAngleOffsetY) * s.distance;
};

const update = () => {
    galaxies.forEach(g => {
        if (g !== currentGalaxy) {
            g.realAngleOffsetX += (g.angleOffsetX - g.realAngleOffsetX) * 0.05;
            g.realAngleOffsetY += (g.angleOffsetY - g.realAngleOffsetY) * 0.05;
        }
        g.stars.forEach(s => updateStarDust(s, g));
        g.dust.forEach(d => updateStarDust(d, g));
    });
};

const render = () => {
    // Limpiar canvases
    dustCtx.globalCompositeOperation = 'source-over';
    dustCtx.fillStyle = 'rgba(0,0,0,.05)';
    dustCtx.fillRect(0, 0, w, h);
    dustCtx.globalCompositeOperation = 'lighter';

    starCtx.clearRect(0, 0, w, h);
    starCtx.fillStyle = '#ffffff';
    starCtx.strokeStyle = 'rgba(255,255,255,.05)';
    
    // Dibujar galaxias
    galaxies.forEach(g => {
        starCtx.beginPath();
        g.stars.forEach(s => {
            starCtx.moveTo(s.x + s.radius, s.y);
            starCtx.arc(s.x, s.y, s.radius, 0, TAU);
        });
        starCtx.fill();
        
        g.dust.forEach(d => {
            dustCtx.drawImage(
                d.texture,
                d.x - d.size * 0.5,
                d.y - d.size * 0.5,
                d.size,
                d.size
            );
        });
    });

    // Dibujar líneas en modo de dibujo
    if (drawingMode && currentGalaxy) {
        starCtx.beginPath();
        currentGalaxy.stars.forEach(s => {
            starCtx.moveTo(s.x, s.y);
            starCtx.lineTo(currentGalaxy.x, currentGalaxy.y);
        });
        starCtx.stroke();
    }
};

// Manejo de eventos
const getPosition = e => {
    const touch = e.touches ? e.touches[0] : e;
    return {
        x: touch.clientX,
        y: touch.clientY
    };
};

const activateDraw = e => {
    e.preventDefault();
    const pos = getPosition(e);
    drawingMode = true;
    mouse.pos = pos;
    currentGalaxy = new Galaxy(pos.x, pos.y);
    galaxies.push(currentGalaxy);
};

const moveEvent = e => {
    e.preventDefault();
    if (!drawingMode) return;
    
    const pos = getPosition(e);
    mouse.speed = distance2([pos.x, pos.y], [mouse.pos.x, mouse.pos.y]);
    mouse.pos = pos;
    
    // Añadir estrellas y polvo
    currentGalaxy.stars.push(
        new Star(pos.x, pos.y, mouse.speed),
        new Star(pos.x, pos.y, mouse.speed),
        new Star(pos.x, pos.y, mouse.speed)
    );
    
    if (mouse.speed > 13 && mouse.speed < 100) {
        currentGalaxy.dust.push(new Dust(
            pos.x + Math.cos(TAU * r()) * mouse.speed * 0.1,
            pos.y + Math.sin(TAU * r()) * mouse.speed * 0.1,
            mouse.speed * 1.5
        ));
    }
    
    currentGalaxy.calculateCenter();
};

const disableDraw = e => {
    drawingMode = false;
    currentGalaxy = null;
};

// Bucle principal
const loop = () => {
    update();
    render();
    requestAnimationFrame(loop);
};
loop();

// Event listeners
const events = [
    ['mousedown', activateDraw],
    ['mousemove', moveEvent],
    ['mouseup', disableDraw],
    ['touchstart', activateDraw],
    ['touchmove', moveEvent],
    ['touchend', disableDraw]
];

events.forEach(([type, handler]) => {
    window.addEventListener(type, handler, { passive: false });
});