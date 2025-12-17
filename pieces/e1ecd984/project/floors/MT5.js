main.floors.MT5=
{
    "floorId": "MT5",
    "title": "主塔 5 层",
    "name": "5",
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
        "5,1": {
            "floorId": ":before",
            "stair": "upFloor"
        },
        "7,1": {
            "floorId": ":next",
            "stair": "downFloor"
        },
        "6,3": {
            "floorId": "MT4_5",
            "stair": "upFloor"
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
    [144,217,213,217,  0, 88,  2, 87,  0,217,213,217,144],
    [144, 31,  2,  2,  2,  2,  2,  2,  2,  2,  2, 32,144],
    [144,  0,  2,  0, 28,  2,  0,  2, 28,  0,  2,  0,144],
    [144, 27,  2, 27,  0,  2, 85,  2,  0, 27,  2, 28,144],
    [144,210,  2,241,  2, 21, 22, 21,  2,241,  2,210,144],
    [144, 27,  2,  0,241,  0,  0,  0,241,  0,  2, 28,144],
    [144,  0,  2,  2,  2,  2,223,  2,  2,  2,  2,  0,144],
    [144,226,  2, 28, 27,227,  0,227, 28, 27,  2,226,144],
    [144,215,  2, 27,227,  0, 33,  0,227, 28,  2,215,144],
    [144,226,  2,  2,  2,  2,222,  2,  2,  2,  2,226,144],
    [144,  0, 21, 22, 21,  0,  0,  0,206,  0,  0,  0,144],
    [144,144,144,144,144,144,144,144,144,144,144,144,144]
],
    "bgmap": [

],
    "fgmap": [

],
    "bgm": "bgm.mp3"
}