
\documentclass[
	fontsize=10pt, 
	twoside=true, 
	
	
	numbers=noenddot, 
]{kaobook}

\renewcommand{\familydefault}{\sfdefault}


\usepackage{enumitem}
\usepackage{color}   
\definecolor{lightgreen}{rgb}{0.8,1.0,0.8}
\usepackage{listings}
\lstset
{ 
    backgroundcolor=\color{lightgreen}
    language=Python,
    basicstyle=\footnotesize,
    numbers=left,
    stepnumber=1,
    showstringspaces=false,
    tabsize=1,
    breaklines=true,
    breakatwhitespace=false,
}
\usepackage{imakeidx}
\makeindex[columns=2, title=Alphabetical Index]
\usepackage{amsmath}
\usepackage{graphicx}
\usepackage{caption}
\usepackage{tabularx}
\usepackage{cite}
\bibliographystyle{plain}
\makeatletter
\renewcommand\@biblabel[1]{}
\makeatother
\usepackage{hyperref}
\hypersetup{
    colorlinks=true, 
    linktoc=all,     
    linkcolor=blue,  
}
\title{Experimentation

 \large An Introduction to Measurement Theory and Experiment Design}

\author{D.C. Baird}
\date{\today}

\begin{document}
\frontmatter
\maketitle
\tableofcontents
\newpage
\input{Preamble} 

\mainmatter

\input{Chapter1}
\input{Chapter2}
\input{Chapter3}
\input{Chapter4}
\input{Chapter5}
\input{Chapter6}
\input{Chapter7}
\appendix
\addcontentsline{toc}{chapter}{Appendices}
\input{Appendix1}
\input{Appendix2}
\input{Appendix3}
\input{Appendix4}

\addcontentsline{toc}{chapter}{Bibliography}



\nocite{*}
\bibliography{references}


\addcontentsline{toc}{chapter}{Index}
\printindex
\end{document}
