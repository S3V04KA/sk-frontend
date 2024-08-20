import { useState } from 'react';
import './Welcome.scss';
import image from '../../assets/Mail.png';

class RegisterData {
  fio: string = '';
  nickName: string = '';
  organization: string = '';
  email: string = '';
  password: string = '';
  dataDone: boolean = false;
}

function Register({data, setData}: {data: RegisterData, setData: (RegisterData: RegisterData) => void}) {
  return (
    <div className="welcome">
      <h1>Добро пожаловать!</h1>
      <input value={data.fio} onChange={(e) => setData({ ...data, fio: e.target.value })} type="text" placeholder="ФИО" />
      <input value={data.nickName} onChange={(e) => setData({ ...data, nickName: e.target.value })} type="text" placeholder="Никнейм" />
      <input value={data.organization} onChange={(e) => setData({ ...data, organization: e.target.value })} type="text" placeholder="Организация" />
      <input value={data.email} onChange={(e) => setData({ ...data, email: e.target.value })} type="email" placeholder="EMail" />
      <input value={data.password} onChange={(e) => setData({ ...data, password: e.target.value })} type="password" placeholder="Пароль" />
      <button onClick={() => setData({...data, dataDone: true})}>Зарегистрироваться</button>
    </div>
  )
}

function ConfirmEmail({data}: {data: RegisterData}) {
  return (
    <div className="confirm-email">
      <img src={image}/>
      <p>На электронный адрес <span>{data.email}</span> oтправлено письмо для подтверждения регистрации!</p>
      <input type="text" placeholder='Введите код'/>
      <button onClick={() => window.location.replace('/main')}>Отправить</button>
    </div>
  )
}

function Welcome() {
  const [data, setData] = useState(new RegisterData());

  return (
    <>
      {(data.dataDone) ? <ConfirmEmail data={data} /> : <Register data={data} setData={setData}/>}
    </>
  )
}

export default Welcome;