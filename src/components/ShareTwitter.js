import React, { Component } from 'react';
import iconTwitter from './../images/twitter.png'



class ShareTwitter extends Component {
    render() {
        const urlBack = this.props.stateUrl || this.props.stateError;

        return (
            <section className="align_share align_share_text">
                <p className="card-create">La tarjeta ha sido creada</p>
                <p>
                    <a className="card-link" href={urlBack}>{urlBack}</a>
                </p>
                <div className="align_share">
                    <a
                        className="twitter-share-button"
                        href={'https://twitter.com/intent/tweet?text= Mirad%20que%20tarjeta%20más%20chachi%20he%20creado%20con%20la%20aplicación%20"Awesome%20Profile-cards"&url=' + urlBack}
                        data-size="large"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img
                            className="icon__twitter"
                            src={iconTwitter}
                            alt="compatir en Twitter"
                        />Compartir en Twitter
                </a>
                </div>
            </section>
        );
    }
}

export default ShareTwitter;