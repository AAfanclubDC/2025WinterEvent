main.floors.MT9=
{
    "floorId": "MT9",
    "title": "主塔 9 层",
    "name": "9",
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
        "11,11": {
            "floorId": ":before",
            "stair": "upFloor"
        },
        "1,1": {
            "floorId": ":next",
            "stair": "downFloor"
        },
        "11,1": {
            "floorId": ":before",
            "stair": "upFloor"
        }
    },
    "beforeBattle": {},
    "afterBattle": {},
    "afterGetItem": {},
    "afterOpenDoor": {},
    "autoEvent": {
        "7,1": {
            "0": {
                "condition": "core.hasItem('superPotion'",
                "currentFloor": true,
                "priority": 0,
                "delayExecute": false,
                "multiExecute": false,
                "data": [
                    "\t[弱智,default]不知道能做什麼，先收著吧汪"
                ]
            }
        }
    },
    "cannotMove": {},
    "cannotMoveIn": {},
    "map": [
    [144,144,144,144,144,144,144,144,144,144,144,144,144],
    [144, 87,  2,  0,  0,  0,  0, 56,  0,  0,  0,104,144],
    [144,  0,  2,  0,  0,  0,  0,  0,  0,  0,  0,  0,144],
    [144,211,  2,213,  0,213,256,  0,  0,213,  0,213,144],
    [144,207,  2,  0,213,  0,  0,256,  0,  0,  0,  0,144],
    [144,211,  2,213,  0,213,  0,  0,256,213,  0,213,144],
    [144, 21,  2,  0,  0,  0,  0,  0,  0,  0,  0,  0,144],
    [144, 32,  2,  0,  0,  0,  0,  0,  0,  0,  0,  0,144],
    [144,  0,  2,  2,  2,  2,  2,  2,  2,  2,  2,  2,144],
    [144,253,  2,  2,  2,  2,  2,  2,  2,  2,  2,  2,144],
    [144,  0,  2,  2,  2,  2,  2,  2,  2,  2,  2,  2,144],
    [144,218,  0,253,  0, 32, 21,211,207,211,  0, 88,144],
    [144,144,144,144,144,144,144,144,144,144,144,144,144]
],
    "bgmap": [

],
    "fgmap": [

],
    "bgm": "bgm.mp3"
}