import layer1Layer1Import from "./api/layer1/layer1.geojson" assert { type: "json" };
import layer1DecorsImport from "./api/layer1/decors_left/decors.geojson" assert { type: "json" };
import layer1Decors_upImport from "./api/layer1/decors_left/decors_up.geojson" assert { type: "json" };
import layer1Decors_sharp_brickImport from "./api/layer1/decors_left/decors_sharp_brick.geojson" assert { type: "json" };
import layer1Decors_tombImport from "./api/layer1/decors_left/decors_tomb.geojson" assert { type: "json" };
import layer1Decors_backImport from "./api/layer1/decors_back/decors.geojson" assert { type: "json" };
import layer1Decors_up_backImport from "./api/layer1/decors_back/decors_up.geojson" assert { type: "json" };
import layer1Decors_sharp_brick_backImport from "./api/layer1/decors_back/decors_sharp_brick.geojson" assert { type: "json" };
import layer1Decors_tomb_backImport from "./api/layer1/decors_back/decors_tomb.geojson" assert { type: "json" };
import layer1Decors_rightImport from "./api/layer1/decors_right/decors.geojson" assert { type: "json" };
import layer1Decors_up_rightImport from "./api/layer1/decors_right/decors_up.geojson" assert { type: "json" };
import layer1Decors_sharp_brick_rightImport from "./api/layer1/decors_right/decors_sharp_brick.geojson" assert { type: "json" };
import layer1Decors_tomb_rightImport from "./api/layer1/decors_right/decors_tomb.geojson" assert { type: "json" };

import layer1Stairs1Import from "./api/layer1/stairs1.geojson" assert { type: "json" };

// import layer2Layer2Import from "./api/layer2/layer2.geojson" assert { type: "json" };

import layer2Layer2_frontImport from "./api/layer2/layer2_front/layer2_front.geojson" assert { type: "json" };
import layer2Layer2_front_inImport from "./api/layer2/layer2_front/layer2_front_in.geojson" assert { type: "json" };
import layer2Layer2_rightImport from "./api/layer2/layer2_right/layer2_right.geojson" assert { type: "json" };
import layer2Layer2_right_inImport from "./api/layer2/layer2_right/layer2_right_in.geojson" assert { type: "json" };
import layer2Layer2_backImport from "./api/layer2/layer2_back/layer2_back.geojson" assert { type: "json" };
import layer2Layer2_back_inImport from "./api/layer2/layer2_back/layer2_back_in.geojson" assert { type: "json" };
import layer2Layer2_leftImport from "./api/layer2/layer2_left/layer2_left.geojson" assert { type: "json" };
import layer2Layer2_left_inImport from "./api/layer2/layer2_left/layer2_left_in.geojson" assert { type: "json" };
import layer3Layer3Import from "./api/layer3/layer3_front/layer3_front.geojson" assert { type: "json" };
import layer3Layer3_rightImport from "./api/layer3/layer3_right/layer3_right.geojson" assert { type: "json" };
import layer3Layer3_backImport from "./api/layer3/layer3_back/layer3_back.geojson" assert { type: "json" };
import layer3Layer3_leftImport from "./api/layer3/layer3_left/layer3_left.geojson" assert { type: "json" };

import layer4Layer4_frontImport from "./api/layer4/layer4_front/layer4_front.geojson" assert { type: "json" };
import layer4Layer4_columnsImport from "./api/layer4/layer4_columns/layer4_columns.geojson" assert { type: "json" };
import layer4Layer4_wallGateImport from "./api/layer4/layer4_wallGate/layer4_wallGate.geojson" assert { type: "json" };
import layer4Layer4_balcony_smallcrossbarImport from "./api/layer4/layer4_wallGate/layer4_balcony_smallcrossbar.geojson" assert { type: "json" };
import layer4Layer4_balcony_crossbarImport from "./api/layer4/layer4_wallGate/layer4_balcony_crossbar.geojson" assert { type: "json" };
import layer4Layer4_balcony_onbarImport from "./api/layer4/layer4_wallGate/layer4_balcony_onbar.geojson" assert { type: "json" };
import layer4Layer4_balconyImport from "./api/layer4/layer4_wallGate/layer4_balcony.geojson" assert { type: "json" };
import layer4Layer4_balcony_glassImport from "./api/layer4/layer4_wallGate/layer4_balcony_glass.geojson" assert { type: "json" };
import layer4Layer4_columnsEntranceImport from "./api/layer4/layer4_columnsEntrance/layer4_columnsEntrance.geojson" assert { type: "json" };
import layer4Layer4_rightImport from "./api/layer4/layer4_right/layer4_right.geojson" assert { type: "json" };
import layer4Layer4_leftImport from "./api/layer4/layer4_left/layer4_left.geojson" assert { type: "json" };
import layer4Layer4_backImport from "./api/layer4/layer4_back/layer4_back.geojson" assert { type: "json" };

require([
  "esri/Map",
  "esri/views/SceneView",
  "esri/layers/GeoJSONLayer",
  "esri/layers/SceneLayer",
  "esri/layers/GraphicsLayer",
  "esri/Graphic",
  "esri/request",
  "esri/geometry/Circle",
  "esri/symbols/ObjectSymbol3DLayer",
  "esri/symbols/PointSymbol3D",
  "esri/symbols/IconSymbol3DLayer",
], function (
  Map,
  SceneView,
  GeoJSONLayer,
  SceneLayer,
  GraphicsLayer,
  Graphic,
  esriRequest,
  Circle,
  ObjectSymbol3DLayer,
  PointSymbol3D,
  IconSymbol3DLayer
) {
  var createGraphic = function (data) {
    return new Graphic({
      geometry: data,
      symbol: data.symbol,
      attributes: data,
      popupTemplate: data.popupTemplate,
    });
  };

  // Layer1
  // Nền 1
  const layer1Layer1 = new GeoJSONLayer({
    url: "./api/layer1/layer1.geojson",
  });
  layer1Layer1.renderer = {
    type: "simple",
    symbol: {
      type: "polygon-3d",
      symbolLayers: [
        {
          type: "extrude",
          size: layer1Layer1Import.features[0].properties.height,
          material: {
            color: layer1Layer1Import.features[0].properties.color,
          },
        },
      ],
    },
  };
  // Trang trí trang ơ
  //--------BÊN TRÁI-------------------------------------------------------
  const decors1Layer = new GeoJSONLayer({
    url: "./api/layer1/decors_left/decors.geojson",
  });
  decors1Layer.renderer = {
    type: "simple",
    symbol: {
      type: "polygon-3d",
      symbolLayers: [
        {
          type: "extrude",
          size: layer1DecorsImport.features[0].properties.height,
          material: {
            color: layer1DecorsImport.features[0].properties.color,
          },
        },
      ],
    },
  };

  //trang trí ngựa ngựa
  const decors1_upLayer = new GeoJSONLayer({
    url: "./api/layer1/decors_left/decors_up.geojson",
  });
  decors1_upLayer.renderer = {
    type: "simple",
    symbol: {
      type: "polygon-3d",
      symbolLayers: [
        {
          type: "extrude",
          size: layer1Decors_upImport.features[0].properties.height,
          material: {
            color: layer1Decors_upImport.features[0].properties.color,
          },
        },
      ],
    },
  };

  //chéo chéo
  const decors1_sharp_brickLayer = new GeoJSONLayer({
    url: "./api/layer1/decors_left/decors_sharp_brick.geojson",
  });
  decors1_sharp_brickLayer.renderer = {
    type: "simple",
    symbol: {
      type: "polygon-3d",
      symbolLayers: [
        {
          type: "extrude",
          size: layer1Decors_sharp_brickImport.features[0].properties.height,
          material: {
            color: layer1Decors_sharp_brickImport.features[0].properties.color,
          },
        },
      ],
    },
  };

  //mộ
  const decors1_tombLayer = new GeoJSONLayer({
    url: "./api/layer1/decors_left/decors_tomb.geojson",
  });
  decors1_tombLayer.renderer = {
    type: "simple",
    symbol: {
      type: "polygon-3d",
      symbolLayers: [
        {
          type: "extrude",
          size: layer1Decors_tombImport.features[0].properties.height,
          material: {
            color: layer1Decors_tombImport.features[0].properties.color,
          },
        },
      ],
    },
  };

  //--------MẶT SAU-------------------------------------------------------
  const decors_back1Layer = new GeoJSONLayer({
    url: "./api/layer1/decors_back/decors.geojson",
  });
  decors_back1Layer.renderer = {
    type: "simple",
    symbol: {
      type: "polygon-3d",
      symbolLayers: [
        {
          type: "extrude",
          size: layer1Decors_backImport.features[0].properties.height,
          material: {
            color: layer1Decors_backImport.features[0].properties.color,
          },
        },
      ],
    },
  };

  //trang trí ngựa ngựa
  const decors1_up_backLayer = new GeoJSONLayer({
    url: "./api/layer1/decors_back/decors_up.geojson",
  });
  decors1_up_backLayer.renderer = {
    type: "simple",
    symbol: {
      type: "polygon-3d",
      symbolLayers: [
        {
          type: "extrude",
          size: layer1Decors_up_backImport.features[0].properties.height,
          material: {
            color: layer1Decors_up_backImport.features[0].properties.color,
          },
        },
      ],
    },
  };

  //chéo chéo
  const decors1_sharp_brick_backLayer = new GeoJSONLayer({
    url: "./api/layer1/decors_back/decors_sharp_brick.geojson",
  });
  decors1_sharp_brick_backLayer.renderer = {
    type: "simple",
    symbol: {
      type: "polygon-3d",
      symbolLayers: [
        {
          type: "extrude",
          size: layer1Decors_sharp_brick_backImport.features[0].properties
            .height,
          material: {
            color:
              layer1Decors_sharp_brick_backImport.features[0].properties.color,
          },
        },
      ],
    },
  };

  //mộ
  const decors1_tomb_backLayer = new GeoJSONLayer({
    url: "./api/layer1/decors_back/decors_tomb.geojson",
  });
  decors1_tomb_backLayer.renderer = {
    type: "simple",
    symbol: {
      type: "polygon-3d",
      symbolLayers: [
        {
          type: "extrude",
          size: layer1Decors_tomb_backImport.features[0].properties.height,
          material: {
            color: layer1Decors_tomb_backImport.features[0].properties.color,
          },
        },
      ],
    },
  };

  //--------MẶT PHẢI-------------------------------------------------------
  const decors_right1Layer = new GeoJSONLayer({
    url: "./api/layer1/decors_right/decors.geojson",
  });
  decors_right1Layer.renderer = {
    type: "simple",
    symbol: {
      type: "polygon-3d",
      symbolLayers: [
        {
          type: "extrude",
          size: layer1Decors_rightImport.features[0].properties.height,
          material: {
            color: layer1Decors_rightImport.features[0].properties.color,
          },
        },
      ],
    },
  };

  //trang trí ngựa ngựa
  const decors1_up_rightLayer = new GeoJSONLayer({
    url: "./api/layer1/decors_right/decors_up.geojson",
  });
  decors1_up_rightLayer.renderer = {
    type: "simple",
    symbol: {
      type: "polygon-3d",
      symbolLayers: [
        {
          type: "extrude",
          size: layer1Decors_up_rightImport.features[0].properties.height,
          material: {
            color: layer1Decors_up_rightImport.features[0].properties.color,
          },
        },
      ],
    },
  };

  //chéo chéo
  const decors1_sharp_brick_rightLayer = new GeoJSONLayer({
    url: "./api/layer1/decors_right/decors_sharp_brick.geojson",
  });
  decors1_sharp_brick_rightLayer.renderer = {
    type: "simple",
    symbol: {
      type: "polygon-3d",
      symbolLayers: [
        {
          type: "extrude",
          size: layer1Decors_sharp_brick_rightImport.features[0].properties
            .height,
          material: {
            color:
              layer1Decors_sharp_brick_rightImport.features[0].properties.color,
          },
        },
      ],
    },
  };

  //mộ
  const decors1_tomb_rightLayer = new GeoJSONLayer({
    url: "./api/layer1/decors_right/decors_tomb.geojson",
  });
  decors1_tomb_rightLayer.renderer = {
    type: "simple",
    symbol: {
      type: "polygon-3d",
      symbolLayers: [
        {
          type: "extrude",
          size: layer1Decors_tomb_rightImport.features[0].properties.height,
          material: {
            color: layer1Decors_tomb_rightImport.features[0].properties.color,
          },
        },
      ],
    },
  };

  // Cầu thang 1
  const stair1Layer = new GeoJSONLayer({
    url: "./api/layer1/stairs1.geojson",
  });
  stair1Layer.renderer = {
    type: "simple",
    symbol: {
      type: "polygon-3d",
      symbolLayers: [
        {
          type: "extrude",
          size: layer1Stairs1Import.features[0].properties.height,
          material: {
            color: layer1Stairs1Import.features[0].properties.color,
          },
        },
      ],
    },
  };

  // Layer2
  // Nền 2 - mặt trước
  const layer2Layer2_front = new GeoJSONLayer({
    url: "./api/layer2/layer2_front/layer2_front.geojson",
  });
  layer2Layer2_front.renderer = {
    type: "simple",
    symbol: {
      type: "polygon-3d",
      symbolLayers: [
        {
          type: "extrude",
          size: layer2Layer2_frontImport.features[0].properties.height,
          material: {
            color: layer2Layer2_frontImport.features[0].properties.color,
          },
        },
      ],
    },
  };

  const layer2Layer2_front_in = new GeoJSONLayer({
    url: "./api/layer2/layer2_front/layer2_front_in.geojson",
  });
  layer2Layer2_front_in.renderer = {
    type: "simple",
    symbol: {
      type: "polygon-3d",
      symbolLayers: [
        {
          type: "extrude",
          size: layer2Layer2_front_inImport.features[0].properties.height,
          material: {
            color: layer2Layer2_front_inImport.features[0].properties.color,
          },
        },
      ],
    },
  };

  // Layer2
  // Nền 2 - mặt phải
  const layer2Layer2_right = new GeoJSONLayer({
    url: "./api/layer2/layer2_right/layer2_right.geojson",
  });
  layer2Layer2_right.renderer = {
    type: "simple",
    symbol: {
      type: "polygon-3d",
      symbolLayers: [
        {
          type: "extrude",
          size: layer2Layer2_rightImport.features[0].properties.height,
          material: {
            color: layer2Layer2_rightImport.features[0].properties.color,
          },
        },
      ],
    },
  };

  const layer2Layer2_right_in = new GeoJSONLayer({
    url: "./api/layer2/layer2_right/layer2_right_in.geojson",
  });
  layer2Layer2_right_in.renderer = {
    type: "simple",
    symbol: {
      type: "polygon-3d",
      symbolLayers: [
        {
          type: "extrude",
          size: layer2Layer2_right_inImport.features[0].properties.height,
          material: {
            color: layer2Layer2_right_inImport.features[0].properties.color,
          },
        },
      ],
    },
  };

  // Layer2
  // Nền 2 - mặt sau
  const layer2Layer2_back = new GeoJSONLayer({
    url: "./api/layer2/layer2_back/layer2_back.geojson",
  });
  layer2Layer2_back.renderer = {
    type: "simple",
    symbol: {
      type: "polygon-3d",
      symbolLayers: [
        {
          type: "extrude",
          size: layer2Layer2_backImport.features[0].properties.height,
          material: {
            color: layer2Layer2_backImport.features[0].properties.color,
          },
        },
      ],
    },
  };

  const layer2Layer2_back_in = new GeoJSONLayer({
    url: "./api/layer2/layer2_back/layer2_back_in.geojson",
  });
  layer2Layer2_back_in.renderer = {
    type: "simple",
    symbol: {
      type: "polygon-3d",
      symbolLayers: [
        {
          type: "extrude",
          size: layer2Layer2_back_inImport.features[0].properties.height,
          material: {
            color: layer2Layer2_back_inImport.features[0].properties.color,
          },
        },
      ],
    },
  };

  // Layer2
  // Nền 2 - mặt trái
  const layer2Layer2_left = new GeoJSONLayer({
    url: "./api/layer2/layer2_left/layer2_left.geojson",
  });
  layer2Layer2_left.renderer = {
    type: "simple",
    symbol: {
      type: "polygon-3d",
      symbolLayers: [
        {
          type: "extrude",
          size: layer2Layer2_leftImport.features[0].properties.height,
          material: {
            color: layer2Layer2_leftImport.features[0].properties.color,
          },
        },
      ],
    },
  };

  const layer2Layer2_left_in = new GeoJSONLayer({
    url: "./api/layer2/layer2_left/layer2_left_in.geojson",
  });
  layer2Layer2_left_in.renderer = {
    type: "simple",
    symbol: {
      type: "polygon-3d",
      symbolLayers: [
        {
          type: "extrude",
          size: layer2Layer2_left_inImport.features[0].properties.height,
          material: {
            color: layer2Layer2_left_inImport.features[0].properties.color,
          },
        },
      ],
    },
  };

  // Layer3
  // Nền 3
  const layer3Layer3 = new GeoJSONLayer({
    url: "./api/layer3/layer3_front/layer3_front.geojson",
  });
  layer3Layer3.renderer = {
    type: "simple",
    symbol: {
      type: "polygon-3d",
      symbolLayers: [
        {
          type: "extrude",
          size: layer3Layer3Import.features[0].properties.height,
          material: {
            color: layer3Layer3Import.features[0].properties.color,
          },
        },
      ],
    },
  };

  // Layer3
  // Nền 3 - bên phải
  const layer3Layer3_right = new GeoJSONLayer({
    url: "./api/layer3/layer3_right/layer3_right.geojson",
  });
  layer3Layer3_right.renderer = {
    type: "simple",
    symbol: {
      type: "polygon-3d",
      symbolLayers: [
        {
          type: "extrude",
          size: layer3Layer3_rightImport.features[0].properties.height,
          material: {
            color: layer3Layer3_rightImport.features[0].properties.color,
          },
        },
      ],
    },
  };

  // Layer3
  // Nền 3 - mặt sau
  const layer3Layer3_back = new GeoJSONLayer({
    url: "./api/layer3/layer3_back/layer3_back.geojson",
  });
  layer3Layer3_back.renderer = {
    type: "simple",
    symbol: {
      type: "polygon-3d",
      symbolLayers: [
        {
          type: "extrude",
          size: layer3Layer3_backImport.features[0].properties.height,
          material: {
            color: layer3Layer3_backImport.features[0].properties.color,
          },
        },
      ],
    },
  };

  // Layer3
  // Nền 3 - bên trái
  const layer3Layer3_left = new GeoJSONLayer({
    url: "./api/layer3/layer3_left/layer3_left.geojson",
  });
  layer3Layer3_left.renderer = {
    type: "simple",
    symbol: {
      type: "polygon-3d",
      symbolLayers: [
        {
          type: "extrude",
          size: layer3Layer3_leftImport.features[0].properties.height,
          material: {
            color: layer3Layer3_leftImport.features[0].properties.color,
          },
        },
      ],
    },
  };

  const layer4Layer4_front = new GeoJSONLayer({
    url: "./api/layer4/layer4_front/layer4_front.geojson",
  });
  layer4Layer4_front.renderer = {
    type: "simple",
    symbol: {
      type: "polygon-3d",
      symbolLayers: [
        {
          type: "extrude",
          size: layer4Layer4_frontImport.features[0].properties.height,
          material: {
            color: layer4Layer4_frontImport.features[0].properties.color,
          },
        },
      ],
    },
  };

  const layer4Layer4_wallGate = new GeoJSONLayer({
    url: "./api/layer4/layer4_wallGate/layer4_wallGate.geojson",
  });
  layer4Layer4_wallGate.renderer = {
    type: "simple",
    symbol: {
      type: "polygon-3d",
      symbolLayers: [
        {
          type: "extrude",
          size: layer4Layer4_wallGateImport.features[0].properties.height,
          material: {
            color: layer4Layer4_wallGateImport.features[0].properties.color,
          },
        },
      ],
    },
  };

  const layer4Layer4_balcony_smallcrossbar = new GeoJSONLayer({
    url: "./api/layer4/layer4_wallGate/layer4_balcony_smallcrossbar.geojson",
  });
  layer4Layer4_balcony_smallcrossbar.renderer = {
    type: "simple",
    symbol: {
      type: "polygon-3d",
      symbolLayers: [
        {
          type: "extrude",
          size: layer4Layer4_balcony_smallcrossbarImport.features[0].properties
            .height,
          material: {
            color:
              layer4Layer4_balcony_smallcrossbarImport.features[0].properties
                .color,
          },
        },
      ],
    },
  };

  const layer4Layer4_balcony_crossbar = new GeoJSONLayer({
    url: "./api/layer4/layer4_wallGate/layer4_balcony_crossbar.geojson",
  });
  layer4Layer4_balcony_crossbar.renderer = {
    type: "simple",
    symbol: {
      type: "polygon-3d",
      symbolLayers: [
        {
          type: "extrude",
          size: layer4Layer4_balcony_crossbarImport.features[0].properties
            .height,
          material: {
            color:
              layer4Layer4_balcony_crossbarImport.features[0].properties.color,
          },
        },
      ],
    },
  };
  const layer4Layer4_balcony_onbar = new GeoJSONLayer({
    url: "./api/layer4/layer4_wallGate/layer4_balcony_onbar.geojson",
  });
  layer4Layer4_balcony_onbar.renderer = {
    type: "simple",
    symbol: {
      type: "polygon-3d",
      symbolLayers: [
        {
          type: "extrude",
          size: layer4Layer4_balcony_onbarImport.features[0].properties.height,
          material: {
            color:
              layer4Layer4_balcony_onbarImport.features[0].properties.color,
          },
        },
      ],
    },
  };

  const layer4Layer4_balcony = new GeoJSONLayer({
    url: "./api/layer4/layer4_wallGate/layer4_balcony.geojson",
  });
  layer4Layer4_balcony.renderer = {
    type: "simple",
    symbol: {
      type: "polygon-3d",
      symbolLayers: [
        {
          type: "extrude",
          size: layer4Layer4_balconyImport.features[0].properties.height,
          material: {
            color: layer4Layer4_balconyImport.features[0].properties.color,
          },
        },
      ],
    },
  };

  const layer4Layer4_balcony_glass = new GeoJSONLayer({
    url: "./api/layer4/layer4_wallGate/layer4_balcony_glass.geojson",
  });
  layer4Layer4_balcony_glass.renderer = {
    type: "simple",
    symbol: {
      type: "polygon-3d",
      symbolLayers: [
        {
          type: "extrude",
          size: layer4Layer4_balcony_glassImport.features[0].properties.height,
          material: {
            color:
              layer4Layer4_balcony_glassImport.features[0].properties.color,
          },
        },
      ],
    },
  };

  const layer4Layer4_columns = new GeoJSONLayer({
    url: "./api/layer4/layer4_columns/layer4_columns.geojson",
  });
  layer4Layer4_columns.renderer = {
    type: "simple",
    symbol: {
      type: "polygon-3d",
      symbolLayers: [
        {
          type: "extrude",
          size: layer4Layer4_columnsImport.features[0].properties.height,
          material: {
            color: layer4Layer4_columnsImport.features[0].properties.color,
          },
        },
      ],
    },
  };

  const layer4Layer4_columnsEntrace = new GeoJSONLayer({
    url: "./api/layer4/layer4_columnsEntrance/layer4_columnsEntrance.geojson",
  });
  layer4Layer4_columnsEntrace.renderer = {
    type: "simple",
    symbol: {
      type: "polygon-3d",
      symbolLayers: [
        {
          type: "extrude",
          size: layer4Layer4_columnsEntranceImport.features[0].properties
            .height,
          material: {
            color:
              layer4Layer4_columnsEntranceImport.features[0].properties.color,
          },
        },
      ],
    },
  };

  const layer4Layer4_right = new GeoJSONLayer({
    url: "./api/layer4/layer4_right/layer4_right.geojson",
  });
  layer4Layer4_right.renderer = {
    type: "simple",
    symbol: {
      type: "polygon-3d",
      symbolLayers: [
        {
          type: "extrude",
          size: layer4Layer4_rightImport.features[0].properties.height,
          material: {
            color: layer4Layer4_rightImport.features[0].properties.color,
          },
        },
      ],
    },
  };

  const layer4Layer4_left = new GeoJSONLayer({
    url: "./api/layer4/layer4_left/layer4_left.geojson",
  });
  layer4Layer4_left.renderer = {
    type: "simple",
    symbol: {
      type: "polygon-3d",
      symbolLayers: [
        {
          type: "extrude",
          size: layer4Layer4_leftImport.features[0].properties.height,
          material: {
            color: layer4Layer4_leftImport.features[0].properties.color,
          },
        },
      ],
    },
  };

  const layer4Layer4_back = new GeoJSONLayer({
    url: "./api/layer4/layer4_back/layer4_back.geojson",
  });
  layer4Layer4_back.renderer = {
    type: "simple",
    symbol: {
      type: "polygon-3d",
      symbolLayers: [
        {
          type: "extrude",
          size: layer4Layer4_backImport.features[0].properties.height,
          material: {
            color: layer4Layer4_backImport.features[0].properties.color,
          },
        },
      ],
    },
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
      decors1Layer,
      decors1_sharp_brickLayer,
      decors1_upLayer,
      decors1_tombLayer,
      decors_back1Layer,
      decors1_sharp_brick_backLayer,
      decors1_up_backLayer,
      decors1_tomb_backLayer,
      decors_right1Layer,
      decors1_sharp_brick_rightLayer,
      decors1_up_rightLayer,
      decors1_tomb_rightLayer,
      stair1Layer,
      // layer2Layer2,
      layer2Layer2_front,
      layer2Layer2_front_in,
      layer2Layer2_right,
      layer2Layer2_right_in,
      layer2Layer2_left,
      layer2Layer2_left_in,
      layer2Layer2_back,
      layer2Layer2_back_in,
      layer3Layer3,
      layer3Layer3_right,
      layer3Layer3_back,
      layer3Layer3_left,
      layer4Layer4_front,
      layer4Layer4_wallGate,
      layer4Layer4_balcony_smallcrossbar,
      layer4Layer4_balcony_crossbar,
      layer4Layer4_balcony_onbar,
      layer4Layer4_balcony,
      layer4Layer4_balcony_glass,
      // layer4Layer4_columns,
      layer4Layer4_columnsEntrace,
      layer4Layer4_right,
      layer4Layer4_left,
      layer4Layer4_back,
      layer4Layer4_balcony,
      // cylinderLayer
    ],
  });

  const view = new SceneView({
    container: "viewDiv",
    map: map,
    camera: {
      position: [106.70325054448642, 10.776740223222385, 1000],
      heading: 0,
      tilt: 0,
    },
  });
  view.popup.defaultPopupTemplateEnabled = true;
});
