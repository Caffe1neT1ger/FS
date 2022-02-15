// Для кнопки назад
import React from "react";
import PropTypes from 'prop-types';
import classNames from 'classNames';


import './CSS/style__training.css';

const Image_Back = (
    {
        src,alt,className,
    }
) => {

    const classes = classNames(className,)
    return (
        <img src={src} alt={alt} className={classes}/>

    );
};

Image_Back.propTypes = {
    src: PropTypes.string,
    alt: PropTypes.string,
    className: PropTypes.string,
}

Image_Back.defaultProps = {
    src: 'https://via.placeholder.com/20x20',
    alt: 'image name',
    className: '',
}

export default Image_Back;

