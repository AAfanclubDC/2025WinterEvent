main.floors.MT2=
{
    "floorId": "MT2",
    "title": "主塔 2 层",
    "name": "2",
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
        "10,3": [
            "\t[???,Getter.png]這裡怎麼有狗?",
            {
                "type": "jumpHero",
                "time": 200
            },
            {
                "type": "jumpHero",
                "time": 200,
                "async": true
            },
            "\t[弱智,default]什麼狗!我是人!!!",
            {
                "type": "waitAsync"
            },
            "\t[???,Getter.png]是來塔裡的勇者嗎?不過你看起來好弱",
            "\t[???,Getter.png]剛好我這邊有適合你的武器跟防具，裝備上保證切怪很順手",
            "\t[弱智,default]什麼?這塔裡竟然還有這種能夠補給的地方，太好了",
            "\t[弱智,default]幸好我帶了很多錢，沒想到還真的有用汪",
            "\t[???,Getter.png]這把神劍只需要${core.status.hero.money}金就可以了",
            "\t[弱智,default]太好了，剛剛好夠耶",
            "\t[弱智,default]買，現在就買汪",
            {
                "type": "animate",
                "name": "EMyinyue",
                "loc": [
                    10,
                    4
                ]
            },
            {
                "type": "setValue",
                "name": "status:money",
                "value": "0"
            },
            {
                "type": "hide",
                "loc": [
                    [
                        11,
                        1
                    ]
                ],
                "remove": true
            },
            {
                "type": "function",
                "function": "function(){\ncore.addItem('sword1',1);\n}"
            },
            {
                "type": "loadEquip",
                "id": "sword1"
            },
            "\t[弱智,default]兔子姊姊",
            {
                "type": "playBgm",
                "name": "SoftTime.mp3",
                "keep": true
            },
            "\t[弱智,default]你的聲音好色喔，不過聽起來好像開了變聲器喔汪",
            {
                "type": "animate",
                "name": "SLyiwen",
                "loc": [
                    10,
                    3
                ],
                "async": true
            },
            "\t[???,Getter.png]??????",
            {
                "type": "waitAsync"
            },
            {
                "type": "animate",
                "name": "SLshengqi",
                "loc": [
                    10,
                    3
                ],
                "async": true
            },
            "\t[???,Getter.png]蛤?不是，你怎麼這麼下頭，而且為什麼一說完這句就攻擊我的聲音啊",
            "\t[???,Getter.png]你要不要為我受的困擾道歉",
            "\t[弱智,default]對不起，我造成你很多不必要的困擾汪",
            "\t[???,Getter.png]下次遇到，你要跪著爬過來",
            {
                "type": "waitAsync"
            },
            {
                "type": "animate",
                "name": "EMyiwen",
                "loc": [
                    10,
                    3
                ],
                "async": true
            },
            "\t[???,Getter.png]等下，你在幹嘛，不准興奮！",
            "\t[弱智,default]我沒，我沒有汪！",
            "\t[???,Getter.png]不接受謊言！",
            "\t[弱智,default]沒有汪！",
            "\t[???,Getter.png]沒有以後就都沒有了",
            "\t[弱智,default]有......有一點點汪",
            {
                "type": "waitAsync"
            },
            "\t[???,Getter.png]好噁心",
            "\t[???,Getter.png](這就調教完了嗎?太快了吧)",
            "\t[弱智,default]媽的，不是，我沒有，我真的沒有",
            {
                "type": "hide",
                "remove": true,
                "time": 500
            },
            "\t[弱智,default]你聽我解釋啊汪",
            "\t[弱智,default]這首富的事情能算......",
            {
                "type": "waitAsync"
            },
            "\t[弱智,default]不對，人去哪裡了汪",
            "\t[弱智,default]我的名聲要毀掉了啊汪",
            "\t[弱智,default]得趕快上去找他汪",
            {
                "type": "setValue",
                "name": "flag:__MeetGetter1__",
                "value": "1"
            },
            {
                "type": "playBgm",
                "name": "bgm.mp3",
                "keep": true
            }
        ]
    },
    "changeFloor": {
        "11,11": {
            "floorId": ":before",
            "stair": "upFloor"
        },
        "1,11": {
            "floorId": ":next",
            "stair": "downFloor"
        }
    },
    "beforeBattle": {},
    "afterBattle": {},
    "afterGetItem": {},
    "afterOpenDoor": {},
    "autoEvent": {
        "11,5": {
            "0": null,
            "1": {
                "condition": "(function() { return core.getHeroLoc('y') === 5})()",
                "currentFloor": true,
                "priority": 0,
                "delayExecute": false,
                "multiExecute": false,
                "data": [
                    "\t[弱智,default]咦?那邊怎麼有一隻兔子"
                ]
            }
        },
        "1,6": {
            "0": null,
            "1": {
                "condition": "core.getHeroLoc('x') ===1  && flags.__MeetGetter1__ !=1;",
                "currentFloor": true,
                "priority": 0,
                "delayExecute": false,
                "multiExecute": true,
                "data": [
                    {
                        "type": "if",
                        "condition": "(flag:__MeetGetter1__ != 1)",
                        "true": [
                            "\t[弱智,default]剛剛的兔子讓人好在意啊",
                            {
                                "type": "moveHero",
                                "steps": [
                                    "right:1"
                                ]
                            }
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
    [144, 21,203,  0,  2,202,  0, 21,  2, 27,  0, 35,144],
    [144,202,  0,202,  2,  0,  0,202,  2,  0, 21,  0,144],
    [144, 28,203, 21,  2, 22,205,  0,  2, 21,351, 28,144],
    [144,  2, 82,  2,  2,  2, 81,  2,  2,  2,  0,  2,144],
    [144,201,  0,205, 27,202,  0,202,  0,  0,202,  0,144],
    [144,  0,  2,  2,  2,  2,  2,  2,  2,  2,  2,  0,144],
    [144,201,203,  0,  0,205, 32,205, 32,  0,206,  0,144],
    [144,  0,  2,  2, 82,  2,  2,  2, 81,  2,  2,  0,144],
    [144,202,  2,  0,215,  0,  2,202,205, 32,  2,  0,144],
    [144,  0,  2,  0, 27,  0,  2,  0, 32,202,  2,  0,144],
    [144, 87,  2, 28,  0, 28,  2, 32,202,  0,  2, 88,144],
    [144,144,144,144,144,144,144,144,144,144,144,144,144]
],
    "bgmap": [

],
    "fgmap": [

],
    "bgm": "bgm.mp3"
}