import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Motion,spring} from 'react-motion';

//react动画
console.log(spring);
class App extends Component {
  constructor(){
    super();
    this.state = {
      arr:['中国','新西兰','美国','加拿大'],
      start:'中国',
      show:true
    }
  }
  show(){
    this.setState({
      show:!this.state.show
    });
  }
  click(i){
    this.setState({
      start:this.state.arr[i]
    });
  }
  css(){
    return `
      .outer{
        text-align:center;
        position:absolute;
        left:50%;
        top:50%;
        transform:translate(-50%,-50%);
        width:260px;
        border:1px solid black;
        height:40px;
        overflow:hidden;
      }
      .tit{
        width:260px;
        height:40px;
        line-height:40px;
        border-bottom:1px solid black;
      }
      .box li{
        width:260px;
        height:40px;
        border-bottom:1px solid black;
        line-height:40px;
      }
      .box li:last-child{
        border:none;
      }
    `;
  }
  render() {
    let Li = [];
    this.state.arr.forEach((v,i)=>{
      Li.push(<li key={i} onClick={this.click.bind(this,i)}>{v}</li>);
    });
    return (
      <div className="App">
        <style dangerouslySetInnerHTML={{__html:this.css()}}/>
        <Motion style={{my:spring(this.state.show?(this.state.arr.length+1)*41-1:40)}}>
          {({my})=>
            <div className='outer' style={{height:my}}>
              <div className='tit' onClick={this.show.bind(this)}>{this.state.start}</div>
              <ul className='box'>{Li}</ul>
            </div>
        }
            
        </Motion>
      </div>
    );
  }
}

export default App;
