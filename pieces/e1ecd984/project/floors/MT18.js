main.floors.MT18=
{
    "floorId": "MT18",
    "title": "主塔 18 层",
    "name": "18",
    "width": 13,
    "height": 13,
    "canFlyTo": false,
    "canFlyFrom": false,
    "canUseQuickShop": true,
    "cannotViewMap": true,
    "cannotMoveDirectly": false,
    "images": [],
    "ratio": 1,
    "defaultGround": "",
    "firstArrive": null,
    "eachArrive": [
        {
            "type": "if",
            "condition": "(flag:TrueEnd===1)",
            "true": [
                "\t[弱智,default]看來這裡就是終點了汪",
                {
                    "type": "animate",
                    "name": "EMsikao",
                    "loc": "hero"
                },
                "\t[弱智,default]不對，這裡不是真正產生問題的地方",
                "\t[弱智,default]高興前輩說勇者國在創立之時就在使用吸收怨念的魔法了",
                "\t[弱智,default]但是這座塔卻是在勇者國成立一段時間之後才建立的",
                "\t[弱智,default]而且這裡最初是一個儲藏軍備的地窖",
                "\t[弱智,default]也就是說真正造成這一切問題的根源不是在塔頂",
                "\t[弱智,default]是「塔底」",
                {
                    "type": "animate",
                    "name": "EMsikao",
                    "loc": "hero"
                },
                "\t[弱智,default]媽的，我簡直是天才汪",
                {
                    "type": "changeFloor",
                    "floorId": "MT1",
                    "loc": [
                        5,
                        0
                    ],
                    "direction": "right"
                },
                {
                    "type": "setValue",
                    "name": "flag:TrueEnd",
                    "value": "2"
                },
                {
                    "type": "exit"
                }
            ]
        },
        {
            "type": "if",
            "condition": "(flag:TrueEnd===2)",
            "true": [
                "\t[弱智,default]已經沒有在這裡該做的事情了",
                {
                    "type": "changeFloor",
                    "floorId": "MT19",
                    "loc": [
                        9,
                        11
                    ],
                    "direction": "right"
                },
                {
                    "type": "exit"
                }
            ]
        },
        {
            "type": "if",
            "condition": "(flag:__kill__&&(flag:GetterRode!==1))",
            "true": [
                {
                    "type": "show",
                    "loc": [
                        [
                            9,
                            4
                        ]
                    ]
                }
            ],
            "false": [
                {
                    "type": "hide",
                    "loc": [
                        [
                            9,
                            4
                        ]
                    ]
                }
            ]
        }
    ],
    "parallelDo": "",
    "events": {
        "9,4": [
            "咚!",
            "\t[弱智,default]唉喲!",
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
                "type": "setCurtain",
                "color": [
                    255,
                    255,
                    255,
                    1
                ],
                "time": 500,
                "keep": true
            },
            {
                "type": "setCurtain",
                "time": 500
            },
            "\t[弱智,default]好痛，甚麼鬼汪",
            "\t[弱智,default]怪了怎麼這裡也有一堆的書汪",
            {
                "type": "animate",
                "name": "EMyiwen",
                "loc": [
                    9,
                    4
                ]
            },
            "\t[弱智,default]「魔塔寄錄」，看起來對了解這座塔來說非常重要汪",
            "\t[弱智,default][「魔塔是由勇者國所建立的監獄，用於處理那些難以接受正道的傢伙」]",
            "\t[弱智,default][「為了避免逃獄的可能性，整座塔被施下了只能進不能出的魔法」]",
            "\t[弱智,default][「唯有在塔頂的典獄長室才能關閉這個魔法」]",
            "\t[弱智,default]看來只要到了塔頂就能夠出去了汪",
            {
                "type": "jumpHero",
                "time": 200
            },
            {
                "type": "jumpHero",
                "time": 200
            },
            "\t[弱智,default]嗯?後面竟然還有汪",
            {
                "type": "animate",
                "name": "SLchenmo",
                "loc": [
                    9,
                    4
                ]
            },
            "\t[弱智,default][「但隨著時間的推移，關押的人越來越難以控制，甚至已經發生多次攻進典獄長室的事件」]",
            "\t[弱智,default][「因此整座塔被施下了魔法，只要待在塔中超過一定時間，就會變形成容易擊殺的怪物」]",
            {
                "type": "animate",
                "name": "SLchenmo",
                "loc": [
                    9,
                    4
                ]
            },
            "\t[弱智,default]那隻怪物......",
            "\t[弱智,default]不對，不可能的汪",
            "\t[弱智,default]先去看看塔頂到底發生了什麼，再去確定吧汪",
            {
                "type": "hide",
                "loc": [
                    [
                        8,
                        4
                    ]
                ],
                "remove": true
            },
            {
                "type": "hide",
                "loc": [
                    [
                        9,
                        4
                    ]
                ],
                "remove": true
            }
        ],
        "6,2": [
            {
                "type": "if",
                "condition": "flag:GetterRode",
                "true": [
                    {
                        "type": "changeFloor",
                        "floorId": "Final2",
                        "loc": [
                            6,
                            11
                        ],
                        "direction": "up"
                    },
                    {
                        "type": "exit"
                    }
                ]
            },
            {
                "type": "if",
                "condition": "flag:__kill__",
                "true": [
                    {
                        "type": "changeFloor",
                        "floorId": "Final3",
                        "loc": [
                            6,
                            11
                        ],
                        "direction": "up"
                    },
                    {
                        "type": "exit"
                    }
                ]
            },
            {
                "type": "changeFloor",
                "floorId": "Final1",
                "loc": [
                    6,
                    11
                ],
                "direction": "up"
            }
        ]
    },
    "changeFloor": {
        "6,11": {
            "floorId": "MT19",
            "loc": [
                9,
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
    [144,144,20128,20129,20128,20129,20049,20128,20129,20128,20129,144,144],
    [144,144,20136,20137,20136,20137,10113,20136,20137,20136,20137,144,144],
    [144,144,20144,20145,20144,20145,  0,20144,20145,20144,20145,144,144],
    [144,144,  0,  0,  0,  0,  0,  0,  0,  0,  0,144,144],
    [144,144,20201,20202,20203,  0,  0,20064,20065,20066,  0,144,144],
    [144,144,20209,20210,20211,  0,  0,20072,20073,20074,  0,144,144],
    [144,144,  0,  0,40112,  0,40112,20080,20081,20082,  0,144,144],
    [144,144,  0,30081,40120,30082,40120,30082,  0,30081,  0,144,144],
    [144,144,  0,30089,  0,30090,  0,30090,  0,30089,  0,144,144],
    [144,144,  0,  0,  0,  0,  0,  0,  0,  0,  0,144,144],
    [144,144,144,144,144,144, 87,144,144,144,144,144,144],
    [144,144,144,144,144,144,144,144,144,144,144,144,144]
],
    "bgmap": [
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,20048,20049,20049,20049,20049,20049,20049,20049,20050,  0,  0],
    [  0,  0,20056,20057,20057,20057,20057,20057,20057,20057,20058,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0]
],
    "fgmap": [

],
    "bgm": "bgm.mp3"
}