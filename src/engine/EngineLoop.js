class EngineLoop {
    constructor() {
        this.lastTime = 0;
        this.isRunning = false;
        this.config = null;
    }

    init() {
        // Load JSON configuration
        this.loadConfig('config.json');
        this.isRunning = true;
        this.lastTime = performance.now();
        this.update();
    }

    loadConfig(url) {
        fetch(url)
            .then(response => response.json())
            .then(data => {
                this.config = data;
                console.log('Config loaded:', this.config);
            })
            .catch(error => console.error('Error loading config:', error));
    }

    update() {
        if (!this.isRunning) return;

        const currentTime = performance.now();
        const deltaTime = currentTime - this.lastTime;

        this.lastTime = currentTime;

        // Update game state
        this.updateGameState(deltaTime);

        // Render the game
        this.render();

        // Request the next frame
        requestAnimationFrame(this.update.bind(this));
    }

    updateGameState(deltaTime) {
        // Update game logic based on deltaTime
        console.log('Updating game state with deltaTime:', deltaTime);
        // Add game state updates here
    }
    
    render() {
        // Rendering code goes here
        console.log('Rendering the game...');
    }

    stop() {
        this.isRunning = false;
    }
}

// Usage
const engine = new EngineLoop();
engine.init();