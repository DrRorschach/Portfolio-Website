<h1>Portfolio Website</h1>
Personal Portfolio Website and Login Page with deliberately vulnerable SQL Injection Login Procedure

<h2>Tables of Content</h2>
<ul>
  <li><a href = "#generalInfo">General Info</a></li>
  <li><a href = "#technologies">Technologies</a></li>
  <li><a href = "#status">Status</a></li>
</ul>

<h2 id="generalInfo">General info</h2>
This is my Personal Portfolio Website and in order to learn about and practice defending against SQL injection attacks, I have created a loginpage that intentionally includes a SQL injection vulnerability.  Using Node.js and Express, I have configured a MySQL server to securely create user accounts. However, the login is vulnerbale to SQL injections.
<br><br>
<p align="center">
<b>Safe Code</b><br>
<img class= "center" src="/images/safeQuery.PNG"><br>
<b>Unsafe Code</b><br>
<img class= "center" src="/images/unsafeQuery.PNG"><br>
<img class= "center" src="/images/sqlInjection.PNG"><br>
<b>SQL Injection successful</b><br>
<img class= "center" src="/images/loggedIn.PNG"><br>
</p>

<h2 id="technologies">Technologies</h2>
<ul>
  <li>NPM -  Node Package Manager 9.5.0</li>
  <li>Node.js 18.14.2</li>
  <li>Express 4.18.2</li>
  <li>MySQL2 8.0.32</li>
  <li>HTML</li>
  <li>JavaScript</li>
</ul>

<h2 id="status">Status</h2>

For training purposes, the project is now complete.
