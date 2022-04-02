import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

import { TextField, withStyles } from "@material-ui/core";
import Avatar from "@material-ui/core/Avatar";

import SaveAlt from "@material-ui/icons/SaveAlt";
import ArrowBack from "@material-ui/icons/ArrowBack";

import Button from "../../components/Layout/Button";

import { api } from "../../services/api";

import "./UserEdit.css";

const CssTextField = withStyles({
  root: {
    "&": {
      width: 300,
    },
    "& + &": {
      marginLeft: 10,
    },
    "& label.Mui-focused": {
      color: "#000",
      fontWeight: "bold",
    },
    "& .MuiInput-underline:after": {
      borderColor: "#C4C4C4",
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "#C4C4C4",
      },
      "&:hover fieldset": {
        borderColor: "#C4C4C4",
      },
      "&.Mui-focused fieldset": {
        borderColor: "#C4C4C4",
      },
    },
  },
})(TextField);

function UserEdit() {
  const { id } = useParams();

  const [user, setUser] = useState({
    id: 0,
    first_name: "",
    last_name: "",
    email: "",
    avatar: "",
  });

  async function saveUser() {
    const response = await api.put(`/users/${id}`, user);

    if (response.status === 200) {
      setUser(user);
      window.location.href = "/users";
    } else {
      alert("Erro ao salvar usuário");
    }
  }

  useEffect(() => {
    (async () => {
      const response = await api.get(`/users/${id}`);

      const { data } = response.data;

      setUser(data);
    })();
  }, [id]);

  return (
    <>
      <div className="formContainer">
        <Link to="/users" style={{ marginBottom: 20 }}>
          <Button
            class="secondary"
            text="Voltar"
            width={120}
            height={40}
            icon={<ArrowBack style={{ color: "#424242", marginRight: 8 }} />}
          />
        </Link>

        <div className="boxContainer">
          <span className="titleContainer">Editar dados do usuário</span>

          <div className="profileContainer">
            <Avatar
              alt={user?.first_name}
              src={user?.avatar}
              style={{ width: 100, height: 100 }}
            />

            <div className="detailProfile">
              <span className="nameProfile">
                {user?.first_name} {user?.last_name}
              </span>

              <span className="emailProfile">{user?.email}</span>
            </div>
          </div>

          <div className="inputGroupUpdate">
            <CssTextField
              disabled
              label="ID"
              variant="outlined"
              value={user?.id}
              style={{ width: 280 }}
            />
            <CssTextField
              label="Primeiro nome"
              placeholder="Informe o seu primeiro nome"
              variant="outlined"
              value={user?.first_name}
              onChange={(e) => setUser({ ...user, first_name: e.target.value })}
            />
            <CssTextField
              label="Último nome"
              placeholder="Informe o seu ultimo nome"
              variant="outlined"
              value={user?.last_name}
              onChange={(e) => setUser({ ...user, last_name: e.target.value })}
            />
            <CssTextField
              required
              label="E-mail"
              placeholder="Informe o seu novo email"
              variant="outlined"
              value={user?.email}
              onChange={(e) => setUser({ ...user, email: e.target.value })}
            />
          </div>

          <Button
            class="primary"
            text="Salvar"
            width={120}
            height={40}
            icon={<SaveAlt style={{ color: "#FFF", marginRight: 8 }} />}
            onClick={() => saveUser()}
          />
        </div>
      </div>
    </>
  );
}

export { UserEdit };
