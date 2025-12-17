main.floors.MT17=
{
    "floorId": "MT17",
    "title": "主塔 17 层",
    "name": "17",
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
        "\t[弱智,default]這一層...怎麼感覺有點狹窄?"
    ],
    "eachArrive": [],
    "parallelDo": "",
    "events": {},
    "changeFloor": {
        "1,1": {
            "floorId": ":before",
            "stair": "upFloor"
        },
        "6,11": {
            "floorId": "MT19",
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
    [144, 88,  0,  0, 32,  0,  0,220,  0, 22,  0, 32,144],
    [144,  0,  2,  2,  2,  2,  2,  2,  2,  2,  2,  0,144],
    [144, 28,  2,  2,  2,  2,  2,  2,  2,  2,  2,220,144],
    [144,  0,  2,  2,  2,  2,  2,  2,  2,  2,  2, 82,144],
    [144,235,  2,  2,  2,  2,  2,  2,  2,  2,  2,  0,144],
    [144, 81,  2,  2,  2,  2,  2,  2,  2,  2,  2, 32,144],
    [144,  0,  2,  2,  2,  2,  2,  2,  2,  2,  2,  0,144],
    [144,  0,  2,  2,  2,  2,  2,  2,  2,  2,  2,220,144],
    [144,235,  2,  2,  2,  2,  2,  2,  2,  2,  2,  0,144],
    [144,  0,  2,  2,  2,  2,  2,  2,  2,  2,  2, 32,144],
    [144, 31,  0,235,  0,  0, 87,  0, 21,  0, 21,  0,144],
    [144,144,144,144,144,144,144,144,144,144,144,144,144]
],
    "bgmap": [

],
    "fgmap": [

],
    "bgm": "bgm.mp3"
}