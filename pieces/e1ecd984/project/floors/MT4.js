main.floors.MT4=
{
    "floorId": "MT4",
    "title": "主塔 4 层",
    "name": "4",
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
    "events": {
        "4,1": [
            "炭烤蜜瓜兔子"
        ],
        "4,3": [
            {
                "type": "setValue",
                "name": "flag:__MT4Flag1__",
                "value": "1"
            },
            {
                "type": "hide",
                "remove": true
            }
        ]
    },
    "changeFloor": {
        "11,11": {
            "floorId": ":before",
            "stair": "upFloor"
        },
        "1,1": {
            "floorId": ":next",
            "stair": "downFloor"
        },
        "3,1": {
            "floorId": "Shop",
            "stair": "flyPoint"
        }
    },
    "beforeBattle": {},
    "afterBattle": {},
    "afterGetItem": {},
    "afterOpenDoor": {},
    "autoEvent": {
        "4,3": {
            "0": {
                "condition": "flag:__MT4Flag1__===1",
                "currentFloor": true,
                "priority": 0,
                "delayExecute": false,
                "multiExecute": false,
                "data": [
                    {
                        "type": "loadBgm",
                        "name": "shop.m4a"
                    },
                    "\t[弱智,default]奇怪，前面那個是什麼汪",
                    "\t[弱智,default]「碳烤蜜瓜兔子」?這是甚麼名字汪",
                    "\t[弱智,default]難不成是賣食物的?",
                    "\t[弱智,default]進去看一下好了"
                ]
            },
            "1": null
        }
    },
    "cannotMove": {},
    "cannotMoveIn": {},
    "map": [
    [144,144,144,144,144,144,144,144,144,144,144,144,144],
    [144, 87,  2,90096,129,  2,  0,203, 31,203,  0,  0,144],
    [144, 27,  2,  0,  0,  2,  0,  2,  2,  2,  2, 81,144],
    [144, 32,  2,  2,  0,  2,  0,  2, 27,213,  0,205,144],
    [144,205, 81,215,202, 82,  0,  2, 28, 27,213,  0,144],
    [144,  0,  2,  2,  2,  2,  0,  2,  2,  2,  2,  2,144],
    [144,  0,  0,213,  0,  0, 21,203, 31, 21,  0,205,144],
    [144,  2,  2,  2,  2,  2, 81,  2,  2,  2,  2,203,144],
    [144,  0, 28,221, 36,  2,  0,  0, 22,  0, 82,205,144],
    [144, 22,  0, 31,221,  2,  0,  2,  2,213,  2, 31,144],
    [144,206,  2,  2,  2,  2,206,  2, 27,  0,  2,  0,144],
    [144,  0,  0,  0, 32,  0,  0,  2,  0, 28,  2, 88,144],
    [144,144,144,144,144,144,144,144,144,144,144,144,144]
],
    "bgmap": [

],
    "fgmap": [

],
    "bgm": "bgm.mp3"
}