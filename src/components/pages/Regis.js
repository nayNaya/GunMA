import React, { useState } from 'react';
import axios from 'axios';
import Popup from "reactjs-popup";
import styled from 'styled-components';
//import { useHistory } from 'react-router-dom';
import swal from 'sweetalert';

const Section = styled.section`
  background-color: #EDEFFD;
  height: 500px;
  width: 500px;
  display: block;
  background-repeat: no-repeat;
  background-size: contain;
  align-items: center;
  border-radius: 15px;
  box-shadow: 0 10px 10px rgb(0 42 177 / 10%);
`;

const Title = styled.p`
text-align: center;
  color: #04050a;
  font-weight: 300;
  font-size: 35px;
`;

const Label = styled.p`
padding-left: 60px;
`;

const LabelPas = styled.p`
padding-left: 50px;
`;

const LabelRePas = styled.p`
padding-left: 5px;
`;

const Left = styled.div`
  padding-left: 165px;
  padding-top: 25px;
`;

const LeftButton = styled.div`
  padding-left: 40px;
`;

const Right = styled.div`
  padding-top: 10px;
  padding-left: 465px;
`;

const Acc = styled.div`
padding-left: 8px;
font-size: 12px;
color : #326A88;
`;

const Button = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 15px;
  margin-top: 40px;
  width: 90px;
  height: 35px;
  line-height: 50px;
  font-size: 17px;
  text-align: center;
  color: #000000;
  cursor: pointer;
  background: #FAE57C;
  text-decoration: none;
  box-shadow: 0 15px 14px rgb(0 42 177 / 12%);
`;

function Regis({close}) {


    const [regisInput, setLogin] = useState ({
      name:'',
      email:'',
      password:'',
      password_confirmation:'',
    });
    const handleInput = (e) =>{
      e.persist();
      setLogin({...regisInput,[e.target.name] : e.target.value})
    }
    const HandleRegister = async(e) => {
      e.preventDefault();
      const body = {
      'name' : regisInput.name,
      'email' : regisInput.email,
      'password' : regisInput.password,
      'password_confirmation' : regisInput.password_confirmation,
    }
      //setLoading(true);
      await axios.post('https://api.gunma.my.id/api/v1/register-user', body).then(response => {
        //setLoading(false);
        swal({
          icon: 'success',
          text: 'Registrasi Berhasil!',
        })
      }).catch(error => {
        //setLoading(false);
        swal({
          icon: 'error',
          text: 'Maaf! Registrasi Gagal ^^,',
        })         
      });
    }
    return (
        <Section>
            <div> {
        <form onSubmit={HandleRegister}>
        <Right>
           <a href className="close" onClick={close}>
           &times;
           </a>
                </Right>
                <Title> Register </Title> 
                <Left>
                <div className = "form-group" >
                <Label > Name <br/></Label> 
                <input type = "email"
                className = "form-control"
                name='name'
                value={regisInput.name}
                placeholder = "Enter email"
                onChange = {handleInput}
                />
                </div>                 
                <div className = "form-group" >
                <Label > Email <br/></Label> 
                <input type = "email"
                name='email'
                className = "form-control"
                value={regisInput.email}
                placeholder = "Enter email"
                onChange = {handleInput}
                /> 
                </div>
                <div className = "form-group" >
                <LabelPas > <br/>Password<br/> </LabelPas> 
                <input type = "password"
                className = "form-control"
                name='password'
                value={regisInput.password}
                placeholder = "Enter password"
                onChange = {handleInput}
                /> 
                </div>
                <div className = "form-group" >
                <LabelRePas > <br/>Password Confirmation<br/> </LabelRePas> 
                <input type = "password"
                name='password_confirmation'
                className = "form-control"
                value={regisInput.password_confirmation}
                placeholder = "Re-Enter password"
                onChange = {handleInput}
                /> 
                </div>
                <LeftButton>
                <div>
                <Button type = "submit"
                className = "btn btn-primary" onClick={HandleRegister}> Register </Button> 
                </div>
                </LeftButton>
                <div>
                <Acc>
                <a href>already Registered ?
                <Popup onClick={close} modal trigger={<u> Sign In</u>}>
                </Popup>
                </a> 
            </Acc>
            </div>
          </Left> 
        </form>
      }
    </div>      
    </Section>  
  )
}
export default Regis;