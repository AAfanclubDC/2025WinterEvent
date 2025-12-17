main.floors.MT12=
{
    "floorId": "MT12",
    "title": "主塔 12 层",
    "name": "12",
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
        "6,1": {
            "floorId": ":before",
            "stair": "upFloor"
        },
        "11,6": {
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
    [144, 32,207,  0, 21,  0, 88, 82,  0, 27, 82, 27,144],
    [144,207,  2,  2, 82,  2,  2,  2, 82,  2,  2, 82,144],
    [144,  0,  2,  0,224,  0,  2,  0,214,  0,  2, 27,144],
    [144,  0, 81,214, 27,224, 81,224, 28,207, 82,  0,144],
    [144,215,  2,  0,214,  0,  2,  0,224,  0,  2, 82,144],
    [144, 27,  2,  2, 81,  2,  2,  2, 81,  2,  2, 87,144],
    [144,215,  2,  0,214,  0,  2,  0,212,  0,  2,  0,144],
    [144,  0, 81,214, 28,212, 81,212, 27,207, 81, 21,144],
    [144,  0,  2,  0,212,  0,  2,  0,214,  0,  2,  0,144],
    [144,207,  2,  2, 81,  2,  2,  2, 81,  2,  2,207,144],
    [144, 32,207,  0,  0, 21, 22, 21,  0,  0,206, 32,144],
    [144,144,144,144,144,144,144,144,144,144,144,144,144]
],
    "bgmap": [

],
    "fgmap": [

],
    "bgm": "bgm.mp3"
}