export const changePlayerPanel = (allPlayers, activePlayerPanel) => {
    allPlayers.forEach(player => {
        player.classList.remove('player--active');
    });
    activePlayerPanel.classList.toggle('player--active');
}

export const changeAppPanel = (appPanel, activePlayer) => {
    appPanel.className = `app app--active-${activePlayer}`;
}