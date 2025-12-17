main.floors.MT11=
{
    "floorId": "MT11",
    "title": "主塔 11 层",
    "name": "11",
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
        "6,1": {
            "floorId": ":next",
            "stair": "downFloor"
        }
    },
    "beforeBattle": {},
    "afterBattle": {
        "5,6": [
            {
                "type": "setValue",
                "name": "flag:MT11Door",
                "operator": "+=",
                "value": "1"
            }
        ],
        "7,6": [
            {
                "type": "setValue",
                "name": "flag:MT11Door",
                "operator": "+=",
                "value": "1"
            }
        ]
    },
    "afterGetItem": {},
    "afterOpenDoor": {},
    "autoEvent": {
        "6,6": {
            "0": {
                "condition": "flag:MT11Door===2",
                "currentFloor": true,
                "priority": 0,
                "delayExecute": false,
                "multiExecute": false,
                "data": [
                    {
                        "type": "openDoor",
                        "loc": [
                            6,
                            6
                        ]
                    }
                ]
            }
        }
    },
    "cannotMove": {},
    "cannotMoveIn": {},
    "map": [
    [144,144,144,144,144,144,144,144,144,144,144,144,144],
    [144, 21,  0, 81,  0,  0, 87,  0,  0, 81,  0, 21,144],
    [144,  0,  0,  2,  0,  0,  0,  0,  0,  2,  0,  0,144],
    [144,253,  2,  2,207,  2,204,  2,207,  2,  2,210,144],
    [144, 27,  2, 32,  0,  2, 53,  2,  0, 32,  2, 28,144],
    [144,253,  2,  2,207,  2,  2,  2,207,  2,  2,210,144],
    [144,  0, 32,  2,  0,224, 86,218,  0,  2, 32,  0,144],
    [144,  0,  2,  2,  2,  2,  0,  2,  2,  2,  2,  0,144],
    [144,207,  2, 27, 27,  2,  0,  2, 42,  0,  2,207,144],
    [144, 28,  2, 27,  0,219,  0,219,  0, 21,  2, 27,144],
    [144,207,  2,  2,  2,  2,  2,  2,  2,  2,  2,207,144],
    [144,  0,  0,  0,219,  0, 88,  0,211,  0,  0,  0,144],
    [144,144,144,144,144,144,144,144,144,144,144,144,144]
],
    "bgmap": [

],
    "fgmap": [

],
    "bgm": "bgm.mp3"
}