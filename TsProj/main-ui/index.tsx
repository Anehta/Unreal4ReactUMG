import * as React from 'react';
import { BorderSlot } from 'ue';
import { VerticalBox, SizeBox,Border, CanvasPanel, ReactUMG, TextBlock, CanvasPanelSlot, Button, HorizontalBox, TextureImage } from '../react-umg';
import {StatusBar} from './ui-components'
interface Props {
    names: string[];
}

interface State {
    names: string[];
    buttonTextureIndex: number;
}

let SlotOfVerticalBox: CanvasPanelSlot = {
    LayoutData: {
        Offsets: {
            Left: 120,
            Top: 120,
            Right: 480,
            Bottom: 80
        }
    }
}

let SlotOfCenter: CanvasPanelSlot = {
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
}

class Hello extends React.Component<Props, State> {
    buttonTextures: string[];

    constructor(props: Props) {
      super(props);
      this.state = {
        names: props.names,
        buttonTextureIndex : 0,
      };
      this.buttonTextures = [
          "Texture2D'/Game/StarterContent/Textures/ImageButtonNormal.ImageButtonNormal'",
          "Texture2D'/Game/StarterContent/Textures/ImageButtonActivated.ImageButtonActivated'"
        ]
    }
    render() {
        // return (
        //     <Border></Border>
        // );
        return (
            <CanvasPanel Slot={SlotOfCenter}>
                {/* <Border Slot={SlotOfCenter}></Border> */}
                <VerticalBox Slot={SlotOfVerticalBox}>
                    <HorizontalBox>
                    <Button OnHovered={() => this.setState({buttonTextureIndex: 1})} OnUnhovered={() => this.setState({buttonTextureIndex: 0})} >
                        <TextureImage TextureName={this.buttonTextures[this.state.buttonTextureIndex]} bMatchSize={true}/>
                    </Button>
                    </HorizontalBox>
                    {this.state.names.map((name, idx) => <StatusBar name={name} key={idx}/>)}
                    <Button>hhhhhh</Button>
                    <HorizontalBox>
                        <Button>测试按钮1</Button>
                        <Button>测试按钮2</Button>
                        <Button>测试按钮3</Button>
                        <Button>测试按钮1</Button>
                        <Button>测试按钮2</Button>
                        <Button>测试按钮3</Button>
                    </HorizontalBox>
                    <HorizontalBox>
                        <Button>1</Button>
                        <Button>2</Button>
                        <Button>3</Button>
                    </HorizontalBox>
                </VerticalBox>
            </CanvasPanel>
        );
    }
}

export function Load(){
    return ReactUMG.render(
        <Hello names={["生命222:", "能量222:"]}/>
    );
};