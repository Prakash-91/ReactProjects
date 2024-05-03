import React from 'react';
import '../index.css';

export default function Todo(props) {
    return <li>{props.text}</li>;
}