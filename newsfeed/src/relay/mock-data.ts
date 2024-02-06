export const initialResponse = {
    "hasNext": true, "data": {
        "topStories": [{
            "id": "2",
            "title": "Local Yak Named Yak of the Year",
            "summary": "The annual Yak of the Year awards ceremony took place last night, and this year's winner is none other than Max, a beloved yak from the small town of Millville. Max, who is known for his friendly personality and hardworking nature, beat out stiff competition from other yaks in the region to take home the coveted title.\n \nAccording to the judges, Max stood out due to his exceptional contributions to the community. He has been used as a pack animal to help transport goods to and from the town's market, and has also been a reliable source of milk and wool for local farmers. In addition, Max has become something of a local celebrity, often posing for photos with tourists and participating in community events.",
            "createdAt": "2020-01-01T00:00:00.000Z",
            "poster": {
                "__typename": "Organization",
                "__isActor": "Organization",
                "id": "7",
                "name": "Baller Bovine Board",
                "profilePicture": {
                    "url": "/assets/bovine.png?width=60&height=60",
                    "altText": "Blue-ribboned insignia of the Baller Bovine Board"
                }
            },
            "thumbnail": {"url": "/assets/yak.png?width=400", "altText": "Portrait of Max the Yak by a local artist"},
            "comments": {
                "pageInfo": {"startCursor": null, "hasNextPage": true, "endCursor": "3"},
                "edges": [{
                    "node": {"id": "comment1", "text": "So proud of our local yak", "__typename": "Comment"},
                    "cursor": null
                }, {
                    "node": {
                        "id": "comment2",
                        "text": "I've been waiting my whole life for this moment",
                        "__typename": "Comment"
                    }, "cursor": null
                }, {"node": {"id": "comment3", "text": "What's a yak???", "__typename": "Comment"}, "cursor": null}]
            }
        }, {
            "id": "3",
            "title": "Why did the chicken cross the road? To get to the other side!",
            "summary": "Chickens are curious animals and will often explore their surroundings, including crossing roads if the opportunity arises. It is important to note that chickens are intelligent and adaptable animals, and the specific reasons for any given chicken crossing the road may vary depending on the individual and its circumstances.",
            "createdAt": "2020-01-01T00:00:00.000Z",
            "poster": {
                "__typename": "Person",
                "__isActor": "Person",
                "id": "1",
                "name": "Chris P. Bacon",
                "profilePicture": {"url": "/assets/pig.png?width=60&height=60", "altText": null}
            },
            "thumbnail": {"url": "/assets/chicken.png?width=400", "altText": null},
            "comments": {
                "pageInfo": {"startCursor": null, "hasNextPage": false, "endCursor": "3"},
                "edges": [{
                    "node": {"id": "comment9", "text": "I never knew!", "__typename": "Comment"},
                    "cursor": null
                }, {
                    "node": {"id": "comment10", "text": "This is a very deep joke.", "__typename": "Comment"},
                    "cursor": null
                }]
            }
        }, {
            "id": "4",
            "title": "New Hedgehog Species Discovered",
            "summary": "Breaking news! Scientists have just announced the discovery of a new species of hedgehog, and you won't believe what makes this species unique.\n \n     According to the researchers, the new hedgehogs, which have been named 'sparklehogs,' are distinguished by their ability to produce rainbow-colored sparks from their spikes when they are feeling threatened.\n     \n     But that's not all! The sparklehogs have also been observed using their sparkling spikes to communicate with one another, creating dazzling light shows in the process.\n     \n     'We've never seen anything like it,' said lead researcher Dr. Maria Hernandez. 'These hedgehogs are truly one of a kind.'",
            "createdAt": "2020-01-01T00:00:00.000Z",
            "poster": {
                "__typename": "Organization",
                "__isActor": "Organization",
                "id": "6",
                "name": "Gazelle Gazette",
                "profilePicture": {"url": "/assets/gazelle.png?width=60&height=60", "altText": null}
            },
            "thumbnail": {"url": "/assets/hedgehog.png?width=400", "altText": null},
            "comments": {
                "pageInfo": {"startCursor": null, "hasNextPage": false, "endCursor": "3"},
                "edges": [{
                    "node": {"id": "comment11", "text": "Aren't hedges dark though???", "__typename": "Comment"},
                    "cursor": null
                }]
            }
        }]
    }
}

export const deferredPayload = {
    "hasNext": false,
    "incremental": [{
        "path": [],
        "label": "AppQuery$defer$SidebarFragment",
        "data": {
            "viewer": {
                "actor": {
                    "__typename": "Person",
                    "name": "A. D. Veloper",
                    "profilePicture": {"url": "/assets/a.png"},
                    "id": "the-viewer"
                },
                "contacts": [{
                    "__typename": "Person",
                    "id": "1",
                    "__isActor": "Person",
                    "name": "Chris P. Bacon",
                    "profilePicture": {"url": "/assets/pig.png", "altText": null}
                }, {
                    "__typename": "Person",
                    "id": "30",
                    "__isActor": "Person",
                    "name": "Brock Boc",
                    "profilePicture": {"url": "/assets/chicken_lover.png", "altText": null}
                }, {
                    "__typename": "Person",
                    "id": "8",
                    "__isActor": "Person",
                    "name": "Suzie Queue",
                    "profilePicture": {"url": "/assets/blogger.png", "altText": null}
                }, {
                    "__typename": "Person",
                    "id": "15",
                    "__isActor": "Person",
                    "name": "Jennifer Letuchyberg",
                    "profilePicture": {"url": "/assets/j.png", "altText": null}
                }, {
                    "__typename": "Person",
                    "id": "13",
                    "__isActor": "Person",
                    "name": "Alexei Seligsteinwitz",
                    "profilePicture": {"url": "/assets/alexei.png", "altText": null}
                }, {
                    "__typename": "Person",
                    "id": "19",
                    "__isActor": "Person",
                    "name": "Catalina Chaiman",
                    "profilePicture": {"url": "/assets/c.png", "altText": null}
                }, {
                    "__typename": "Person",
                    "id": "9",
                    "__isActor": "Person",
                    "name": "Katrina Starer",
                    "profilePicture": {"url": "/assets/cat_avatar.png", "altText": null}
                }, {
                    "__typename": "Person",
                    "id": "17",
                    "__isActor": "Person",
                    "name": "Paige Talaberg",
                    "profilePicture": {"url": "/assets/p.png", "altText": null}
                }, {
                    "__typename": "Person",
                    "id": "21",
                    "__isActor": "Person",
                    "name": "Huy Li",
                    "profilePicture": {"url": "/assets/h.png", "altText": null}
                }]
            }
        }
    }]
}
