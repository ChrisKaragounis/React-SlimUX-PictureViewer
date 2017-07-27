import React from 'react';

const ActionTriggers = {
    Next: 'Next',
    Previous: 'Previous',
    Close: 'Close',
    Open: 'Open'
};

class Action extends React.Component {
    render() {
        return (
            <div onClick={this.props.Action} className="Action">
                {this.props.children}
            </div>
        );
    }
}

class ActionMenu extends React.Component {
    render() {
        console.log("Menu is: " + this.props.isHidden)
        let extraClassArrow = this.props.isHidden
            ? " Invisible"
            : "";
        let extraClassClose = this.props.isHidden
            ? ""
            : " Invisible";
        return (
            <div className="ActionsMenu">
                <Action Action={() => this.props.Action(ActionTriggers.Open)}>
                    <div className="vertical-line"/>
                    <i className="ActionSuccess Arrow up"></i>
                </Action>
                <Action Action={() => this.props.Action(ActionTriggers.Close)}>
                    <div className="vertical-line"/>
                    <i className={"Arrow down" + extraClassClose}/>

                    <div className={"CloseSybmolWrapper" + extraClassArrow}>
                        <i className="Arrow Close ActionDanger right Close"></i>
                        <i className="Arrow Close ActionDanger left Close"></i>
                    </div>
                </Action>
                <Action Action={() => this.props.Action(ActionTriggers.Previous)}>
                    <div className="vertical-line"/>
                    <i className=" Arrow left"></i>
                </Action>
                <Action Action={() => this.props.Action(ActionTriggers.Next)}>
                    <div className="vertical-line"/>
                    <i className=" Arrow right"></i>
                </Action>
            </div>
        )
    }
}

class LeftMenu extends React.Component {
    render() {
        return (
            <div className="LeftMenu">
                <div className="image-thumbnail">
                    <img alt="" draggable="false" src={this.props.thumbnail}/>
                </div>
                <div className="Title">
                    <p>{this.props.title}</p>
                </div>
            </div>
        );
    }
}

class Toolbar extends React.Component {
    render() {
        return (
            <div className="PictureViewer_Toolbar">
                <LeftMenu title={this.props.title} thumbnail={this.props.thumbnail}/>
                <ActionMenu isHidden={this.props.isHidden} Action={this.props.Action}/>
            </div>
        )
    }
}
class ImageViewer extends React.Component {
    render() {
        let extraClass = this.props.isHidden
            ? " Hidden"
            : "";

        return (
            <div className={"ImageViewerWrapper" + extraClass}>
                <img alt="" draggable="false" className="ImageViewer" src={this.props.image}/>
            </div>
        );
    }
}
export default class PictureViewer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            Data: {},
            index: 0,
            isHidden: false
        };
    }
    componentDidMount() {
        this.setState({Data: this.props.DataSource[0]});
    }
    ActionTrigger(action) {
        console.log("Action : " + action)
        switch (action) {
            case ActionTriggers.Next:
                {
                    let index = this.state.index;
                    index++;
                    if (index === this.props.DataSource.length) {
                        index = 0
                    }
                    this.setState({index: index, Data: this.props.DataSource[index]});
                }
                break;
            case ActionTriggers.Previous:
                {
                    let index = this.state.index;
                    index--;
                    if (index === -1) {
                        index = this.props.DataSource.length - 1
                    }
                    this.setState({index: index, Data: this.props.DataSource[index]});
                    break;
                }
            case ActionTriggers.Open:
                var newwindow = window.open(this.state.Data.Src, this.state.Data.Title, 'status=0,titlebar=0,toolbar=0,menubar=0,location=0');
                if (window.focus) {
                    newwindow.focus()
                }
                break;
            case ActionTriggers.Close:
                this.setState({
                    isHidden: !this.state.isHidden
                })
            default:
                return;
        }
    }
    render() {
        return (
            <div >
                <Toolbar
                    isHidden={this.state.isHidden}
                    Action={this
                    .ActionTrigger
                    .bind(this)}
                    title={this.state.Data.Title}
                    thumbnail={this.state.Data.Src}/>
                <ImageViewer isHidden={this.state.isHidden} image={this.state.Data.Src}/>
            </div>
        );
    }
}