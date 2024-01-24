import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const LogoText = styled.h1`
    font-family: 'Akaya Telivigala', cursive;
    font-size: ${(prop) => prop.theme.fontxxxl};
    color: ${(prop) => prop.theme.text};
    transition: all 0.3s ease;

    &:hover{
        transform: scale(1.1);
    }
    @media (max-width: 64em) {
        font-size: ${(prop) => prop.theme.fontxxl};

    }
`;

const Logo = () => {
    return (
        <LogoText>
            <Link to='/'>L.D</Link>
        </LogoText>
    );
};

export default Logo;
