"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Load = void 0;
const React = require("react");
const react_umg_1 = require("../react-umg");
const ui_components_1 = require("./ui-components");
let SlotOfVerticalBox = {
    LayoutData: {
        Offsets: {
            Left: 120,
            Top: 120,
            Right: 480,
            Bottom: 80
        }
    }
};
let SlotOfCenter = {
    LayoutData: {
        Offsets: {
            Left: 0,
            Top: 0,
            Right: 0,
            Bottom: 0
        },
        Anchors: {
            Minimum: {
                X: 0.5,
                Y: 0.5
            },
            Maximum: {
                X: 0.5,
                Y: 0.5
            }
        },
        Alignment: {
            X: 0.5,
            Y: 0.5
        }
    },
    bAutoSize: true
};
class Hello extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            names: props.names,
            buttonTextureIndex: 0,
        };
        this.buttonTextures = [
            "Texture2D'/Game/StarterContent/Textures/ImageButtonNormal.ImageButtonNormal'",
            "Texture2D'/Game/StarterContent/Textures/ImageButtonActivated.ImageButtonActivated'"
        ];
    }
    render() {
        // return (
        //     <Border></Border>
        // );
        return (React.createElement(react_umg_1.CanvasPanel, { Slot: SlotOfCenter },
            React.createElement(react_umg_1.VerticalBox, { Slot: SlotOfVerticalBox },
                React.createElement(react_umg_1.HorizontalBox, null,
                    React.createElement(react_umg_1.Button, { OnHovered: () => this.setState({ buttonTextureIndex: 1 }), OnUnhovered: () => this.setState({ buttonTextureIndex: 0 }) },
                        React.createElement(react_umg_1.TextureImage, { TextureName: this.buttonTextures[this.state.buttonTextureIndex], bMatchSize: true }))),
                this.state.names.map((name, idx) => React.createElement(ui_components_1.StatusBar, { name: name, key: idx })),
                React.createElement(react_umg_1.Button, null, "hhhhhh"),
                React.createElement(react_umg_1.HorizontalBox, null,
                    React.createElement(react_umg_1.Button, null, "\u6D4B\u8BD5\u6309\u94AE1"),
                    React.createElement(react_umg_1.Button, null, "\u6D4B\u8BD5\u6309\u94AE2"),
                    React.createElement(react_umg_1.Button, null, "\u6D4B\u8BD5\u6309\u94AE3"),
                    React.createElement(react_umg_1.Button, null, "\u6D4B\u8BD5\u6309\u94AE1"),
                    React.createElement(react_umg_1.Button, null, "\u6D4B\u8BD5\u6309\u94AE2"),
                    React.createElement(react_umg_1.Button, null, "\u6D4B\u8BD5\u6309\u94AE3")),
                React.createElement(react_umg_1.HorizontalBox, null,
                    React.createElement(react_umg_1.Button, null, "1"),
                    React.createElement(react_umg_1.Button, null, "2"),
                    React.createElement(react_umg_1.Button, null, "3")))));
    }
}
function Load() {
    return react_umg_1.ReactUMG.render(React.createElement(Hello, { names: ["生命222:", "能量222:"] }));
}
exports.Load = Load;
;
//# sourceMappingURL=index.js.map