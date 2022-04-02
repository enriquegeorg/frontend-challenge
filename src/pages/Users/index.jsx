import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
// import { withStyles } from '@material-ui/core/styles';
import TextField from "@material-ui/core/TextField";

import Container from "@material-ui/core/Container";

import Search from "@material-ui/icons/Search";
import PersonAdd from "@material-ui/icons/PersonAdd";
import ArrowBack from "@material-ui/icons/ArrowBack";

import Button from "../../components/Layout/Button";
import UsersList from "../../components/Users/UsersList";

import { api } from "../../services/api";

import "./Users.css";

function Users() {
  const [users, setUsers] = useState([]);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const [filteredUsers, setFilteredUsers] = useState([]);

  async function listUsers() {
    const response = await api.get("users");

    const { data } = response.data;
    setUsers(data);
    setFilteredUsers(data);
  }

  useEffect(() => {
    listUsers();
  }, []);

  function removeUser(id) {
    const newUsers = users.filter((user) => user.id !== id);
    setUsers(newUsers);
    setFilteredUsers(newUsers);
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
        <Link
          to="/"
          style={{ textDecoration: "none", marginBottom: 10, marginTop: -35 }}
        >
          <Button
            class="secondary"
            text="Voltar"
            width={120}
            height={40}
            bordered
            icon={<ArrowBack style={{ color: "#424242", marginRight: 8 }} />}
          />
        </Link>

        <Container className="boxContainer">
          <span className="titleContainer">Busca</span>

          <div className="inputGroup">
            <TextField
              label="Nome do usuário"
              placeholder="Digite nome ou sobrenome"
              variant="outlined"
              height={300}
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <TextField
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
        <UsersList users={filteredUsers} removeUser={removeUser} />
      </main>
    </>
  );
}

export { Users };
