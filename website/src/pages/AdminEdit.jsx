import React, { useState } from 'react';
import "../styles/pages/admin-edit.css";

function GameForm() {
  const [games, setGames] = useState([]);
  const [editingGameId, setEditingGameId] = useState(null);
  const [newGame, setNewGame] = useState({ homeTeam: '', awayTeam: '', location: '', division: '', winner: '', sport: '' });

  const handleEditClick = (game) => {
    setEditingGameId(game.id);
    setNewGame(game);
  };

  const handleDeleteClick = (gameId) => {
    setGames(games.filter(game => game.id !== gameId));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (editingGameId) {
      // Update existing game
      setGames(games.map(game => {
        if (game.id === editingGameId) {
          return { ...newGame, id: game.id };
        } else {
          return game;
        }
      }));
      setEditingGameId(null);
      setNewGame({ homeTeam: '', awayTeam: '', location: '', division: '', winner: '', sport: '' });
    } else {
      // Add new game
      setGames([...games, { ...newGame, id: Date.now() }]);
      setNewGame({ homeTeam: '', awayTeam: '', location: '', division: '', winner: '', sport: ''  });
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="homeTeam">Home Team:</label>
        <input type="text" id="homeTeam" value={newGame.homeTeam} onChange={(event) => setNewGame({ ...newGame, homeTeam: event.target.value })} />

        <label htmlFor="awayTeam">Away Team:</label>
        <input type="text" id="awayTeam" value={newGame.awayTeam} onChange={(event) => setNewGame({ ...newGame, awayTeam: event.target.value })} />

        <label htmlFor="location">Location:</label>
        <input type="text" id="location" value={newGame.location} onChange={(event) => setNewGame({ ...newGame, location: event.target.value })} />

        <label htmlFor="division">Division:</label>
        <input type="text" id="division" value={newGame.division} onChange={(event) => setNewGame({ ...newGame, division: event.target.value })} />

        <label htmlFor="winner">Winner:</label>
        <input type="text" id="winner" value={newGame.winner} onChange={(event) => setNewGame({ ...newGame, winner: event.target.value })} />

        <label htmlFor="sport">Sport:</label>
        <input type="text" id="sport" value={newGame.sport} onChange={(event) => setNewGame({ ...newGame, sport: event.target.value })} />

        <button type="submit">{editingGameId ? 'Save Changes' : 'Add Game'}</button>
        {editingGameId && <button type="button" onClick={() => setEditingGameId(null)}>Cancel</button>}
      </form>

      <table>
        <thead>
          <tr>
            <th>Home Team</th>
            <th>Away Team</th>
            <th>Location</th>
            <th>Division</th>
            <th>Winner</th>
            <th>Sport</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {games.map(game => (
            <tr key={game.id}>
              <td>{game.homeTeam}</td>
              <td>{game.awayTeam}</td>
              <td>{game.location}</td>
              <td>{game.division}</td>
              <td>{game.winner}</td>
              <td>{game.sport}</td>
              <td>
                <button type="button" onClick={() => handleEditClick(game)}>Edit</button>
                <button type="button" onClick={() => handleDeleteClick(game.id)}>Delete</button>
            </td>
        </tr>
    ))}
    </tbody>
    </table>
    </div>
    );
    }

export default GameForm;
