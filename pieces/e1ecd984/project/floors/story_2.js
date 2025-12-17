main.floors.story_2=
{
    "floorId": "story_2",
    "title": "街道",
    "name": "街道",
    "width": 13,
    "height": 13,
    "canFlyTo": false,
    "canFlyFrom": false,
    "canUseQuickShop": false,
    "cannotViewMap": true,
    "cannotMoveDirectly": true,
    "images": [],
    "ratio": 1,
    "defaultGround": "grass",
    "firstArrive": [
        {
            "type": "showStatusBar"
        }
    ],
    "eachArrive": [],
    "parallelDo": "",
    "events": {
        "9,6": [
            {
                "type": "if",
                "condition": "(flag:__story2Flag__ === 0)",
                "true": [
                    "\t[弱智,default]媽的，不是",
                    "\t[弱智,default]我記得我的排名不是很靠後的嗎?怎麼想都應該是戰力比較強的那些人先去才對啊\n，比如高興前輩那種的。",
                    {
                        "type": "setValue",
                        "name": "flag:__story2Flag__",
                        "value": "1"
                    }
                ]
            }
        ],
        "9,5": [
            {
                "type": "if",
                "condition": "(flag:__story2Flag__ === 0)",
                "true": [
                    "\t[弱智,default]媽的，不是",
                    "\t[弱智,default]我記得我的排名不是很靠後的嗎?怎麼想都應該是戰力比較強的那些人先去才對啊\n，比如高興前輩那種的。",
                    {
                        "type": "setValue",
                        "name": "flag:__story2Flag__",
                        "value": "1"
                    }
                ]
            }
        ],
        "9,7": [
            {
                "type": "if",
                "condition": "(flag:__story2Flag__ === 0)",
                "true": [
                    "\t[弱智,default]媽的，不是",
                    "\t[弱智,default]我記得我的排名不是很靠後的嗎?怎麼想都應該是戰力比較強的那些人先去才對啊\n，比如高興前輩那種的。",
                    {
                        "type": "setValue",
                        "name": "flag:__story2Flag__",
                        "value": "1"
                    }
                ]
            }
        ],
        "6,6": [
            {
                "type": "if",
                "condition": "(flag:__story2Flag__ === 1)",
                "true": [
                    "\t[弱智,default]這麼說來好像好幾個月沒看到他了，等等，不會吧",
                    {
                        "type": "setValue",
                        "name": "flag:__story2Flag__",
                        "value": "2"
                    }
                ]
            }
        ],
        "6,5": [
            {
                "type": "if",
                "condition": "(flag:__story2Flag__ === 1)",
                "true": [
                    "\t[弱智,default]這麼說來好像好幾個月沒看到他了，等等，不會吧",
                    {
                        "type": "setValue",
                        "name": "flag:__story2Flag__",
                        "value": "2"
                    }
                ]
            }
        ],
        "6,7": [
            {
                "type": "if",
                "condition": "(flag:__story2Flag__ === 1)",
                "true": [
                    "\t[弱智,default]這麼說來好像好幾個月沒看到他了，等等，不會吧",
                    {
                        "type": "setValue",
                        "name": "flag:__story2Flag__",
                        "value": "2"
                    }
                ]
            }
        ],
        "2,6": [
            {
                "type": "if",
                "condition": "(flag:__story2Flag__ === 2)",
                "true": [
                    "\t[弱智,default]總不會勇者國排名在我前面的勇者都沒從塔裡出來吧",
                    {
                        "type": "setValue",
                        "name": "flag:__story2Flag__",
                        "value": "3"
                    }
                ]
            }
        ],
        "2,5": [
            {
                "type": "if",
                "condition": "(flag:__story2Flag__ === 2)",
                "true": [
                    "\t[弱智,default]總不會勇者國排名在我前面的勇者都沒從塔裡出來吧",
                    {
                        "type": "setValue",
                        "name": "flag:__story2Flag__",
                        "value": "3"
                    }
                ]
            }
        ],
        "2,7": [
            {
                "type": "if",
                "condition": "(flag:__story2Flag__ === 2)",
                "true": [
                    "\t[弱智,default]總不會勇者國排名在我前面的勇者都沒從塔裡出來吧",
                    {
                        "type": "setValue",
                        "name": "flag:__story2Flag__",
                        "value": "3"
                    }
                ]
            }
        ]
    },
    "changeFloor": {
        "0,6": {
            "floorId": ":next",
            "stair": "upFloor"
        },
        "0,7": {
            "floorId": ":next",
            "stair": "upFloor"
        },
        "0,5": {
            "floorId": ":next",
            "stair": "upFloor"
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
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [305,305,305,305,305,305,305,305,305,305,305,305,305],
    [163,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [163,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [163,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [305,305,305,305,305,305,305,305,305,305,305,305,305],
    [  0,  0,  0,50112,50113,50114,50115,50116,  0,  0,  0,  0,  0],
    [70189,70190,70191,50120,50121,50122,50123,50124,  0,  0,  0,60171,60172],
    [70197,70198,70199,50128,50129,50130,50131,50132,70189,70190,70191,60179,60180],
    [70205,70206,70207,50136,50137,50138,50139,50140,70197,70198,70199,60187,60188]
],
    "bgmap": [
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,30084,30085,30086,30087],
    [  0,  0,  0,40105,40106,40107,  0,  0,  0,30092,30093,30094,30095],
    [  0,50067,  0,40113,40114,40115,  0,50067,  0,30100,30101,30102,30103],
    [  0,50075,  0,40121,40122,40123,  0,50075,  0,30108,30109,30110,30111],
    [  0,50083,  0,  0,  0,  0,  0,50083,  0,30116,30117,30118,30119],
    [30017,30017,30017,30017,30017,30017,30017,30017,30017,30017,30017,30017,30017],
    [30025,30025,30025,30025,30025,30025,30025,30025,30025,30025,30025,30025,30025],
    [30033,30033,30033,30033,30033,30033,30033,30033,30033,30033,30033,30033,30033],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0]
],
    "fgmap": [

],
    "upFloor": [
        12,
        6
    ],
    "bgm": "Town_real2_mvt.m4a"
}