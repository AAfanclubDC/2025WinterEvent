main.floors.MT15=
{
    "floorId": "MT15",
    "title": "主塔 15 层",
    "name": "15",
    "width": 13,
    "height": 13,
    "canFlyTo": true,
    "canFlyFrom": true,
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
            "condition": "(core.hasItem('superPotion') &&( flags.__Getter2__ ===1))",
            "true": [
                {
                    "type": "show",
                    "loc": [
                        [
                            5,
                            7
                        ]
                    ]
                }
            ]
        },
        {
            "type": "if",
            "condition": "(!core.hasItem('superPotion') )",
            "true": [
                {
                    "type": "hide",
                    "loc": [
                        [
                            5,
                            7
                        ]
                    ]
                }
            ]
        }
    ],
    "parallelDo": "",
    "events": {
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
            "data": [
                {
                    "type": "if",
                    "condition": "(!flag:Getter3First)",
                    "true": [
                        {
                            "type": "setValue",
                            "name": "flag:Getter3First",
                            "value": "1"
                        },
                        "\t[弱智,default]又是你!這次我不會再眼睜睜的看著你逃跑了汪",
                        "\t[蓋特,Getter.png]狗狗，坐下",
                        {
                            "type": "playBgm",
                            "name": "SoftTime.mp3",
                            "keep": true
                        },
                        "\t[弱智,default](坐下)是的，主人汪",
                        {
                            "type": "vibrate",
                            "direction": "horizontal",
                            "time": 500,
                            "speed": 5,
                            "power": 5
                        },
                        "\t[弱智,default](站起來)不對，不對不對不對",
                        "\t[弱智,default]我不能再這樣下去了，我可是勇者國的勇者啊",
                        "\t[蓋特,Getter.png]所以你就說你要不要獎勵",
                        "\t[弱智,default]要的汪，請辱罵我吧汪",
                        "\t[蓋特,Getter.png]好噁心",
                        "\t[弱智,default]謝謝您的獎勵",
                        "\t[弱智,default]所以主人這次是來找我要甚麼的汪",
                        "\t[蓋特,Getter.png]把你身上那瓶聖水給我吧，我有用處",
                        {
                            "type": "animate",
                            "name": "EMsikao",
                            "loc": "hero"
                        },
                        "\t[弱智,default]不要",
                        "\t[蓋特,Getter.png]蛤?",
                        "\t[弱智,default]除非你告訴我你準備拿它來做什麼汪",
                        "\t[蓋特,Getter.png]你確定?",
                        "\t[弱智,default]這...這個東西對我來說很重要，除非你告訴我目的，不然我不會交出來的汪!",
                        {
                            "type": "animate",
                            "name": "EMsikao",
                            "loc": [
                                5,
                                7
                            ]
                        },
                        "\t[蓋特,Getter.png]為了逃出這座塔",
                        {
                            "type": "animate",
                            "name": "SLyiwen",
                            "loc": "hero",
                            "async": true
                        },
                        "\t[弱智,default]逃出這座塔?",
                        "\t[蓋特,Getter.png]對，就這樣",
                        {
                            "type": "waitAsync"
                        },
                        "\t[蓋特,Getter.png]我就站在這裡等了",
                        {
                            "type": "animate",
                            "name": "EMsikao",
                            "loc": "hero"
                        },
                        {
                            "type": "playBgm",
                            "name": "bgm.mp3",
                            "keep": true
                        }
                    ]
                },
                {
                    "type": "choices",
                    "text": "要不要把聖水交出去",
                    "choices": [
                        {
                            "text": "算了再想一想吧",
                            "action": [
                                {
                                    "type": "exit"
                                }
                            ]
                        },
                        {
                            "text": "不要，我再也不會被騙了",
                            "action": [
                                "\t[蓋特,Getter.png]只有這樣嗎 我好失望?",
                                "\t[蓋特,Getter.png]這樣的話我們就不再見了",
                                {
                                    "type": "hide",
                                    "loc": [
                                        [
                                            5,
                                            7
                                        ]
                                    ],
                                    "remove": true
                                },
                                {
                                    "type": "exit"
                                }
                            ]
                        },
                        {
                            "text": "主人的請求哪有拒絕的道理",
                            "action": [
                                {
                                    "type": "setValue",
                                    "name": "item:superPotion",
                                    "operator": "-=",
                                    "value": "1"
                                },
                                {
                                    "type": "setValue",
                                    "name": "flag:GetterRode",
                                    "value": "1"
                                }
                            ]
                        }
                    ]
                },
                {
                    "type": "animate",
                    "name": "EMsikao",
                    "loc": "hero"
                },
                {
                    "type": "moveHero",
                    "steps": [
                        "up:1"
                    ]
                },
                {
                    "type": "setBlock",
                    "number": "superPotion",
                    "loc": [
                        [
                            5,
                            6
                        ]
                    ]
                },
                "\t[弱智,default]雖然我被你騙了很多次，但這次......我相信你",
                "\t[蓋特,Getter.png]真的?",
                "\t[弱智,default]真的，被騙就被騙吧，反正我本來也就不確定這個能幹嘛",
                "\t[弱智,default]蓋特，如果你真的做得到，證明給我看",
                "\t[弱智,default]或者讓我重新組織遺下我的語言",
                "\t[弱智,default]帶我離開這裡吧，蓋特主人汪!",
                "\t[蓋特,Getter.png]我果然沒看錯你，小狗狗",
                "\t[蓋特,Getter.png]你就繼續往塔頂前進，我會在前面等你的",
                "\t[弱智,default]是的主人，汪!",
                {
                    "type": "hide",
                    "loc": [
                        [
                            5,
                            6
                        ]
                    ],
                    "remove": true
                },
                {
                    "type": "hide",
                    "loc": [
                        [
                            5,
                            7
                        ]
                    ],
                    "remove": true
                }
            ]
        }
    },
    "changeFloor": {
        "6,1": {
            "floorId": ":before",
            "stair": "upFloor"
        },
        "6,11": {
            "floorId": ":next",
            "stair": "downFloor"
        }
    },
    "beforeBattle": {},
    "afterBattle": {},
    "afterGetItem": {},
    "afterOpenDoor": {},
    "autoEvent": {
        "5,7": {
            "0": null,
            "1": null
        }
    },
    "cannotMove": {},
    "cannotMoveIn": {},
    "map": [
    [144,144,144,144,144,144,144,144,144,144,144,144,144],
    [144, 21,  0, 21,  2,  0, 88,  0,  0,  0,  0,235,144],
    [144,  0,  2,  0,  0,  0,  0,  0,  2, 82,  2, 22,144],
    [144,236,  2,  2,  2,  2,  2,  2,  2,  0,  2,207,144],
    [144, 28,  0, 27,  2,  0,  0,212,  0,  0,  2,  0,144],
    [144,  0, 28,  0, 82,  0,  0,  2,  2,  2,  2,  0,144],
    [144, 27,  0, 28,  2,  0,  0,212,  0,  0,  0,235,144],
    [144,  2,  2,  2,  2,351,  2,  2,  2, 83,  2,  2,144],
    [144, 28,  2,  0,  0,  0,  0,  0,207,  0,  0,  0,144],
    [144, 27,  2, 21,  2,  2,  2,220,  2,  2,  2, 81,144],
    [144,  0,  2,  0,220,  0,  0,  0,  2, 28,  2,  0,144],
    [144,  0,227,  0,  0,220, 87,  0, 82,  0,207,  0,144],
    [144,144,144,144,144,144,144,144,144,144,144,144,144]
],
    "bgmap": [

],
    "fgmap": [

],
    "bgm": "bgm.mp3"
}