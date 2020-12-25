import * as React from 'react';
import { Button, HorizontalBox, TextBlock, ProgressBar, HorizontalBoxSlot, LinearColor, TextureImage } from '../react-umg';

export interface Props {
    name: string;
    initialPercent?: number;
}

interface State {
    percent: number;
}

let SlotOfProgressBar: HorizontalBoxSlot = {
    Size: {
        SizeRule: 1
    }
}

export class StatusBar extends React.Component<Props, State> {
    constructor(props: Props) {
      super(props);
  
      if ((props.initialPercent || 0) < 0) {
        throw new Error('initialPercent < 0');
      }
  
      this.state = {
        percent: props.initialPercent || 0.5
      };
    }

    get color(): LinearColor {
        return {R: 1 - this.state.percent , G: 0, B: this.state.percent};
    }
  
    onIncrement = () => this.setState({percent: this.state.percent + 0.1});
    onDecrement = () => this.setState({percent: this.state.percent - 0.1});
    onHovered = () => {
        console.log("哈哈");
    }
    onTestClick = () => {
        console.log("测试点击");
    }
    render() {
        return (
            <HorizontalBox>
                
                <TextBlock Text={`${this.props.name}(${this.state.percent.toFixed(2)})`}/>
                <ProgressBar Percent={this.state.percent} Slot={SlotOfProgressBar} FillColorAndOpacity={this.color}/>
                <Button OnClicked={this.onIncrement} OnHovered={this.onHovered} >+</Button>
                <Button OnClicked={this.onDecrement} >-</Button>
                <Button OnClicked={this.onTestClick}>
                    <TextureImage TextureName="Texture2D'/Game/StarterContent/Textures/ImageButtonNormal.ImageButtonNormal'"/>
                </Button>
                <Button>12321321321</Button>
            </HorizontalBox>
        );
    }
}