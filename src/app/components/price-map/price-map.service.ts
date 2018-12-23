import { Injectable } from '@angular/core';

export class FeatureCollection {
    type: string;
    features: Feature[];
}

export class Feature {
    type: string;
    geometry: FeatureGeometry;
    properties: FeatureProperty;

}

export class FeatureProperty {
    name?: string;
    url?: string;
    text?: string;
    color?: string;
}

export class FeatureGeometry {
    type: string;
    coordinates: number[][][];
}

let prices: any = {
    type: "FeatureCollection",
    features: [
        {
            type: "Feature",
            geometry: {
                type: "Point",
                coordinates: [347, 379]
            },
            properties: {
                url: '',
                id: 783,
                text: '35Triee',
            }
        },
        {
            type: "Feature",
            geometry: {
                type: "Point",
                coordinates: [847, 971]
            },
            properties: {
                url: '',
                id: 760,
                text: '35Triee',
            }
        }
    ]
};

let pangaeaContinents: FeatureCollection = {
    type: "FeatureCollection",
    "features": [
        {
            type: "Feature",
            properties: {
                name: "Củ Chi",
                color: "#70b3a1"
            },
            geometry: {
                type: "Polygon",
                coordinates: [
                    [
                        [245, 0],
                        [137, 369],
                        [5, 421],
                        [41, 481],
                        [137, 481],
                        [353, 605],
                        [765, 589],
                        [245, 0]
                    ]
                ]
            }
        },
        {
            type: "Feature",
            properties: {
                name: "Hóc Môn",
                color: "#ab394b"
            },
            geometry: {
                type: "Polygon",
                coordinates: [
                    [
                        [353, 605],
                        [765, 589],
                        [819, 593],
                        [841, 643],
                        [685, 671],
                        [617, 833],
                        [543, 793],
                        [431, 781], [423, 717], [353, 605]
                    ]
                ]
            }
        },
        {
            type: "Feature",
            properties: {
                name: "Q.12",
                color: "#bb626a"
            },
            geometry: {
                type: "Polygon",
                coordinates: [
                    [
                        [841, 643],
                        [685, 671],
                        [617, 833],
                        [663, 851],
                        [687, 827],
                        [747, 759],
                        [853, 821],
                        [887, 735], [841, 643]
                    ]
                ]
            }
        },
        {
            type: "Feature",
            properties: {
                name: "Thủ Đức",
                color: "#153459"
            },
            geometry: {
                type: "Polygon",
                coordinates: [
                    [
                        [887, 735],
                        [853, 821],
                        [999, 859],
                        [1119, 719],
                        [1031, 671],
                        [887, 671],
                        [887, 731]
                    ]
                ]
            }
        },
        {
            type: "Feature",
            properties: {
                name: "Q.9",
                color: "#b1d2c6"
            },
            geometry: {
                type: "Polygon",
                coordinates: [
                    [
                        [1119, 671],
                        [999, 859],
                        [1131, 967],
                        [1323, 889],
                        [1209, 655],
                        [1119, 671]
                    ]
                ]
            }
        },
        {
            type: "Feature",
            properties: {
                name: "Q.2",
                color: "#dac599"
            },
            geometry: {
                type: "Polygon",
                coordinates: [
                    [
                        [1005, 857],
                        [885, 955],
                        [909, 1001],
                        [983, 977],
                        [1027, 1055],
                        [1137, 967], [1005, 857]
                    ]
                ]
            }
        },
        {
            type: "Feature",
            properties: {
                name: "Bình Thạnh",
                color: "#2E7D32"
            },
            geometry: {
                type: "Polygon",
                coordinates: [
                    [
                        [999, 861],
                        [861, 819],
                        [827, 873],
                        [885, 955],
                        [999, 861]
                    ]
                ]
            }
        },
        {
            type: "Feature",
            properties: {
                name: "Gò Vấp",
                color: "#D84315"
            },
            geometry: {
                type: "Polygon",
                coordinates: [
                    [
                        [691, 821],
                        [743, 747],
                        [857, 821],
                        [831, 873],
                        [797, 857],
                        [791, 835],
                        [691, 821]
                    ]
                ]
            }
        },
        {
            type: "Feature",
            properties: {
                name: "Tân Bình",
                color: "#006064"
            },
            geometry: {
                type: "Polygon",
                coordinates: [
                    [
                        [691, 821],
                        [665, 851],
                        [737, 961],
                        [803, 867],
                        [791, 835],
                        [691, 821]
                    ]
                ]
            }
        },
        {
            type: "Feature",
            properties: {
                name: "PN",
                color: "#3E2723"
            },
            geometry: {
                type: "Polygon",
                coordinates: [
                    [
                        [820, 865],
                        [803, 860],
                        [799, 865],
                        [765, 915],
                        [860, 909],
                        [820, 865],
                    ]
                ]
            }
        },
        {
            type: "Feature",
            properties: {
                name: "Q.3",
                color: "#F9A825"
            },
            geometry: {
                type: "Polygon",
                coordinates: [
                    [
                        [765, 915],
                        [762, 920],
                        [805, 989],
                        [855, 951],
                        [860, 909],
                        [765, 915],
                    ]
                ]
            }
        },
        {
            type: "Feature",
            properties: {
                name: "Q.1",
                color: "#00838F"
            },
            geometry: {
                type: "Polygon",
                coordinates: [
                    [
                        [829, 1017],
                        [805, 989],
                        [855, 951],
                        [860, 909],
                        [885, 955],
                        [891, 964],
                        [829, 1017],
                    ]
                ]
            }
        },
        {
            type: "Feature",
            properties: {
                name: "Q.4",
                color: "#F9A825"
            },
            geometry: {
                type: "Polygon",
                coordinates: [
                    [
                        [829, 1017],
                        [891, 964],
                        [909, 1001],
                        [829, 1017],
                    ]
                ]
            }
        },
        {
            type: "Feature",
            properties: {
                name: "Q.7",
                color: "#70b3a1"
            },
            geometry: {
                type: "Polygon",
                coordinates: [
                    [
                        [909, 1001],
                        [829, 1017],
                        [843, 1083],
                        [919, 1115],
                        [929, 1163],
                        [995, 1143],
                        [1027, 1055],
                        [983, 977],
                        [909, 1001],
                    ]
                ]
            }
        },
        {
            type: "Feature",
            properties: {
                name: "Nhà Bè",
                color: "#C0CA33"
            },
            geometry: {
                type: "Polygon",
                coordinates: [
                    [
                        [1047, 1213],
                        [1063, 1451],
                        [953, 1463],
                        [823, 1269],
                        [843, 1083],
                        [919, 1115],
                        [929, 1163],
                        [995, 1143],
                        [1047, 1213],
                    ]
                ]
            }
        },
        {
            type: "Feature",
            properties: {
                name: "Cần Giờ",
                color: "#009688"
            },
            geometry: {
                type: "Polygon",
                coordinates: [
                    [
                        [1047, 1213],
                        [1063, 1451],
                        [953, 1463],
                        [941, 1647],
                        [1173, 1991],
                        [1545, 1883],
                        [1669, 1431],
                        [1047, 1213],
                    ]
                ]
            }
        },
        {
            type: "Feature",
            properties: {
                name: "Q.10",
                color: "#9E9E9E"
            },
            geometry: {
                type: "Polygon",
                coordinates: [
                    [
                        [762, 920],
                        [735, 966],
                        [757, 1000],
                        [809, 986],
                        [762, 920],
                    ]
                ]
            }
        },
        {
            type: "Feature",
            properties: {
                name: "Q.5",
                color: "#C0CA33"
            },
            geometry: {
                type: "Polygon",
                coordinates: [
                    [
                        [809, 986],
                        [757, 1000],
                        [731, 1016],
                        [751, 1036],
                        [829, 1020],
                        [809, 986]
                    ]
                ]
            }
        },
        {
            type: "Feature",
            properties: {
                name: "Q.11",
                color: "#3949AB"
            },
            geometry: {
                type: "Polygon",
                coordinates: [
                    [
                        [731, 962],
                        [683, 998],
                        [735, 1016],
                        [763, 1000],
                        [731, 962]
                    ]
                ]
            }
        },
        {
            type: "Feature",
            properties: {
                name: "Q.6",
                color: "#A1887F"
            },
            geometry: {
                type: "Polygon",
                coordinates: [
                    [
                        [667, 994],
                        [665, 1074],
                        [749, 1036],
                        [731, 1016],
                        [667, 994]
                    ]
                ]
            }
        },
        {
            type: "Feature",
            properties: {
                name: "Tân Phú",
                color: "#26A69A"
            },
            geometry: {
                type: "Polygon",
                coordinates: [
                    [
                        [625, 836],
                        [667, 994],
                        [685, 1002],
                        [737, 961],
                        [669, 854],
                        [625, 836]
                    ]
                ]
            }
        },
        {
            type: "Feature",
            properties: {
                name: "Bình Tân",
                color: "#FFD600"
            },
            geometry: {
                type: "Polygon",
                coordinates: [
                    [
                        [625, 836],
                        [667, 994],
                        [663, 1076],
                        [609, 1112],
                        [505, 1042],
                        [591, 832],
                        [625, 836]
                    ]
                ]
            }
        },
        {
            type: "Feature",
            properties: {
                name: "Q.8",
                color: "#ab394b"
            },
            geometry: {
                type: "Polygon",
                coordinates: [
                    [
                        [609, 1112],
                        [619, 1164],
                        [679, 1164],
                        [731, 1084],
                        [841, 1058],
                        [831, 1016],
                        [749, 1036],
                        [663, 1076],
                        [609, 1112]
                    ]
                ]
            }
        },
        {
            type: "Feature",
            properties: {
                name: "Bình Chánh",
                color: "#dac599"
            },
            geometry: {
                type: "Polygon",
                coordinates: [
                    [
                        [609, 1112],
                        [619, 1164],
                        [679, 1164],
                        [731, 1084],
                        [841, 1058],
                        [843, 1080],
                        [825, 1268],
                        [693, 1336],
                        [493, 1272],
                        [269, 1010],
                        [369, 926],
                        [435, 786],
                        [543, 793],
                        [617, 833],
                        [593, 836],
                        [507, 1046],
                        [609, 1112]
                    ]
                ]
            }
        }
    ]
};

@Injectable()
export class Service {
    getPangaeaContinents(): FeatureCollection {
        return pangaeaContinents;
    }
    getPrices(): any {
        return prices;
    }
}
