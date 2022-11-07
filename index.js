import layer1Layer1Import from './api/layer1/layer1.geojson' assert {type: 'json'};
import layer1Stairs1Import from './api/layer1/stairs1.geojson' assert {type: 'json'};
import layer2Layer2Import from './api/layer2/layer2.geojson' assert {type: 'json'};
import layer3Layer3Import from './api/layer3/layer3_front/layer3_front.geojson' assert {type: 'json'};

require([
    "esri/Map",
    "esri/views/SceneView",
    "esri/layers/GeoJSONLayer",
    "esri/layers/SceneLayer", "esri/layers/GraphicsLayer", "esri/Graphic", "esri/request", "esri/geometry/Circle", "esri/symbols/ObjectSymbol3DLayer", "esri/symbols/PointSymbol3D", "esri/symbols/IconSymbol3DLayer"
], function (Map, SceneView, GeoJSONLayer, SceneLayer, GraphicsLayer, Graphic, esriRequest, Circle, ObjectSymbol3DLayer, PointSymbol3D, IconSymbol3DLayer) {
    var createGraphic = function (data) {
        return new Graphic({
            geometry: data,
            symbol: data.symbol,
            attributes: data,
            popupTemplate: data.popupTemplate
        });
    };

    // Layer1
    // Nền 1
    const layer1Layer1 = new GeoJSONLayer({
        url: "./api/layer1/layer1.geojson"
    })
    layer1Layer1.renderer = {
        type: "simple",
        symbol: {
            type: "polygon-3d",
            symbolLayers: [{
                type: "extrude",
                size: layer1Layer1Import.features[0].properties.height,
                material: {
                    color: layer1Layer1Import.features[0].properties.color
                }
            }]
        }
    };

    // Cầu thang 1
    const stair1Layer = new GeoJSONLayer({
        url: "./api/layer1/stairs1.geojson"
    })
    stair1Layer.renderer = {
        type: "simple",
        symbol: {
            type: "polygon-3d",
            symbolLayers: [{
                type: "extrude",
                size: layer1Stairs1Import.features[0].properties.height,
                material: {
                    color: layer1Stairs1Import.features[0].properties.color
                }
            }]
        }
    };

    // Layer2
    // Nền 2
    const layer2Layer2 = new GeoJSONLayer({
        url: "./api/layer2/layer2.geojson"
    })
    layer2Layer2.renderer = {
        type: "simple",
        symbol: {
            type: "polygon-3d",
            symbolLayers: [{
                type: "extrude",
                size: layer2Layer2Import.features[0].properties.height,
                material: {
                    color: layer2Layer2Import.features[0].properties.color
                }
            }]
        }
    };

    // Layer3
    // Nền 3
    const layer3Layer3 = new GeoJSONLayer({
        url: "./api/layer3/layer3_front/layer3_front.geojson"
    })
    layer3Layer3.renderer = {
        type: "simple",
        symbol: {
            type: "polygon-3d",
            symbolLayers: [{
                type: "extrude",
                size: layer3Layer3Import.features[0].properties.height,
                material: {
                    color: layer3Layer3Import.features[0].properties.color
                }
            }]
        }
    };

    // Cách tạo cột hình trụ
    // const cylinderLayer = new GraphicsLayer();
    // const point = { // Điểm tâm hình tròn đáy
    //     type: "point",
    //     longitude: 106.70296045845079,
    //     latitude: 10.77655936570211
    // }
    // var pointSymbol3D = new PointSymbol3D({
    //     symbolLayers: [
    //         new ObjectSymbol3DLayer({ 
    //             width: 5, 
    //             depth: 5,
    //             height: 10, // Chiều cao trụ
    //             resource: { primitive: "cylinder" },
    //             material: { color: [69, 0, 0, 1] }
    //         })
    //     ]
    // });
    // const cylinderGraphic = new Graphic({
    //     geometry: point,
    //     symbol: pointSymbol3D
    // })
    // cylinderLayer.add(cylinderGraphic);

    const map = new Map({
        basemap: "topo-vector",
        ground: "world-elevation",
        layers: [
            layer1Layer1,
            stair1Layer,
            layer2Layer2,
            layer3Layer3,
            // cylinderLayer
        ]
    })

    const view = new SceneView({
        container: "viewDiv",
        map: map,
        camera: {
            position: [106.70325054448642, 10.776740223222385, 1000],
            heading: 0,
            tilt: 0,
        }
    });
    view.popup.defaultPopupTemplateEnabled = true;
}
);
