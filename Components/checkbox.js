import React, {Component} from 'react';
import {
    View,
    TouchableOpacity,
    Button,
    Text,
    StatusBar,
    StyleSheet
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

export default class CheckBox extends Component{
    constructor(props){
        super(props);
        this.state = {
            isChecked : false,
        };


    }
    onClickCheckBox = ()=>{
        this.setState({
            isChecked:!this.state.isChecked,
        })
    };
    render(){
        const {size, style, opacity, tickSize, tickColor} = this.props;

        return(
            <TouchableOpacity onPress = {this.onClickCheckBox} activeOpacity = {opacity}>
                <View style = {[styles.checkBoxStyle,{height: size, width: size, alignItems:'center',justifyContent:'center'},style ]}>
                    {this.state.isChecked? <Icon name="check" size={tickSize} color= {tickColor} />:null}
                </View>

            </TouchableOpacity>
        )
    }
}
const styles = StyleSheet.create({
    checkBoxStyle : {
        height : 20,
        width : 20,
        borderWidth : 1.5,
        borderRadius : 5,
        borderColor : 'black'
    }
});
