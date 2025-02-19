#!/bin/bash  

osascript <<EOF  
tell application "Terminal"  
    activate  
    do script "cd /Users/ashish/careEdge/authproxy/ui && npm start"  
    delay 1  
    do script "cd /Users/ashish/careEdge/portal/ui && npm start" in front window  
    delay 1  
    do script "cd /Users/ashish/careEdge/admin/ui && npm start" in front window  
    delay 1  
    do script "cd /Users/ashish/careEdge/systemadmin/ui" in front window  
    delay 1  
    do script "cd /Users/ashish/careEdge/careedge-hos/ui" in front window  
    delay 1 
    do script "cd /Users/ashish/careEdge/care-apps/ui && npm start" in front window  
end tell  
EOF

# make exutable file first
#          chmod +x start-all.sh

# run the project by file name 
#          ./start-all.sh

# kill all process
#           pkill gnome-terminal

