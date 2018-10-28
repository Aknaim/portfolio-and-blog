import React, { Component } from 'react';
import '../styles/Chess.css';

class Chess extends Component {
    render() {
        return (
            <div id="bodyChess">
                    <div class="col-md-6 col-md-offset-3">
                        <div class="w3-padding-64 w3-center">
                        <h1>Chess</h1>
                        <img src="https://images.pexels.com/photos/1040157/pexels-photo-1040157.jpeg?auto=compress&cs=tinysrgb&h=350" class="w3-margin w3-circle" alt="Chess"/>
                        <div class="w3-left-align w3-padding-large">
                        <h4>Welcome</h4>
                            <div className="subText">
                                <p>This is where you will find all my discussions on chess from; books, tournaments, videos and the latest news!</p>
                                <br />
                            </div>
                        <h4>Resources</h4>
                            <div className="subText">
                                <p>Sites to play on:</p>
                                <ul>
                                    <li><a href="https://www.chessclub.com/" target="_blank">ICC</a></li>
                                    <li><a href="https://chess.com/" target="_blank">Chess.com</a></li>
                                    <li><a href="https://lichess.org/" target="_blank">Lichess.org</a></li>
                                    <li><a href="http://www.chesscube.com/" target="_blank">ChessCube.com</a></li>
                                </ul>
                            <br />
                            <p>Youtube channels for some great analysis on games:</p>
                            <ul>
                                <li><a href="https://www.youtube.com/user/ChessNetwork/featured" target="_blank">ChessNetwork</a></li>
                                <li><a href="https://www.youtube.com/user/AGADMATOR" target="_blank">Agadmator</a></li>
                                <li><a href="https://www.youtube.com/user/jrobichess/featured" target="_blank">Jrobichess</a></li>
                            </ul>
                            <br />
                            <p>World Rankings:</p>
                            <ul>
                                <li><a href="https://2700chess.com/" target="_blank">2700Chess</a></li>
                            </ul>
                            </div>
                            <br />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Chess;