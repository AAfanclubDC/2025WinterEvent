main.floors.MT20=
{
    "floorId": "MT20",
    "title": "主塔 20 层",
    "name": "20",
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
    "firstArrive": [
        "\t[弱智,default]奇怪怎麼沒有路了",
        "\t[弱智,default]找一下還有沒有沒去過的地方好了"
    ],
    "eachArrive": [],
    "parallelDo": "",
    "events": {},
    "changeFloor": {
        "11,11": {
            "floorId": ":before",
            "stair": "upFloor"
        },
        "8,11": {
            "floorId": "MT19",
            "loc": [
                8,
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
    [144,  0, 81,277,  0, 81,277,  0, 81,  0, 82,  0,144],
    [144,  0,  2,  0,  0,  2,  0,  0,  2,  0,  2, 27,144],
    [144, 32,  2,208,  0,  2,  0,  2,  2,  0,  2, 31,144],
    [144,235,  2, 32,  2,  2,  2,  2,  0,208, 81,  0,144],
    [144,  0,  2,  0,  0,277,  0,277,  0,  0,  2, 27,144],
    [144, 21,  2,  2,  2,  2,  2, 82,  2,  2,  2,  0,144],
    [144,  0, 81,208,  0, 22,  0, 21,  0,  0, 82,  0,144],
    [144,235,  2,  0,  2,  2,  2,  2, 81,  2,  2,246,144],
    [144,  0,  2,  0,  2,  0,277,  0,  0,  2,  0,  0,144],
    [144,  0,  2,  0,  2,  0,  2,  2,  2,  2, 21, 21,144],
    [144,  0, 81,208, 81, 32,245, 82,  0,  2,  0, 88,144],
    [144,144,144,144,144,144,144,144,144,144,144,144,144]
],
    "bgmap": [

],
    "fgmap": [

],
    "bgm": "bgm.mp3"
}