main.floors.MT8=
{
    "floorId": "MT8",
    "title": "主塔 8 层",
    "name": "8",
    "width": 13,
    "height": 13,
    "canFlyTo": true,
    "canFlyFrom": true,
    "canUseQuickShop": true,
    "cannotViewMap": false,
    "cannotMoveDirectly": false,
    "images": [],
    "ratio": 1,
    "defaultGround": "",
    "firstArrive": [],
    "eachArrive": [],
    "parallelDo": "",
    "events": {},
    "changeFloor": {
        "6,11": {
            "floorId": ":before",
            "stair": "upFloor"
        },
        "11,11": {
            "floorId": ":next",
            "stair": "downFloor"
        }
    },
    "beforeBattle": {},
    "afterBattle": {},
    "afterGetItem": {},
    "afterOpenDoor": {},
    "autoEvent": {},
    "cannotMove": {},
    "cannotMoveIn": {},
    "map": [
    [144,144,144,144,144,144,144,144,144,144,144,144,144],
    [144, 27, 28, 53,  2, 27,  0, 81,  0,  2,  0, 32,144],
    [144, 27, 28, 53,  2,  0,253,  2,211,  2,211,  2,144],
    [144, 27, 28, 53,  2,  0,  2,  2,  0, 81,207,  0,144],
    [144,  2, 83,  2,  2,  0, 27,  2,  2,  2,  2,  0,144],
    [144,219,  0, 21,  2, 28,  0,  0,  0,  0,  2,  0,144],
    [144, 27,253,  0,  2,  2,  2,  2,224,227,  2,211,144],
    [144,219,  0, 21,267,  0, 32,  0,  0,  0,  2,  0,144],
    [144,  2,214,  2,  2,  2, 82,  2,  2,  2,  2,211,144],
    [144, 32,  0, 81,  0,  0,  0,  0,  0,  0,  0,  0,144],
    [144,  0,224,  2,210,  2,  0,  2,  2,211,  2,  0,144],
    [144, 32,  0,222,  0,  2, 88,  2, 22,  0,  2, 87,144],
    [144,144,144,144,144,144,144,144,144,144,144,144,144]
],
    "bgmap": [

],
    "fgmap": [

],
    "bgm": "bgm.mp3"
}