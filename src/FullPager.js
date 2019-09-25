import React, { Component } from 'react';
import './App.css';
import './fullPager.scss';


let lastSrollTime = 0
let lastSucesScreenMovedTime = new Date().getTime();
let currentDeltaY = undefined
let lastTouchLocationY = undefined
let isScrollDirestionUp = 0

class FullPager extends Component {

    componentWillMount = () => {
        
    }

    constructor(props) {
        super(props)
        this.changeScrollBehavior()
        this.state = {
            sectionContent: [
                { id: "hero", text: "One", bgColor: "#3399ee" },
                { id: "f", text: "Two", bgColor: "#ee3399" },
                { id: "ai", text: "Three", bgColor: "#33ee99" },
                { id: "coe", text: "Four", bgColor: "#339999" },
                { id: "footer", text: "Five", bgColor: "#999933" }
            ],
            touchQuietPeriod: 0,
            scrollQuietPeriod: 0,
            animationTime: 1500,
            touchStableConstantNumber: 2
        }
    }

    changeScrollBehavior = () => {
        let fullPager = this
        window.addEventListener('wheel', function (event) {
            event.preventDefault()
            fullPager.stablizeScroll(event)
        }, { passive: false })
        window.addEventListener('touchmove', function (event) {
            event.preventDefault()
            fullPager.stablizeScreenTouch(event)
        }, { passive: false })
    }

    stablizeScroll = (event) => {
        let timeNow = new Date().getTime();
        let enableScrolling = Boolean(timeNow - lastSrollTime < (this.state.touchQuietPeriod + this.state.animationTime));
        if (!enableScrolling) {
            currentDeltaY = event.deltaY
            lastSrollTime = timeNow
            this.onStableScroll()
        }
    }

    stablizeScreenTouch = (event) => {
        let timeNow = new Date().getTime()
        let currentTouchedY = event.changedTouches.item(0).clientY
        let distence = currentTouchedY - lastTouchLocationY
        let istTimeToMove = Boolean(timeNow - lastSucesScreenMovedTime > (this.state.scrollQuietPeriod + this.state.animationTime))
        let isStablizedDistance = distence >= this.state.touchStableConstantNumber || distence <= -this.state.touchStableConstantNumber
        let _setLastTouchLocation = () => {lastTouchLocationY = istTimeToMove? currentTouchedY : undefined}
        let _setLastTouchTime = () => lastSucesScreenMovedTime = timeNow
        let _resetDistance = () => distence = 0

        if (isStablizedDistance && istTimeToMove) {
            let isMoveUp = (distence < 0) ? -1 : 1
            console.log(distence);
            
            _resetDistance()
            _setLastTouchTime()
            this.onStableScreenTouch(isMoveUp)
        }

        _setLastTouchLocation()
    }

    onStableScreenTouch = (isMoveUp) => {
        this.moveNextLocation(isMoveUp)
    }

    onStableScroll = () => {
        isScrollDirestionUp = this.getIsDirectionUp()
        this.moveNextLocation(isScrollDirestionUp)
    }

    moveNextLocation = (isMoveUp) => {
        console.log(isMoveUp);
    }

    getIsDirectionUp = () => {
        return (currentDeltaY !== 0) ? ((currentDeltaY < 0) ? 1 : -1) : 0
    }

    getSections = () => {
        let sectionArray = []
        this.state.sectionContent.forEach(
            (sectionContent) => {
                let section = (<section>{sectionContent}</section>)
                sectionArray.push(section)
                console.log(sectionArray);

            })
        let sections = (<div>{sectionArray}</div>)
        console.log(sections);

        return sectionArray
    }

    render() {
        return (
            <div id={"pagerContainer"}>
                {
                    this.state.sectionContent.map((value, index) => {
                        return (<section className="section" id={"section-" + value.id} key={index}><h2>{value.text}</h2></section>)
                    })
                }
            </div>
        )
    }

}

export default FullPager;
