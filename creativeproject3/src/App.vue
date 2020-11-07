<template>
  <div id="app">
    <div id="nav">
      <h1>X-Men Team Builder</h1>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">Team</router-link> |
      <!-- <router-link to="/about">Scenarios</router-link> -->
    </div>
    <router-view/>
    <footer>
      <a href="https://github.com/darrow97/creativeproject3" target="_blank">Click here for access to the Git Repository</a>
    </footer>
  </div>

</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background: #ababab;
  margin-bottom: 25px;
}

#nav {
  padding: 30px;
  background: #000000;
  text-align: right;
}

#nav a {
  font-weight: bold;
  font-size: 1.3em;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}



#nav h1
{
  color: #ffffff;
  position: absolute;
  left: 25px;
  top: 10px;
}


a
{
  color: #ffffff;
}

footer
{
	text-align: center;
	height: 25px;
	width: 100%;
	background: #000000;
	position: fixed;
	left: 0;
	bottom: 0;
}

</style>
