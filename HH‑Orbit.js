.hhSphere {
    width:260px;
    height:260px;
    margin:auto;
    border-radius:50%;
    background: radial-gradient(circle at 50% 50%, #000 0%, #031a33 40%, #003355 70%, #000 100%);
    box-shadow: 0 0 60px #0af, 0 0 120px #003, inset 0 0 80px #000;
    display:flex;
    align-items:center;
    justify-content:center;
    animation:hhSpin 12s linear infinite;
    transform-style:preserve-3d;
    position:relative;
    perspective:1000px;
}

.hhCore {
    width:80px;
    height:80px;
    border-radius:50%;
    background: radial-gradient(circle, #000 0%, #050505 40%, #000 100%);
    box-shadow: inset 0 0 40px #000, 0 0 30px #0ff, 0 0 60px #0af;
    position:absolute;
    animation:hhPulse 2.4s ease-in-out infinite;
}

.hhSymbol {
    font-size:60px;
    color:#6cf;
    text-shadow:0 0 20px #0ff, 0 0 40px #0af;
    z-index:10;
    animation:hhFloat 4s ease-in-out infinite;
}

@keyframes hhSpin {
    from { transform:rotateY(0deg) rotateX(0deg); }
    to { transform:rotateY(360deg) rotateX(360deg); }
}

@keyframes hhPulse {
    0% { transform:scale(1); }
    50% { transform:scale(1.25); }
    100% { transform:scale(1); }
}

@keyframes hhFloat {
    0% { transform:translateY(0px); }
    50% { transform:translateY(-10px); }
    100% { transform:translateY(0px); }
}
