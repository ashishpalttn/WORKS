#!/bin/bash

gnome-terminal --tab -- bash -c "cd terminal777888/REACT_FRONTEND_MICROSERVICES/client && npm start; exec bash"
gnome-terminal --tab -- bash -c "cd terminal777888/REACT_FRONTEND_MICROSERVICES/Institute && npm start; exec bash"
gnome-terminal --tab -- bash -c "cd terminal777888/REACT_FRONTEND_MICROSERVICES/institute-admin && npm start; exec bash"
gnome-terminal --tab -- bash -c "cd terminal777888/NODE_BACKEND_MICROSERVICES/login-system && npm start; exec bash"
gnome-terminal --tab -- bash -c "cd terminal777888/NODE_BACKEND_MICROSERVICES/institute-backend && npm start; exec bash"

gnome-terminal \
--tab --title="UI Tab 1" -- bash -c "cd /Users/ashish/careEdge/care-apps/ui && npm start; exec bash" \
--tab --title="UI Tab 2" -- bash -c "cd /Users/ashish/careEdge/care-apps/ui && npm start; exec bash" \
--tab --title="UI Tab 3" -- bash -c "cd /Users/ashish/careEdge/care-apps/ui && npm start; exec bash" \
--tab --title="UI Tab 4" -- bash -c "cd /Users/ashish/careEdge/care-apps/ui && npm start; exec bash" \
--tab --title="UI Tab 5" -- bash -c "cd /Users/ashish/careEdge/care-apps/ui && npm start; exec bash"

# make exutable file first
#          chmod +x start-all.sh

# run the project by file name 
#            ./start-all.sh

# kill all process
#           pkill gnome-terminal

