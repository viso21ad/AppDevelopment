# Hvordan sætter jeg mit projekt op med webstorm og github (╯°□°)╯︵ ┻━┻

Guide: https://www.youtube.com/watch?v=s5G-KNKbg00

Krav: du har en github konto

<h3>1. Hvordan opretter jeg et nyt repo på Github? ( GITHUB.com ) </h3>
<ol>
    <li>Login på github og gå til root url: github.com/</li>
    <li>Til højre ved siden af din profil kan du tilføje et nyt repo ved at trykke på plus, og så new repo</li>
    <li>skriv repo name</li>
    <li>Vælg public hvis alle skal kunne pushe, og vælg private, hvis det kun er en bestemt gruppe</li>
    <li>Opret repo</li>
</ol>


<h3>2.Opsættelse af githubbruger / git til webStorm ( I Webstorm ) </h3>
<ol>
    <li>Gå til Preferences </li>
    <li>Gå til Version Control</li>
    <li>Gå til GITHUB</li>
    <li>Klik plus og login med dine creds GUIDE: https://www.jetbrains.com/help/idea/github.html</li>
    <li><b>Hvad gør det?</b> <br> At du ikke skal logge ind med github hvergang du har et nyt projekt tilknyttet et nyt repo. Plus, så skal du kun bruge GUI og ikke terminalen</li>
</ol>

<h3>3. Tilføje eksisterende projekt til nyt rep i github (2 måder) </h3>
<ol>
   <li> Med Webstorm ( anbefalet )
       <ol>
           <li>(på Github.com) Lav et repo på Github.com uden nogen filer, altså uden readme og .gitignore </li>
           <li>(TERMINAL) Opret et ny projekt med expo: expo init PROJEKTNAVN</li>
            <li>Hvis du oprettet med EXPO, så initialisere den git configuration ( så man behøver ikke skrive git init i projektet ) </li>
            <li>Åben dit nye projekt Øvelse/PROJEKTNAVN i Webstorm</li>
           <li>(I WebStorm ) find .gitignore og åben filen og tilføj .idea mappen</li>
           <li>(I WebStorm ) Commit på check ikonet</li>
           <li>(I WebStorm ) skriv en commit besked </li>
           <li>(I WebStorm ) Klik på push med pilen nedad på commit <li>
           <li> (I WebStorm )Ser siger WebStorm man skal have en origin og der skal du kopier dit origin URL </li>
           <li>(PÅ GITHUB.com ) Find det oprettet repositories url fx: https://github.com/Eigilak/video.git </li>
           <li> (i Webstorm ) tryk OK og push </li>
            <li>(PÅ GITHUB ) Check om dine ting er pushet</li>
            <li>(I Webstorm ) Gå til GIT indstilingerne og kig på LOG</li>
       </ol>
    </li>
</ol>

<h3>4.Hvordan bruger jeg github med webstorm? ( I Webstorm editor ) </h3>
<ol>
    <li>Sørg for du er logget ind med github</li>
    <li>Sørg for du har et aktivt gitprojekt (eventuelt check projekt for .git mappen)</li>
    <li>Der tre ikoner i toppen hhv blå og grøn. Fra venstre er det pull, commit og push</li>
    <li>Vigtigt at tilføje .gitignore inden du commiter
     <ol>
            <li>højre klik i projekt og tryk new .gitignor --> .ignore file git</li>
            <li>Skriv følgende i .gitignore: .idea</li>
            <li>Hvad er .idea? <br> config mappe, og er unik fra pc til pc, så lad vær med at push</li>
     </ol>
    </li>
    <li>Når man vil commite, så trykker man commit</li>
    <li>Skriver commit message </li>
    <li>Tryk på commit knappens pil som går ned for at pushe og commite samtidig</li>
    <li>hvis der er en succes, så vil webStorm komme med en succes besked i højrer hjørne</li>
    <li>Vigtig viden - ligegyldig info
        <ol>
            <li>Du  kan  se på event log, om dine commits er gået i gennem (højre hjørne)</li>
            <li>Derudover kan man tjekke venstre hjørne ved knappen GIT derefter Log:all ( ved siden af terminalen) hvilket commit er den seneste</li>
        </ol>
    </li>
   </ol>

<h3>5.Eller push og pull gennem GitHub Desktop </h3>
<ol> 
<li> kan downloades her: https://docs.github.com/en/desktop/installing-and-configuring-github-desktop/installing-and-authenticating-to-github-desktop/installing-github-desktop </li>
</ol>