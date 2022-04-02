import React, { useEffect, useState } from "react";
// import { withStyles } from '@material-ui/core/styles';
import { TextField, withStyles } from "@material-ui/core";

import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";

import Container from "@material-ui/core/Container";

import Search from "@material-ui/icons/Search";
import PersonAdd from "@material-ui/icons/PersonAdd";

import Button from "../../components/Layout/Button";
import UsersList from "../../components/Users/UsersList";

import { api } from "../../services/api";

import "./Users.css";

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

function Users() {
  const [users, setUsers] = useState([]);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const [filteredUsers, setFilteredUsers] = useState([]);

  const [userSelected, setUserSelected] = useState(null);

  const handleClickOpen = (id) => {
    if (id) setUserSelected(id);
  };

  const handleClose = () => {
    setUserSelected(null);
  };

  async function listUsers() {
    const response = await api.get("users");

    const { data } = response.data;
    setUsers(data);
    setFilteredUsers(data);
  }

  useEffect(() => {
    listUsers();
  }, []);

  function removeUser() {
    const newUsers = users.filter((user) => user.id !== userSelected);
    setUsers(newUsers);
    setFilteredUsers(newUsers);
    setUserSelected(null);
  }

  function searchUsers() {
    const filteredUsers = users.filter(
      (user) =>
        (user.first_name + user.last_name)
          .toLowerCase()
          .includes(name.toLowerCase()) &&
        user.email.toLowerCase().includes(email.toLowerCase())
    );
    setFilteredUsers(filteredUsers);
  }

  return (
    <>
      <main className="mainContainer">
        <Container className="boxContainer">
          <h3 className="titleContainer">Busca</h3>

          <div className="inputGroup">
            <CssTextField
              label="Nome do usuário"
              placeholder="Digite nome ou sobrenome"
              variant="outlined"
              height={300}
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <CssTextField
              label="E-mail"
              placeholder="Digite o e-mail"
              variant="outlined"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <Button
            class="primary"
            text="Buscar"
            onClick={() => searchUsers()}
            width={120}
            height={40}
            icon={<Search style={{ color: "#FFF", marginRight: 8 }} />}
          />
        </Container>

        <Button
          bordered
          class="secondary"
          text="Adicionar usuário"
          width={230}
          height={40}
          icon={<PersonAdd style={{ color: "#424242", marginRight: 8 }} />}
        />
        <UsersList users={filteredUsers} removeUser={handleClickOpen} />
        <Dialog
          open={!!userSelected}
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">
            {"Você tem certeza que deseja excluir este usuário?"}
          </DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              O usuário será excluído permanentemente e esta ação é
              irreversível.
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button
              class="primary"
              onClick={handleClose}
              text="Cancelar"
              width={120}
              height={40}
            />
            <Button
              class="secondary"
              onClick={removeUser}
              autoFocus
              text="Confirma"
              width={120}
              height={40}
              color="red"
            />
          </DialogActions>
        </Dialog>
      </main>
    </>
  );
}

export { Users };
