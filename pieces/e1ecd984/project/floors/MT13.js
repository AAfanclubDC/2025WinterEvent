main.floors.MT13=
{
    "floorId": "MT13",
    "title": "主塔 13 层",
    "name": "13",
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
        "10,2": [
            "\t[弱智,default]這個東西看起來特別的奇怪",
            "\t[弱智,default]看起來有點像是門?",
            "\t[弱智,default]不過走過去也沒有反應...",
            "\t[弱智,default]等等，牆上這個是，要輸入密碼嗎?",
            "\t[弱智,default]我又不知道密碼是多少，這座塔裡有什麼看起來像是數字的地方嗎?",
            {
                "type": "input",
                "text": "三位數密碼"
            },
            {
                "type": "if",
                "condition": "(flag:input===534)",
                "true": [
                    {
                        "type": "changeFloor",
                        "floorId": "MT9",
                        "loc": [
                            7,
                            7
                        ],
                        "direction": "up"
                    },
                    "\t[弱智,default]嗚啊，這是傳送過來這邊的啊",
                    "\t[弱智,default]不過那個是什麼來著"
                ]
            }
        ]
    },
    "changeFloor": {
        "11,6": {
            "floorId": ":before",
            "stair": "upFloor"
        },
        "1,6": {
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
    [144,224,  0,214,  0,214,  0,  0,  2,90347,90353,90348,144],
    [144,  0,224,  2,  0,  0,  0,  0,  2,90349,  0,90350,144],
    [144, 81,  2,  2, 81,  2,  2,  2,  2,  0,  0,  0,144],
    [144,211,  0,  2,222,  0, 81,  0,  0,218,  0,218,144],
    [144,  0,  0,  2,  0,  2,  2,  2,  0,  2,  2,  2,144],
    [144, 87,  0, 82,  0, 82,  0, 28,  0,  2, 27, 88,144],
    [144,  0,  0,  2,  0,  2,  2,  2,  0,  2, 21,  0,144],
    [144,  2,  2,  2,211,  0, 81,  0,  0, 82,  0,  0,144],
    [144, 31,  0,  0,  0,  0,  2,  0,  2,  2,  2,212,144],
    [144,  0,  2,  2, 81,  2,  2,  0,211,  2, 21,  0,144],
    [144, 31,  0,  0,222,  0,  0,212,  0, 81,  0, 27,144],
    [144,144,144,144,144,144,144,144,144,144,144,144,144]
],
    "bgmap": [

],
    "fgmap": [

],
    "bgm": "bgm.mp3"
}