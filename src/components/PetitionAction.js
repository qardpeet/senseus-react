import React, { Component } from 'react';
import fb from '../assets/img/fb.png';

export default class PetitionAction extends Component {
    render() {
        return (
            <div className="row petition-action">
                <div className="col s12 l6">
                    <h4>შეიტანე წვლილი ქართული ინტერნეტ სივრცის განვითარებაში</h4>
                    <p>ჩვენ ვითხოვთ Google Adsense-ის შემოტანას საქართველოში</p>
                </div>
                <div className="col s12 l6">
                    <div className="white-wrapper petition-form">
                        <button className="action-btn fb">
                            <img src={fb} alt="facebook" />
                            მოაწერე ხელი ფეისბუქით
                        </button>
                        <p>ან</p>
                        <hr />
                        <form action="">
                            <input type="text" placeholder="სახელი" />
                            <input type="text" placeholder="გვარი" />
                            <input type="email" placeholder="ელ-ფოსტა" />
                            <button className="action-btn">მოაწერე ხელი</button>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}
