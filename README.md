# Tic Tac Toe

**PROJECT SUMMARY:**

The aim for this project was to create an in-browser version of the classic game Tic Tac Toe (also known as Noughts and Crosses, at least in the UK that is!). The project should allow two players to take it in turns to place a marker on the board, the winner being the one that places their marker in a line of three. The project should be able to detect a winner and allow the users to repeat the game if wanted.

I chose to extend the project further and provide a computer opponent who as of writing this just makes a random move for now, however I do intend to create an intelligent AI opponent using the minmax algorithm. I also went a step further to allow the possibility for a computer to play itself, for now this is a random move but it correctly determines a winner.

The project's hidden aim is to make strong use of factory functions and modules that have as little functions/variables that are public. I have been learning the importance of keeping the namespace clear and free of 'clutter' that could cause unintentional errors, so I have made this a clear focus.

_**Some of the things I have learned from completing this project:**_

- I have been learning about factory functions and modules and this project has given me a great opportunity to practice implementing them into a project. I have also learned the importance of keeping your functions private as well as public.

- I have further strengthened my understanding of CSS. I found the styling of the page and the design very simple thanks to the wealth of understanding I have gained from completing prior projects.

- I have made a solid attempt to place as much of my code as possible in functions that can be reused in order to make my code as efficient and clean as possible.

- My understanding of JavaScript has continued to grow, I have found myself googling things less and less and have a better understanding now for the language and its syntax....and its... 'quirks'...

_**Some of the challenges I faced during this project:**_

- One of my biggest challenges I faced was getting the computer to take a turn correctly. The project solution I created requires the user to interact with the board, this was fine but became problematic when I wanted the computer to take a turn immediately after the player. I had to rewrite a lot of my code for taking a turn to accomodate this.

- Another challenge I faced that took some time solving, was developing the user interface that was simplistic and informative for the user. It was a challenge to get the JavaScript to update the UI at the correct moments in order to keep the user informed about what was going on in the game. I believe my final solution was effective in keeping the players of the game in the loop with what is going on and who needs to play next.

- Getting the two modules 'Boad' and 'Controller' to correctly interact with each other was a challenge to begin with, but after some practice and planning I was able to overcome this challenge.

_**If I was to spend more time on this project I would:**_

- I want to spend some time developing a computer opponent that makes a calculated move based on the current state of the board. My current solution simply takes a random valid move which offers little challenge to the player. I have been directed towards the minmax algorithm to help with this.

- Tracking scores over multiple games would be an exciting feature to implement. It would allow two users to play for example a best of 3 or a best of 5 game format. I think this would be a challenge to complete, but would also require little changes to my code due to the function heavy nature of it.
