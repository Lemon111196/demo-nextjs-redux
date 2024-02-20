import styled from "styled-components";

export const LoginContainer = styled.div`
    width: 400px;
    border: 1px solid #F0E8B6;
    backdrop-filter: blur(8px);
    box-shadow: 0 0 10px #F0E8B6 ;
    border-radius: 20px;
    display: flex;
    justify-content: center;
    position: absolute;
    top: 200px;
    left: 35%;
    color: white;   
    h1{
        margin-top: 30px;
        text-align:center;
    }
    .input{
        border: none;
        /* box-shadow: 0 0 5px #00CD00; */
        border-radius: 10px;
        width: 100%;
        height: 50px;
        margin: 5px 0;
    }
    .inputForm{
        margin-top: 10px;
        position: relative;
    }
    .checkbox{
        display:flex;
        /* flex-direction: column; */
        align-items: center;
        margin-top: 10px;
    }
    .btn{
        width: 100%;
        margin: 10px 0;
    }
    .register{
        margin-bottom: 20px;
        font-weight: 100px;
        text-align: center;
    }
    .link{
        text-decoration: none;
        color: whitesmoke;
        font-weight: bold;
    }
    .icon{
        color: white;
        position: absolute;
        top: 20px;
        right: 10px;
        cursor: pointer;
    }
    .iconPassword{
        color: white;
    }
    .form-wrapper{
        width: 100%;
        padding: 30px;
    }
    .error{ 
        color: red;
    }
`;