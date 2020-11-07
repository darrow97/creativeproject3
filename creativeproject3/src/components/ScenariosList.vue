<template>
  <div v-if="checkTeamSize" class="wrapper">
    <div class="scenarios">
      <div class="scenario" v-for="scenario in scenarios" :key="scenario.id">
        <div class="info_1">
          <div class="name">
            <h1>{{scenario.name}}</h1>
          </div>
          <div class="description">
            <h2>{{scenario.description}}</h2>
          </div>
          <div class="recommeded">
            <h1>Recommend Team Chemistry: {{scenario.minChemistry}}</h1>
        </div>
      </div>
      <div class="info_2">
        <div class="accept">
          <button @click="computeResult(scenario)" type="button" name="button">Accept this mission</button>
        </div>
        <div class="result">
          <h1>Result</h1>
          <h2>{{scenario.success}}</h2>
        </div>
      </div>
    </div>

    </div>
  </div>
  <div v-else class="empty">
    <p>
      You need a team before you can go through
      scenarios, go build a team!
    </p>
  </div>
</template>

<script>
  export default {
    name: 'ScenariosList',
    props: {
      scenarios: Array
    },
    data() {
      return {
        success: null,
      }
    },
    computed: {
      checkTeamSize: function()
      {
        if(this.$root.$data.team.length > 0)
        {
          return true;
        }
        return false;
      },
      checkResult: function(scenario)
      {
        console.log(scenario.success);
        return scenario.success;
      },
    },
    methods: {
      computeResult: function(scenario)
      {
        //  calculate team power
        var team = this.$root.$data.team;
        var size = team.length;
        var same = true;
        var attribute = team[0].affinity;
        var teamPower = 0;
        //  determine team power level
        for(var i = 0; i < size; i++)
        {
          teamPower += team[i].level;
        }
        //  detemine a team chemistry
        for(i = 0; i < size; i++)
        {
          if(attribute !== team[i].affinity)
          {
            same = false;
            break;
          }
        }

        var chemistryScore = 0;
        if(same)
        {
          teamPower += 5;
          chemistryScore += 3 * size + 3;
        }
        else
        {
          teamPower -= 1;
          chemistryScore += 3 * size - 2;
        }

        if(scenario.minChemistry > chemistryScore) teamPower -= 1;
        if(scenario.minPower <= teamPower) scenario.success = 'SUCCESS';
        else scenario.success = 'DEFEAT';
        console.log(scenario.success);
        this.$forceUpdate();
        // return true;
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

  .scenarios {
    margin-top: 20px;
    width: 95%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    /* overflow: auto; */
    margin-bottom: 40px;
  }

  .scenario {
    border: 2px solid black;
    margin: 10px;
    margin-top: 50px;
    width: 500px;
    height: 300px;
    position: relative;
    /* overflow: auto; */
  }

  .info_1 {
    /* background: #000000; */
    color: #fff;
    left: 0;
    top: 0;
    bottom: 0;
    width: 46%;
    padding: 5px;
    position: absolute;
  }

  .info_1 h1 {
    font-size: 16px;
  }

  .info_1 h2 {
    font-size: 14px;
  }

  .name
  {
    /* border: 2px solid green; */
    background: #000000;
    text-align: center;
    align-items: center;
    position: absolute;
    height: 50px;
    top: 0;
    left: 0;
    right: 0;
    padding: 5px;
  }

  .description
  {
    /* border: 2px solid yellow; */
    background: #2F4F4F;
    text-align: center;
    align-items: center;
    position: absolute;
    top: 120px;
    left: 0;
    right: 0;
    bottom: 0px;
    padding: 10px;
  }

  .recommeded
  {
    /* border: 2px solid pink; */
    background: #B30900;
    text-align: center;
    align-items: center;
    position: absolute;
    height: 50px;
    bottom: 0;
    left: 0;
    right: 0;
    top: 60px;
    padding: 5px;
  }

  .info_2
  {
    border-left: 2px solid black;
    position: absolute;
    width: 50%;
    right: 0;
    bottom: 0;
    top: 0;
    padding: 5px;
  }

  .result
  {
    /* border: 2px solid yellow; */
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 75px;
    padding-top: 45px;
  }

  .accept
  {
    /* border: 2px solid pink; */
    position: absolute;
    bottom: 0;
    right: 0;
    left: 0;
    height: 75px;
  }

  .accept button
  {
    width: 100%;
    height: 100%;
  }

  /* .recommeded h2
  {
    font-size: 16px;
  } */

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
