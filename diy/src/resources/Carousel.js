import React, { Component } from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css';


export default class Carousel extends Component {
    componentDidMount(){
        document.addEventListener('DOMContentLoaded', function() {
            var elems = document.querySelectorAll('.carousel');
            var instances = M.Carousel.init(elems,{});
          });
    }

    render() {
        return (
          
        <div className="img-slide">
        <div className="carousel carousel-slider" data-indicators="true">
            <a className="carousel-item slider" href="#one!"><img alt='' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcy4LT4MLnDDAVSa6B1YNoeyh-UEDYByNIIw&usqp=CAU"/></a>
            <a className="carousel-item slider" href="#two!"><img alt='' src="https://eternitymarketing.com/assets/image-cache/blog/diy.f3f58320.jpg"/></a>
            <a className="carousel-item slider" href="#three!"><img alt='' src="https://eternitymarketing.com/assets/image-cache/blog/diy.f3f58320.jpg"/></a>
            <a className="carousel-item slider" href="#four!"><img alt='' src="https://www.traveller.com.au/content/dam/images/h/1/q/a/b/k/image.related.articleLeadwide.620x349.h1qyip.png/1600986508585.jpg"/></a>
            <a className="carousel-item slider" href="#five!"><img alt='' src="https://eternitymarketing.com/assets/image-cache/blog/diy.f3f58320.jpg"/></a>
            <a className="carousel-item slider" href="#one!"><img alt='' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcy4LT4MLnDDAVSa6B1YNoeyh-UEDYByNIIw&usqp=CAU"/></a>
            <a className="carousel-item slider" href="#two!"><img alt='' src="https://eternitymarketing.com/assets/image-cache/blog/diy.f3f58320.jpg"/></a>
            <a className="carousel-item slider" href="#three!"><img alt='' src="https://eternitymarketing.com/assets/image-cache/blog/diy.f3f58320.jpg"/></a>
            <a className="carousel-item slider" href="#four!"><img alt='' src="https://www.traveller.com.au/content/dam/images/h/1/q/a/b/k/image.related.articleLeadwide.620x349.h1qyip.png/1600986508585.jpg"/></a>
            <a className="carousel-item slider" href="#one!"><img alt='' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcy4LT4MLnDDAVSa6B1YNoeyh-UEDYByNIIw&usqp=CAU"/></a>
            <a className="carousel-item slider" href="#two!"><img alt='' src="https://eternitymarketing.com/assets/image-cache/blog/diy.f3f58320.jpg"/></a>
            <a className="carousel-item slider" href="#three!"><img alt='' src="https://eternitymarketing.com/assets/image-cache/blog/diy.f3f58320.jpg"/></a>
            <a className="carousel-item slider" href="#four!"><img alt='' src="https://www.traveller.com.au/content/dam/images/h/1/q/a/b/k/image.related.articleLeadwide.620x349.h1qyip.png/1600986508585.jpg"/></a>
            <a className="carousel-item slider" href="#five!"><img alt='' src="https://eternitymarketing.com/assets/image-cache/blog/diy.f3f58320.jpg"/></a>
            <a className="carousel-item slider" href="#five!"><img alt='' src="https://eternitymarketing.com/assets/image-cache/blog/diy.f3f58320.jpg"/></a>
        </div>
        </div>
        )
    }
}


