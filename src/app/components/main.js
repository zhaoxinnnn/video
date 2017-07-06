import React from 'react';
import {Link} from 'react-router';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import Paper from 'material-ui/Paper';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import Divider from 'material-ui/Divider';

import "./main.less";

let styles={
    navPager : {
        height:"100%"
    },
    mainPager : {
        height:"100%"
    }
}

class Main extends React.Component{
    render(){
        return (
            <MuiThemeProvider>
                <Box child={this.props.children}/>
            </MuiThemeProvider>
        )
    }
}

class Box extends React.Component{
    showList(datas){
        return datas.map(info=>{
            return <Link to={"/"+info.path} key={info.path}><MenuItem key={info.path}><li>{info.text}</li></MenuItem><Divider /></Link>

        })
    }
    render(){
        let data = [
            {"path" : "add","text" : "添加"},
            {"path" : "video","text" : "视频"},
            {"path" : "logout","text" : "登出"},
        ];
        return (
            <div>
                <header className="header"><AppBar title="My Video" /></header>
                <nav className="nav">
                    <Paper style={styles.navPager}>
                        <Menu>
                            {this.showList(data)}
                        </Menu>
                    </Paper>
                </nav>
                <main className="main">
                    <Paper className={styles.mainPager}>
                        {this.props.child}
                    </Paper>
                    </main>
            </div>
        )
    }
}
export default Main;


