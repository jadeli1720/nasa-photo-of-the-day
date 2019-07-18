import styled from "styled-components";

export const Header = styled.header`
    background:blue;
    position: fixed;
    margin: 0 auto;
    width: 100%;
    top:0;
    left:0;
    font-size: 26px;
`;

export const CardContainer = styled.div`
    margin: 150px auto;
    max-width: 900px;
    width: 100%;
    border: 1px black solid;
    border-radius: 5px;
    padding:10px;
`;

export const ImageContainer = styled.div`   
    display:flex;
    justify-content:center;
    /* width:500px; */
`;

export const Title = styled.h2`
    margin: 30px 0 20px;
    font-size: 26px;
`;