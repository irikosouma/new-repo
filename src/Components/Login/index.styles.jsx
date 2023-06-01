import styled from 'styled-components';
const Wrap = styled.div`
.Login {
  text-align: center;
margin: 80px auto;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  -webkit-font-smoothing: antialiased;
}



html,
body {
  height: 100%;
  width: 100%;
}

#root {

  height: 100%;

}

.Login {
  background: #fff;
  border-radius: 4px;
  box-shadow: 2px 4px 6px rgba(0, 0, 0, 0.2);
  max-width: 615px;
  padding-bottom: 66px;
  padding-top: 46px;
  text-align: center;
  width: 90%;
}
.Login > .logo {
  max-width: 90%;
}
.Login > .form {
  margin-bottom: 48px;
  margin-top: 41px;
}

.input-group {
  margin-bottom: 26px;
}
.input-group:nth-last-child(-n + 2) {
  margin-bottom: 50px;
}
.input-group > label,
.input-group > input {
  font-family: 'Roboto', sans-serif;
  max-width: 420px;
  text-align: left;
  width: 80%;
}
.input-group > label {
  color: #676767;
  display: inline-block;
  margin-bottom: 5px;
  text-transform: uppercase;
}
.input-group > input {
  background: #f2f2f5;
  border-radius: 4px;
  border: 1px solid #e5e5e5;
  color: #676767;
  font-size: 16px;
  height: 40px;
  outline: 0;
  padding: 0 15px;
  transition: all 0.3s;
}
.input-group > input:focus {
  background: #fff;
  border-color: #c4c4c4;
}
.input-group > input::placeholder {
  color: #c4c4c4;
  font-size: 16px;
}

button {
  border-radius: 5px;
  border: none;
  color: #fff;
  cursor: pointer;
  font-family: 'Open Sans', sans-serif;
  font-size: 18px;
  font-weight: bold;
  letter-spacing: 1px;
  max-width: 420px;
  outline: 0;
  padding: 10px 0;
  transition: background 0.3s;
  width: 80%;
}
button.primary {
  background: #006CEA;
}
button.primary:hover {
  background: #1459a8;
}
button.secondary {
  background: #ECD702;
}
button.secondary:hover {
  background: #a3951d;
}



`;
export {Wrap}

