import React, { Component } from 'react';
import Title from './Title';
import {FaCocktail,FaHiking,FaShuttleVan,FaBeer} from "react-icons/fa";


export default class Services extends Component {
    state ={
        services:[
            {
                icon: <FaCocktail/>,
                title: "Free Cocktails",
                info:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore, iusto!"

            },
            {
                icon: <FaHiking/>,
                title: "Endless Hiking",
                info:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore, iusto!"

            },
            {
                icon: <FaShuttleVan/>,
                title: "Free shuttle",
                info:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore, iusto!"

            },
            {
                icon: <FaBeer/>,
                title: "Strongest Beer",
                info:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore, iusto!"

            }
        ]
    };
    render() {
        return (
            <section className ="services">
                <Title title="services"/>
                <div className="service-center">
                    {this.state.services.map((item, index) => {
                        return <article key={index} className="service">
                        </article>
                    })}
                    </div>
            </section>

        );
    }
}

