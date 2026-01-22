class pokeFooter extends HTMLElement {
    constructor() {
        super()
        const shadow = this.attachShadow({ mode: 'open' })


        shadow.innerHTML = `
<footer class="pokedex-footer">
    
    <div class="footer-left">
        <span class="nav-arrow double-arrow">&lt;&lt;</span>
        
        <button class="pixel-btn active">
            <span class="text">INFO</span>
        </button>

        <button class="pixel-btn">
            <span class="text">AREA</span>
        </button>
        
        <button class="pixel-btn">
            <span class="text">FORMS</span>
        </button>
        
        <span class="nav-arrow double-arrow">&gt;&gt;</span>
    </div>

    <div class="footer-right">
        <button class="pixel-btn escape-btn">
            <span class="blue-icon">↩</span>
            <span class="text">ESC</span>
        </button>
    </div>

</footer>

<style>
@import url('https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap');



.pokedex-footer {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 60px;
    background-color: var(--bg-dark);
    border-top: 4px solid var(--border-grey);
    
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 15px;
    box-sizing: border-box; 
    
    font-family: 'Press Start 2P', monospace; 
    font-size: 10px; 
    color: var(--text-white);
    z-index: 100;
}


.pixel-btn {
    position: relative;
    background-color: black;
    color: white;
    border: none;
    padding: 10px 15px;
    margin: 0 2px;
    cursor: pointer;
    font-family: inherit; 
    font-size: 10px;
    text-transform: uppercase;
    
    
    clip-path: polygon(
        15px 0,            
        calc(100% - 15px) 0, 
        100% 50%,          
        calc(100% - 15px) 100%, 
        15px 100%,         
        0 50%              
    );
    
    filter: drop-shadow(0px 0px 1px white); 
    transition: transform 0.1s;
}

.pixel-btn:hover {
    transform: scale(1.05); 
}

.pixel-btn.active {
    background-color: var(--active-bg);
    color: var(--active-text);
    font-weight: bold;
    filter: drop-shadow(0px 0px 2px white);
}

.escape-btn {
    display: flex;
    align-items: center;
    gap: 5px;
    padding-left: 10px;
}

.blue-icon {
    color: var(--blue-ui);
    font-size: 14px;
    font-weight: bold;
    display: inline-block;
    transform: scaleX(-1); 
}


.footer-left {
    display: flex;
    align-items: center;
    gap: 5px;
}

.nav-arrow {
    color: #888;
    font-size: 12px;
    letter-spacing: -2px; 
    margin: 0 5px;
    font-weight: bold;
    animation: clignote 1.5s infinite;
}


@keyframes clignote {
    0% { opacity: 0.5; }
    50% { opacity: 1; }
    100% { opacity: 0.5; }
}


@media (max-width: 600px) {
    .pokedex-footer {
        padding: 0 5px;
    }
    .pixel-btn {
        padding: 8px 8px; 
        clip-path: polygon(10px 0, calc(100% - 10px) 0, 100% 50%, calc(100% - 10px) 100%, 10px 100%, 0 50%);
    }
    .text {
        font-size: 8px;
    }
}
</style>
        `
    }
}


window.customElements.define('footer-detail', pokeFooter)