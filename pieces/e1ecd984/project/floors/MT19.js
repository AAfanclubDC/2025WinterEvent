main.floors.MT19=
{
    "floorId": "MT19",
    "title": "主塔 19 层",
    "name": "19",
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
            "floorId": "MT17",
            "stair": "upFloor"
        },
        "11,11": {
            "floorId": ":next",
            "stair": "downFloor"
        },
        "8,11": {
            "floorId": ":next"
        },
        "9,11": {
            "floorId": "MT18",
            "loc": [
                6,
                11
            ]
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
    [144, 31,  0,227,  0,  0,  0,235,  0,  0,  0,208,144],
    [144,  0,  2,  0,  2, 82,  2,  0,  2,  2, 81,  0,144],
    [144,  0,  2,235,  0,  0,  2, 32,  2,  2,  2,  0,144],
    [144,  0,  2,  2,  2,  0,  2,  0,  2,  2,  2,  0,144],
    [144,227,  2,  2,  2, 28,  0,208,  0,  0,  0,235,144],
    [144,  0,  2,  2,  2,  0,  2,  2,  2,  0,  2,  0,144],
    [144,235,  0, 28, 81,  0,  2, 27,  0,235,  2, 21,144],
    [144,  0,  2,  0,  2,  0,  2,  0,  2,  2,  2,  0,144],
    [144,  0,  2, 22,  0,208,  0,235,  0,  0,  0,  0,144],
    [144,  0,  2,  2,  2,  0,  2,  2,  2,  2,  2,246,144],
    [144,235,  0,  0,  0,  0, 88,  2,  0,  0,  2, 87,144],
    [144,144,144,144,144,144,144,144,144,144,144,144,144]
],
    "bgmap": [

],
    "fgmap": [

],
    "bgm": "bgm.mp3"
}