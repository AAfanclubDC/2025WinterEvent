main.floors.MT6=
{
    "floorId": "MT6",
    "title": "主塔 6 层",
    "name": "6",
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
        "9,7": [
            "\t[怪物,zombie]咕...啊....",
            {
                "type": "move",
                "loc": [
                    9,
                    6
                ],
                "time": 250,
                "keep": true,
                "async": true,
                "steps": [
                    "left:1"
                ]
            },
            {
                "type": "waitAsync"
            },
            "\t[弱智,default]咦?退開了?",
            {
                "type": "hide",
                "remove": true
            }
        ]
    },
    "changeFloor": {
        "11,1": {
            "floorId": ":before",
            "stair": "upFloor"
        },
        "1,1": {
            "floorId": ":next",
            "stair": "downFloor"
        }
    },
    "beforeBattle": {},
    "afterBattle": {
        "8,6": [
            "\t[怪物,zombie]咕...啊...",
            "\t[怪物,zombie]...得...好...",
            {
                "type": "setValue",
                "name": "flag:__kill__",
                "value": "1"
            }
        ]
    },
    "afterGetItem": {},
    "afterOpenDoor": {},
    "autoEvent": {
        "7,6": {
            "0": {
                "condition": "flag:__saveHappy__===1",
                "currentFloor": true,
                "priority": 0,
                "delayExecute": false,
                "multiExecute": false,
                "data": [
                    "\t[弱智,default]嗚哇，高興前輩你怎麼在這裡汪",
                    "\t[高興,Happy.png]快讓你神奇的智慧起作用啊！弱智，快想一想",
                    "\t[弱智,default]幹，不是，這種情況怎麼可能想得出來汪",
                    "\t[弱智,default]等下，等等等等等等等等",
                    "\t[高興,Happy.png]3…2…1…逼逼，時間到，你沒有回答出來呢",
                    "\t[弱智,default]這麼短的時間怎麼可能啦汪",
                    "\t[高興,Happy.png]先別說了，來吃碗麻辣燙我就原諒你沒猜出來的罪過",
                    "\t[弱智,default]先不提我為甚麼有罪，前輩你麻辣燙是從哪裡拿出來的汪",
                    "\t[高興,Happy.png]你吃不吃",
                    "\t[弱智,default]我吃，我吃汪",
                    {
                        "type": "vibrate",
                        "direction": "horizontal",
                        "time": 2000,
                        "speed": 10,
                        "power": 10
                    },
                    {
                        "type": "vibrate",
                        "direction": "vertical",
                        "time": 2000,
                        "speed": 10,
                        "power": 10
                    },
                    "\t[弱智,default]不要啊，我現在要死了啊!",
                    "\t[弱智,default]痛死熱死辣死！",
                    "\t[弱智,default]我的食道要燒穿了，救我啊汪",
                    "\t[高興,Happy.png]貧弱貧弱，幾個月不見你怎麼弱化成這樣了",
                    "\t[弱智,default]我本來就吃不了好啦，啊啊啊，好辣啊汪",
                    {
                        "type": "jumpHero",
                        "dxy": [
                            0,
                            1
                        ],
                        "time": 100
                    },
                    {
                        "type": "jumpHero",
                        "dxy": [
                            0,
                            -2
                        ],
                        "time": 100
                    },
                    {
                        "type": "jumpHero",
                        "dxy": [
                            0,
                            1
                        ],
                        "time": 100
                    },
                    {
                        "type": "waitAsync"
                    },
                    "\t[弱智,default]所以前輩，可以告訴我你到底發生了什麼嗎?",
                    "\t[高興,Happy.png]就讓我來解答你吧",
                    "\t[高興,Happy.png]幾個月之前我接到了國王的命令，要來這座塔拯救公主",
                    "\t[高興,Happy.png]我準備了一車的麻辣燙準備來感化這裡面的怪物，沒想到一進到塔裡我就被變成了鳥",
                    "\t[高興,Happy.png]隨後我就被公主帶去了塔頂，被餵了甜的麻辣燙之後我就失去意識了",
                    "\t[高興,Happy.png]再然後就是變成怪物了，剛剛看到你還打算跟你打招呼，哪知道你突然就跑掉了",
                    "\t[弱智,default]等下等下，太多了，什麼叫你準備了麻辣燙?",
                    "\t[弱智,default]什麼變成小動物後被公主帶走，他不是一直在塔頂嗎?",
                    "\t[弱智,default]變成怪物又是什麼鬼?",
                    {
                        "type": "animate",
                        "name": "SLyiwen",
                        "loc": [
                            8,
                            6
                        ]
                    },
                    "\t[高興,Happy.png]就是字面意思啊，大概是公主用魔法把我變成了小動物後找我玩，一不小心觸發了我的心靈創傷，發現我不能夠陪他玩了之後就被變成怪物了",
                    "\t[弱智,default]那麻辣燙呢?什麼用麻......算了，對前輩你來說好像很正常汪",
                    "\t[弱智,default]所以這個聖水的功能到底是甚麼汪",
                    "\t[高興,Happy.png]反轉魔法啊，變成小動物是公主的魔法，變成怪物則是這座塔的魔法",
                    "\t[高興,Happy.png]你對我使用了那個東西後，我就回復了",
                    "\t[高興,Happy.png]總之就是這樣了，你快往前吧，我要去找我遺失的麻辣燙了",
                    {
                        "type": "hide",
                        "loc": [
                            [
                                8,
                                6
                            ]
                        ],
                        "remove": true
                    },
                    "\t[弱智,default]前...走掉了，所以我會變成狗也是因為公主?可是公主為甚麼要這麼做......",
                    "這個你拿著，順帶一提好像有什麼東西在控制公主",
                    {
                        "type": "setValue",
                        "name": "item:I337",
                        "value": "1"
                    },
                    "\t[弱智,default]嗯?啊?不是，這個什麼時候出現在我手上的汪",
                    "\t[弱智,default]算了找找看哪裡能用吧汪"
                ]
            },
            "1": null
        }
    },
    "cannotMove": {},
    "cannotMoveIn": {},
    "map": [
    [144,144,144,144,144,144,144,144,144,144,144,144,144],
    [144, 87,  2, 28, 81,  0,  2,  0, 83,  0,  2, 88,144],
    [144,  0,  2,  0,  2,  0,  2,  0,  2,  0,  2,  0,144],
    [144,  0,  2,210,  2,213,  2,  0,  2,  0,  2,  0,144],
    [144,253,  2,  0,  2,  0,  2,  0,  2,226,  2,213,144],
    [144,  0,  2,210,  2,213,  2,  0,  2,  0,  2,  0,144],
    [144,  0,215,  0, 82,  0,253,  0,  0,226,  2,213,144],
    [144,  0,  2,226,  2,  0,  2,210,  2,  0,  2,  0,144],
    [144, 28,  2,  0,  2, 31,  2,  0,  2,  0,  2, 32,144],
    [144, 21,  2,226,  2, 27,  2,210,  2,  0,  2,  0,144],
    [144,  0,  2,  0,  2,  0,  2,  0,  2,  0,  2,  0,144],
    [144,  0, 27,  0,  2,  0, 21,  0,  2, 21, 28, 27,144],
    [144,144,144,144,144,144,144,144,144,144,144,144,144]
],
    "bgmap": [

],
    "fgmap": [

],
    "bgm": "bgm.mp3"
}