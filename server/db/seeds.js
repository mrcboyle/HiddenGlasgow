use locations_hub;
db.dropDatabase();

db.locations.insertMany([
    {
        name: "The Rotunda Buildings",
        gps: {
            lat: 55.85859,
            long: -4.28322
        },
        title: {
            markerTitle: "This is the marker title",
            locationDetail: "What Lies Beneath"
        },
        info: "The Cranside Kitchen has been one of the go-to places for food, drinks and entertainment for a number of years. But do you know the origins of the unusual Rotunda building? Built in the 1890s, the north Rotunda building (and its twin on the south bank of the river) were the entrances to the first Clyde Tunnel, preceding the current road tunnel by some 70 years. Pedestrians, horses and carts (and later motor vehicles) would be lowered by hydraulic lifts to the depth of the tunnel allowing journey underneath the river. The tunnels were still in use for pedestrians until the 1980s where they were then closed to the public. Now housing utilities, pipes and cables the tunnels still have a use over 130 years later.",
        photo: {
            past: "https://i2-prod.glasgowlive.co.uk/incoming/article16699122.ece/ALTERNATES/s615b/0_rotund.jpg",
            present: "https://www.heraldscotland.com/resources/images/13934553.png?type=article-full"
        }
    },
    {
        name: "Grahamston",
        gps: {
            lat: 55.85950,
            long: -4.25708
        },
        title: {
            markerTitle: "This is the marker title",
            locationDetail: "Glasgows Forgotten Village"
        },
        info: "Glasgow Central Train Station is the busiest in Scotland and the second busiest outside London. The beautiful Victorian structure is Grade A listed. However, a long-forgotten village was demolished to make way for the huge building. The whole community of Grahamston was relocated from the station site and the homes, shops and theatres torn down. However, some fragments of the old village remain with Union Streets' Rennie Mackintish Hotel being one of the few survivers. Portions of the foundations of the village can also be seen during the highly-recommended Glasgow Central tour.",
        photo: {
            past: "https://www.grahamston.com/wp-content/uploads/demolition.jpg",
            present: "https://lh3.googleusercontent.com/u21wTkXarbDrFgn4ei29OeQ_bbk8pHmgOQAngGJ0AbZ4gJiRNhRhe4c2xxu6a1L-FIKfQ3D3Tp8jWFpI=s800-rj-v2"
        }
    },
    {
        name: "Botanic Gardens Railway Station",
        gps: {
            lat: 55.878536,
            long: -4.290772
        },
        title: {
            markerTitle: "This is the marker title",
            locationDetail: "Get Steaming!"
        },
        info: "Since 1842, Glasgow botanic gardens has showcased flora from around the globe. Did you know that it used to be serviced by its own train station? Opened in 1896 with station buildings at ground level, steam trains passed under the gardens' entrance making their way from the long-gone Kirklee Station to Kelvin Bridge Station in tunnel running under Great Western Road. The station closed in 1964 and the beautiful ticket office was desteroyed by fire in 1970. However, if you visit the Botanic gardens and find the station ventilations shafts near the entrance, the old station platforms are there to see, painting a picture of the bygone steam era.",
        photo: {
            past: "https://i2-prod.glasgowlive.co.uk/incoming/article16274075.ece/ALTERNATES/s615b/0_botanic-gardens.jpg",
            present: "https://live.staticflickr.com/5095/5529282682_97e9ab3167_b.jpg"
        }
    },
    {
        name: "Hamilton Crescent Cricket Ground",
        gps: {
            lat: 55.87259,
            long: -4.30898
        },
        title: {
            markerTitle: "This is the marker title",
            locationDetail: "Where It All Began"
        },
        info: "With football fever set to grip the world again later this year, and Scotland once again set to miss out, as a nation we have to turn to past glories. What does a unassuming cricket ground in the bustling west-end of Glasgow have to do with this you ask? On the 30th of November 1872, the very first international football match was played at Hamilton Crescent in Partick, with Scotland facing off against the yet-to-be-labelled Auld Enemy, England. The match was played in front of 4000 spectators and finsihed 0-0. The rest is history.",
        photo: {
            past: "https://i.dailymail.co.uk/1s/2021/06/18/11/44382817-0-image-a-24_1624013549174.jpg",
            present: "https://img.atlasobscura.com/HzUWxZfdqpLViLbFY8MTQkJtKaa0BOECIDe23Exa1aI/rt:fit/w:600/q:81/sm:1/scp:1/ar:1/aHR0cHM6Ly9hdGxh/cy1kZXYuczMuYW1h/em9uYXdzLmNvbS91/cGxvYWRzL3BsYWNl/X2ltYWdlcy81YWE2/ZDlhOC00NTk0LTRj/YTEtODIwZC0yNWYz/MTQ5Y2UyYmZjZWUx/OTcwODA4MTEzNDUx/YzJfSU1HXzYyMjQu/anBlZw.jpg"
        }
    },
    {
        name: "Gallery of Modern Art",
        gps: {
            lat: 55.86020,
            long: -4.25257
        },
        title: {
            markerTitle: "This is the marker title",
            locationDetail: "Modern Use, Murky Past"
        },
        info: "The Gallery of Modern Art is a popular attraction housing exhibitions from local and international artists. Despite the buildings civic uses over the years, it isn't widely know that the neoclassical was originally built as a house for one of the merhcants of the now-named Merchant City. At a time when status meant eveything to the wealthy merchants, a tobacco merchant called William Cunninghamme of Lainshaw commissed the building as his residence. As with many of the city's merchants, Cunninghamme's fortune was made through the slave trade. Something to ponder the next time you are admiring art in the grand old building.",
        photo: {
            past: "https://testslaverysite.files.wordpress.com/2018/08/royal-exchange.jpg?w=870&h=643&crop=1",
            present: "https://live.staticflickr.com/1953/44789624344_4689d0f8e3_b.jpg"
        }
    },
    {
        name: "Glasgow Tolbooth",
        gps: {
            lat: 55.85686,
            long: -4.24360
        },
        title: {
            markerTitle: "This is the marker title",
            locationDetail: "Standing Alone"
        },
        info: "The Glasgow Tolbooth is one of the citys' most recognisable landmarks. However, when first built, it wasn't quite so distinctive. Constructed in 1634, the seven stage steeple was originally joined to a five story block. In the early twentieth century, the main buildings' condition had deteriorated to such an extent that it was demolished in 1921, leaving the iconic tower as we know it now.",
        photo: {
            past: "https://4.bp.blogspot.com/--mzUHy_WxzY/WWTyk9GA7AI/AAAAAAADTd0/rclUcWxh4tUGZQPa6uFFW2VsTAVmKkBbgCLcBGAs/s1600/Old%2BPhotograph%2BTolbooth%2BGlasgow%2BScotland.jpg",
            present: "https://i.imgur.com/wd70TOr.jpg"
        }
    },
    {
        name: "The Grand Hotel",
        gps: {
            lat: 55.866333,
            long: -4.271908
        },
        title: {
            markerTitle: "This is the marker title",
            locationDetail: "Not Hidden - Lost Forever"
        },
        info: "The M8 motorway cuts through Glasgow creating a border between the city centre and the west end. Many communities were displaced and buildings destroyed as part of its construction in the 60’s & 70’s. Not so much a hidden gem, but more a landmark lost to time, the Grand Hotel stood at centre of Charing Cross and arguably epitomises the changes in that era.",
        photo: {
            past: "https://www.glasgowhistory.com/wp-content/uploads/2016/02/Grand-Hotel-1.jpg",
            present: "https://i2-prod.glasgowlive.co.uk/incoming/article21580811.ece/ALTERNATES/s1227b/0_GL716658.jpg"
        }
    },
]);

db.quiz.insertMany([
    {
        number: 1,
        question: "What does scunnered mean?",
        answers: [
            {
                option: "Stupid",
                value: "false"
            },
            {
                option: "Tired",
                value: "true"
            },
            {
                option: "Refreshed",
                value: "false"
            }
        ]
    },

    {
        number: 2,
        question: "If you winched someone, what did you do?",
        answers: [
            {
                option: "Punched them",
                value: "false"
            },
            {
                option: "Waved to them",
                value: "false"
            },
            {
                option: "Kissed them",
                value: "true"
            }
        ]
    },

    {
        number: 3,
        question: "A bottle of ginger is...",
        answers: [
            {
                option: "A medicine",
                value: "false"
            },
            {
                option: "A cooking ingredient",
                value: "false"
            },
            {
                option: "A fizzy drink",
                value: "true"
            }
        ]
    },

    {
        number: 4,
        question: "If you forgot your pieces, you'd have forgotten your...",
        answers: [
            {
                option: "Sandwiches",
                value: "true"
            },
            {
                option: "Books",
                value: "false"
            },
            {
                option: "Money",
                value: "false"
            }
        ]
    },

    {
        number: 5,
        question: "If you called someone a rocket, they are...",
        answers: [
            {
                option: "a fast runner",
                value: "false"
            },
            {
                option: "a tall person",
                value: "false"
            },
            {
                option: "an annoying person",
                value: "true"
            }
        ]
    }

]);