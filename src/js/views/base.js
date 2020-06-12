export const elements = {
    bodyNotRules: document.querySelector('body div:not(.rules)'),
    rules: document.querySelector('.rules'),
    rulesIcon: document.querySelector('.toggle-icon'),
    currentScores: Array.from(document.querySelectorAll('.current-score__value')),
    totalScores: Array.from(document.querySelectorAll('.player__score')),
    scores: document.querySelectorAll('.current-score__value, .player__score'),
    dices: Array.from(document.querySelectorAll('.controls-dice')),
    dice1: document.querySelector('.controls-dice--0'),
    dice2: document.querySelector('.controls-dice--1'),
    holdBtn: document.querySelector('.controls-button--hold'),
    newGameBtn: document.querySelector('.controls-button--new-game'),
    playerPanels: document.querySelectorAll('.player'),
    playerHeadings: Array.from(document.querySelectorAll('.player__heading')),
    appPanel: document.querySelector('.app')
}