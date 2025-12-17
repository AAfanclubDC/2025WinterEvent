main.floors.Final3=
{
    "floorId": "Final3",
    "title": "主塔 21 层",
    "name": "21",
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
    "bgm": "bgm.mp3",
    "firstArrive": [
        "\t[弱智,default]公主?",
        "\t[梅貝爾,mable.png]怎麼了?肆意屠殺好玩嗎?",
        "\t[弱智,default]公主，你在說甚麼汪?",
        "\t[梅貝爾,mable.png]汪...哈哈哈，當狗當久了改不掉習慣了嗎?",
        "\t[弱智,default]不對，你不是公主汪!",
        "\t[弱智,default]你到底是誰!",
        "\t[梅貝爾,mable.png]我是誰一點都不重要喔",
        "\t[梅貝爾,mable.png]所以你要不要回答我的問題呢?",
        "\t[弱智,default]你...你在說甚麼我不知道汪",
        "\t[弱智,default]高興前輩到底去哪裡了，快說出來汪!",
        "\t[梅貝爾,mable.png]喔?你說那隻鳥啊",
        "\t[梅貝爾,mable.png]玩膩了之後丟掉了喔",
        "\t[弱智,default]媽的，你!",
        "\t[梅貝爾,mable.png]至於現在......你的高興前輩不是已經被你殺掉了嗎?",
        "\t[弱智,default]不可能!不可能!不可......",
        {
            "type": "showImage",
            "code": 1,
            "image": "Dead1.png",
            "sloc": [
                0,
                0,
                null
            ],
            "loc": [
                32,
                32,
                352,
                352
            ],
            "opacity": 0.9,
            "time": 500
        },
        {
            "type": "sleep",
            "time": 500,
            "noSkip": true
        },
        {
            "type": "hideImage",
            "code": 1,
            "time": 500
        },
        {
            "type": "showImage",
            "code": 1,
            "image": "Dead2.png",
            "sloc": [
                0,
                0,
                null
            ],
            "loc": [
                32,
                32,
                352,
                352
            ],
            "opacity": 0.9,
            "time": 500
        },
        {
            "type": "sleep",
            "time": 500,
            "noSkip": true
        },
        {
            "type": "hideImage",
            "code": 1,
            "time": 500
        },
        "\t[弱智,default]不應該是這樣的...不對不對不對",
        "\t[梅貝爾,mable.png]不過也要感謝你呢，沒有你把他殺掉的話，「我」可沒那麼容易進來呢",
        "\t[梅貝爾,mable.png]你也活得夠久了，就讓我看看你能掙扎到甚麼時候吧",
        {
            "type": "animate",
            "name": "xianshi1",
            "loc": [
                6,
                6
            ]
        },
        {
            "type": "show",
            "loc": [
                [
                    4,
                    6
                ]
            ]
        },
        {
            "type": "show",
            "loc": [
                [
                    5,
                    7
                ]
            ]
        },
        {
            "type": "show",
            "loc": [
                [
                    7,
                    7
                ]
            ]
        },
        {
            "type": "show",
            "loc": [
                [
                    8,
                    6
                ]
            ]
        },
        "\t[梅貝爾,mable.png]我最喜歡勇者的痛苦了，你可要撐久一點喔",
        {
            "type": "hide",
            "loc": [
                [
                    6,
                    4
                ]
            ]
        }
    ],
    "eachArrive": [],
    "parallelDo": "",
    "events": {
        "4,3": {
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
            "data": []
        },
        "3,4": {
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
            "data": []
        },
        "4,6": {
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
            "data": []
        },
        "4,8": {
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
            "data": []
        },
        "5,7": {
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
            "data": []
        },
        "7,7": {
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
            "data": []
        },
        "8,6": {
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
            "data": []
        },
        "9,7": {
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
            "data": []
        },
        "9,4": {
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
            "data": []
        },
        "8,3": {
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
            "data": []
        },
        "5,5": {
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
            "data": []
        },
        "2,7": {
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
            "data": []
        },
        "3,9": {
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
            "data": []
        },
        "8,9": {
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
            "data": []
        },
        "10,8": {
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
            "data": []
        },
        "7,5": {
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
            "data": []
        }
    },
    "changeFloor": {},
    "beforeBattle": {},
    "afterBattle": {
        "4,3": [
            "\t[怪物,zombieKnight]終於...",
            {
                "type": "setValue",
                "name": "flag:__kill__",
                "operator": "+=",
                "value": "1"
            }
        ],
        "3,4": [
            "\t[怪物,zombieKnight]終於...",
            {
                "type": "setValue",
                "name": "flag:__kill__",
                "operator": "+=",
                "value": "1"
            }
        ],
        "4,6": [
            "\t[怪物,zombieKnight]終於...",
            {
                "type": "setValue",
                "name": "flag:__kill__",
                "operator": "+=",
                "value": "1"
            }
        ],
        "4,8": [
            "\t[怪物,zombieKnight]終於...",
            {
                "type": "setValue",
                "name": "flag:__kill__",
                "operator": "+=",
                "value": "1"
            }
        ],
        "5,7": [
            "\t[怪物,zombieKnight]終於...",
            {
                "type": "setValue",
                "name": "flag:__kill__",
                "operator": "+=",
                "value": "1"
            }
        ],
        "7,7": [
            "\t[怪物,zombieKnight]終於...",
            {
                "type": "setValue",
                "name": "flag:__kill__",
                "operator": "+=",
                "value": "1"
            }
        ],
        "8,6": [
            "\t[怪物,zombieKnight]終於...",
            {
                "type": "setValue",
                "name": "flag:__kill__",
                "operator": "+=",
                "value": "1"
            }
        ],
        "9,7": [
            "\t[怪物,zombieKnight]終於...",
            {
                "type": "setValue",
                "name": "flag:__kill__",
                "operator": "+=",
                "value": "1"
            }
        ],
        "9,4": [
            "\t[怪物,zombieKnight]終於...",
            {
                "type": "setValue",
                "name": "flag:__kill__",
                "operator": "+=",
                "value": "1"
            }
        ],
        "8,3": [
            "\t[怪物,zombieKnight]終於...",
            {
                "type": "setValue",
                "name": "flag:__kill__",
                "operator": "+=",
                "value": "1"
            }
        ],
        "5,5": [
            "\t[怪物,zombieKnight]終於...",
            {
                "type": "setValue",
                "name": "flag:__kill__",
                "operator": "+=",
                "value": "1"
            }
        ],
        "2,7": [
            "\t[怪物,zombieKnight]終於...",
            {
                "type": "setValue",
                "name": "flag:__kill__",
                "operator": "+=",
                "value": "1"
            }
        ],
        "3,9": [
            "\t[怪物,zombieKnight]終於...",
            {
                "type": "setValue",
                "name": "flag:__kill__",
                "operator": "+=",
                "value": "1"
            }
        ],
        "8,9": [
            "\t[怪物,zombieKnight]終於...",
            {
                "type": "setValue",
                "name": "flag:__kill__",
                "operator": "+=",
                "value": "1"
            }
        ],
        "10,8": [
            "\t[怪物,zombieKnight]終於...",
            {
                "type": "setValue",
                "name": "flag:__kill__",
                "operator": "+=",
                "value": "1"
            }
        ],
        "7,5": [
            "\t[怪物,zombieKnight]終於...",
            {
                "type": "setValue",
                "name": "flag:__kill__",
                "operator": "+=",
                "value": "1"
            }
        ]
    },
    "afterGetItem": {},
    "afterOpenDoor": {},
    "autoEvent": {
        "1,1": {
            "0": {
                "condition": "flag:__kill__> flag:__kill2__",
                "currentFloor": true,
                "priority": 1,
                "delayExecute": false,
                "multiExecute": true,
                "data": [
                    {
                        "type": "setValue",
                        "name": "flag:__kill2__",
                        "operator": "+=",
                        "value": "1"
                    },
                    {
                        "type": "switch",
                        "condition": "flag:__kill2__",
                        "caseList": [
                            {
                                "case": "1",
                                "action": [
                                    {
                                        "type": "setCurtain",
                                        "color": [
                                            0,
                                            0,
                                            0,
                                            0.1
                                        ],
                                        "time": 500,
                                        "keep": true
                                    }
                                ]
                            },
                            {
                                "case": "2",
                                "action": [
                                    {
                                        "type": "setCurtain",
                                        "color": [
                                            0,
                                            0,
                                            0,
                                            0.2
                                        ],
                                        "time": 500,
                                        "keep": true
                                    }
                                ]
                            },
                            {
                                "case": "3",
                                "action": [
                                    {
                                        "type": "setCurtain",
                                        "color": [
                                            0,
                                            0,
                                            0,
                                            0.3
                                        ],
                                        "time": 500,
                                        "keep": true
                                    }
                                ]
                            },
                            {
                                "case": "4",
                                "action": [
                                    {
                                        "type": "setCurtain",
                                        "color": [
                                            0,
                                            0,
                                            0,
                                            0.4
                                        ],
                                        "time": 500,
                                        "keep": true
                                    }
                                ]
                            },
                            {
                                "case": "5",
                                "action": [
                                    {
                                        "type": "setCurtain",
                                        "color": [
                                            0,
                                            0,
                                            0,
                                            0.5
                                        ],
                                        "time": 500,
                                        "keep": true
                                    }
                                ]
                            },
                            {
                                "case": "6",
                                "action": [
                                    {
                                        "type": "setCurtain",
                                        "color": [
                                            0,
                                            0,
                                            0,
                                            0.6
                                        ],
                                        "time": 500,
                                        "keep": true
                                    }
                                ]
                            },
                            {
                                "case": "7",
                                "action": [
                                    {
                                        "type": "setCurtain",
                                        "color": [
                                            0,
                                            0,
                                            0,
                                            0.7
                                        ],
                                        "time": 500,
                                        "keep": true
                                    }
                                ]
                            },
                            {
                                "case": "8",
                                "action": [
                                    {
                                        "type": "setCurtain",
                                        "color": [
                                            0,
                                            0,
                                            0,
                                            0.8
                                        ],
                                        "time": 500,
                                        "keep": true
                                    }
                                ]
                            },
                            {
                                "case": "9",
                                "action": [
                                    {
                                        "type": "setCurtain",
                                        "color": [
                                            0,
                                            0,
                                            0,
                                            0.85
                                        ],
                                        "time": 500,
                                        "keep": true
                                    }
                                ]
                            },
                            {
                                "case": "10",
                                "action": [
                                    {
                                        "type": "setCurtain",
                                        "color": [
                                            0,
                                            0,
                                            0,
                                            0.9
                                        ],
                                        "time": 500,
                                        "keep": true
                                    },
                                    "\t[弱智,default]前輩...對不起......",
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
                                    "\t[梅貝爾,mable.png]好了，下一步就是徹底毀滅勇者國了",
                                    "BE 勇者們的自相殘殺",
                                    {
                                        "type": "restart"
                                    }
                                ]
                            }
                        ]
                    }
                ]
            },
            "1": null
        },
        "1,2": {
            "0": {
                "condition": "flag:__kill__>3",
                "currentFloor": true,
                "priority": 0,
                "delayExecute": false,
                "multiExecute": false,
                "data": [
                    {
                        "type": "show",
                        "loc": [
                            [
                                2,
                                7
                            ]
                        ]
                    },
                    {
                        "type": "show",
                        "loc": [
                            [
                                5,
                                5
                            ]
                        ]
                    },
                    {
                        "type": "show",
                        "loc": [
                            [
                                7,
                                5
                            ]
                        ]
                    },
                    {
                        "type": "show",
                        "loc": [
                            [
                                9,
                                7
                            ]
                        ]
                    }
                ]
            },
            "1": {
                "condition": "flag:__kill__>5",
                "currentFloor": true,
                "priority": 0,
                "delayExecute": false,
                "multiExecute": false,
                "data": [
                    {
                        "type": "show",
                        "loc": [
                            [
                                3,
                                4
                            ]
                        ]
                    },
                    {
                        "type": "show",
                        "loc": [
                            [
                                3,
                                9
                            ]
                        ]
                    },
                    {
                        "type": "show",
                        "loc": [
                            [
                                10,
                                8
                            ]
                        ]
                    },
                    {
                        "type": "show",
                        "loc": [
                            [
                                9,
                                4
                            ]
                        ]
                    }
                ]
            }
        },
        "1,3": {
            "0": {
                "condition": "flag:__kill__>7",
                "currentFloor": true,
                "priority": 0,
                "delayExecute": false,
                "multiExecute": false,
                "data": [
                    {
                        "type": "show",
                        "loc": [
                            [
                                4,
                                3
                            ]
                        ]
                    },
                    {
                        "type": "show",
                        "loc": [
                            [
                                4,
                                8
                            ]
                        ]
                    },
                    {
                        "type": "show",
                        "loc": [
                            [
                                8,
                                3
                            ]
                        ]
                    },
                    {
                        "type": "show",
                        "loc": [
                            [
                                8,
                                9
                            ]
                        ]
                    }
                ]
            },
            "1": null
        }
    },
    "cannotMove": {},
    "cannotMoveIn": {},
    "map": [
    [  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4],
    [  4,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  4],
    [  4,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  4],
    [  4,  0,  0,  0,228,  0,  0,  0,228,  0,  0,  0,  4],
    [  4,  0,  0,256,  0,  0,355,  0,  0,256,  0,  0,  4],
    [  4,  0,  0,  0,  0,207,  0,207,  0,  0,  0,  0,  4],
    [  4,  0,  0,  0,214,  0,  0,  0,214,  0,  0,  0,  4],
    [  4,  0,207,  0,  0,214,  0,214,  0,207,  0,  0,  4],
    [  4,  0,  0,  0,228,  0,  0,  0,  0,  0,256,  0,  4],
    [  4,  0,  0,256,  0,  0,  0,  0,228,  0,  0,  0,  4],
    [  4,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  4],
    [  4,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  4],
    [  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4]
],
    "bgmap": [

],
    "fgmap": [

]
}