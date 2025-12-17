main.floors.Final2=
{
    "floorId": "Final2",
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
        {
            "type": "loadBgm",
            "name": "EndingRabbit.m4a"
        },
        "\t[弱智,default]汪?",
        "\t[蓋特,Getter.png]狗狗，快過來幫我!",
        "\t[弱智,default]汪!",
        {
            "type": "while",
            "condition": "(core.getHeroLoc('y')>6)",
            "data": [
                {
                    "type": "moveHero",
                    "steps": [
                        "up:1"
                    ]
                }
            ]
        },
        {
            "type": "while",
            "condition": "(core.getHeroLoc('x')>6)",
            "data": [
                {
                    "type": "moveHero",
                    "steps": [
                        "left:1"
                    ]
                }
            ]
        },
        {
            "type": "while",
            "condition": "(core.getHeroLoc('x')<6)",
            "data": [
                {
                    "type": "moveHero",
                    "steps": [
                        "right:1"
                    ]
                }
            ]
        },
        {
            "type": "jumpHero",
            "time": 200
        },
        {
            "type": "jumpHero",
            "time": 200
        },
        "\t[弱智,default]汪!等等",
        "\t[弱智,default]主人你怎麼在跟公主對峙阿",
        "\t[蓋特,Getter.png]你都到這裡了還不清楚嗎?",
        "\t[蓋特,Getter.png]他就是害我們變成現在這個樣子的罪魁禍首",
        "\t[梅貝爾,mable.png]我只是想把你們都留下來陪我玩而已",
        "\t[梅貝爾,mable.png]為甚麼要跑掉呢?",
        "\t[蓋特,Getter.png]嘖，看來還是得用這個",
        {
            "type": "animate",
            "name": "xixi0",
            "loc": [
                6,
                6
            ]
        },
        {
            "type": "drawImage",
            "image": "GetterBig.png",
            "x": 160,
            "y": 160,
            "w": 320,
            "h": 320
        },
        {
            "type": "playBgm",
            "name": "UnwelcomeSchool.m4a",
            "keep": true
        },
        "\t[弱智,default]?",
        "\t[弱智,default]啊?",
        "\t[蓋特,Getter.png]去吧，完美的究極機器人!",
        "\t[梅貝爾,mable.png]誒?不要，不要過來!",
        {
            "type": "animate",
            "name": "explode2",
            "loc": [
                6,
                6
            ]
        },
        {
            "type": "clearMap"
        },
        {
            "type": "stopAsync"
        },
        {
            "type": "pauseBgm"
        },
        {
            "type": "setCurtain",
            "color": [
                0,
                0,
                0,
                0.7
            ],
            "time": 2000,
            "keep": true
        },
        {
            "type": "changeFloor",
            "floorId": "End2",
            "loc": [
                12,
                7
            ],
            "direction": "left"
        },
        {
            "type": "playBgm",
            "name": "EndingRabbit.m4a",
            "keep": true
        }
    ],
    "eachArrive": [],
    "parallelDo": "",
    "events": {},
    "changeFloor": {},
    "beforeBattle": {},
    "afterBattle": {},
    "afterGetItem": {},
    "afterOpenDoor": {},
    "autoEvent": {},
    "cannotMove": {},
    "cannotMoveIn": {},
    "map": [
    [  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4],
    [  4,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  4],
    [  4,  0,  0,  0,  2,  2,  2,  2,  2,  0,  0,  0,  4],
    [  4,  0,  0,  0,  2,  0,  0,  0,  2,  0,  0,  0,  4],
    [  4,  0,  0,  0,  2,  0,355,  0,  2,  0,  0,  0,  4],
    [  4,  0,  0,  0,  2,  0,  0,  0,  2,  0,  0,  0,  4],
    [  4,  0,  0,  0,  2,  2,  0,  2,  2,  0,  0,  0,  4],
    [  4,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  4],
    [  4,  0,  0,  0,  0,  0,351,  0,  0,  0,  0,  0,  4],
    [  4,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  4],
    [  4,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  4],
    [  4,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  4],
    [  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4]
],
    "bgmap": [

],
    "fgmap": [

]
}