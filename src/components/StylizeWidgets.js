import styled from "styled-components";

export const Header = styled.header`
    position: fixed;
    margin: 0 auto;
    width: 100%;
    top:0;
    left:0;
    background: #130320;
    background-image: linear-gradient(to bottom, #0a0112, #0d0116, #0f0219, #11021d, #130320);
    color: AliceBlue;
    font-family:'Open Sans', Arial, Helvetica, sans-serif;
    font-size: 28px;
`;

export const CardContainer = styled.div`
    background: snow;
    margin: 180px auto;
    max-width: 900px;
    width: 100%;
    border: 1px black solid;
    border-radius: 5px;
    padding:10px;
`;

export const ImageContainer = styled.div`   
    display:flex;
    justify-content:center;
`;

export const Title = styled.h2`
    margin: 40px 0 10px;
    font-family:'Open Sans', Arial, Helvetica, sans-serif;
    font-size: 32px;
    padding-bottom: 40px;
    border-bottom: 1px solid Lavender;
    /* color: blue; */
`;

export const Date = styled.h4`
    font-size: 20px;
    font-style: italic;
    font-weight:400;
`;

export const Para = styled.p`
    font-size: 18px;
    line-height: 32px;
    margin-top:40px;
    padding: 0 15px;
    text-align:left;
`;

export const Footer = styled.footer`
    display:flex;
    justify-content:space-between;
`;