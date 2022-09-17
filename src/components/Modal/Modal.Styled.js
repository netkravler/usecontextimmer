import styled from "styled-components";

export const ModalStyled = styled.div`
  display: ${(props) => props.showmodal}; /* Hidden by default */
  position: fixed; /* Stay in place */
  z-index: 20; /* Sit on top */
  left: 0;
  top: 0;
  width: 100%; /* Full width */
  height: 100%; /* Full height */

  overflow: auto; /* Enable scroll if needed */
  background-color: rgb(0, 0, 0); /* Fallback color */
  background-color: rgba(0, 0, 0, 0.6); /* Black w/ opacity */

  main {
    min-height: 150px;
    position: relative;
    background-color: #fefefe;
    margin: 3% auto; /* 5% from the top and centered */

    padding: 20px;
    border: 1px solid #888;
    width: 80%;
    margin: 5% auto;
  }

  span {

    text-align: center;
    border-radius: 50%;
    position: absolute;
    right: 20px;
    top: 20px;
    padding: 1px;
    width: 40px;
    aspect-ratio: 1/1;
    color: #aaa;
    background-color: #ccc;
    border: solid 3px transparent;


    font-size: 30px;
    font-weight: bold;

    &:hover,
    &:focus {
      background-color: #ccc;
      color: #333;
      cursor: pointer;
      border: solid 3px #333;
    }
  }
`;
