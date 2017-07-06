import React from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import {VideoModel} from '../../dataModel';
import './add.less'

let styles = {
    addBtn : {
        marginLeft : "20px"
    }
}
class Add extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            title : ""
        }
    }
    changeTitle(e,newVal){
        this.setState({
            title : newVal
        })
    }
    searchVideo(){
        let keyWord = this.state.title;
        VideoModel.searchVideo(keyWord,(data)=>{
            console.log(data);
        },(err)=>{
            console.log(err);
        })
    }
    render(){
        return (
            <div className="addBox">
                <TextField
                    value={this.state.title}
                    floatingLabelText="视频名称"
                    onChange={::this.changeTitle}
                /><br/>
                <RaisedButton label="搜索" onTouchTap={::this.searchVideo()} primary={true} style={styles.addBtn}/>
            </div>
        )
    }
};
export default Add;