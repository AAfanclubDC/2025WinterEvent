main.floors.B2=
{
    "floorId": "B2",
    "title": "地下 2 層",
    "name": "B2",
    "width": 13,
    "height": 13,
    "canFlyTo": false,
    "canFlyFrom": false,
    "canUseQuickShop": true,
    "cannotViewMap": true,
    "cannotMoveDirectly": false,
    "images": [],
    "ratio": 1,
    "bgm": "underground.m4a",
    "firstArrive": [],
    "eachArrive": [
        {
            "type": "loadBgm",
            "name": "bossBattle.m4a"
        }
    ],
    "parallelDo": "",
    "events": {
        "6,8": [
            "勇者國的垃圾啊，都知道我是甚麼了，還敢下來嗎?",
            {
                "type": "show",
                "loc": [
                    [
                        6,
                        4
                    ]
                ],
                "time": 500
            },
            {
                "type": "animate",
                "name": "EMsikao",
                "loc": "hero"
            },
            "\t[弱智,default]我不是甚麼垃圾，我可是勇者國的勇者啊汪!",
            {
                "type": "moveHero",
                "steps": [
                    "up:1"
                ]
            },
            {
                "type": "hide",
                "loc": [
                    [
                        6,
                        8
                    ]
                ],
                "remove": true
            },
            {
                "type": "playBgm",
                "name": "bossBattle.m4a",
                "startTime": 2,
                "keep": true
            }
        ],
        "6,4": {
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
        "6,2": {
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
        "9,6": {
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
        "3,6": {
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
        "3,5": {
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
    "beforeBattle": {
        "9,4": [
            {
                "type": "if",
                "condition": "flag:__Getter2__",
                "true": [
                    {
                        "type": "show",
                        "loc": [
                            [
                                9,
                                6
                            ]
                        ],
                        "time": 500
                    },
                    "\t[蓋特,Getter.png]原來你在這裡",
                    "\t[蓋特,Getter.png]看在你的幫助的份上，我來救你一次",
                    "\t[弱智,default][下一秒蓋特從上方落下，拿出了一個奇怪的裝置往人魚的方向開了一砲]",
                    {
                        "type": "animate",
                        "name": "explode1",
                        "loc": [
                            9,
                            3
                        ]
                    },
                    {
                        "type": "hide",
                        "loc": [
                            [
                                9,
                                4
                            ]
                        ],
                        "remove": true,
                        "time": 500
                    },
                    {
                        "type": "show",
                        "loc": [
                            [
                                3,
                                4
                            ]
                        ],
                        "time": 500
                    },
                    "\t[琪多卡洛斯,Boss.PNG]垂死掙扎的東西還有這種招式?",
                    "\t[弱智,default]你，他媽的，把嘴閉上汪!",
                    "\t[弱智,default]接招!",
                    {
                        "type": "exit"
                    }
                ]
            }
        ],
        "3,4": [
            "\t[高興,Happy.png]原來你已經到這裡了啊",
            {
                "type": "show",
                "loc": [
                    [
                        3,
                        6
                    ]
                ],
                "time": 500
            },
            "\t[弱智,default]前輩?你也來了!?",
            "\t[高興,Happy.png]研討會提早結束了，我就先回來看看你的狀況",
            "\t[高興,Happy.png]看來她就是造成這一切發生的原因了，勇者國怨念的聚合體",
            {
                "type": "show",
                "loc": [
                    [
                        3,
                        5
                    ]
                ],
                "time": 500
            },
            {
                "type": "hide",
                "loc": [
                    [
                        3,
                        5
                    ]
                ],
                "remove": true,
                "time": 500
            },
            "\t[琪多卡洛斯,Boss.PNG]好燙、好辣，這個到底是什麼!?",
            {
                "type": "hide",
                "loc": [
                    [
                        3,
                        4
                    ]
                ],
                "remove": true,
                "time": 500
            },
            "\t[高興,Happy.png]讓你嚐嚐真正的麻辣燙的味道，不要再嘗試那個那個味道奇怪的版本了",
            "\t[高興,Happy.png]既然你吃下了這碗麻辣燙，我們就是朋友了",
            "\t[琪多卡洛斯,Boss.PNG]誰是你朋友阿，你這個傢伙!",
            "\t[高興,Happy.png]看來這招對怨念沒用呢，弱智剩下的就交給你了",
            {
                "type": "show",
                "loc": [
                    [
                        6,
                        2
                    ]
                ],
                "time": 500
            },
            "\t[琪多卡洛斯,Boss.PNG]別想就這麼讓我收手，勇者國的有一個算一個都該死!!!",
            "\t[高興,Happy.png]弱智，不好，這女人要把你打至跪地，可能是要迫你回去做沙包啊",
            "\t[弱智,default]為甚麼是沙包啊，這裡不該是性奴隸之類的東西嗎?",
            {
                "type": "if",
                "condition": "flag:__Getter2__",
                "true": [
                    "\t[蓋特,Getter.png]好噁心"
                ]
            },
            "\t[弱智,default]不要啊汪",
            "\t[弱智,default]不要在這種這麼嚴肅的時候敗壞我的名聲啊",
            "\t[弱智,default]不管了，受死吧你汪!",
            "\t[弱智,default]我是勇者國的勇者，我要討伐你!",
            {
                "type": "exit"
            }
        ]
    },
    "afterBattle": {
        "6,4": [
            "\t[琪多卡洛斯,Boss.PNG]喔?看來沒找機會把你弄死是我的失誤",
            "\t[琪多卡洛斯,Boss.PNG]不過這種氣勢你還能撐多久呢?",
            "\t[琪多卡洛斯,Boss.PNG]我很好奇啊",
            "\t[弱智,default]廢話少說汪!",
            {
                "type": "show",
                "loc": [
                    [
                        9,
                        4
                    ]
                ],
                "time": 500
            }
        ],
        "9,4": [
            {
                "type": "show",
                "loc": [
                    [
                        3,
                        4
                    ]
                ],
                "time": 500
            },
            "\t[琪多卡洛斯,Boss.PNG]垂死掙扎的東西還有這種招式?",
            "\t[弱智,default]你，他媽的，把嘴閉上汪!",
            "\t[弱智,default]接招!"
        ],
        "6,2": [
            {
                "type": "pauseBgm"
            },
            "\t[琪多卡洛斯,Boss.PNG]為什麼......為甚麼就是殺不掉......",
            "\t[琪多卡洛斯,Boss.PNG]我還不能...離去......",
            "[眼前的人魚在弱智揮下最後一刀之後化成光點消散了]",
            "[一小部分朝弱智的方向移動過來，更多的則朝著勇者國的方向飄去]",
            {
                "type": "playBgm",
                "name": "TE.m4a"
            },
            "\t[弱智,default]總算結束了汪",
            {
                "type": "animate",
                "name": "EMsikao",
                "loc": "hero"
            },
            "\t[弱智,default]媽的，不是，我怎麼還沒變回去啊汪",
            "\t[弱智,default]我不想要一直當狗啊汪",
            "\t[高興,Happy.png]是這樣嗎?可是我看你當狗的時候很開心啊",
            "\t[弱智,default]我不是，我沒有汪",
            "\t[弱智,default]但好像......也不差",
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
            "就這樣，狗狗弱智懷著他人的理解(?)來到了塔頂解救了昏迷中的公主",
            "隨後幾人便離開了「魔塔」回到勇者國，作為拯救公主的勇者弱智得到了全國的讚賞",
            "公主本人完全忘記了塔中發生的一切，當事人也都對此諱莫如深",
            "但怨念終究是被釋放，勇者國已經不再是那個完美的國度",
            "可它的人民卻依舊保持了原有的習慣，至於某些人的畫風......",
            {
                "type": "changeFloor",
                "floorId": "story_5",
                "loc": [
                    9,
                    9
                ],
                "direction": "left",
                "time": 0
            },
            {
                "type": "setCurtain",
                "time": 500
            },
            "\t[高興,Happy.png]你都來這裡了，吃點麻辣燙再走吧",
            "\t[弱智,default]前輩不要啊，放過我吧",
            "\t[高興,Happy.png]不行，我今天一定要讓你知道麻辣燙的美好",
            {
                "type": "if",
                "condition": "flag:__Getter2__",
                "true": [
                    "\t[弱智,default]前輩你看，主人都在外面等我了",
                    "\t[高興,Happy.png]那你先走吧",
                    "\t[蓋特,Getter.png]狗狗，快出來，帶你出門散步",
                    "\t[弱智,default]是的，主人，汪!"
                ],
                "false": [
                    "\t[弱智,default]啊啊啊，我才剛回來我不想死啊"
                ]
            },
            {
                "type": "showImage",
                "code": 1,
                "image": "TE1.png",
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
                "opacity": 1,
                "time": 1000
            },
            {
                "type": "sleep",
                "time": 3000,
                "noSkip": true
            },
            {
                "type": "hideImage",
                "code": 1,
                "time": 1000
            },
            {
                "type": "showImage",
                "code": 1,
                "image": "TE2.png",
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
                "opacity": 1,
                "time": 1000
            },
            {
                "type": "sleep",
                "time": 3000,
                "noSkip": true
            },
            {
                "type": "hideImage",
                "code": 1,
                "time": 1000
            },
            {
                "type": "showImage",
                "code": 1,
                "image": "TE3.png",
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
                "opacity": 1,
                "time": 1000
            },
            {
                "type": "sleep",
                "time": 3000,
                "noSkip": true
            },
            {
                "type": "hideImage",
                "code": 1,
                "time": 1000
            },
            {
                "type": "showImage",
                "code": 1,
                "image": "TE4.png",
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
                "opacity": 1,
                "time": 1000
            },
            {
                "type": "sleep",
                "time": 3000,
                "noSkip": true
            },
            {
                "type": "hideImage",
                "code": 1,
                "time": 1000
            },
            {
                "type": "if",
                "condition": "flag:__Getter2__",
                "true": [
                    {
                        "type": "showImage",
                        "code": 1,
                        "image": "TE5.png",
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
                        "opacity": 1,
                        "time": 1000
                    },
                    {
                        "type": "sleep",
                        "time": 3000,
                        "noSkip": true
                    },
                    {
                        "type": "hideImage",
                        "code": 1,
                        "time": 1000
                    }
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
                "time": 1000,
                "keep": true
            },
            "雖然從魔塔裡離開了，但弱智的每天的生活似乎依舊精采(?)",
            "弱智，聖誕快樂!",
            "TE 真正的勇者",
            {
                "type": "restart"
            }
        ]
    },
    "afterGetItem": {},
    "afterOpenDoor": {},
    "autoEvent": {},
    "cannotMove": {},
    "cannotMoveIn": {},
    "map": [
    [145,145,145,145,145,145,145,145,145,145,145,145,145],
    [145,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,145],
    [145,  0,  0,  0,  0,  0,257,  0,  0,  0,  0,  0,145],
    [145,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,145],
    [145,  0,  0,257,  0,  0,257,  0,  0,257,  0,  0,145],
    [145,  0,  0,356,  0,  0,  0,  0,  0,  0,  0,  0,145],
    [145,  0,  0,353,  0,  0,  0,  0,  0,351,  0,  0,145],
    [145,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,145],
    [145,  3,  3,  3,  3,  3,  0,  3,  3,  3,  3,  3,145],
    [145,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,145],
    [145,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,145],
    [145,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,145],
    [145,145,145,145,145,145,145,145,145,145,145,145,145]
],
    "bgmap": [
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,20181,20182,20183,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,20189,20190,20191,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0]
],
    "fgmap": [

]
}