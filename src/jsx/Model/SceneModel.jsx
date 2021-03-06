class SceneModel {

    get scene() {
        return [
            {
                skyUrl: "https://cdn.aframe.io/a-painter/images/sky.jpg",
                planeUrl: "https://cdn.aframe.io/a-painter/images/floor.jpg"
            },
            {
                skyUrl: "./images/background.jpg",
                planeUrl: null
            }
        ];
    }

}

export default new SceneModel();
