import React, { Component } from 'react';

class Chatbott extends Component {

   constructor(props){

       super(props);

   } 

componentDidMount(){
    (function(d, m){
        var kommunicateSettings = 
            {"appId":"e47ba557329ceddedf4ad4f6fe5bf102","popupWidget":true,"automaticChatOpenOnNavigation":true,"voiceOutput":true,
            "voiceName":"Google Deutsch", // Replace Google Deutsch with the voiceName or an array of voiceNames from the below mentioned table list
            "voiceRate":1};
        var s = document.createElement("script"); s.type = "text/javascript"; s.async = true;
        s.src = "https://widget.kommunicate.io/v2/kommunicate.app";
        var h = document.getElementsByTagName("head")[0]; h.appendChild(s);
        window.kommunicate = m; m._globals = kommunicateSettings;
    })(document, window.kommunicate || {});
}
render(){

    return(
 
        <div>
 
            <h1>Hello</h1>
 
      </div>
 
    )
 
 }
}
export default Chatbott