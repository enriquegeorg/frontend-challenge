import { Link } from 'react-router-dom';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

import Edit from '@material-ui/icons/Edit';
import Delete from '@material-ui/icons/Delete';

import './UsersList.css';
// import { ModalCustom } from '../Modal';

export default function UsersList({ users, removeUser }) {
  return (
    <>
      <Table aria-label="customized table">
        <TableHead>
          <TableRow>
            <TableCell align="left" style={{ width: 450 }}>
              Nome do usuário
            </TableCell>
            <TableCell align="left" style={{ width: 500 }}>
              E-mail
            </TableCell>
            <TableCell align="left" >
              Açoes
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {users.map((user) => (
            <TableRow key={user.id}>
              <TableCell align="left">
                {user.first_name} {user.last_name}
              </TableCell>
              <TableCell align="left">
                {user.email}
              </TableCell>
              <TableCell align="left">
                <div className="groupButtons">
                  <Link 
                    to={`/users/${user.id}`} 
                    style={{ textDecoration: 'none' }}
                  >
                    <button 
                      className="buttonAction" 
                    >
                      <Edit style={{ marginRight: 8 }} />
                      editar
                    </button>
                  </Link>
                  <button 
                    className="buttonAction"
                    onClick={() => removeUser(user.id)}
                  >
                    <Delete 
                        style={{ color: '#F00', marginRight: 8 }} 
                    />
                    excluir
                  </button>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  );
}

