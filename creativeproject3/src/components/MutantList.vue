<template>
  <div class="wrapper">
    <div class="mutants">
      <div class="mutant" v-for="mutant in mutants" :key="mutant.id">
        <div class="image">
          <img :src="require('../images/'+mutant.image)">
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
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'MutantList',
    props: {
      mutants: Array
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
  }

  .mutant {
    border: 2px solid black;
    margin: 10px;
    margin-top: 50px;
    width: 500px;
    height: 300px;
    position: relative;
  }

  .image img {
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
    /* padding: 1px; */
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

  .info p {
    margin: 0px;
    font-size: 10px;
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
