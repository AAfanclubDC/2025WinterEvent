main.floors.MT1=
{
    "floorId": "MT1",
    "title": "主塔 1 层",
    "name": "1",
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
        "5,7": [
            {
                "type": "if",
                "condition": "(flag:__MT1Flag1__!==1)",
                "true": [
                    {
                        "type": "setValue",
                        "name": "flag:__MT1Flag1__",
                        "value": "1"
                    },
                    {
                        "type": "jumpHero",
                        "time": 200
                    },
                    {
                        "type": "jumpHero",
                        "time": 200
                    },
                    "\t[弱智,default]這個橘色頭上長鏈鋸的狗是甚麼東西啊汪!!!",
                    "\t[弱智,default]我來之前沒有人跟我說我會變成這個啊汪!!!",
                    "\t[弱智,default]他媽的，這勾巴塔怎麼還帶變形效果的",
                    "\t[弱智,default]話說在這裡擺一個鏡子的人可真是惡趣味啊!!!",
                    "\t[弱智,default]可惡，這不是只能往上走去拯救公主了嗎"
                ]
            }
        ],
        "5,9": [
            {
                "type": "if",
                "condition": "(flag:TrueEnd===2)",
                "true": [
                    "\t[弱智,default]這裡竟然還有一個藏起來的按鈕，我那時候怎麼沒注意到汪",
                    "\t[弱智,default]媽的，我變成狗了來著汪",
                    "\t[弱智,default]我按!",
                    {
                        "type": "vibrate",
                        "direction": "horizontal",
                        "time": 1000,
                        "speed": 3,
                        "power": 3
                    },
                    {
                        "type": "show",
                        "loc": [
                            [
                                0,
                                12
                            ]
                        ]
                    }
                ]
            }
        ],
        "0,12": {
            "trigger": null,
            "enable": false,
            "noPass": null,
            "displayDamage": true,
            "opacity": 1,
            "filter": {
                "blur": 0,
                "hue": 0,
                "grayscale": 0,
                "invert": false,
                "shadow": 0
            },
            "data": [
                {
                    "type": "setCurtain",
                    "color": [
                        0,
                        0,
                        0,
                        1
                    ],
                    "time": 500,
                    "keep": true
                },
                {
                    "type": "changeFloor",
                    "floorId": "B1",
                    "loc": [
                        1,
                        11
                    ]
                },
                "\t[弱智,default]看來就是這裡了汪",
                "\t[弱智,default]咳咳咳，這裡灰塵怎麼這麼多",
                {
                    "type": "setCurtain",
                    "time": 500
                },
                "\t[弱智,default]果然這底下還有空間汪",
                {
                    "type": "jumpHero",
                    "time": 200
                },
                {
                    "type": "jumpHero",
                    "time": 200
                }
            ]
        },
        "7,7": [
            "怪物圖鑑，如果無法從外貌判斷怪物的實力，就看這個吧",
            "為了之後的勇者留在這裡",
            "---------第55勇者留",
            "\t[弱智,default]這是之前的勇者的留言嗎?",
            {
                "type": "animate",
                "name": "EMsikao",
                "loc": "hero"
            },
            "\t[弱智,default]真的...很多人進來沒有出去呢"
        ]
    },
    "changeFloor": {
        "5,0": {
            "floorId": ":next",
            "stair": "downFloor"
        }
    },
    "beforeBattle": {},
    "afterBattle": {},
    "afterGetItem": {},
    "afterOpenDoor": {
        "6,10": [
            {
                "type": "animate",
                "name": "EMsikao",
                "loc": "hero"
            },
            "\t[弱智,default]可...可惡，都知道變成這樣都是公主害的了",
            "\t[弱智,default]我才不要再繼續在這座塔裡待下去啊",
            "\t[弱智,default]真擊敗了公主我就回不去勇者國了",
            "\t[弱智,default]媽的，趁現在趕快走吧，這破塔我是一點也再待不下去啦！",
            {
                "type": "changeFloor",
                "floorId": "MT0",
                "loc": [
                    6,
                    8
                ],
                "direction": "down"
            },
            "\t[弱智,default]我沒有錯...對的，我沒有錯哈哈",
            {
                "type": "moveHero",
                "time": 50,
                "steps": [
                    "down:4"
                ]
            },
            {
                "type": "setCurtain",
                "color": [
                    0,
                    0,
                    0,
                    1
                ],
                "time": 500,
                "keep": true
            },
            "就這樣，弱智逃跑了",
            "懦夫",
            "弱智END 懦弱之人",
            {
                "type": "restart"
            }
        ]
    },
    "autoEvent": {
        "6,9": {
            "0": {
                "condition": "core.getHeroLoc('y') ===9 ",
                "currentFloor": true,
                "priority": 0,
                "delayExecute": false,
                "multiExecute": false,
                "data": [
                    {
                        "type": "closeDoor",
                        "id": "specialDoor",
                        "loc": [
                            6,
                            10
                        ]
                    },
                    "\t[弱智,default]蛤?什麼動靜",
                    {
                        "type": "function",
                        "function": "function(){\ncore.turnHero(\"down\");\n}"
                    },
                    {
                        "type": "function",
                        "function": "function(){\ncore.jumpHero(6,9,300);\n}"
                    },
                    "\t[弱智,default]不是，哥們，這塔真有問題啊",
                    "\t[弱智,default]話說回來，眼皮好像有點重......",
                    {
                        "type": "setCurtain",
                        "color": [
                            0,
                            0,
                            0,
                            1
                        ],
                        "time": 500,
                        "keep": true
                    },
                    {
                        "type": "hideStatusBar"
                    },
                    {
                        "type": "unloadEquip",
                        "pos": 0
                    },
                    {
                        "type": "unloadEquip",
                        "pos": 1
                    },
                    {
                        "type": "function",
                        "function": "function(){\ncore.setHeroIcon('Pochita2.png', false);\n}"
                    },
                    {
                        "type": "function",
                        "function": "function(){\ncore.setItem('sword5',0);core.setItem('shield5',0);\n}"
                    },
                    "我們並不敬愛的朋友，勇者弱智，已經於王國曆545年12月18號離開了我們，留下...",
                    "什麼?你說沒死?真無聊",
                    {
                        "type": "setCurtain",
                        "time": 500
                    },
                    {
                        "type": "animate",
                        "name": "EMyiwen",
                        "loc": [
                            6,
                            9
                        ],
                        "async": true
                    },
                    "\t[弱智,default]痾......我這是怎麼了",
                    "\t[弱智,default]怪了，我視線怎麼這麼低，眼睛前面這個鏈鋸又是甚麼汪！",
                    "\t[弱智,default]找找我的劍吧，等等???",
                    "\t[弱智,default]媽的，我手呢???我那麼大一個手呢???",
                    "\t[弱智,default]這坨橘色的是甚麼東西啊阿，汪???",
                    {
                        "type": "function",
                        "function": "function(){\ncore.jumpHero(6,9,300);\n}"
                    },
                    "\t[弱智,default]我怎麼汪起來了啊汪!!!",
                    "\t[弱智,default]有沒有什麼東西能讓我看一下我到底怎麼了?",
                    {
                        "type": "setValue",
                        "name": "flag:Lock",
                        "value": "1"
                    },
                    {
                        "type": "showStatusBar"
                    }
                ]
            },
            "1": null
        }
    },
    "cannotMove": {},
    "cannotMoveIn": {},
    "map": [
    [ 27,  0,206, 28,  2, 87,  0,201, 27,  0,201,  0, 28],
    [  0,206, 28,206,  2,  2,  2,  2,  2,  2,  2,  2,  0],
    [206, 27,207,  0,  2, 27, 28, 21,  2,  0,203, 81,  0],
    [  2,  2, 81,  2,  2,  0, 27,  0,  2, 21,  0,  2,201],
    [  0, 28,203, 21,  2,  0,  0, 21,  2,  0, 21,  2,  0],
    [ 27,203,204,203, 82,210,209,210,  2,202, 27,  2, 31],
    [  2,  2, 81,  2,  2,  2, 81,  2,  2,  0,202,  2,202],
    [ 33,226, 30,226,  2,80089,  0,129,  2,203,  0,  2,  0],
    [ 22, 30,227, 30,  2,  0,  0, 45,  2,  2,  2,  2,  0],
    [  2,  2, 81,  2,  2,  2,  0,  0,201,  0,202,  0,201],
    [  0,  0,215,  0,  2,  2,  0,  2,  2,  2,  2, 81,  2],
    [267,  0,  0,  0,  2,  0,  0,  0,  2, 21,  0,202,  0],
    [ 88,267,  0,  0,  2,  0,162,  0,  2, 28,201,  0, 32]
],
    "bgmap": [

],
    "fgmap": [

],
    "downFloor": [
        6,
        12
    ],
    "upFloor": [
        5,
        0
    ],
    "bgm": "bgm.mp3"
}