<template>
  <div  class="wrapper">
    <div class="mutants">
      <div class="mutant" v-for="mutant in team" :key="mutant.id">
        <div class="image">
          <input @click="removeFromTeam(mutant)" type="image" :src="require('../images/'+mutant.image)">
          <!-- <img :src="require('../images/'+mutant.image)"> -->
        </div>

        <div class="powers">
          <ul>
            <li class="head">POWERS</li>
            <li v-for="power in getPowers(mutant.pab)" :key="power">{{power}}</li>
          </ul>
          <!-- <button @click="addToCart(product)" class="auto">Add to Cart</button> -->
        </div>
        <div class="info">
          <h1>{{mutant.name}}</h1>
          <h2>{{mutant.alias}}</h2>
        </div>
        <div class="level">
          <h3>Affinity: {{mutant.affinity}}</h3>
          <h3>Power Level: {{mutant.level}}</h3>
        </div>
      </div>
    </div>
  </div>
  <!-- <div v-else class="empty">
    <p>Your team is yet to be built, unify the others!</p>
  </div> -->
</template>

<script>
  export default {
    name: 'TeamList',
    props: {
      team: Array
    },
    methods: {
      getPowers: function(powers)
      {
        var powerList = [];
        for (var i = 0; i < powers.length; i++) {
          // console.log(powers[i].power);
          powerList.push(powers[i].power);
        }

        return powerList;
      },
      removeFromTeam: function(mutant)
      {
        var id = mutant.id;
        var size = this.$root.$data.team.length;
        console.log(mutant);
        console.log(size);

        for(var i = 0; i < size; i++)
        {
          if(this.$root.$data.team[i].id === id)
          {
            this.$root.$data.team.splice(i,1);
            break;
          }
        }

      }
    },
    computed: {
      checkTeamSize: function()
      {
        var size = this.$root.$data.team.length;
        console.log(size);
        if(size > 0) return true;
        return false;
      }
    }
  }
</script>

<style scoped>
  .wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    background: #aaaaaa;
  }



  .mutants {
    margin-top: 20px;
    width: 95%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    /* overflow: auto; */
    margin-bottom: 40px;
  }

  .mutant {
    border: 2px solid black;
    margin: 10px;
    margin-top: 50px;
    width: 500px;
    height: 300px;
    position: relative;
    /* overflow: auto; */
  }

  .image input {
    position: absolute;
    left: 0;
    bottom: 0;
    top: 0;
    height: 300px;
    width: 250px;
    justify-content: left;
    object-fit: cover;
  }

  .head
  {
    position: absolute;
    font-weight: bold;
    background: #000000;
    color: #fff;
    padding-top: 3px;
    top: -5px;
    right: -8px;
    width: 250px;
    text-align: center;
    justify-content: center;
  }

  .powers
  {
    position: absolute;
    font-weight: bold;
    top: 0px;
    bottom: 0px;
    right: 0px;
    height: 235px;
    width: 250px;
    align-content: center;
    background: #6CAAD0;
    border-left: 2px solid black;
    overflow: auto;
  }

  ul
  {
    margin-top: 35px;
    margin-left: -20px;
    list-style-type: none;
  }

  li
  {
    margin-right: 8px;
    margin-top: 5px;
    margin-bottom: 7px;
    margin-left: -10px;
    text-align: center;
  }

  .info {
    background: #000000;
    color: #fff;
    right: 0;
    top: 235px;
    bottom: 0;
    width: 250px;
    position: absolute;
  }

  .info h1 {
    font-size: 16px;
  }

  .info h2 {
    font-size: 14px;
  }

  .level
  {
    display: flex;
    background: #B30900;
    color: #ffffff;
    align-items: center;
    justify-content: center;
    position: absolute;
    bottom: -35px;
    right: -2px;
    left: -2px;
    height: 30px;
    border: 2px solid black;
  }

  .level h3
  {
    margin-left: 20px;
    margin-right: 20px;
  }

  button {
    height: 50px;
    background: #000;
    color: white;
    border: none;
  }

  .auto {
    margin-left: auto;
  }
</style>
