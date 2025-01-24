#!/bin/bash

gnome-terminal --tab -- bash -c "cd terminal777888/REACT_FRONTEND_MICROSERVICES/client && npm start; exec bash"
gnome-terminal --tab -- bash -c "cd terminal777888/REACT_FRONTEND_MICROSERVICES/Institute && npm start; exec bash"
gnome-terminal --tab -- bash -c "cd terminal777888/REACT_FRONTEND_MICROSERVICES/institute-admin && npm start; exec bash"
gnome-terminal --tab -- bash -c "cd terminal777888/NODE_BACKEND_MICROSERVICES/login-system && npm start; exec bash"
gnome-terminal --tab -- bash -c "cd terminal777888/NODE_BACKEND_MICROSERVICES/institute-backend && npm start; exec bash"

# run the project by file name 
#            ./start-all.sh

# kill all process
#           pkill gnome-terminal

