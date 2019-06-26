import React from 'react';
import PropTypes from 'prop-types';
import style from './hello-world.scss';

const HelloWorld = ({ title, subTitle }) => (
    <>
        <div className={style.title}>{title}</div>
        <div className={style.subTitle}>{subTitle}</div>
    </>
);

HelloWorld.propTypes = {
    title: PropTypes.string,
    subTitle: PropTypes.string,
};

export default HelloWorld;
