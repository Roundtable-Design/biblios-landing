#!/bin/zsh

# Halt any other running ngrok tunnels
killall node

# We need to use the ngrok alias
source ~/.zshrc

# Change to current directory
cd ${0:a:h}

# Start local dev server
npm start >> ./log/hrs &

# Start sass watch 
sass --watch style/sass/main.scss:style/main.css >> ./log/sass &
sass --watch style/sass/nav/index.scss:style/nav.css >> ./log/sass &
sass --watch style/sass/footer.scss:style/footer.css >> ./log/sass &

# Set up ngrok tunnel
ngrok http 8082
