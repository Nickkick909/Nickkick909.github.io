import { LitElement , html } from './node_modules/lit-element/lit-element';

export class headNav extends LitElement {


    render() {
        return html`
        <head><link rel="stylesheet" href="css/index.css"></head>
        <span>
            <p class ="name">
                Lab Lineup
            </p>
        </span>
        <hr>
        <nav>
            <a class ="navbar" href="/">Home</a> |
            <a class ="navbar" href="LabLineup.html">Lab Lineup</a> |
            <a class ="navbar" href="PacmanProjects.html">Pacman Projects</a> |
            <a class ="navbar" href="GamerGuru.html">Gamer Guru</a> |
            <a class ="navbar" href="DodgeCar.html">Dodge Car</a> |
            <a class ="navbar" href="Pong.html">Pong</a> |
    
        </nav>

        <br>
        `;
    }
}

customElements.define('head-nav', headNav);