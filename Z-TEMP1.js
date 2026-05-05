\documentclass[a4paper]{article}
    \usepackage{fullpage}
    \usepackage{amsmath}
    \usepackage{amssymb}
    \usepackage{textcomp}
    \usepackage[utf8]{inputenc}
    \usepackage[T1]{fontenc}
    \usepackage[hidelinks]{hyperref}
    \usepackage[left=2cm, right=2cm, top=2cm]{geometry}
    \usepackage{longtable}
    \textheight=10in
    \pagestyle{empty}
    \raggedright

    %\renewcommand{\encodingdefault}{cg}
%\renewcommand{\rmdefault}{lgrcmr}

\def\bull{\vrule height 0.8ex width .7ex depth -.1ex }

% DEFINITIONS FOR RESUME %%%%%%%%%%%%%%%%%%%%%%%

\newcommand{\area} [2] {
    \vspace*{-9pt}
    \begin{verse}
        \textbf{#1}   #2
    \end{verse}
}

\newcommand{\lineunder} {
    \vspace*{-8pt} \\
    \hspace*{-18pt} \hrulefill \\
}

\newcommand{\header} [1] {
    {\hspace*{-18pt}\vspace*{6pt} \textbf{#1}}
    \vspace*{-6pt} \lineunder
}

\newcommand{\employer} [3] {
    { \textbf{#1} (#2)\\ \underline{\textbf{\emph{#3}}}\\  }
}

\newcommand{\contact} [3] {
    \vspace*{-10pt}
    \begin{center}
        {\Huge \scshape {#1}}\\
        #2 \\ #3
    \end{center}
    \vspace*{-8pt}
}

\newenvironment{achievements}{
    \begin{list}
        {$\bullet$}{\topsep 0pt \itemsep -2pt}}{\vspace*{4pt}
    \end{list}
}

\newcommand{\schoolwithcourses} [4] {
    \textbf{#1} #2 $\bullet$ #3\\
    #4 \\
    \vspace*{5pt}
}

\newcommand{\school} [4] {
    \textbf{#1} #2 $\bullet$ #3\\
    #4 \\
}

% END RESUME DEFINITIONS %%%%%%%%%%%%%%%%%%%%%%%

    \begin{document}
    \vspace*{-40pt}

    

%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
%
%     Profile 
%
%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
  \vspace*{-2pt}
  \begin{center}
    {\Huge \scshape {Ashish Pal}}\\
    \vspace*{2pt}
    \ {Fullstack Developer \textbar{}  React.js, Node.js}\\
    \vspace*{2pt}
    \href{ashishpal778@gmail.com}{ashishpal778@gmail.com} | \href{tel:6387853523}{6387853523}\\
    \vspace*{2pt}
    \textbf{\href{https://www.linkedin.com/in/ashishpal778}{https://www.linkedin.com/in/ashishpal778 }}| \textbf{\href{https://www.geeksforgeeks.org/user/terminal777888/}{https://www.github.com/ashishpalttn}}\\
  \end{center}
  %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
    %
    %     Professional Summary
    %
%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
      \header{Professional Summary}
      \vspace{2mm}
    Skilled Full-Stack Developer with 5+ years of experience in building scalable web applications using React.js, Node.js, and microservices architecture. Expertise in RESTful APIs, Redux, and AWS services, delivering high-performance solutions and optimizing workflows to drive impactful results.\\
\vspace{4mm}

%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
%
%     Skills
%
%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
  \header{Skills}
  \vspace{2mm}
  \begin{longtable}{p{4cm}p{12cm}}
  Programming Languages: & JavaScript, TypeScript, Java, HTML, CSS, JSX\\
  Frontend Technologies: & React.js, Redux, Next.js,\\
  Backend Technologies: & Node.js, Express.js, Spring Boot\\
  Databases: & PostgreSQL, MySQL, MongoDB\\
  Cloud/Tools: & AWS Services, DataDog, Elastic APM, VS Code, IntelliJ, Git, Sourcetree, Bitbucket, DBViewer, Jira, Postman, Docker Desktop, Lucidchart\\
  Methodologies: & Microservices, SDLC\\
  Soft Skills: & Leadership, Collaboration, Problem-Solving, Adaptability\\
  
  \end{longtable}
  \vspace{1mm}


%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
    %
    %     Experience
    %
    %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
      \header{Work Experience}
      \vspace{2mm}

      \textbf{\textbf{vRhythms Software Pvt. Ltd}}\textbf{ | Senior Software Developer} \hfill Pune | May 2023  -  Present \\
          \vspace{-2mm}
\begin{itemize} \itemsep -3pt

\item[]  \textbf{Client Description:-} Care Logistics, United State
\item \textbf{Healthcare Operations Management:}Collaborated with a US-based team of 10 to streamline hospital operations by leveraging SQS for microservices messaging, React.js for front-end development, and Node.js for scalable back-end services—achieving a 30\% reduction in patient wait times.
\item Developed and consumed RESTful APIs to enable seamless data exchange between frontend and backend systems, ensuring robust functionality and high performance.
    \item Spearheaded end-to-end development of a new healthcare product, managing all SDLC phases and resolving production issues swiftly.
\item Designed and implemented a reusable architecture for the record component, enhancing maintainability and backend integration.
    \item Successfully managed multiple projects concurrently, ensuring timely delivery with high-quality standards.
\end{itemize}
\end{itemize}
\vspace{03mm}


 \textbf{Ridik Grad Software Private Limited} \hfill Gurugram | October 2022 - May 2023\\
          \vspace{-2mm}
\begin{itemize} \itemsep -3pt

\item[]  \textbf{Role:-}Full Stack Developer}
\item Developed a dynamic web application using React.js and Node.js, reducing page load time by 20\% and improving user engagement by 15\%..
    \item Improved code maintainability by designing dynamic, reusable architectures.
    \item Delivered projects on time while managing multiple tasks effectively.

\end{itemize}

\end{itemize}
\vspace{2mm}

 \textbf{\textbf{Tata Consultancy Services | Full Stack Developer}} \hfill Bangalore | October 2020 - October 2022\\
          \vspace{-2mm}
\begin{itemize} \itemsep -3pt

\item[]  \textbf{Client Description:-}Lloyds Bank, United Kingdom
}
\item Enhanced React.js application performance and functionality by developing new features.
    \item Created and maintained detailed technical documentation to support team collaboration.
    \item Mentored an intern, successfully guiding them through a complete project lifecycle.
\end{itemize}

\end{itemize}
\vspace{2mm}

 \textbf{\textbf{\textbf{To The New Pvt Ltd}}} \hfill Noida | Feb 2020 - October 2020\\
          \vspace{-2mm}
\begin{itemize} \itemsep -3pt

\item[]  \textbf{Role:-}Software Developer}
\item \textit{E-Commerce Platform:} Developed a full-stack e-commerce application with real-time inventory updates.
    \item Developed, tested, and refined app components to optimize performance and user experience.
\end{itemize}

\end{itemize}
\vspace{2mm}

%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
    %
    %     Education
    %
%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
      \header{Education}
      \vspace{2mm}
      \textbf{Bachelor of Technology in Computer Science} \hfill July 2016 - July 2020\\
       GL Bajaj Institute of Technology And Management Greater Noida, India\\
       Coursework: Data Structures, Algorithms, Web Development.
       \vspace{4mm}
       \vspac
%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
    %
    %     Achivements
    %
%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
       

      % \header{Achivements}
      % \vspace{2mm}
      % \begin{itemize}
      %     \item Successfully implemented microservices architecture for a healthcare client, improving modularity and scalability.
      \end{itemize}
      
\end{itemize}
\end{document}