import styled from "styled-components";
export const About = styled.div`
 min-height: 90vh;
 display: flex;
 align-items: center;
 justify-content: space-between;
 padding: 5rem 10rem;
 color: white;
 background-color: rebeccapurple;
`;
export const Desc = styled.div`
    flex: 1;
    padding-right: 5rem;
    font-weight: lighter;
`
export const Image = styled.div`
    flex: 1;
    img {
        width: 100%;
        height: 80vh;
        object-fit: cover;
    }
`
export const Hide = styled.div`
    overflow: hidden;
`