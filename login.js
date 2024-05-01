function login() {
    const playerName = document.getElementById('playerName').value;
    localStorage.setItem('player', playerName);
    // Redirect to game page after login
    window.location.href = 'gamepage.html';
}
