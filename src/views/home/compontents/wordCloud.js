export function cloud(keywords) {
    return {
        series: [
            {
                type: "wordCloud",
                sizeRange: [10, 50],
                rotationRange: [-90, 90],
                rotationStep: 45,
                gridSize: 13,
                shape: "pentagon",
                width: "100%",
                height: "100%",
                drawOutOfBound: true,
                textStyle: {
                    color: function () {
                        return (
                            "rgb(" +
                            [
                                Math.round(Math.random() * 160),
                                Math.round(Math.random() * 160),
                                Math.round(Math.random() * 160),
                            ].join(",") +
                            ")"
                        );
                    },
                },
                emphasis: {
                    textStyle: {
                        shadowBlur: 10,
                        shadowColor: "#333",
                        color: "red",
                    },
                },
                data: keywords,
            }],
    };
}