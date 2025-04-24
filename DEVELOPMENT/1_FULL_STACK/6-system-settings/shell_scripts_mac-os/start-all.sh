#!/bin/bash

# Define the paths to your projects
#!/bin/bash

# Define the paths to your projects
declare -a paths=(
    "/Users/ashish/careEdge/portal/ui"
    "/Users/ashish/careEdge/admin/ui"
    "/Users/ashish/careEdge/authproxy/ui"
    "/Users/ashish/careEdge/systemadmin/ui"
    "/Users/ashish/careEdge/careedge-hos/ui"
    "/Users/ashish/careEdge/care-apps/ui"
    "/Users/ashish/careEdge/care-progression/ui"
)

# Iterate over each path and open a new terminal tab to run npm start
for path in "${paths[@]}"
do
    osascript -e "tell application \"Terminal\"
        activate
        do script \"cd $path && npm install &&  npm start\"
    end tell"
done


# make exutable file first
#          chmod +x start-all.sh

# run the project by file name 
#            ./start-all.sh

# kill all process
#           pkill gnome-terminal

