import React, { Component } from 'react';
import '../App.css';
import jive_logo from '../../src/jive_logo.svg';
import ivo_logo from '../../src/ivo_logo.svg';
//import { Barcode, QRCode } from '@progress/kendo-barcodes-react-wrapper';
import QRCode from 'react-qr-code';
import axios from 'axios'; 
import config from '../config'



class App extends Component {

constructor(props) {
    super(props);
    this.state = {
        value: false,
        name:'',
        description:'',
        logo:'',
        start_date:'',
        end_date:'',
        link:props.match.params.friendly_url
   };
}
componentDidMount(){
    this.fetchLink()
}
  
    
fetchLink(){ 
    axios.get(`${config.jiveApi}${this.state.link}`)
        .then(res => {
            // console.log(res);
        this.setState({
            name:res.data.data.name,
            description:res.data.data.description,
            logo:res.data.data.logo,
            start_date:res.data.data.start_date,
            end_date:res.data.data.end_date,
            value:res.data.data.secret,
            isLoaded : true,
        })
        console.log(res)
        })

    
    }
  
    render() {
    return (
        <section className="barcode-page ">
		<div className="container ">
			<div className="row">
				
				<div className="col-md-12">
					<img  alt="" src={jive_logo} className="logo"/>
				</div>
				
				<div className="col-md-12">
					<div className="barcode-img">

                        {this.state.value &&
                        <QRCode 
                        className="bc-img"
                        value={this.state.value}  />
                        }
						<ul>
							<li className="text">Event: {this.state.name}</li>
                            <li className="text">Description: {this.state.description}</li>
							<li className="text">StartDate: {this.state.start_date}</li>
                            <li className="text">EndDate: {this.state.end_date}</li>
						</ul>
						
					</div>
				</div>
			</div>
			
			<div className="bottom">
				<p className="text1" >Powered by</p>
				<img alt="" src={ivo_logo} className="ivo_logo"/>
			</div>
		</div>
	</section>
    );
  }
}

export default App;
