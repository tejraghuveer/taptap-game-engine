// engine/gameLoader.js

/**
 * Game Loader for Loading JSON resources
 */

class GameLoader {
    constructor() {
        this.resources = {};
    }

    loadJSON(url) {
        return new Promise((resolve, reject) => {
            fetch(url)
                .then(response => {
                    if (!response.ok) {
                        throw new Error(`HTTP error! status: ${response.status}`);
                    }
                    return response.json();
                })
                .then(data => {
                    this.resources[url] = data;
                    resolve(data);
                })
                .catch(error => reject(error));
        });
    }

    getResource(url) {
        return this.resources[url];
    }
}

// Example Usage:
// const loader = new GameLoader();
// loader.loadJSON('path/to/resource.json').then(data => console.log(data));
