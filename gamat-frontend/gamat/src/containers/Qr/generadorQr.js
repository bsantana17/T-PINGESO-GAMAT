import React, { Component } from 'react';
import QRCode from 'qrcode.react';
import { connect } from 'react-redux';


class generadorQr extends Component {
    constructor(props){
        super(props)
        this.state ={
            indice:0,
            idRequest:0
        }
    }

    componentDidMount(){
        let indiceRequest = this.props.requests.findIndex(
            (req)=>req.idRequest == this.props.match.params.idRequest);
        let idRequest = this.props.requests[indiceRequest].idRequest.toString();
            this.setState({indice:indiceRequest,
            idRequest: idRequest})
    }
    render() {
        return (
            <div className="row m-0">
                <div className="col-12">
                    <center>
                    <h3>Escanea el siguiente código</h3>
                    <QRCode value={this.state.idRequest}></QRCode>  
                    </center>
                </div>   
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
      requests: state.request.requests,
    
    };
};
    
    
    export default connect(mapStateToProps,null)(generadorQr);